'use strict';
(()=>{
const V=JC_TRAINING.vocabulary;
const extend=(id,rows)=>{for(const [es,en,example,tier='core']of rows){if(V[id].words.some(w=>w.es===es))continue;V[id].words.push({es,en,example,tier,source:'work06-explicit'});V[id].authoredCount++;}};
extend('T04',[
 ['el director / la directora','headteacher','La directora habla con los alumnos.'],
 ['el estuche','pencil case','Guardo el bolígrafo en el estuche.'],
 ['la calculadora','calculator','Utilizo la calculadora en matemáticas.'],
 ['la pizarra','board','La profesora escribe en la pizarra.'],
 ['el proyecto','project','Hacemos un proyecto en grupos.'],
 ['puntual','on time / punctual','Hay que ser puntual y llegar antes de las nueve.']
]);
// A shared lexical reference connects professions to school without reauthoring it.
V.T04.words.push(V.T13.words.find(w=>w.es==='el profesor / la profesora'));
extend('T08',[
 ['de algodón','made of cotton','La camiseta es de algodón.'],
 ['de lana','made of wool','El jersey es de lana.'],
 ['de cuero','made of leather','Los zapatos son de cuero.','extended'],
 ['la tienda de ropa','clothes shop','Trabajo los sábados en una tienda de ropa.'],
 ['le queda bien','it fits / suits him or her','La camisa le queda bien.','extended']
]);
extend('T09',[
 ['trescientos / trescientas','three hundred','Hay trescientas entradas.'],
 ['cuatrocientos / cuatrocientas','four hundred','El billete cuesta cuatrocientos euros.'],
 ['quinientos / quinientas','five hundred','Participan quinientas personas.'],
 ['seiscientos / seiscientas','six hundred','La sala tiene seiscientas plazas.','extended'],
 ['setecientos / setecientas','seven hundred','El pueblo tiene setecientos habitantes.','extended'],
 ['ochocientos / ochocientas','eight hundred','La excursión cuesta ochocientos euros en total.','extended'],
 ['novecientos / novecientas','nine hundred','Hay novecientas entradas disponibles.','extended'],
 ['a la una','at one o’clock','El tren sale a la una.']
]);
extend('T11',[
 ['la primavera','spring','En primavera llueve a veces.'],
 ['el verano','summer','En verano hace calor.'],
 ['el otoño','autumn','En otoño suele hacer viento.'],
 ['el invierno','winter','En invierno hace frío.']
]);
extend('T05',[
 ['suelo + infinitivo','I usually + verb','Suelo desayunar antes de las ocho.'],
 ['¿Qué sueles hacer…?','What do you usually do…?','¿Qué sueles hacer después de clase?'],
 ['¿A qué hora sueles…?','What time do you usually…?','¿A qué hora sueles levantarte?']
]);
V.T09.note=['Para 32–99 combina decena + y + unidad: treinta y dos, cuarenta y siete; las centenas concuerdan cuando procede: doscientas personas. Distingue a la una y a las dos. No necesitas memorizar cada número como una palabra independiente.','For 32–99 combine tens + y + units: treinta y dos, cuarenta y siete. Hundreds agree where appropriate: doscientas personas. Distinguish a la una from a las dos. You do not need a separate flashcard for every number.'];
V.T04.related=['T05','T13'];V.T05.related=['T09','T15'];V.T08.related=['T09'];V.T11.related=['T09','T12'];
const grammarLinks={T01:['be-have','questions'],T02:['agreement','opinions'],T03:['be-have','connections'],T04:['modal','opinions'],T05:['soler','reflexives'],T06:['opinions','stem'],T07:['opinions','pronouns'],T08:['agreement','comparisons'],T09:['questions'],T10:['connections'],T11:['future-simple'],T12:['past','plans'],T13:['opinions','be-have'],T14:['plans','modal'],T15:['questions','connections']};
for(const [id,links]of Object.entries(grammarLinks))V[id].grammar=links;
V.T04.gaps.push(['La ___ enseña español en este instituto. (female teacher)','profesora','Profesora es la persona que enseña. / A female teacher.'],['Guardo los bolígrafos en el ___. (pencil case)','estuche','Estuche = pencil case.'],['Hacemos un ___ en grupos. (project)','proyecto','Una tarea compartida. / A group task.']);
V.T08.gaps.push(['La camiseta es de ___. (cotton)','algodón','De + material. / Made of cotton.'],['Este jersey es de ___. (wool)','lana','De lana = made of wool.'],['La camisa le ___ bien. (fits / suits)','queda','Quedar bien: fit or suit.',['sienta']]);
V.T09.gaps.push(['El tren sale ___ la una.','a','A la una, a las dos. / At one, at two.'],['Hay ___ personas. (three hundred, escribe palabras / write words)','trescientas','Personas femenino → trescientas. / Feminine agreement.'],['El descuento es ___ veinte por ciento. (de + el)','del','Del = de + el.']);
V.T11.gaps.push(['Después del verano llega el ___.','otoño','Orden de las estaciones. / The season after summer.'],['En ___ suele hacer mucho frío. (winter)','invierno','Invierno = winter.'],['La primavera viene antes del ___. (summer)','verano','Verano = summer.']);
V.T05.gaps.push(['Yo ___ ir al instituto en autobús. (soler)','suelo','Suelo + infinitivo. / I usually.'],['¿A qué hora sueles ___? (levantarse, tú)','levantarte','Pronombre te unido al infinitivo. / Attach te.'],['Mis amigos ___ comer en el comedor. (soler)','suelen','Ellos → suelen.']);
for(const [id,answer,alternatives]of [['T01','idiomas',['lenguas']],['T02','pelo',['cabello']],['T03','armario',['cajón']],['T04','favorita',['preferida']],['T07','zumo',['jugo']]]){const item=V[id].gaps.find(it=>it[1]===answer);item[3]=[...(item[3]||[]),...alternatives];}
V.T08.extra={title:['Oferta de uniformes','Uniform offer'],text:'Uniformes Sol: camisa blanca de algodón, antes 20 €, ahora 16 €; descuento del 20 %. Jersey azul de lana: 28 €. La oferta de la camisa termina el 30 de agosto. Se puede pagar con tarjeta. No se aceptan devoluciones sin recibo.',qs:[
 [['¿De qué material es la camisa?','What material is the shirt made of?'],'Cotton.','camisa blanca de algodón'],
 [['¿Cuál es el precio actual y cuál era el anterior?','What is the current price and what was the previous price?'],'Current €16; previous €20.','antes 20 €, ahora 16 €'],
 [['¿Qué porcentaje de descuento se anuncia?','What discount percentage is advertised?'],'20%.','descuento del 20 %'],
 [['¿Qué se necesita para devolver una prenda?','What is needed to return an item?'],'A receipt.','No se aceptan devoluciones sin recibo.']
 ]};
// Each entry records the intended domain without equating a tier with mastery.
for(const [id,v]of Object.entries(V))for(const w of v.words){w.reception=['recognise','understand'];w.production=w.tier==='core'?'functional-selection':'optional';w.kind=/\s/.test(w.es.replace(/^(el|la|los|las|un|una)\s+/,''))?'expression-or-variants':'word';}
})();
