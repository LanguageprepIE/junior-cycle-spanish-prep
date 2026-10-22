'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const C=require('../web/core.js'),root=__dirname+'/../web/',ctx={};vm.createContext(ctx);
for(const f of ['data.js','activities.js','training-data.js','grammar-training.js','grammar-recognition.js','grammar-extension.js','vocabulary-extension.js','mixed-training.js','training-language.js'])vm.runInContext(fs.readFileSync(root+f,'utf8'),ctx);
const X=ctx.JC_TRAINING,D=ctx.JC_DATA;
assert.equal(X.grammar.length,20);assert.equal(new Set(X.grammar.map(g=>g.id)).size,20);
assert.equal(Object.keys(X.vocabulary).length,15);
let lexical=0,grammar=0;
for(const th of D.themes){const v=X.vocabulary[th.id];assert(v);lexical+=v.words.length;assert(v.words.some(w=>w.tier==='extended'));assert(v.words.some(w=>w.tier==='core'));for(const w of v.words){assert(w.es&&w.en&&w.example);assert(['core','extended'].includes(w.tier));assert(w.reception.includes('understand'));assert(w.production);assert(w.kind);}assert(v.gaps.length>=5);assert.equal(v.qs.length,4);for(const q of v.qs)assert(v.text.includes(q[2]),th.id+': '+q[2]);if(v.extra)for(const q of v.extra.qs)assert(v.extra.text.includes(q[2]));assert(v.use.length===2&&v.model);}
for(const g of X.grammar){assert.deepEqual(Array.from(g.sets,s=>s.id),['recognise','practice','transform']);assert(g.explain.length===2&&g.models.length>=2);for(const s of g.sets){grammar+=s.items.length;for(const it of s.items){assert(it[0]&&it[1]&&it[2]);assert.equal(C.check(it[1],it[1],it[3]).state,'correct');for(const alt of it[3])assert.equal(C.check(alt,it[1],it[3]).state,'correct');assert.equal(C.check('',it[1],it[3]).state,'empty');}}}
assert.equal(lexical,499);assert.equal(Object.values(X.vocabulary).reduce((n,v)=>n+v.authoredCount,0),376);assert.equal(grammar,357);
assert.equal(X.mixed.length,3);assert.equal(X.mixed.reduce((n,m)=>n+m.items.length,0),24);for(const m of X.mixed)for(let i=0;i<m.items.length;i++){assert(m.text.includes('('+(i+1)+')'));const it=m.items[i];assert.equal(C.check(it[1],it[1],it[3]||[]).state,'correct');}
// Meaningful error pairs: person, stem, time, agreement and idiomatic construction.
for(const [good,bad]of [['estudiamos','estudian'],['vivís','vivimos'],['hacéis','hacen'],['puedo','podo'],['queremos','quieremos'],['se viste','se vesto'],['nos acostamos','nos acuestamos'],['hay','están'],['tengo','soy'],['gustan','gusta'],['duelen','duele'],['blancas','blancos'],['visitó','visito'],['hecho','hacido'],['fui','voy'],['habrá','había'],['muchas','muy'],['para','porque']]){
 assert.equal(C.check(good,good).state,'correct');assert.notEqual(C.check(bad,good).state,'correct',good+' must not accept '+bad);
}
assert.equal(C.check('Donde vives','¿Dónde vives?').state,'spelling');
assert.equal(C.check('Dónde vives','¿Dónde vives?').state,'correct');
assert.equal(C.check('año','año').state,'correct');assert.equal(C.check('ano','año').state,'review');
const reflex=X.grammar.find(g=>g.id==='reflexives').sets[2].items.find(it=>it[1]==='Voy a levantarme temprano');
assert.equal(C.check('Me voy a levantar temprano',reflex[1],reflex[3]).state,'correct');
assert(!ctx.JC_TRAINING_PROMPT('Cambia a nosotros: «Vivo en Cork». Frase completa.')[1].includes('Frase completa'));
for(const f of ['../index.html','index.html']){const html=fs.readFileSync(root+f,'utf8');for(const name of ['training-data.js','grammar-training.js','training-language.js','training-ui.js'])assert(html.includes(name));}
const baseline=require('node:child_process').execFileSync('git',['show','c0fe594d5e1a1b8da7f073e1f1efe973e869c302:web/data.js'],{cwd:root,encoding:'utf8'});assert.equal(fs.readFileSync(root+'data.js','utf8'),baseline,'OL groups, readings and listening metadata stay unchanged');
const baseFile=f=>require('node:child_process').execFileSync('git',['show','c0fe594d5e1a1b8da7f073e1f1efe973e869c302:web/'+f],{cwd:root,encoding:'utf8'});
assert.equal(fs.readFileSync(root+'activities.js','utf8'),baseFile('activities.js'));
const oldApp=baseFile('app.js').split('\n'),newApp=fs.readFileSync(root+'app.js','utf8').split('\n');
for(const name of ['listening','reading','readingDetail','writing','writingDetail','guide'])assert.equal(newApp.find(l=>l.startsWith('function '+name+'(')),oldApp.find(l=>l.startsWith('function '+name+'(')),name+' view must be preserved');
for(const f of ['../index.html','index.html']){const html=fs.readFileSync(root+f,'utf8');const dir=require('node:path').dirname(root+f);for(const [,src]of html.matchAll(/src="([^"]+)"/g))assert(fs.existsSync(require('node:path').resolve(dir,src)),src);}
// Renderer contract: grammar input rows must not be confused with lexical select options.
vm.runInContext(fs.readFileSync(root+'training-ui.js','utf8'),ctx);
let lastItems;const S={lang:'en',steps:{},fields:{},reveals:{}};
const ui=ctx.JC_TRAINING_UI({S,D,A:ctx.JC_ACTIVITIES,t:p=>Array.isArray(p)?p[1]||p[0]:p,h:String,head:()=>'',back:()=>'',link:()=>'',button:()=>'',explain:p=>p[1],closedQuiz:(key,items)=>{lastItems=items;return key;},questionWorkspace:()=>'',checkbox:()=>''});
for(const g of X.grammar)for(const set of g.sets){S.steps['gtraining:'+g.id]=set.id;assert(ui.grammar(g.id));for(const item of lastItems){if(set.id==='recognise'){assert(item[4].some(o=>o.value===item[1]));assert(item[4].every(o=>o.label.length===2));}else assert.equal(item[4],null);assert.equal(item[5].length,2);}}
S.steps['vtraining:T04']='recognise';ui.vocabulary('T04');assert.equal(lastItems.length,8);assert(lastItems.every(it=>it[4].includes(it[1])));
for(const id of Object.keys(X.vocabulary))for(const step of ['learn','guided','independent','use']){S.steps['vtraining:'+id]=step;assert(ui.vocabulary(id));}
assert(ui.mixed());
const cases=[['soler','practice','suelo','sueles'],['perfect','practice','hemos','han'],['imperfect','practice','vivía','viví'],['future-simple','practice','habrá','habrán'],['progressive','practice','jugando','juegando']];
for(const [id,set,good,bad]of cases){const item=X.grammar.find(g=>g.id===id).sets.find(s=>s.id===set).items.find(it=>it[1]===good);assert(item,id+' requires '+good);assert.equal(C.check(good,item[1],item[3]).state,'correct');assert.notEqual(C.check(bad,item[1],item[3]).state,'correct');}
assert(X.grammar.find(g=>g.id==='perfect').explain[0].includes('varía'));assert(X.grammar.find(g=>g.id==='progressive').explain[0].includes('No traduzcas todo'));
for(const v of Object.values(X.vocabulary)){for(const id of v.grammar)assert(X.grammar.some(g=>g.id===id));for(const item of v.gaps){assert.equal(C.check(item[1],item[1],item[3]||[]).state,'correct');for(const alt of item[3]||[])assert.equal(C.check(alt,item[1],item[3]).state,'correct');}}
const soler=X.grammar.find(g=>g.id==='soler').sets[2].items.find(it=>it[1]==='Solemos ir a pie');assert.equal(C.check('Nosotros solemos ir a pie',soler[1],soler[3]).state,'correct');
assert.equal(Object.values(X.vocabulary).reduce((n,v)=>n+v.gaps.length,0),90);
assert.equal(Object.values(X.vocabulary).reduce((n,v)=>n+v.qs.length+(v.extra?.qs.length||0),0),64);
console.log('PASS Work06 expanded brief: 20 grammar areas /357 items +24 mixed gaps; 15 lexical banks /499 entries, 90 gaps, 64 evidence-backed questions; production/reception metadata, tense/person/meaning distinctions, UI contracts and preserved baseline.');
