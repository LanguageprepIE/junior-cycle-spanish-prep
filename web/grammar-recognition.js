'use strict';
/* Choices avoid requiring students to write Spanish grammatical terminology. */
(()=>{
const choices={
present:[['yo','nosotros','ellos'],['tú','vosotros','ellos'],['una','varias'],['hábito','acción pasada']],
irregular:[['yo','él','ellos'],['yo','nosotros','vosotros'],['ver','ir'],['dato','persona conocida']],
stem:[['posibilidad','gusto'],['yo','ellos','nosotros'],['sí','no'],['pedir','poder']],
'be-have':[['existencia','ubicación'],['ubicación','edad'],['hora','carácter'],['posesión de un objeto','sensación']],
opinions:[['yo','ellos','tú'],['actividad','plural de objetos'],['uno','varios'],['me','los pies']],
reflexives:[['una','varias'],['nosotros','vosotros'],['ahora mismo','plan'],['rutina','lugar']],
agreement:[['una','varias'],['sí','no'],['nosotros','ellos'],['masculino','femenino']],
questions:[['lugar','compañía'],['precio','duración'],['finalidad','edad'],['sí','no']],
connections:[['motivo','finalidad'],['consecuencia','compañía'],['sí','no'],['primero','después']],
modal:[['obligación general','plan personal'],['permiso','prohibición'],['acción en curso','plan'],['necesidad personal','preferencia']],
past:[['desplazamiento','identidad'],['ir','ser'],['yo','él/ella'],['una','varias']],
'past-context':[['pasado','presente habitual','futuro'],['hábito pasado','plan'],['estaba','llegué'],['yo','nosotros','ellos']],
plans:[['yo','nosotros','ellos'],['deseo','plan confirmado'],['pasado','futuro'],['nosotros','tú']],
pronouns:[['entradas','amigos'],['Ana','el hablante'],['Pablo','el lector'],['museo','quiero']],
comparisons:[['más barato','más caro'],['igualdad','diferencia'],['nombre','adjetivo'],['sí','no']]
};
const meanings={yo:'yo · I',nosotros:'nosotros · we',ellos:'ellos · they',tú:'tú · you',vosotros:'vosotros · you (plural)',él:'él · he',una:'one',varias:'several',hábito:'habit','acción pasada':'past action',ver:'ver · see/watch',ir:'ir · go',dato:'a fact','persona conocida':'a familiar person',posibilidad:'possibility',gusto:'liking',sí:'yes',no:'no',pedir:'pedir · request',poder:'poder · be able',existencia:'existence',ubicación:'location',edad:'age',hora:'clock time',carácter:'character','posesión de un objeto':'possession of an object',sensación:'feeling',actividad:'activity','plural de objetos':'plural objects',uno:'one',varios:'several',me:'me · to me','los pies':'los pies · feet','ahora mismo':'right now',plan:'plan',rutina:'routine',lugar:'place',masculino:'masculine',femenino:'feminine',compañía:'company',precio:'price',duración:'duration',finalidad:'purpose',motivo:'reason',consecuencia:'result',primero:'first',después:'afterwards','obligación general':'general obligation','plan personal':'personal plan',permiso:'permission',prohibición:'prohibition','acción en curso':'ongoing action','necesidad personal':'personal requirement',preferencia:'preference',desplazamiento:'movement',identidad:'identity',ser:'ser · be','él/ella':'él/ella · he/she',pasado:'past','presente habitual':'habitual present',futuro:'future','hábito pasado':'past habit',estaba:'estaba',llegué:'llegué',deseo:'wish','plan confirmado':'confirmed plan',entradas:'entradas · tickets',amigos:'amigos · friends',Ana:'Ana','el hablante':'the speaker',Pablo:'Pablo','el lector':'the reader',museo:'museo · museum',quiero:'quiero · I want','más barato':'cheaper','más caro':'more expensive',igualdad:'equality',diferencia:'difference',nombre:'noun',adjetivo:'adjective'};
for(const g of JC_TRAINING.grammar)g.sets[0].items.forEach((it,i)=>{
 const options=choices[g.id][i].map(value=>({value,label:[value,meanings[value]||value]}));
 // Rotate positions without random changes between checking and feedback.
 options.push(...options.splice(0,i%options.length));it[4]=options;
});
})();
