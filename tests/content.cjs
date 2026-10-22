'use strict';
const assert=require('node:assert/strict');const fs=require('node:fs');const vm=require('node:vm');const C=require('../web/core.js');
const ctx={};vm.createContext(ctx);for(const file of ['data.js','activities.js'])vm.runInContext(fs.readFileSync(__dirname+'/../web/'+file,'utf8'),ctx);const D=ctx.JC_DATA,A=ctx.JC_ACTIVITIES;
assert.equal(D.themes.length,15);assert.equal(new Set(D.themes.map(t=>t.id)).size,15);assert.equal(Object.keys(D.groups).length,26);assert.equal(D.reserve.length,14);
const words=Object.values(D.groups).flatMap(g=>g.words);assert.equal(words.length,149);
assert.equal(Object.values(D.groups).filter(g=>g.tier==='entry').flatMap(g=>g.words).length,109);
const groupsAssigned=D.themes.flatMap(t=>t.groups);assert.equal(new Set(groupsAssigned).size,26);assert.equal(groupsAssigned.length,26);
for(const [id,g] of Object.entries(D.groups)){
 const refs=g.sentences.flatMap(s=>s.parts.filter(p=>typeof p!=='string').map(p=>p.word));assert.equal(refs.length,g.words.length,id);assert.equal(new Set(refs).size,g.words.length,id);
 for(const w of g.words){assert(refs.includes(w.id));assert(w.source.text);assert.equal(C.check(w.answer,w.answer,w.alternatives).state,'correct');for(const alt of w.alternatives)assert.equal(C.check(alt,w.answer,w.alternatives).state,'correct');assert.equal(C.check('nonsense',w.answer,w.alternatives).state,'review');}
}
assert.equal(C.check('salon','salón').state,'spelling');assert.equal(C.check('ano','año').state,'review');assert.equal(C.check('me duele los pies','me duelen los pies').state,'review');assert.equal(C.check('simpático','simpática').state,'review');assert.equal(C.check('','hola').state,'empty');assert.equal(C.check('la salón','salón').state,'review');
assert.equal(D.readings.length,8);assert.equal(D.readings.reduce((n,r)=>n+r.questions.length,0),36);assert(!D.readings.find(r=>r.id==='rc02').text.includes('Leaving Cert'));
for(const r of D.readings)for(const q of r.questions){assert(q.q.length===2);assert(r.text.includes(q.evidence),r.id+': '+q.evidence);}
assert.equal(D.listening.length,8);assert(D.listening.every(x=>x.status==='pending-audio'));assert.equal(Object.keys(A.transfers).length,3);assert.equal(Object.values(A.transfers).reduce((n,t)=>n+t.guided.qs.length+t.independent.qs.length,0),21);
for(const t of Object.values(A.transfers)){assert.notEqual(t.guided.text,t.independent.text);for(const stage of ['guided','independent'])for(const [q,ans,ev]of t[stage].qs){assert.equal(q.length,2);assert(ans);assert(t[stage].text.includes(ev),ev);}assert.equal(t.checks.length,3);assert(t.access);for(const it of [...t.access,...(t.completion||[])])assert.equal(C.check(it[1],it[1],it[3]||[]).state,'correct');}
assert.equal(A.grammar.length,7);assert.equal(A.grammar.reduce((n,g)=>n+g.items.length,0),28);assert.equal(A.q16.items.length,10);assert.equal(new Set(A.q16.bank).size,10);assert.notDeepEqual(Array.from(A.q16.bank),A.q16.items.map(x=>x[1]));for(const x of A.q16.items)assert(A.q16.bank.includes(x[1]));
assert.equal(A.form.items.length,6);assert.equal(A.writing.email.prompts.length,5);assert.equal(A.writing.blog.prompts.length,5);assert.equal(A.writing.personal.prompts.length,8);
for(const g of [...A.grammar,A.q16,A.form])for(const it of g.items)assert.equal(C.check(it[1],it[1],it[3]||[]).state,'correct');
assert.equal(C.words('   Hola, soy estudiante.  '),3);
const app=fs.readFileSync(__dirname+'/../web/app.js','utf8');assert(!/fetch\s*\(|XMLHttpRequest|sendBeacon|https:\/\//.test(app));assert(app.includes('Fixed simulation instructions'));assert(!fs.readFileSync(__dirname+'/../web/index.html','utf8').includes('http'));assert(!app.includes('<audio'));assert(app.includes('No automatic grade'));
console.log('PASS: 15 themes, 26 groups/149 items, 14 reserve; source evidence for 36 reading + 21 transfer questions, 13 entry/completion items; 28 grammar + 10 Q16 + 6 form answers; 5/5/8 prompts; alternatives, accents, ñ, agreement and no network/audio.');
