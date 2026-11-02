'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process'),path=require('node:path');
const root=path.resolve(__dirname,'..'),read=f=>fs.readFileSync(path.join(root,f),'utf8');
const nodes={};const ctx={document:{getElementById:id=>nodes[id]||null,querySelector:()=>null}};vm.createContext(ctx);
for(const f of ['reading-data.js','reading-ui.js'])vm.runInContext(read('web/'+f),ctx);
const bank=ctx.JC_READING,C=ctx.JC_READING_CORE;assert.equal(bank.length,24);assert.equal(new Set(bank.map(r=>r.id)).size,24);
assert.equal(bank.reduce((n,r)=>n+r.questions.length,0),121);
assert.deepEqual([...new Set(bank.map(r=>r.level))].sort(),['A','B','C']);
let units=0;
for(const r of bank){assert(r.genre&&r.topic);assert.equal(r.maxPoints,r.questions.reduce((n,q)=>n+C.total(q),0));assert(r.maxPoints>0);assert(r.support.length);if(r.numbered)assert(r.text.startsWith('1.'));
 for(const q of r.questions){assert(q.prompt);assert(['es','en'].includes(q.lang));assert.equal(q.lang,r.questions[0].lang);assert(q.parts.length>0);units+=q.parts.length;for(const p of q.parts){assert(p.label);assert(Number.isInteger(p.points)&&p.points>0);}
 if(r.visual){assert(q.evidence.startsWith('Imagen '));assert.equal(q.parts[0].label,q.options[q.correct]);}else assert(r.text.includes(q.evidence),r.id+': '+q.evidence);
 if(q.options){assert(Number.isInteger(q.correct)&&q.correct>=0&&q.correct<q.options.length);assert.equal(new Set(q.options).size,q.options.length);}
 }
 const a={answers:{},reviews:{}};assert.equal(C.score(r,a).points,0);for(const [i,q]of r.questions.entries()){if(q.options)a.answers[i]=q.correct;else for(const [j,p]of q.parts.entries())a.reviews[i+':'+j]=String(p.points);}
 const full=C.score(r,a);assert.equal(full.points,r.maxPoints);assert(!full.pending);assert.deepEqual(Array.from(full.questions),Array.from(r.questions,C.total));
 // Wrong closed answers and zero-valued reviews produce zero; a missing review stays pending.
 for(const [i,q]of r.questions.entries()){if(q.options)a.answers[i]=(q.correct+1)%q.options.length;else for(const [j]of q.parts.entries())a.reviews[i+':'+j]='0';}
 assert.equal(C.score(r,a).points,0);const oi=r.questions.findIndex(q=>!q.options);if(oi>=0){delete a.reviews[oi+':0'];assert(C.score(r,a).pending);}
 // Invalid reviews can never create out-of-range, NaN or negative totals.
 for(const [i,q]of r.questions.entries())for(const [j,p]of q.parts.entries())a.reviews[i+':'+j]='999';assert(C.score(r,a).points<=r.maxPoints);
}
let combinations=0;
const h=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
for(const lang of ['en','bi','es']){const S={lang},t=p=>h(Array.isArray(p)?p[lang==='en'?1:0]:p);const ui=ctx.JC_READING_UI({S,t,h,head:(a,b)=>t(b),back:(a,b)=>t(b),link:(a,b)=>`<a href="#/${a}">${t(b)}</a>`,button:(a,b,c)=>`<button data-action="${a}" data-arg="${c}">${t(b)}</button>`,render(){}});
 assert.equal((ui.index().match(/href="#\/reading\//g)||[]).length,24);
 for(const level of ['A','B','C']){ui.click('reading-filter',level);assert.equal((ui.index().match(/href="#\/reading\//g)||[]).length,bank.filter(r=>r.level===level).length);}ui.click('reading-filter','all');
 assert(ui.detail('missing').includes('Reading'));
 for(const r of bank)for(const mode of ['guided','exam']){ui.click('reading-mode',r.id+'|'+mode);ui.click('reading-reset',r.id);let html=ui.detail(r.id);assert.equal((html.match(/<fieldset/g)||[]).length,r.questions.length);assert(!html.includes('reading-feedback'));assert.equal(html.includes('Reading strategy')||html.includes('Estrategia de lectura'),mode==='guided');
 for(const [i,q]of r.questions.entries()){assert(html.includes(h(q.prompt)));ui.input({target:{dataset:{readingId:r.id,readingAnswer:String(i)},value:q.options?String(q.correct):'<script>alert(1)</script>'}});}
 ui.submit({target:{dataset:{reading:r.id}},preventDefault(){}});html=ui.detail(r.id);assert(html.includes('reading-feedback'));assert(!html.includes('<script>alert(1)</script>'));assert(html.includes('readonly')||r.visual);assert(html.includes(`/${r.maxPoints}`));
 // DOM summary and per-question result are recalculated without a rerender (preserves focus).
 nodes['reading-score']={innerHTML:'',focus(){}};for(const [i,q]of r.questions.entries())nodes['reading-question-score-'+i]={textContent:''};
 for(const [i,q]of r.questions.entries())if(!q.options)for(const [j,p]of q.parts.entries())ui.input({target:{dataset:{readingId:r.id,readingReview:i+':'+j},value:String(p.points)}});
 ui.click('reading-recalculate',r.id);assert(nodes['reading-score'].innerHTML.includes(`${r.maxPoints}/${r.maxPoints}`));assert(!nodes['reading-score'].innerHTML.includes('Provisional'));html=ui.detail(r.id);assert(html.includes(`${r.maxPoints}/${r.maxPoints}`));
 const open=r.questions.findIndex(q=>!q.options);if(open>=0){ui.input({target:{dataset:{readingId:r.id,readingReview:open+':0'},value:'0'}});assert(nodes['reading-score'].innerHTML.includes(`${r.maxPoints-r.questions[open].parts[0].points}/${r.maxPoints}`));assert.equal(nodes['reading-question-score-'+open].textContent,`Question score: ${C.total(r.questions[open])-r.questions[open].parts[0].points}/${C.total(r.questions[open])}`);}
 ui.click('reading-edit',r.id);html=ui.detail(r.id);assert(!html.includes('reading-feedback'));assert(!html.includes('readonly'));if(open>=0)assert(html.includes('&lt;script>'));
 ui.click('reading-reset',r.id);html=ui.detail(r.id);assert(!html.includes('&lt;script>'));assert(!html.includes('reading-feedback'));combinations++;
 }
}
// All non-Reading content and audio are byte-identical to starting main.
const baseline='b1ae473669c4a82299d13cb4e496edb51202a3e6',before=f=>cp.execFileSync('git',['show',baseline+':'+f],{cwd:root,encoding:'utf8'});
for(const f of ['data.js','activities.js','listening-data.js','listening-ui.js','core.js','training-data.js','grammar-training.js','grammar-recognition.js','grammar-extension.js','vocabulary-extension.js','mixed-training.js','training-language.js','training-ui.js'])assert.equal(read('web/'+f),before('web/'+f),f);
for(const name of ['writing','writingDetail','guide','vocabulary','theme','group','grammar','transfer'])assert.equal(read('web/app.js').split('\n').find(l=>l.startsWith('function '+name+'(')),before('web/app.js').split('\n').find(l=>l.startsWith('function '+name+'(')),name);
for(const f of ['index.html','web/index.html']){const s=read(f);assert(s.indexOf('reading-data.js')<s.indexOf('reading-ui.js'));assert(s.indexOf('reading-ui.js')<s.indexOf('app.js'));for(const [,src]of s.matchAll(/src="([^"]+)"/g))assert(fs.existsSync(path.resolve(root,path.dirname(f),src)));}
assert(!/fetch\s*\(|XMLHttpRequest|sendBeacon/.test(read('web/reading-ui.js')));
console.log(`PASS Work08: 24 activities, 121 questions, ${units} information units; evidence, totals, fixed languages, 144 activity/mode/language paths, scoring, partial review, reset/edit, escaping and non-Reading regression checks.`);
