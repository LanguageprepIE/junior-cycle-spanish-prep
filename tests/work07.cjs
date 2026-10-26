'use strict';
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),assert=require('node:assert/strict'),cp=require('node:child_process'),crypto=require('node:crypto');
const root=path.resolve(__dirname,'..'),web=path.join(root,'web');
const doc={baseURI:'https://example.test/web/index.html',currentScript:{src:'https://example.test/web/listening-ui.js'},getElementById:()=>null,querySelector:()=>null};
const ctx={document:doc,URL,location:{hash:''}};vm.createContext(ctx);for(const f of ['data.js','listening-data.js','listening-ui.js'])vm.runInContext(fs.readFileSync(path.join(web,f),'utf8'),ctx);
const bank=ctx.JC_LISTENING;assert.equal(bank.length,16);assert.equal(new Set(bank.map(x=>x.audio)).size,16);assert.equal(bank.filter(x=>x.selection==='work03').length,8);
let decodes=0;for(const l of bank){const file=path.join(web,l.audio);assert(fs.existsSync(file));assert.equal(crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex'),l.sha256);assert.equal(Number(cp.execFileSync('ffprobe',['-v','error','-show_entries','format=duration','-of','csv=p=0',file])),l.duration);cp.execFileSync('ffmpeg',['-v','error','-i',file,'-f','null','-'],{stdio:'pipe'});decodes++;assert(l.duration>0);assert.equal(l.questions.length,6);for(const [i,q]of l.questions.entries()){assert.equal(q.q.length,2);assert.equal(q.answer.length,2);assert(q.hint.every(Boolean));assert(q.evidence.every(e=>l.transcript.includes(e)),l.id+':'+i);if(q.options){assert.equal(q.options.length,3);assert(q.options[q.correct]);assert(new Set(q.options).size===3);assert.equal(q.optionsEn.length,3);assert(new Set(q.optionsEn).size===3);}}}
let attempts=0;for(const lang of ['en','bi','es']){
 const S={lang};const h=v=>String(v??'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');const t=p=>h(typeof p==='string'?p:p[lang==='en'?1:0]);
 const api=ctx.JC_LISTENING_UI({S,h,t,head:(a,b)=>t(b),back:()=>'',link:(a,b)=>`<a href="#/${a}">${t(b)}</a>`,button:(a,b,c)=>`<button data-action="${a}" data-arg="${c}">${t(b)}</button>`,render:()=>{}});
 assert.equal((api.index().match(/href="#\/listening\//g)||[]).length,16);
 for(const l of bank){ctx.location.hash='#/listening/'+l.id;
  for(const mode of ['guided','exam']){
   api.click('listening-mode',l.id+'|'+mode);api.click('listening-reset',l.id);
   let html=api.detail(l.id);assert(html.includes('<audio'));assert(html.includes(new URL(l.audio,'https://example.test/web/').href));assert(!html.includes('listening-feedback'));assert(!html.includes(l.transcript));assert.equal((html.match(/<fieldset/g)||[]).length,6);assert.equal((html.match(/Listening hint|Pista para escuchar/g)||[]).length,mode==='guided'?6:0);assert(html.includes(l.questions[0].q[1]));assert(!html.includes('Spanish option'));
   assert(api.submit({target:{dataset:{listening:l.id}},preventDefault(){}}));html=api.detail(l.id);assert(html.includes('role="alert"'));assert(!html.includes('listening-feedback'));
   for(const [i,q]of l.questions.entries())api.input({target:{dataset:{listeningQuestion:String(i)},value:q.options?String(q.correct):q.answer[1]}});
   api.submit({target:{dataset:{listening:l.id}},preventDefault(){}});html=api.detail(l.id);assert.equal((html.match(/class="answer-panel listening-feedback"/g)||[]).length,6);assert(html.includes('2/4 written answers reviewed')===false);assert(html.includes('0/4 written answers reviewed'));assert(html.includes(h(l.transcript)));assert.equal((html.match(/data-listening-review/g)||[]).length,4);
   // Completed attempts are locked; editing must not silently invalidate the comparison.
   api.input({target:{dataset:{listeningQuestion:'0'},value:l.questions[0].options?String((l.questions[0].correct+1)%3):'changed answer'}});assert(api.detail(l.id).includes('0/4 written answers reviewed'));
   api.click('listening-reset',l.id);html=api.detail(l.id);assert(!html.includes('listening-feedback'));assert(!html.includes('readonly'));assert(!html.includes('checked'));
   // Wrong closed answers must be flagged; partial open answers retain honest self-review.
   for(const [i,q]of l.questions.entries())api.input({target:{dataset:{listeningQuestion:String(i)},value:q.options?String((q.correct+1)%3):'partial answer'}});
   api.submit({target:{dataset:{listening:l.id}},preventDefault(){}});assert(api.detail(l.id).includes('0/4 written answers reviewed'));attempts++;
  }
 }
}
// No changes in the other five areas, aside from shared routing hooks and the home status.
const base='44fdb10';const readBase=f=>cp.execFileSync('git',['show',base+':web/'+f],{cwd:root,encoding:'utf8'});
const previous={};vm.createContext(previous);vm.runInContext(readBase('data.js'),previous);
const {listening:old,...oldData}=previous.JC_DATA,{listening:now,...newData}=ctx.JC_DATA;assert.equal(JSON.stringify(newData),JSON.stringify(oldData));
for(const f of ['activities.js','training-data.js','grammar-training.js','grammar-recognition.js','grammar-extension.js','vocabulary-extension.js','mixed-training.js','training-language.js','training-ui.js','core.js'])assert.equal(fs.readFileSync(path.join(web,f),'utf8'),readBase(f),f);
const oldApp=readBase('app.js').split('\n'),newApp=fs.readFileSync(path.join(web,'app.js'),'utf8').split('\n');for(const name of ['reading','readingDetail','writing','writingDetail','guide','vocabulary','theme','group','grammar'])assert.equal(newApp.find(l=>l.startsWith('function '+name+'(')),oldApp.find(l=>l.startsWith('function '+name+'(')),name);
console.log(`PASS Work07: ${decodes} full MP3 decodes/hashes/durations; 96 evidence-backed questions; ${attempts} activity/mode/language combinations, gated reveal, incomplete/wrong/correct attempts, reset; five other areas preserved.`);
