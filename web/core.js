/* Small shared logic. No services, telemetry or evaluation of free writing. */
(function(root){
'use strict';
const normalise=v=>String(v??'').normalize('NFC').trim().toLocaleLowerCase('es').replace(/[.!?]+$/u,'').replace(/\s+/gu,' ');
// Preserve ñ. Strip acute accents/diaeresis for spelling feedback only, not an exact pass.
const accentFold=v=>normalise(v).normalize('NFD').replace(/[\u0301\u0308]/gu,'').normalize('NFC');
function check(value,answer,alternatives=[],allowArticle=false){
 const v=normalise(value),answers=[answer,...alternatives].map(normalise);
 if(!v)return {state:'empty'};
 let choices=[v];if(allowArticle)choices.push(v.replace(/^(el|la|los|las|un|una|unos|unas)\s+/u,''));
 if(choices.some(c=>answers.includes(c)))return {state:'correct'};
 if(choices.some(c=>answers.some(a=>accentFold(c)===accentFold(a))))return {state:'spelling',expected:answer};
 return {state:'review',expected:answer};
}
const words=v=>(String(v).trim().match(/\S+/g)||[]).length;
const api={normalise,accentFold,check,words};root.JC_CORE=api;if(typeof module!=='undefined')module.exports=api;
})(globalThis);
