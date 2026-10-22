'use strict';
(()=>{
const X=JC_TRAINING;
const rows=s=>s.trim().split('\n').map(line=>{const [q,a,why,alts]=line.split('|');return [q,a,why,alts?alts.split(';'):[]];});
const labels={recognise:['Reconocer e interpretar','Recognise and interpret'],practice:['Conjugar y completar','Conjugate and complete'],transform:['Corregir y transformar','Correct and transform']};
const add=(id,title,explain,models,recognise,practice,transform,use,model)=>X.grammar.push({id,title,explain,models,sets:[recognise,practice,transform].map((s,i)=>({id:['recognise','practice','transform'][i],title:labels[['recognise','practice','transform'][i]],level:['access','middle','stretch'][i],items:rows(s)})),use,model});
add('present',['Presente regular: personas y contextos','Regular present: people and contexts'],
['Las terminaciones distinguen la persona: estudio, estudias, estudia, estudiamos, estudiáis, estudian; como, comes, come, comemos, coméis, comen; vivo, vives, vive, vivimos, vivís, viven. El presente expresa hábitos y situaciones actuales. El sujeto puede omitirse si está claro.','Endings identify the person. Learn the patterns for -ar, -er and -ir, then apply them to different verbs. The present expresses habits and current situations. A clear subject can be left unstated.'],
['Estudiamos español, pero nuestros amigos estudian francés.','¿Vivís cerca? — Sí, vivimos a cinco minutos.','Mi hermana bebe agua y yo como fruta.'],`
«Estudiamos español». ¿Quién: yo / nosotros / ellos?|nosotros|La terminación -amos indica nosotros. / -amos identifies we.
«¿Vivís cerca?» ¿A quién: tú / vosotros / ellos?|vosotros|-ís corresponde a vosotros. / -ís identifies you plural.
«Mis primas comen en casa». ¿Una o varias personas?|varias|Primas y comen son plurales. / Both subject and verb are plural.
«Trabajo los sábados». ¿Hábito o acción pasada?|hábito|Los sábados indica repetición. / A repeated Saturday habit.`, ...[
`Yo ___ en el comedor. (comer)|como|Yo → como.
Tú ___ francés. (estudiar)|estudias|Tú → -as.
Mi hermano ___ la puerta. (abrir)|abre|Él → abre.
Nosotras ___ música. (escuchar)|escuchamos|Nosotras → -amos.
Vosotros ___ cerca del centro. (vivir)|vivís|Vosotros → -ís.
Mis amigos ___ agua. (beber)|beben|Ellos → -en.
Nosotros ___ muchas palabras. (aprender)|aprendemos|Aprender es -er. / Aprender is an -er verb.
Yo ___ un correo. (escribir)|escribo|Yo → -o.
Vosotras ___ tenis. (practicar)|practicáis|Vosotras → -áis.
Ellas ___ a las cinco. (terminar)|terminan|Ellas → -an.`,
`Cambia a nosotros: «Vivo en Cork». Escribe la frase completa.|Vivimos en Cork|Vivo → vivimos.
Corrige solo el verbo: «Mi hermana estudio inglés».|estudia|Hermana → ella → estudia.
Cambia a tú: «Bebemos agua». Frase completa.|Bebes agua|Nosotros → tú.
Corrige solo el verbo: «Vosotros comen en casa».|coméis|Comer, vosotros → coméis.
Cambia a ellas: «Escucho música». Frase completa.|Escuchan música|Ellas → escuchan.`],
['Describe qué haces tú entre semana y qué hacen otras dos personas. Utiliza tres verbos distintos y un detalle de horario, lugar o compañía.','Describe your weekday habits and those of two other people. Use three different verbs and a time, place or company detail.'],
'Estudio español todos los días. Mi hermana come en el instituto y mis amigos viven cerca. Por la tarde escuchamos música juntos.');
add('irregular',['Presente: irregulares frecuentes','Present: frequent irregular verbs'],
['Aprende formas de alto rendimiento con su función: voy/vas/va/vamos/vais/van; hago/haces/hace/hacemos/hacéis/hacen; salgo/sales/sale/salimos/salís/salen. También digo, veo, doy, sé y conozco. Saber un dato no es lo mismo que conocer a una persona o un lugar.','Learn frequent forms in useful phrases: ir for journeys, hacer for activities and salir for leaving. Also notice digo, veo, doy, sé and conozco. Saber is used for facts or abilities; conocer for familiarity with people or places.'],
['Voy al instituto y hago los deberes al volver.','Salimos a las cuatro; mis primos salen a las cinco.','Sé nadar y conozco esta piscina.'],`
«Salgo a las ocho». ¿Quién: yo / él / ellos?|yo|Salgo es primera persona singular. / I leave.
«Vamos al cine». ¿Quién: yo / nosotros / vosotros?|nosotros|Vamos corresponde a nosotros. / We go.
«Veo una serie». ¿Ver o ir?|ver|Veo es presente de ver. / I watch or see.
«Sé el precio». ¿Dato o persona conocida?|dato|Saber para un dato. / Saber for a fact.`, `
Yo ___ al instituto en autobús. (ir)|voy|Ir, yo → voy.
Tú ___ los deberes en casa. (hacer)|haces|Hacer, tú → haces.
Mi padre ___ a las seis. (salir)|sale|Salir, él → sale.
Nosotros ___ al cine. (ir)|vamos|Ir, nosotros → vamos.
Vosotros ___ deporte. (hacer)|hacéis|Hacer, vosotros → hacéis.
Ellas ___ de casa juntas. (salir)|salen|Salir, ellas → salen.
Yo ___ una película los viernes. (ver)|veo|Ver, yo → veo.
Yo ___ nadar. (saber)|sé|Habilidad: saber + infinitivo. / Ability.
Yo ___ a tu hermano. (conocer)|conozco|Conocer a una persona. / Know a person.
Yo ___ las gracias al conductor. (dar)|doy|Dar las gracias. / Say thank you.`, `
Corrige solo el verbo: «Yo haco deporte».|hago|La forma de hacer es hago. / Irregular first person.
Cambia a nosotros: «Voy al parque». Frase completa.|Vamos al parque|Voy → vamos.
Corrige solo el verbo: «Yo sabo la respuesta».|sé|Saber → sé.
Cambia a ellos: «Salgo a las nueve». Frase completa.|Salen a las nueve|Salgo → salen.
Completa con saber o conocer conjugado: Yo ___ esta ciudad; he estado aquí antes.|conozco|Familiaridad con un lugar. / Familiarity with a place.`,
['Explica cómo vas al instituto, a qué hora sales y qué haces después. Añade algo que sabes hacer.','Explain how you get to school, when you leave and what you do afterwards. Add something you know how to do.'],
'Voy al instituto en autobús. Salgo a las cuatro y hago los deberes al llegar a casa. Sé tocar la guitarra y practico por la tarde.');
add('stem',['Cambios vocálicos: querer, poder, jugar…','Stem changes: querer, poder, jugar…'],
['En estos presentes cambia la raíz en yo, tú, él/ella y ellos/ellas, pero no en nosotros/vosotros: quiero/queremos, puedo/podemos, juego/jugamos, pido/pedimos. Reconoce también prefiero, empiezo, vuelvo y duermo. No todos los verbos siguen el mismo cambio.','In these present forms the stem changes except in nosotros and vosotros: querer e→ie, poder o→ue, jugar u→ue, pedir e→i. Also recognise preferences, starting, returning and sleeping in context.'],
['Prefiero el tren, pero mis amigos prefieren el autobús.','Jugamos al fútbol; mi hermana juega al tenis.','Pido agua y volvemos a casa.'],`
«No podemos ir». ¿Posibilidad o gusto?|posibilidad|Poder expresa posibilidad o capacidad. / Possibility or ability.
«Prefieren la playa». ¿Quién: yo / ellos / nosotros?|ellos|Prefieren es plural de tercera persona. / They prefer.
«Dormimos ocho horas». ¿La o cambia a ue aquí? Sí / no.|no|Nosotros mantiene dorm-. / No stem change in nosotros.
«Pide agua». ¿Pedir o poder?|pedir|Pide viene de pedir. / Requests or orders water.`, `
Yo ___ ir al cine. (querer)|quiero|Querer: e → ie.
Tú ___ entrar ahora. (poder)|puedes|Poder: o → ue.
Ella ___ al tenis. (jugar)|juega|Jugar: u → ue.
Nosotros ___ fruta. (pedir)|pedimos|Nosotros no cambia la raíz. / No stem change.
Vosotras ___ tarde. (volver)|volvéis|Vosotras conserva volv-. / No stem change.
Ellos ___ ocho horas. (dormir)|duermen|Dormir: o → ue.
La clase ___ a las nueve. (empezar)|empieza|Empezar: e → ie.
Yo ___ la música. (preferir)|prefiero|Preferir: e → ie.`, `
Corrige solo el verbo: «Yo podo ir».|puedo|Poder → puedo.
Cambia a nosotros: «Juego al rugby». Frase completa.|Jugamos al rugby|Nosotros conserva jug-. / We play.
Corrige solo el verbo: «Nosotros quieremos salir».|queremos|Nosotros conserva quer-. / We want.
Cambia a ella: «Pido la cuenta». Frase completa.|Pide la cuenta|Pedir → pide.
Corrige solo el verbo: «Ellas dormen ocho horas».|duermen|Dormir → duermen.`,
['Escribe una preferencia y una limitación: qué quieres hacer, qué puedes hacer y qué prefieren tus amigos. Añade un motivo.','Write a preference and a limitation: what you want to do, what you can do and what your friends prefer. Give a reason.'],
'Quiero ir al cine, pero no puedo salir hoy porque tengo deberes. Mis amigos prefieren jugar al fútbol. Podemos quedar el sábado.');
add('be-have',['Ser, estar, tener y hay','Ser, estar, tener and hay'],
['Ser identifica, caracteriza y expresa origen u hora. Estar localiza personas u objetos y presenta estados. Hay introduce existencia y no cambia con el plural: hay un parque/hay dos parques. Tener expresa edad, posesión, hambre, sed o necesidad. Ser también localiza eventos: la fiesta es en el gimnasio. La duración no decide por sí sola entre ser y estar.','Ser identifies, describes and gives origin or clock time. Estar locates people or things and describes states. Hay introduces existence with singular or plural nouns. Tener expresses possession, age, hunger and thirst. Events can use ser for location: la fiesta es en el gimnasio. Duration alone does not determine the verb.'],
['Soy de Irlanda y estoy en España.','Hay dos bibliotecas; la biblioteca municipal está en el centro.','Tenemos hambre. La fiesta es en el gimnasio.'],`
«Hay tres parques». ¿Existencia o lugar de un parque identificado?|existencia|Hay introduce lo que existe. / There are.
«La biblioteca está al lado». ¿Ubicación o edad?|ubicación|Estar localiza un lugar identificado. / Location.
«Son las dos». ¿Hora o carácter?|hora|Ser expresa la hora. / Clock time.
«Tengo sed». ¿Posesión de un objeto o sensación?|sensación|Tener sed es una expresión. / Thirst.`, `
Yo ___ de Irlanda. (ser)|soy|Origen con ser. / Origin.
Tú ___ en la biblioteca. (estar)|estás|Ubicación con estar. / Location.
Mi hermana ___ quince años. (tener)|tiene|Edad con tener. / Age.
En mi barrio ___ dos piscinas.|hay|Hay no cambia con el plural. / No plural agreement.
Nosotros ___ cansados. (estar)|estamos|Estado con estar. / State.
Vosotras ___ hambre. (tener)|tenéis|Tener hambre. / Hunger.
Mis amigos ___ simpáticos. (ser)|son|Caracterización con ser. / Description.
La fiesta ___ en el gimnasio. (ser / estar)|es|Ubicación del evento con ser. / Event location.`, `
Corrige solo el verbo: «Yo soy quince años».|tengo|La edad usa tener. / Age uses tener.
Corrige solo el verbo: «En mi calle están dos tiendas» (existencia nueva).|hay|Presentación de existencia. / Introducing existence.
Cambia a plural: «La biblioteca está cerrada». Frase completa.|Las bibliotecas están cerradas|Artículo, verbo y adjetivo cambian. / Three plural changes.
Corrige solo el verbo: «Nosotros tenemos de Irlanda».|somos|Origen: somos de. / Origin.
Completa: Hoy estoy cansada, pero normalmente ___ muy activa.|soy|Característica frente al estado de hoy. / Characteristic versus today's state.`,
['Describe tu instituto: qué es y dónde está, dos instalaciones que hay y cómo te encuentras hoy.','Describe your school: what it is, where it is, two facilities it has and how you feel today.'],
'Mi instituto es grande y está en Balbriggan. Hay una biblioteca y dos patios. Hoy estoy cansado porque tengo muchos deberes.');
add('opinions',['Gustar, encantar, interesar y doler','Gustar, encantar, interesar and doler'],
['Lo que gusta determina gusta/gustan. Un infinitivo usa singular: me gusta nadar. El pronombre identifica a la persona: me, te, le, nos, os, les. Con a mi hermana se mantiene le. Encantar e interesar siguen este patrón. Doler da duele/duelen según la parte del cuerpo.','The thing liked controls gusta/gustan; an infinitive takes gusta. Pronouns identify the experiencer: me, te, le, nos, os, les. Keep le with a mi hermana. Encantar and interesar work similarly. Doler agrees with the body part.'],
['A mi hermana le gustan las ciencias.','Nos encanta nadar porque nos relaja.','Me duele la cabeza, pero no me duelen los pies.'],`
«Les gusta el tenis». ¿El gusto pertenece a yo / ellos / tú?|ellos|Les corresponde a ellos/ellas (también ustedes). / They like.
«Me gusta bailar». ¿Actividad o plural de objetos?|actividad|Bailar es infinitivo. / Dancing is an activity.
«Nos interesan los libros». ¿Un libro o varios?|varios|Libros plural → interesan. / Plural books.
«Me duelen los pies». ¿Qué determina duelen?|los pies|La parte del cuerpo es plural. / Plural body part.`, `
Me ___ las matemáticas. (gustar)|gustan|Matemáticas es plural. / Plural noun.
Te ___ nadar. (encantar)|encanta|Infinitivo → singular. / Infinitive.
A mi padre ___ gusta cocinar.|le|A él → le.
A nosotros ___ interesa la historia.|nos|A nosotros → nos.
A vosotras ___ gustan los deportes.|os|A vosotras → os.
A mis amigos les ___ los museos. (interesar)|interesan|Museos plural. / Plural museums.
Me ___ la pierna. (doler)|duele|Pierna singular. / Singular leg.
Nos ___ los pies. (doler)|duelen|Pies plural. / Plural feet.`, `
Corrige solo el verbo: «Me gusta las ciencias».|gustan|Las ciencias exige gustan. / Plural.
Cambia a nosotros: «Me encanta la música». Frase completa.|Nos encanta la música|Cambia me, no encanta. / Change the pronoun.
Corrige la frase: «A Ana gusta nadar».|A Ana le gusta nadar|Se mantiene el pronombre le. / Keep le.
Cambia a singular: «Me gustan los libros». Usa el libro.|Me gusta el libro|Libro singular → gusta.
Corrige solo el verbo: «Me duelen la cabeza».|duele|Cabeza singular. / Singular head.`,
['Explica tus gustos y los de otra persona. Incluye un plural, una actividad y un motivo pertinente.','Explain your likes and those of another person. Include a plural noun, an activity and a relevant reason.'],
'Me gustan las ciencias porque hacemos experimentos. A mi hermana le encanta dibujar. Nos gusta ir al cine los sábados.');
add('reflexives',['Reflexivos y rutina','Reflexive verbs and routines'],
['El pronombre concuerda con la persona: me levanto, te levantas, se levanta, nos levantamos, os levantáis, se levantan. Con infinitivo puede ir unido: voy a levantarme; también me voy a levantar. Vestirse y acostarse tienen cambios vocálicos. En me lavo los dientes se usa el artículo los.','Match the pronoun to the person. With an infinitive it can attach to the end or precede the conjugated verb. Vestirse and acostarse also have stem changes. Say me lavo los dientes with the definite article.'],
['Me levanto a las siete y me visto antes de desayunar.','Nos acostamos temprano; mi hermana se acuesta más tarde.','Voy a ducharme / Me voy a duchar.'],`
«Se levantan a las ocho». ¿Una persona o varias?|varias|LevantAN indica plural. / Verb ending identifies plural.
«Nos acostamos temprano». ¿Nosotros o vosotros?|nosotros|Nos y -amos. / We go to bed.
«Voy a vestirme». ¿Ahora mismo o plan?|plan|Ir a + infinitivo. / A plan.
«Se lava los dientes». ¿Acción de rutina o lugar?|rutina|Acción cotidiana. / A routine action.`, `
Yo ___ a las siete. (levantarse)|me levanto|Yo → me + levanto.
Tú ___ después de entrenar. (ducharse)|te duchas|Tú → te duchas.
Ella ___ antes de desayunar. (vestirse)|se viste|Se y cambio e → i. / Pronoun and stem change.
Nosotros ___ a las diez. (acostarse)|nos acostamos|Nosotros no cambia la raíz. / No stem change.
Vosotros ___ los dientes. (lavarse)|os laváis|Vosotros → os laváis.
Ellas ___ a las once. (acostarse)|se acuestan|Ellas → se acuestan.
Mañana voy a ___. (ducharse, yo)|ducharme|Infinitivo + me. / Attach me.
Mi hermano ___ a las seis. (despertarse)|se despierta|E → ie en despierta.`, `
Corrige el pronombre: «Yo se levanto temprano».|me|Yo requiere me. / First-person pronoun.
Cambia a ella: «Me visto en casa». Frase completa.|Se viste en casa|Me visto → se viste.
Expresa el plan con voy a: «Me levanto temprano». Frase completa.|Voy a levantarme temprano|Dos posiciones válidas del pronombre. / Two valid pronoun positions.|Me voy a levantar temprano
Corrige solo el verbo: «Nosotros nos acuestamos temprano».|acostamos|Nosotros no cambia o a ue. / No stem change.
Completa el artículo: Me lavo ___ dientes.|los|Se usa el artículo con la parte del cuerpo. / Definite article.`,
['Describe una mañana tuya y compárala con la rutina de otra persona. Añade un plan con un reflexivo.','Describe your morning and compare it with someone else’s routine. Add a plan using a reflexive verb.'],
'Me levanto a las siete y me ducho antes de desayunar. Mi hermano se levanta más tarde. El sábado voy a levantarme a las nueve.');
add('agreement',['Concordancia y determinantes','Agreement and determiners'],
['Los artículos, posesivos y adjetivos concuerdan con el sustantivo: una camisa blanca, mis zapatos negros. Mi/mis depende de lo poseído, no del sexo de quien posee. Azul y grande cambian en número; rojo cambia en género y número. Hay excepciones como el agua fría: agua es femenino.','Articles, possessives and adjectives agree with the noun. Mi/mis agrees with the thing possessed, not the owner. Some adjectives vary only in number. Agua is feminine despite using el in the singular.'],
['Mi hermana lleva una camisa blanca y unos zapatos negros.','Mis clases son interesantes. Nuestro instituto es grande.','El agua está fría.'],`
«Mis hermanas». ¿Una o varias hermanas?|varias|Mis y hermanas son plurales. / Plural agreement.
«Una camiseta azul». ¿Azul necesita -a? Sí / no.|no|Azul no cambia por género. / No gender ending.
«Nuestros libros». ¿Poseedor nosotros o ellos?|nosotros|Nuestros indica nuestra posesión. / Our books.
«El agua fría». ¿Agua es masculino o femenino?|femenino|El singular no cambia el género de agua. / Agua is feminine.`, `
Llevo una camisa ___. (blanco)|blanca|Femenino singular. / Feminine singular.
Mis pantalones son ___. (negro)|negros|Masculino plural. / Masculine plural.
Tenemos dos aulas ___. (grande)|grandes|Grande cambia en número. / Number agreement.
Mis hermanas son ___. (trabajador)|trabajadoras|Femenino plural. / Feminine plural.
___ amigos viven cerca. (my)|Mis|Amigos plural → mis.
___ instituto está en Cork. (our)|Nuestro|Instituto masculino singular. / Our school.
Las mochilas son ___. (azul)|azules|Azul → azules.
El agua está ___. (frío)|fría|Agua es femenino. / Feminine noun.`, `
Pasa al plural: «La camisa blanca».|Las camisas blancas|Tres elementos en plural. / Three plural forms.
Corrige solo el adjetivo: «Las chicas son simpático».|simpáticas|Femenino plural. / Feminine plural.
Corrige solo el posesivo: «Mi hermanos».|Mis|Hermanos plural. / Plural brothers.
Pasa al singular: «Los zapatos negros».|El zapato negro|Tres elementos en singular. / Three singular forms.
Corrige solo el adjetivo: «Una falda azula».|azul|Azul no tiene forma azula. / No feminine -a.`,
['Describe la ropa de dos personas y dos instalaciones del instituto. Revisa artículos, posesivos y adjetivos.','Describe two people’s clothes and two school facilities. Check articles, possessives and adjectives.'],
'Mi hermana lleva una falda azul y unos zapatos negros. Mi amigo lleva una camisa blanca. Nuestro instituto tiene dos aulas grandes y una biblioteca luminosa.');
add('questions',['Interrogativos, negación y referentes','Question words, negatives and references'],
['Distingue por qué (pregunta) y porque (motivo). Cuánto concuerda con el sustantivo. Nunca antes del verbo no necesita no; después sí: nunca voy / no voy nunca. Nadie y nada siguen un patrón parecido. Lee la pregunta para saber si debes localizar quién, cuándo, dónde o por qué.','Distinguish por qué from porque. Cuánto agrees with the noun. Negative words before the verb do not need no; after it they usually do. Predict the type of information before reading or listening.'],
['¿Cuántas clases tienes? — Tengo seis.','Nunca voy solo / No voy nunca solo.','No hay nadie y no quiero nada.'],`
«¿Con quién viajas?» ¿Lugar o compañía?|compañía|Con quién pregunta compañía. / Who with.
«¿Cuánto dura?» ¿Precio o duración?|duración|Durar pide tiempo. / How long.
«¿Para qué vas?» ¿Finalidad o edad?|finalidad|Para qué pide propósito. / Purpose.
«No hay nadie». ¿Hay personas? Sí / no.|no|Nadie significa ninguna persona. / Nobody.`, `
¿___ vives? — En Sligo.|Dónde|Lugar. / Place.
¿___ cuesta? — Seis euros.|Cuánto|Precio. / Price.
¿___ clases tienes? — Cinco.|Cuántas|Clases femenino plural. / Feminine plural.
¿___ te gusta? — Porque es divertido.|Por qué|Pregunta de motivo. / Why.
Me gusta ___ es divertido.|porque|Respuesta con motivo. / Because.
No veo a ___. (anyone)|nadie|No ... nadie. / Nobody.
Nunca ___ solo. (ir, yo)|voy|Nunca delante del verbo. / Never before the verb.
No quiero ___. (anything)|nada|No ... nada. / Nothing.`, `
Niega con no: «Juego al rugby». Frase completa.|No juego al rugby|No delante del verbo. / No before the verb.
Reescribe con nunca al principio: «No voy nunca solo».|Nunca voy solo|Sin no al anteponer nunca. / No extra no needed.
Corrige solo el interrogativo: «¿Cuántos asignaturas tienes?»|Cuántas|Asignaturas femenino plural. / Feminine plural.
Pregunta por el lugar de residencia con tú. Usa vivir.|¿Dónde vives?|Dónde + vives. / Where do you live?
Pregunta el motivo de «Me gusta el cine». Usa te.|¿Por qué te gusta el cine?|Por qué pregunta; porque responde. / Why versus because.`,
['Escribe tres preguntas útiles para un intercambio: lugar, compañía y motivo. Contesta con datos inventados e incluye una negación.','Write three useful exchange questions: place, company and reason. Answer with invented details and include a negative.'],
'¿Dónde vives? Vivo en Cork. ¿Con quién viajas? Viajo con mi hermana. ¿Por qué te gusta viajar? Porque conozco lugares nuevos. No viajo solo.');
add('connections',['Preposiciones, secuencia y motivos','Prepositions, sequence and reasons'],
['Aprende unidades: en tren, a pie, cerca de, al lado de, antes de + infinitivo. A + el = al; de + el = del. Porque explica motivo; para + infinitivo, finalidad; por eso, consecuencia; pero, contraste; aunque, una dificultad que no impide la acción.','Learn whole phrases and contractions al/del. Choose connectors for their meaning: reason, purpose, result, contrast or concession. Before or after an activity use antes/después de + infinitive.'],
['Voy al centro en tren para visitar a mi prima.','Ceno después de entrenar. Llueve; por eso llevo un abrigo.','Salgo aunque hace frío.'],`
«Voy para estudiar». ¿Motivo o finalidad?|finalidad|Para + infinitivo expresa propósito. / Purpose.
«Llueve; por eso no salgo». ¿Consecuencia o compañía?|consecuencia|Por eso introduce un resultado. / Result.
«Aunque hace frío, salgo». ¿El frío impide salir? Sí / no.|no|Aunque presenta una dificultad superada. / Concession.
«Después de comer». ¿Comer ocurre primero o después?|primero|La otra acción es posterior a comer. / Eating comes first.`, `
Voy ___ instituto en autobús. (a + el)|al|Contracción a + el. / Contraction.
La parada está cerca ___ parque. (de + el)|del|Contracción de + el. / Contraction.
Viajamos ___ tren.|en|En + transporte. / Transport.
Vuelvo a ___. (on foot)|pie|A pie. / On foot.
Leo antes ___ dormir.|de|Antes de + infinitivo. / Before + infinitive.
Voy al centro ___ comprar un regalo. (in order to)|para|Finalidad con infinitivo. / Purpose.
No salgo ___ tengo fiebre. (because)|porque|Motivo. / Reason.
Me gusta correr, ___ hoy estoy cansado. (but)|pero|Contraste. / Contrast.`, `
Une con porque: «Estudio español. Es útil».|Estudio español porque es útil|Motivo ligado a la idea. / Link a reason.
Expresa finalidad con para: «Voy a la biblioteca. Quiero estudiar».|Voy a la biblioteca para estudiar|Para + infinitivo. / Purpose.
Corrige solo la preposición: «Voy en pie».|a|A pie. / On foot.
Corrige la contracción: «Vuelvo de el instituto». Frase completa.|Vuelvo del instituto|De + el = del.
Completa: Primero estudio y ___ ceno. (then)|luego|Secuencia temporal. / Sequence.|después`,
['Escribe un párrafo con una secuencia de dos acciones, un motivo, una finalidad y un contraste pertinentes.','Write a paragraph with two actions in sequence, a reason, a purpose and a relevant contrast.'],
'Primero hago los deberes y luego voy al centro para ver a mi prima. Me gusta ir en tren porque es cómodo, pero hoy voy en coche.');
add('modal',['Obligación, posibilidad y acciones en curso','Obligation, possibility and ongoing actions'],
['Tener que + infinitivo expresa obligación personal; hay que + infinitivo presenta una necesidad general. Se puede/no se puede indica permiso o posibilidad. Estar + gerundio destaca una acción en curso: estoy leyendo. El gerundio no cambia con la persona.','Use tener que for personal obligation and hay que for a general requirement. Se puede expresses permission or possibility. Estar + gerund expresses an ongoing action. Only estar changes with the person.'],
['Tenemos que llevar uniforme. No se puede usar el móvil en clase.','Hay que comprar la entrada antes de entrar.','Estoy haciendo los deberes y mi hermana está leyendo.'],`
«Hay que reciclar». ¿Obligación general o plan personal?|obligación general|Hay que no identifica persona. / General requirement.
«No se puede entrar». ¿Permiso o prohibición?|prohibición|La negación indica que no está permitido. / Prohibited.
«Está leyendo». ¿Acción en curso o plan?|acción en curso|Estar + gerundio. / Ongoing action.
«Tengo que estudiar». ¿Necesidad personal o preferencia?|necesidad personal|Tener que expresa obligación. / Obligation.`, `
Nosotros ___ que estudiar. (tener)|tenemos|Tener que + infinitivo. / Obligation.
Hay ___ comprar el billete antes de subir.|que|Hay que + infinitivo. / General requirement.
No se ___ usar el móvil. (poder)|puede|Se puede / no se puede.
Ahora estoy ___. (leer)|leyendo|Leer → leyendo.
Mi hermana está ___. (hacer los deberes)|haciendo los deberes|Hacer → haciendo.
Ellos ___ comiendo. (estar)|están|Conjuga estar según persona. / Conjugate estar.
Vosotros ___ que llevar uniforme. (tener)|tenéis|Vosotros → tenéis.
Queremos ___ temprano. (salir)|salir|Querer + infinitivo. / Infinitive.`, `
Corrige solo el segundo verbo: «Tengo que estudio».|estudiar|Tras tener que va infinitivo. / Infinitive after tener que.
Expresa prohibición con se puede: «Usar el móvil».|No se puede usar el móvil|No se puede + infinitivo.
Transforma en acción en curso: «Leo un libro».|Estoy leyendo un libro|Estar + leyendo.
Cambia a nosotros: «Estoy comiendo».|Estamos comiendo|Solo cambia estar. / Gerund unchanged.
Corrige solo el segundo verbo: «Hay que llevamos uniforme».|llevar|Hay que + infinitivo.`,
['Explica dos normas del instituto, qué debes hacer hoy y qué estás haciendo ahora.','Explain two school rules, what you must do today and what you are doing now.'],
'Tenemos que llevar uniforme y no se puede comer en clase. Hoy tengo que estudiar para un examen. Ahora estoy haciendo los deberes.');
add('past',['Pasado: narrar acciones terminadas','Past: completed actions'],
['Para experiencias terminadas, combina marcadores con formas frecuentes: fui, hice, vi, tuve, estuve, visité, comí, compré. Reconoce también fuiste/fue/fuimos/fuisteis/fueron e hizo/vieron. En -ar, él lleva -ó; en -er/-ir, -ió. Fui puede ser ir o ser: el contexto decide.','Use time markers with common completed past actions. Recognise different people, not just yo. Regular third-person endings are -ó or -ió. Fui can mean went or was depending on context.'],
['Ayer fui al cine y vi una comedia.','El sábado compramos un regalo; mi hermana compró una camiseta.','Fue un viaje divertido. Fuimos en tren.'],`
«Fue al museo». ¿Desplazamiento o identidad?|desplazamiento|Al museo indica ir. / Went to a museum.
«Fue una excursión divertida». ¿Ir o ser?|ser|Describe cómo fue la excursión. / Describes the trip.
«Compró una entrada». ¿Yo o él/ella?|él/ella|Terminación -ó. / Third-person past.|ella;él
«Hicimos deporte». ¿Una persona o varias?|varias|Hicimos → nosotros. / We did.`, `
Ayer yo ___ al cine. (ir)|fui|Ir, yo → fui.
El sábado tú ___ un museo. (visitar)|visitaste|Tú → -aste.
Mi hermana ___ una camiseta. (comprar)|compró|Ella → -ó.
Nosotros ___ en casa. (comer)|comimos|Nosotros → -imos.
Vosotros ___ una película. (ver)|visteis|Vosotros → visteis.
Ellos ___ deporte. (hacer)|hicieron|Hacer → hicieron.
Yo ___ muchos deberes. (tener)|tuve|Tener → tuve.
Mi amigo ___ en Madrid. (estar)|estuvo|Estar → estuvo.
Yo ___ un regalo. (comprar)|compré|Yo → -é.
Mis primos ___ a Cork. (ir)|fueron|Ellos → fueron.`, `
Pasa a ayer: «Hoy voy al cine». Frase completa.|Ayer fui al cine|Cambia marcador y verbo. / Change time and verb.
Corrige solo el verbo: «Ayer mi hermana visito un museo».|visitó|Tercera persona con tilde. / Third-person accent.
Cambia a nosotros: «Fui a Cork». Frase completa.|Fuimos a Cork|Fui → fuimos.
Pasa a ayer: «Hoy hago los deberes». Frase completa.|Ayer hice los deberes|Hacer → hice.
Corrige solo el verbo: «El sábado pasado veo una película».|vi|Ver en pasado. / Completed past.`,
['Cuenta un fin de semana pasado: dos acciones, compañía o lugar y una valoración con motivo.','Describe a past weekend: two actions, company or place and a reaction with a reason.'],
'El sábado pasado fui a Cork con mi familia. Visitamos un museo y comimos en el centro. Me gustó el viaje porque pasé tiempo con mis primos.');
add('past-context',['Reconocer perfecto e imperfecto','Recognising perfect and imperfect'],
['Reconoce he/has/ha/hemos/habéis/han + participio para hechos relacionados con el presente: he visitado, ha comido, hemos visto. El imperfecto da contexto o hábitos pasados: era, estaba, tenía, hacía, iba. Una narración puede combinar estaba lloviendo y entré en un museo. Para producción inicial basta un repertorio fiable; no se exige dominar todos estos paradigmas.','Recognise the perfect with haber + participle and imperfect forms used for past background or habits. Combine background with a completed event when useful. Recognition is broader than the production repertoire required here.'],
['Hoy he hecho los deberes. Ayer hice los deberes en la biblioteca.','Cuando era pequeño, iba al parque con mi abuelo.','Hacía frío, así que entramos en una cafetería.'],`
«Ha comprado pan». ¿Pasado, presente habitual o futuro?|pasado|Haber + participio se refiere a una acción anterior. / Past action.
«Cuando era pequeña, iba a pie». ¿Hábito pasado o plan?|hábito pasado|Era/iba sitúan un hábito anterior. / Past habit.
«Estaba cansada cuando llegué». ¿Qué da contexto: estaba o llegué?|estaba|El estado acompaña a la llegada. / Background state.
«Hemos visto una película». ¿Quién: yo / nosotros / ellos?|nosotros|Hemos indica nosotros. / We have seen.`, `
Hoy ___ visitado a mi abuela. (haber, yo)|he|Yo → he + participio.
Mi hermana ha ___. (comer)|comido|Comer → comido.
Nosotros hemos ___ una película. (ver)|visto|Participio irregular visto. / Irregular participle.
Cuando era pequeño, ___ ocho años. (tener, yo)|tenía|Edad en el contexto pasado. / Past age.
El hotel ___ cerca de la playa. (estar, imperfecto)|estaba|Ubicación de fondo. / Background location.
De pequeño ___ al parque cada día. (ir, yo)|iba|Hábito en pasado. / Past habit.
Ayer ___ frío. (hacer, imperfecto)|hacía|Contexto meteorológico. / Weather background.
Mis amigos han ___ los deberes. (hacer)|hecho|Participio irregular hecho. / Irregular participle.`, `
Corrige solo el participio: «He hacido los deberes».|hecho|Hacer → hecho.
Cambia a nosotros: «He visitado Cork». Frase completa.|Hemos visitado Cork|El participio no cambia. / Participle unchanged.
Escoge era / fui: Cuando ___ pequeño, vivía en Galway.|era|Descripción de una etapa. / Background period.
Escoge estaba / estuve: Ayer ___ dos horas en el museo.|estuve|Estancia delimitada. / Bounded visit.
Completa: Hacía frío, ___ entramos en una cafetería. (so)|así que|Consecuencia. / Result.|por eso`,
['Comprende primero quién hizo qué y cuándo. Después escribe una experiencia con una circunstancia de fondo, si te ayuda a comunicar mejor.','First identify who did what and when. Then write an experience with one background circumstance if it helps the message.'],
'Ayer hacía frío y estaba cansado. Fui a una cafetería con mi prima y tomé un chocolate caliente. Lo pasé bien porque pudimos charlar.');
add('plans',['Planes, preferencias y futuro receptivo','Plans, preferences and recognising future'],
['Ir a + infinitivo: voy, vas, va, vamos, vais, van a viajar. Me gustaría + infinitivo expresa deseo o preferencia, no un plan confirmado. Reconoce futuros como será, habrá, hará, lloverá y tendremos cuando aparezcan en avisos o pronósticos. No hace falta convertir cada respuesta en una lista de tiempos verbales.','Use ir a + infinitive for plans. Me gustaría expresses a wish rather than a confirmed plan. Recognise common future forms in forecasts and announcements without forcing them into every answer.'],
['Vamos a visitar el museo el sábado.','Me gustaría ir porque me interesa la historia.','Mañana hará frío y habrá chubascos.'],`
«Van a viajar». ¿Quién: yo / nosotros / ellos?|ellos|Van indica ellos/ellas. / They are going to travel.
«Me gustaría ir». ¿Deseo o plan confirmado?|deseo|Gustaría expresa preferencia. / A wish.
«Habrá lluvia». ¿Pasado o futuro?|futuro|Habrá es futuro de haber. / There will be.
«Tendremos clase». ¿Nosotros o tú?|nosotros|Terminación -emos. / We will have.`, `
Yo ___ a visitar a mi abuela. (ir)|voy|Yo → voy.
Tú ___ a viajar en tren. (ir)|vas|Tú → vas.
Ella ___ a estudiar en casa. (ir)|va|Ella → va.
Nosotros ___ a jugar. (ir)|vamos|Nosotros → vamos.
Vosotras ___ a salir. (ir)|vais|Vosotras → vais.
Mis primos ___ a venir. (ir)|van|Ellos → van.
Me gustaría ___ el museo. (visitar)|visitar|Tras gustaría va infinitivo. / Infinitive.
Voy a ___. (acostarse, yo)|acostarme|Pronombre me unido al infinitivo. / Attached pronoun.`, `
Pasa a mañana con ir a: «Hoy estudio en casa».|Mañana voy a estudiar en casa|Plan con infinitivo. / Future plan.
Corrige solo el segundo verbo: «Voy a visito Cork».|visitar|Ir a + infinitivo.
Cambia a nosotros: «Voy a salir». Frase completa.|Vamos a salir|Solo cambia ir. / Change ir.
Expresa un deseo con me gustaría: «Visitar Madrid».|Me gustaría visitar Madrid|Deseo + infinitivo. / Wish.
Escoge habrá / había: En el pronóstico para mañana ___ tormentas.|habrá|Referencia futura. / Future reference.`,
['Explica tus próximas vacaciones: un plan con dos detalles y algo que te gustaría hacer, con motivo.','Explain your next holiday: one plan with two details and something you would like to do, with a reason.'],
'El próximo verano voy a ir a Galway con mi hermana. Vamos a viajar en tren. Me gustaría visitar un museo porque me interesa la historia.');
add('pronouns',['Pronombres y referencias en contexto','Pronouns and references in context'],
['Para comprender, sigue a quién o a qué se refiere cada pronombre. Lo/la/los/las pueden sustituir un objeto; le/les, a quien recibe algo. Con verbo conjugado van antes: lo compro. Con infinitivo pueden unirse: voy a comprarlo. Su puede significar de él, de ella o de ellos: usa el contexto.','Track what each pronoun refers to. Direct object pronouns can replace things; le/les often identify the recipient. Pronouns precede a conjugated verb or attach to an infinitive. Su is ambiguous without context.'],
['Compro la entrada y la guardo.','Voy a comprarlo / Lo voy a comprar.','Le doy el regalo a mi hermana.'],`
«Compro las entradas y las guardo». ¿Las se refiere a entradas o amigos?|entradas|Referente femenino plural. / Feminine plural reference.
«Le doy el libro a Ana». ¿Quién recibe el libro?|Ana|Le corresponde a Ana. / The recipient.
«Pablo vive con su hermana». ¿Su hermana es la de Pablo o la del lector?|Pablo|El sujeto aporta el referente. / Context supplies the owner.
«Quiero verlo», sobre un museo. ¿Lo sustituye museo o quiero?|museo|Objeto masculino singular. / Masculine singular object.`, `
La entrada es barata. Voy a comprar___.|la|Entrada femenino singular. / Feminine singular.
Los zapatos son cómodos. ___ llevo hoy.|Los|Zapatos masculino plural. / Masculine plural.
Doy un regalo a mi madre. ___ doy un regalo.|Le|Destinataria singular. / Singular recipient.
Las camisetas son verdes. Quiero probar___.|las|Camisetas femenino plural. / Feminine plural.
El museo es interesante. Quiero visitar___.|lo|Museo masculino singular. / Masculine singular.
Mis abuelos viven lejos. ___ escribo cada semana. (to them)|Les|Destinatarios plurales. / Plural recipients.`, `
Sustituye la entrada por la: «Compro la entrada».|La compro|Pronombre antes del verbo conjugado. / Before the verb.
Sustituye el museo por lo, unido al infinitivo: «Voy a visitar el museo».|Voy a visitarlo|Pronombre unido al infinitivo. / Attached to infinitive.
Corrige solo el pronombre: «La camiseta: lo compro».|la|Camiseta femenino. / Feminine referent.
Sustituye los libros por los: «Tengo los libros».|Los tengo|Los antes del verbo. / Before the verb.`,
['Escribe tres frases sobre una compra o visita. Usa un pronombre cuando el referente sea claro; evita repetir el mismo sustantivo sin necesidad.','Write three sentences about a purchase or visit. Use a pronoun where its reference is clear; avoid needless repetition.'],
'Quiero visitar el museo porque me interesa la historia. Voy a visitarlo el sábado. La entrada cuesta cinco euros y voy a comprarla hoy.');
add('comparisons',['Comparar, cuantificar y ampliar','Comparing, quantifying and developing'],
['Más/menos + adjetivo + que compara; tan + adjetivo + como expresa igualdad. Mejor/peor no necesitan más. Mucho concuerda con el sustantivo (muchas clases); muy modifica adjetivos (muy interesante). Un detalle útil vale más que añadir palabras sin relación con la consigna.','Use más/menos ... que and tan ... como. Mejor/peor do not take más. Mucho agrees with a noun; muy modifies an adjective. Add relevant details rather than length for its own sake.'],
['El tren es más rápido que el autobús.','Mi barrio es tan tranquilo como el tuyo.','Tengo muchas clases, pero son muy interesantes.'],`
«Menos caro». ¿Más barato o más caro?|más barato|Precio menor. / Lower price.
«Tan grande como». ¿Igualdad o diferencia?|igualdad|Tan ... como iguala. / Equal comparison.
«Muy interesante». ¿Muy modifica nombre o adjetivo?|adjetivo|Interesante es adjetivo. / Adjective.
«Muchas clases». ¿Muchas cambia por el nombre? Sí / no.|sí|Concuerda con clases. / Agreement.`, `
El tren es más rápido ___ el autobús.|que|Más ... que.
Mi casa es tan grande ___ la tuya.|como|Tan ... como.
Tengo ___ clases hoy. (many)|muchas|Clases femenino plural. / Feminine plural.
La película es ___ interesante. (very)|muy|Muy + adjetivo. / Adjective.
Este parque es ___ que el otro. (better)|mejor|No más mejor. / No más with mejor.
Hay ___ alumnos en mi clase. (many)|muchos|Alumnos masculino plural. / Masculine plural.`, `
Corrige la comparación: «Este libro es más mejor».|Este libro es mejor|Mejor ya compara. / Mejor is already comparative.
Une con más ... que: «El tren es rápido. El autobús es lento».|El tren es más rápido que el autobús|Comparación de velocidad. / Speed comparison.
Corrige solo el cuantificador: «Tengo muy deberes».|muchos|Muchos + sustantivo. / Noun quantifier.
Corrige solo el cuantificador: «Mi clase es mucho pequeña».|muy|Muy + adjetivo. / Adjective modifier.`,
['Compara dos transportes, asignaturas o lugares. Explica cuál prefieres y por qué con un ejemplo pertinente.','Compare two means of transport, subjects or places. Explain your preference and give a relevant example.'],
'El tren es más rápido que el autobús, pero es más caro. Prefiero el tren porque puedo leer durante el viaje y llego temprano.');
})();
