'use strict';
/* Original JC practice. Pedagogical selections, not an official closed syllabus. */
globalThis.JC_TRAINING={vocabulary:{},grammar:[]};
(()=>{
const X=JC_TRAINING;
const words=s=>s.trim().split('\n').map((line,i)=>{const [es,en,example,tier='core']=line.split('|');return {es,en,example,tier};});
const block=(id,lexicon,gaps,text,qs,use,model)=>X.vocabulary[id]={words:words(lexicon),gaps,text,qs,use,model};
block('T01',`
el nombre|first name|Mi nombre es Alba.
el apellido|surname|Mi apellido es Romero.
la edad|age|En la ficha tengo que indicar mi edad.
la fecha de nacimiento|date of birth|Mi fecha de nacimiento es el 14 de abril de 2011.
la dirección|address|Escribe tu dirección en el formulario.
el código postal|postcode|Falta el código postal de tu casa.
la nacionalidad|nationality|Tengo nacionalidad irlandesa.
irlandés / irlandesa|Irish|Mi padre es irlandés y mi madre es irlandesa.
español / española|Spanish|Mi prima es española.
el idioma|language|Hablo dos idiomas.
me llamo|my name is|Me llamo Álex.
tengo quince años|I am fifteen|Tengo quince años y estudio español.
vivo en|I live in|Vivo en Drogheda.
soy de|I am from|Soy de Irlanda.
mi cumpleaños es el|my birthday is on|Mi cumpleaños es el cinco de junio.
hablo|I speak|Hablo inglés en casa.
el número de teléfono|telephone number|No hace falta escribir tu número de teléfono real.|extended
deletrear|to spell out|¿Puedes deletrear tu apellido?|extended
el lugar de nacimiento|place of birth|Mi lugar de nacimiento es Cork.|extended
la lengua materna|native language|Mi lengua materna es el inglés.|extended`,[
['Mi ___ es Murphy; mi nombre es Sean.','apellido','El apellido identifica la familia. / Apellido means surname.'],
['Soy ___ Irlanda.','de','Procedencia: ser de. / Origin: ser de.'],
['___ quince años. (tener, yo)','Tengo','La edad se expresa con tener. / Use tener for age.'],
['Mi cumpleaños es ___ once de julio.','el','El + fecha. / El before a date.'],
['Hablo dos ___: inglés y español.','idiomas','Dos exige plural. / Dos requires a plural.']],
'Ficha del intercambio: Nora Walsh, 15 años. Vive en Dundalk, pero nació en Galway. Su cumpleaños es el 18 de septiembre. Habla inglés en casa y aprende español en el instituto. Su hermana tiene doce años.',[
[['¿Cuál es el apellido de Nora?','What is Nora’s surname?'],'Walsh.','Nora Walsh'],
[['¿Dónde vive y dónde nació?','Where does she live and where was she born?'],'Lives in Dundalk; born in Galway.','Vive en Dundalk, pero nació en Galway.'],
[['¿Qué edad tiene su hermana?','How old is her sister?'],'Twelve.','Su hermana tiene doce años.'],
[['¿Qué expresión indica el idioma familiar?','Which phrase identifies the language used at home?'],'Habla inglés en casa.','Habla inglés en casa']],
['Prepara una ficha ficticia con nombre, apellido, edad, ciudad, cumpleaños e idiomas. Conviértela después en una presentación breve.','Create a fictional profile with first name, surname, age, city, birthday and languages. Then turn it into a short introduction.'],
'Me llamo Nora Walsh y tengo quince años. Vivo en Dundalk, pero soy de Galway. Mi cumpleaños es el dieciocho de septiembre. Hablo inglés y estudio español.');
block('T02',`
la madre|mother|Mi madre trabaja cerca de casa.
el padre|father|Mi padre cocina los domingos.
la hermana|sister|Mi hermana tiene doce años.
el hermano|brother|Mi hermano juega al tenis.
los abuelos|grandparents|Visito a mis abuelos los sábados.
el primo / la prima|cousin|Mi prima vive en Cork.
el tío / la tía|uncle / aunt|Mi tío es enfermero.
el hijo / la hija|son / daughter|Ana tiene una hija.
hijo único / hija única|only child|Soy hija única.
mayor / menor|older / younger|Tengo un hermano mayor.
alto / bajo|tall / short|Mi padre es alto.
el pelo rizado|curly hair|Tiene el pelo rizado.
el pelo liso|straight hair|Mi hermana tiene el pelo liso.
los ojos marrones|brown eyes|Tengo los ojos marrones.
llevar gafas|to wear glasses|Mi abuelo lleva gafas.
amable|kind|Mi amiga es amable y me ayuda.
trabajador / trabajadora|hard-working|Mi madre es muy trabajadora.
me llevo bien con|I get on well with|Me llevo bien con mi hermano porque me escucha.
compartir|to share|Comparto habitación con mi hermana.|extended
discutir|to argue|A veces discutimos por la música.|extended
los padres|parents|Mis padres viven conmigo.|extended
la pareja|partner / couple|La pareja de mi madre se llama Pablo.|extended`,[
['La hija de mi tía es mi ___.','prima','Relación familiar femenina. / Female cousin.'],
['Mi hermana tiene el ___ rizado.','pelo','Tiene el pelo + descripción. / Hair description with tener.'],
['Mi abuelo lleva ___. (glasses)','gafas','Llevar gafas: wear glasses.'],
['Me llevo bien ___ mi prima.','con','La construcción es llevarse bien con. / Use llevarse bien con.'],
['Soy hija ___: no tengo hermanos.','única','Hija única = only child.']],
'Pablo vive con su padre y con su hermana menor, Eva. Eva lleva gafas y tiene el pelo liso. Su prima Clara tiene el pelo rizado y vive en otra ciudad. Pablo se lleva bien con Eva porque le ayuda con los deberes, aunque a veces discuten por el ordenador.',[
[['¿Con quién vive Pablo?','Who does Pablo live with?'],'His father and younger sister Eva.','vive con su padre y con su hermana menor, Eva'],
[['¿Quién tiene el pelo rizado?','Who has curly hair?'],'His cousin Clara.','Su prima Clara tiene el pelo rizado'],
[['¿Por qué se lleva bien con Eva?','Why does he get on well with Eva?'],'She helps him with homework.','porque le ayuda con los deberes'],
[['¿Sobre qué discuten a veces?','What do they sometimes argue about?'],'The computer.','a veces discuten por el ordenador']],
['Describe a una persona real o inventada: parentesco, aspecto, personalidad y relación con un motivo.','Describe a real or fictional person: relationship, appearance, personality and how you get on, with a reason.'],
'Mi hermana Eva es menor que yo. Lleva gafas y es muy amable. Me llevo bien con ella porque me ayuda cuando tengo un problema.');
block('T03',`
el piso|flat / apartment|Vivo en un piso en el centro.
la casa adosada|terraced house|Mi casa adosada tiene dos plantas.
la cocina|kitchen|Desayunamos en la cocina.
el comedor|dining room|Cenamos en el comedor.
el salón|living room|Vemos la televisión en el salón.
el dormitorio|bedroom|Mi dormitorio está arriba.
el cuarto de baño|bathroom|Hay un cuarto de baño pequeño.
el jardín|garden|Tenemos flores en el jardín.
el escritorio|desk|Hago los deberes en mi escritorio.
el armario|wardrobe|Guardo la ropa en el armario.
el barrio|neighbourhood|Mi barrio es tranquilo.
las afueras|outskirts|Vivo en las afueras de la ciudad.
ruidoso / ruidosa|noisy|Mi calle es ruidosa por la noche.
tranquilo / tranquila|quiet|Mi barrio es tranquilo.
al lado de|next to|La farmacia está al lado del banco.
enfrente de|opposite|La tienda está enfrente del parque.
cerca de|near|Vivo cerca del instituto.
lejos de|far from|Estamos lejos de la estación.
la planta baja|ground floor|La cocina está en la planta baja.|extended
la calefacción|heating|En invierno encendemos la calefacción.|extended
poner la mesa|to lay the table|Pongo la mesa antes de cenar.|extended
recoger el cuarto|to tidy one's room|Tengo que recoger mi cuarto.|extended`,[
['Guardo mis camisetas en el ___.','armario','Mueble para la ropa. / Furniture for clothes.'],
['Mi barrio es ___: no hay mucho tráfico. (quiet)','tranquilo','Barrio es masculino. / Barrio is masculine.'],
['La farmacia está al lado ___ la panadería.','de','Al lado de + lugar. / Al lado de + place.'],
['Cenamos en el ___. (dining room)','comedor','Comedor no es cafetería. / Dining room, not café.'],
['Mi habitación está en la primera ___. (floor)','planta','Primera planta = first floor.']],
'Lara vive en un piso en las afueras. Su dormitorio da a un parque, pero el salón da a una calle ruidosa. La biblioteca está enfrente de su edificio y la piscina está a veinte minutos a pie. Lo que más le gusta es el parque, donde pasea con su perro.',[
[['¿Qué tipo de vivienda tiene Lara y dónde está?','What type of home does Lara have and where is it?'],'A flat on the outskirts.','vive en un piso en las afueras'],
[['¿Qué habitación da a una calle ruidosa?','Which room faces a noisy street?'],'The living room.','el salón da a una calle ruidosa'],
[['¿Cuánto tarda en llegar andando a la piscina?','How long does it take to walk to the pool?'],'Twenty minutes.','la piscina está a veinte minutos a pie'],
[['¿Qué significa enfrente de en este contexto?','What does enfrente de mean here?'],'Opposite.','La biblioteca está enfrente de su edificio']],
['Describe tu casa y barrio, reales o inventados. Sitúa dos lugares y explica qué te gusta o cambiarías.','Describe your home and neighbourhood, real or fictional. Locate two places and explain what you like or would change.'],
'Vivo en una casa adosada en un barrio tranquilo. Hay un parque enfrente de casa y una tienda al lado. Me gusta mi barrio porque puedo ir andando al instituto.');
block('T04',`
el irlandés|Irish|Estudio irlandés todos los días.
las ciencias|science|Me gustan las ciencias porque hacemos experimentos.
la geografía|geography|En geografía estudiamos los ríos.
la educación física|physical education|Tenemos educación física los jueves.
la música|music|Me gusta la música porque tocamos instrumentos.
la tecnología|technology|En tecnología diseñamos objetos.
la economía doméstica|home economics|En economía doméstica aprendemos a cocinar.
la educación plástica|visual art|En educación plástica dibujamos.
la religión|religious education|Tenemos religión después del recreo.
la informática|computing|Utilizamos ordenadores en informática.
el comedor|school dining hall|Como en el comedor del instituto.
el laboratorio|laboratory|Hacemos experimentos en el laboratorio.
el patio|school yard|Juego en el patio durante el recreo.
los vestuarios|changing rooms|Dejamos las mochilas en los vestuarios.
el uniforme|uniform|Llevo uniforme de lunes a viernes.
las normas|rules|Las normas prohíben usar el móvil en clase.
el recreo|break|En el recreo hablo con mis amigos.
el horario|timetable|Mi horario cambia los viernes.
los deberes|homework|Hago los deberes después de merendar.
el examen|exam|El examen empieza a las nueve.
mi asignatura favorita|my favourite subject|Mi asignatura favorita es historia.
tenemos que|we have to|Tenemos que llegar a tiempo.
se puede|one can / it is allowed|Se puede leer en la biblioteca.
la ingeniería|engineering|Mi hermano estudia ingeniería como asignatura.|extended
el dibujo técnico|graphics / technical drawing|En dibujo técnico usamos una regla.|extended
la tecnología de la madera|wood technology|Fabricamos una caja en tecnología de la madera.|extended
la educación cívica, social y política|CSPE|En educación cívica, social y política debatimos sobre derechos.|extended
la educación personal, social y para la salud|SPHE|En educación personal, social y para la salud hablamos de bienestar.|extended
el bolígrafo|pen|Escribo con un bolígrafo azul.|extended
el cuaderno|notebook|Apunto los deberes en el cuaderno.|extended
la regla|ruler|Necesito una regla para medir.|extended
la mochila|school bag|Llevo los libros en la mochila.|extended`,[
['Hacemos experimentos en el ___.','laboratorio','Lugar para experimentos. / Place for experiments.'],
['Mi asignatura ___ es geografía. (favourite)','favorita','Asignatura es femenino singular. / Feminine singular.'],
['Tenemos ___ llevar uniforme.','que','Tener que + infinitivo expresa obligación. / Obligation.'],
['Como con mis amigos en el ___ del instituto. (dining hall)','comedor','Comedor es el lugar para comer. / School dining hall.'],
['Las clases y sus horas aparecen en el ___.','horario','Horario: timetable.']],
'Los miércoles, Raquel tiene ciencias en el laboratorio a las nueve. Después estudia economía doméstica. El recreo dura veinte minutos. No se puede usar el móvil en clase, pero sí durante el descanso. Su asignatura favorita es educación física porque trabaja en equipo. El viernes sale una hora antes que los miércoles.',[
[['¿Qué tiene después de ciencias?','What does she have after science?'],'Home economics.','Después estudia economía doméstica.'],
[['¿Cuándo se permite usar el móvil?','When is phone use allowed?'],'During break, not in class.','No se puede usar el móvil en clase, pero sí durante el descanso.'],
[['¿Por qué prefiere educación física?','Why does she prefer PE?'],'She works in a team.','porque trabaja en equipo'],
[['¿Qué día sale más temprano?','On which day does she finish earlier?'],'Friday.','El viernes sale una hora antes que los miércoles.']],
['Escribe un párrafo para un blog escolar: asignaturas, instalación, norma, recreo y una preferencia justificada.','Write a school blog paragraph: subjects, a facility, a rule, break and a preference with a reason.'],
'Estudio ciencias y economía doméstica. Hacemos experimentos en el laboratorio. Tenemos que llevar uniforme. En el recreo charlo en el patio. Me gusta la educación física porque juego con mis amigos.');
block('T05',`
me despierto|I wake up|Me despierto a las siete.
me levanto|I get up|Me levanto diez minutos después.
me ducho|I have a shower|Me ducho antes de desayunar.
me visto|I get dressed|Me visto en mi habitación.
me lavo los dientes|I brush my teeth|Me lavo los dientes después de comer.
desayuno|I have breakfast|Desayuno tostadas con leche.
salgo de casa|I leave home|Salgo de casa a las ocho.
entro en clase|I go into class|Entro en clase a las nueve.
meriendo|I have an afternoon snack|Meriendo una fruta al llegar a casa.
ceno|I have dinner|Ceno con mi familia.
me acuesto|I go to bed|Me acuesto a las diez y media.
antes de|before|Leo antes de dormir.
después de|after|Entreno después de clase.
todos los días|every day|Camino todos los días.
a veces|sometimes|A veces voy en coche.
dos veces por semana|twice a week|Entreno dos veces por semana.
temprano|early|Los lunes me levanto temprano.
tarde|late|Los sábados me acuesto tarde.
tardo veinte minutos|it takes me twenty minutes|Tardo veinte minutos en llegar.|extended
suelo|I usually|Suelo leer antes de acostarme.|extended`,[
['___ los dientes después del desayuno. (I brush)','Me lavo','Se usa me lavo los dientes. / Use me lavo los dientes.'],
['Leo antes ___ dormir.','de','Antes de + infinitivo. / Before + infinitive.'],
['Entreno dos ___ por semana.','veces','Dos veces = twice.'],
['Por la noche me ___. (I go to bed)','acuesto','Acostarse → me acuesto.'],
['___ de casa a las ocho. (I leave)','Salgo','Salir → salgo.']],
'Durante la semana, Tomás se despierta a las siete, pero no se levanta hasta las siete y cuarto. Desayuna y sale de casa a las ocho menos diez. Los martes entrena antes de hacer los deberes. Los sábados no pone el despertador y suele levantarse a las nueve.',[
[['¿A qué hora se levanta entre semana?','What time does he get up on weekdays?'],'7:15.','no se levanta hasta las siete y cuarto'],
[['¿A qué hora sale de casa?','When does he leave home?'],'7:50.','sale de casa a las ocho menos diez'],
[['¿Qué hace primero los martes: entrenar o hacer los deberes?','What comes first on Tuesdays: training or homework?'],'Training.','entrena antes de hacer los deberes'],
[['¿Qué significa suele levantarse?','What does suele levantarse mean?'],'He usually gets up.','suele levantarse a las nueve']],
['Compara tu rutina de clase con el sábado: horas, secuencia y una diferencia.','Compare your school-day routine with Saturday: times, sequence and one difference.'],
'Entre semana me levanto a las siete y desayuno antes de salir. El sábado me levanto más tarde porque no tengo clase. Después de comer suelo quedar con mis amigos.');
block('T06',`
jugar al fútbol|to play football|Juego al fútbol los martes.
jugar al baloncesto|to play basketball|Mi hermana juega al baloncesto.
el tenis|tennis|Practico tenis con mi primo.
la natación|swimming|Me gusta la natación porque me relaja.
el atletismo|athletics|Hago atletismo en un club.
el ciclismo|cycling|Me interesa el ciclismo.
el rugby|rugby|Juego al rugby en el instituto.
tocar la guitarra|to play guitar|Toco la guitarra en casa.
tocar el piano|to play piano|Mi amigo toca el piano.
escuchar música|to listen to music|Escucho música mientras camino.
ver series|to watch series|Veo series el fin de semana.
leer novelas|to read novels|Leo novelas de aventuras.
quedar con amigos|to meet friends|Quedo con amigos los viernes.
ir al cine|to go to the cinema|Voy al cine una vez al mes.
dar un paseo|to go for a walk|Doy un paseo con mi perro.
entrenar|to train|Entrenamos después de clase.
el partido|match|El partido empieza a las cinco.
el equipo|team|Mi equipo juega el domingo.
me relaja|it relaxes me|Me gusta dibujar porque me relaja.
me divierte|it amuses me|Esa serie me divierte.
el polideportivo|sports centre|Nado en el polideportivo.|extended
las entradas|tickets for an event|Compro las entradas en línea.|extended`,[
['Juego ___ baloncesto.','al','Jugar al + deporte. / Jugar al + sport.'],
['___ la guitarra. (tocar, yo)','Toco','Instrumento: tocar. / Play an instrument: tocar.'],
['El ___ empieza a las seis. (match)','partido','Partido = match.'],
['Me gusta nadar porque me ___. (relaxes)','relaja','Un motivo pertinente. / A relevant reason.'],
['Quedo ___ mis amigos en el parque.','con','Quedar con alguien. / Meet someone.']],
'Inés juega al rugby los lunes y los jueves. Antes tocaba el piano, pero ahora prefiere la guitarra. El sábado quiere ir al cine con su primo; ya tiene las entradas. Le gusta entrenar en equipo porque conoce a gente, aunque no le gusta jugar cuando llueve.',[
[['¿Con qué frecuencia juega al rugby?','How often does she play rugby?'],'Twice a week, Mondays and Thursdays.','los lunes y los jueves'],
[['¿Qué instrumento prefiere ahora?','Which instrument does she prefer now?'],'Guitar.','ahora prefiere la guitarra'],
[['¿Con quién quiere ir al cine?','Who does she want to go to the cinema with?'],'Her cousin.','con su primo'],
[['¿Qué ventaja encuentra en entrenar en equipo?','What benefit does she find in team training?'],'Meeting people.','porque conoce a gente']],
['Explica dos aficiones con frecuencia o compañía. Justifica una preferencia y añade una actividad que no te guste.','Explain two hobbies with frequency or company. Give a reason for one preference and add an activity you dislike.'],
'Juego al baloncesto dos veces por semana y toco la guitarra en casa. Prefiero el baloncesto porque me gusta entrenar en equipo. No me gusta correr solo.');
block('T07',`
el pan|bread|Como pan en el desayuno.
el arroz|rice|El plato lleva arroz.
la pasta|pasta|Hoy hay pasta con tomate.
el pollo|chicken|Quiero pollo con patatas.
el pescado|fish|El pescado viene con ensalada.
la carne|meat|Mi prima no come carne.
el huevo|egg|La tortilla lleva huevo.
el queso|cheese|El bocadillo lleva queso.
las verduras|vegetables|Como verduras todos los días.
la fruta|fruit|Tomo fruta de postre.
la manzana|apple|Llevo una manzana al instituto.
el tomate|tomato|La ensalada lleva tomate.
las patatas|potatoes|Las patatas están calientes.
el agua|water|Quiero agua sin gas.
la leche|milk|Desayuno leche con cereales.
el zumo|juice|Pido un zumo de naranja.
el bocadillo|filled bread roll / sandwich|Como un bocadillo de queso.
la ensalada|salad|Quiero una ensalada sin cebolla.
lleva|it contains|La sopa lleva verduras.
sin|without|Para mí, sin queso.
la cuenta|bill|La cuenta, por favor.
el menú del día|set menu of the day|El menú del día incluye bebida.
los ingredientes|ingredients|Consulta los ingredientes antes de pedir.|extended
los frutos secos|nuts|Esta salsa lleva frutos secos.|extended
incluido / incluida|included|La bebida está incluida.|extended
el postre|dessert|El postre se paga aparte.|extended`,[
['Para beber, quiero un ___ de naranja.','zumo','Zumo = juice.'],
['La tortilla lleva ___ y patatas. (egg)','huevo','Ingrediente de la tortilla. / An ingredient.'],
['No quiero cebolla: una ensalada ___ cebolla, por favor.','sin','Sin = without.'],
['La ___, por favor: queremos pagar.','cuenta','Se pide la cuenta al pagar. / Ask for the bill.'],
['La bebida está ___. (included)','incluida','Bebida es femenino. / Bebida is feminine.']],
'Cafetería El Patio. Menú de hoy: sopa de verduras o ensalada de tomate; pollo con arroz o pescado con patatas. Precio: 13,50 €. Incluye agua y pan. El postre cuesta 3 € más. Los bocadillos de queso se sirven hasta las doce. La ensalada puede pedirse sin cebolla.',[
[['Nombra los dos acompañamientos de los platos principales.','Name the two main-course side dishes.'],'Rice and potatoes.','pollo con arroz o pescado con patatas'],
[['¿Qué bebida está incluida?','Which drink is included?'],'Water.','Incluye agua y pan.'],
[['¿Hasta qué hora sirven bocadillos?','Until what time are sandwiches served?'],'Noon.','se sirven hasta las doce'],
[['¿El postre está incluido en los 13,50 €?','Is dessert included in the €13.50?'],'No, it costs €3 extra.','El postre cuesta 3 € más.']],
['Pide comida y bebida para ti y otra persona. Indica un ingrediente que queréis o no queréis y pregunta por la cuenta.','Order food and drinks for yourself and another person. State an ingredient you want or do not want and ask for the bill.'],
'Para mí, pollo con arroz y agua. Mi amiga quiere una ensalada sin cebolla y un zumo de naranja. ¿Nos trae la cuenta, por favor?');
block('T08',`
la camiseta|T-shirt|Llevo una camiseta roja.
la camisa|shirt|La camisa del uniforme es blanca.
los pantalones|trousers|Necesito unos pantalones negros.
la falda|skirt|La falda es azul.
el vestido|dress|Mi hermana lleva un vestido verde.
el jersey|jumper|En invierno llevo un jersey.
el abrigo|coat|Mi abrigo tiene bolsillos.
la chaqueta|jacket|La chaqueta está en el probador.
los zapatos|shoes|Estos zapatos son cómodos.
las zapatillas|trainers|Llevo zapatillas para entrenar.
los calcetines|socks|Los calcetines son blancos.
la gorra|cap|Compro una gorra para el sol.
la bufanda|scarf|Llevo una bufanda porque hace frío.
la talla|size for clothing|¿Tiene la talla mediana?
el número|shoe size / number|Calzo el número treinta y nueve.
los probadores|fitting rooms|¿Dónde están los probadores?
en efectivo|in cash|Pago en efectivo.
con tarjeta|by card|¿Puedo pagar con tarjeta?
las rebajas|sales|Compro ropa en las rebajas.
el descuento|discount|Hay un descuento del veinte por ciento.
pequeño / mediano / grande|small / medium / large|Necesito un jersey mediano.
azul / verde|blue / green|Busco una camiseta verde.
rojo / blanco / negro|red / white / black|El uniforme es negro y blanco.
amarillo / naranja / rosa|yellow / orange / pink|Mi gorra es amarilla.
gris / marrón / morado|grey / brown / purple|Mi abrigo es gris.
devolver|to return an item|Quiero devolver esta camisa.|extended
el recibo|receipt|Conservo el recibo de la compra.|extended
agotado / agotada|sold out|La talla pequeña está agotada.|extended`,[
['Busco una camisa de la ___ mediana.','talla','La talla corresponde a ropa. / Clothing size.'],
['¿Puedo pagar con ___?','tarjeta','Con tarjeta / en efectivo.'],
['Quiero probarme estos pantalones. ¿Dónde están los ___?','probadores','Lugar para probar ropa. / Fitting rooms.'],
['Llevo calcetines ___. (white)','blancos','Masculino plural. / Masculine plural.'],
['Conservo el ___ para devolver la camisa.','recibo','Prueba de compra. / Proof of purchase.']],
'Tienda Nube: camisetas verdes a 12 € y azules a 15 €. La talla pequeña está agotada en azul, pero quedan tallas medianas. Los zapatos negros están rebajados de 40 € a 30 €. Se puede pagar en efectivo o con tarjeta. Para devolver una prenda hay que traer el recibo en un plazo de treinta días.',[
[['¿Qué color de camiseta cuesta menos?','Which T-shirt colour costs less?'],'Green.','camisetas verdes a 12 € y azules a 15 €'],
[['¿Qué talla azul no está disponible?','Which blue size is unavailable?'],'Small.','La talla pequeña está agotada en azul'],
[['¿Cuál es el precio actual de los zapatos?','What is the current shoe price?'],'€30.','rebajados de 40 € a 30 €'],
[['¿Qué hay que presentar y en qué plazo para devolver una prenda?','What must you bring and within what period to return clothing?'],'The receipt, within thirty days.','traer el recibo en un plazo de treinta días']],
['Describe un uniforme y explica qué prenda quieres comprar para un viaje: talla, color y cómo quieres pagar.','Describe a uniform and explain what you want to buy for a trip: size, colour and how you want to pay.'],
'En mi instituto llevo pantalones negros y una camisa blanca. Quiero comprar un jersey azul de la talla mediana. ¿Puedo probármelo? Voy a pagar con tarjeta.');
block('T09',`
cuarenta|forty|La entrada cuesta cuarenta euros.
cincuenta|fifty|Hay cincuenta alumnos.
sesenta|sixty|El trayecto dura sesenta minutos.
setenta / ochenta / noventa|seventy / eighty / ninety|Mi abuelo tiene setenta años.
cien / ciento|one hundred / one hundred and|Hay cien entradas y ciento dos sillas.
doscientos / doscientas|two hundred|Participan doscientas personas.
mil|one thousand|La población supera las mil personas.
el euro / el céntimo|euro / cent|Cuesta dos euros y cincuenta céntimos.
el kilo / el medio kilo|kilogram / half a kilogram|Quiero medio kilo de tomates.
el litro / el medio litro|litre / half a litre|Compro un litro de leche.
por persona|per person|Son diez euros por persona.
en total|in total|Pagamos veinte euros en total.
y cuarto|quarter past|Salgo a las ocho y cuarto.
y media|half past|Llego a las ocho y media.
menos cuarto|quarter to|Son las nueve menos cuarto.
de ... a ...|from ... to ...|La tienda abre de nueve a seis.
del ... al ...|from the ... to the ...|La oferta es del tres al siete de mayo.
el veinte por ciento|twenty per cent|El descuento es del veinte por ciento.
más de / menos de|more than / less than|Cuesta menos de diez euros.
casi|almost|Tardo casi una hora.
la mitad|half|Los menores pagan la mitad.|extended
la máxima / la mínima|maximum / minimum temperature|La máxima es de veinte grados.|extended
el año dos mil once|the year 2011|Nací en el año dos mil once.|extended
el doble|double|Dos entradas cuestan el doble que una.|extended`,[
['08:15 = las ocho y ___.','cuarto','Quince minutos después de las ocho. / Fifteen minutes past eight.'],
['08:45 = las nueve menos ___.','cuarto','Faltan quince minutos para las nueve. / Quarter to nine.'],
['12,50 € = doce euros y ___ céntimos.','cincuenta','50 céntimos, no quince. / Fifty cents, not fifteen.'],
['Un kilo son mil gramos; medio kilo son ___ gramos.','quinientos','La mitad de mil. / Half of one thousand.',['500']],
['El precio es por ___, no por grupo. (person)','persona','Mantén el referente del precio. / Keep the price reference.']],
'Piscina municipal. Abre de 07:30 a 21:00. Entrada de adulto: 8,50 € por persona. Menores de dieciséis años: 4 €. Abono de diez entradas: 60 €. El domingo cierra a las seis de la tarde. El curso intensivo se celebra del 12 al 16 de julio; cada sesión dura cuarenta y cinco minutos.',[
[['¿Cuánto paga una persona de quince años?','How much does a fifteen-year-old pay?'],'€4.','Menores de dieciséis años: 4 €.'],
[['¿A qué hora cierra el domingo?','What time does it close on Sunday?'],'18:00 / 6 p.m.','El domingo cierra a las seis de la tarde'],
[['¿Cuáles son las fechas del curso?','What are the course dates?'],'12–16 July.','del 12 al 16 de julio'],
[['¿Qué dato corresponde a 45: precio, duración o entradas?','What does 45 refer to: price, duration or entries?'],'Session duration in minutes.','cada sesión dura cuarenta y cinco minutos']],
['Escribe un aviso original con horario, precio por persona, fechas y duración. Usa números y después escribe dos datos con palabras.','Write an original notice with opening times, a per-person price, dates and duration. Use figures, then write two details in words.'],
'El taller es del tres al cinco de agosto. Empieza a las nueve y cuarto y dura cuarenta minutos. La entrada cuesta cinco euros por persona.');
block('T10',`
el ayuntamiento|town hall|El ayuntamiento está en la plaza.
la estación|station|Compro el billete en la estación.
la parada|stop|Espero en la parada del autobús.
el hospital|hospital|El hospital está al final de la calle.
la farmacia|pharmacy|Hay una farmacia cerca.
el supermercado|supermarket|El supermercado cierra a las ocho.
el banco|bank|El banco está junto al museo.
la oficina de turismo|tourist office|Pido un mapa en la oficina de turismo.
el autobús|bus|Voy al instituto en autobús.
el tren|train|El tren llega a las diez.
el avión|plane|Viajamos en avión.
la bicicleta|bicycle|Voy en bicicleta cuando hace buen tiempo.
a pie|on foot|Vuelvo a casa a pie.
el billete de ida y vuelta|return ticket|Quiero un billete de ida y vuelta.
la salida / la llegada|departure / arrival|La salida es a las nueve y la llegada a las diez.
el andén|platform|El tren sale del andén dos.
la línea|line / route|Tomo la línea cuatro del metro.
sigue todo recto|go straight ahead|Sigue todo recto hasta el semáforo.
gira a la derecha|turn right|Gira a la derecha después del banco.
gira a la izquierda|turn left|Gira a la izquierda en la plaza.
cruza la calle|cross the street|Cruza la calle por el paso de peatones.
el retraso|delay|Hay un retraso de diez minutos.|extended
el semáforo|traffic light|Espera en el semáforo.|extended
la esquina|corner|La tienda está en la esquina.|extended`,[
['El tren sale del ___ tres.','andén','Andén: platform.'],
['Quiero volver hoy: un billete de ida y ___.','vuelta','Return ticket: ida y vuelta.'],
['Voy en bicicleta, pero mi hermano va a ___. (on foot)','pie','A pie, no en pie. / On foot: a pie.'],
['Para llegar al banco, gira a la ___. (left)','izquierda','Izquierda = left.'],
['La ___ del autobús está junto al parque. (stop)','parada','Parada para autobús. / Bus stop.']],
'Aviso: la línea 6 sale de la estación a las 10:10 y llega al hospital a las 10:35. Hoy la parada de la plaza está cerrada. Para llegar a la parada provisional, sigue todo recto desde el banco y gira a la izquierda en el semáforo. El billete solo de ida cuesta 2,40 €; el de ida y vuelta cuesta 4 €.',[
[['¿Cuánto dura el trayecto anunciado?','How long is the advertised journey?'],'25 minutes.','sale de la estación a las 10:10 y llega al hospital a las 10:35'],
[['¿Qué parada no se puede utilizar hoy?','Which stop cannot be used today?'],'The stop in the square.','la parada de la plaza está cerrada'],
[['¿Hacia dónde se gira en el semáforo?','Which way do you turn at the traffic light?'],'Left.','gira a la izquierda en el semáforo'],
[['¿Qué precio corresponde a ida y vuelta?','Which price is for a return ticket?'],'€4.','el de ida y vuelta cuesta 4 €']],
['Explica a un visitante cómo llegar a un lugar: dos indicaciones, transporte y un dato de horario o duración.','Explain to a visitor how to reach a place: two directions, transport and one time or duration detail.'],
'Para ir al hospital, toma la línea seis. El viaje dura veinticinco minutos. Desde el banco, sigue todo recto y gira a la izquierda para llegar a la parada.');
block('T11',`
hace sol|it is sunny|En Cádiz hace sol esta mañana.
hace frío|it is cold|En invierno hace frío.
hace calor|it is hot|Hoy hace mucho calor.
hace viento|it is windy|Hace viento en la costa.
llueve|it rains / is raining|En Galway llueve a menudo.
nieva|it snows / is snowing|En la montaña nieva.
está nublado|it is cloudy|Hoy está nublado.
está despejado|the sky is clear|Por la noche está despejado.
hay niebla|it is foggy|Hay niebla en la carretera.
hay tormenta|there is a storm|Esta tarde hay tormenta.
la lluvia|rain|La lluvia llega por la tarde.
los chubascos|showers|Se esperan chubascos en el norte.
los grados|degrees|La máxima es de dieciocho grados.
la temperatura máxima|maximum temperature|La temperatura máxima será de veinte grados.
la temperatura mínima|minimum temperature|La temperatura mínima será de seis grados.
el norte / el sur|north / south|Lloverá en el norte y hará sol en el sur.
el este / el oeste|east / west|El viento viene del oeste.
por la mañana|in the morning|Por la mañana hará frío.
por la tarde|in the afternoon / evening|Por la tarde va a llover.
va a llover|it is going to rain|Lleva un abrigo porque va a llover.
el viento fuerte|strong wind|Habrá viento fuerte en la costa.|extended
el cielo|sky|El cielo está despejado.|extended`,[
['Hoy ___ nublado.','está','Estar nublado. / Use estar nublado.'],
['En verano ___ calor.','hace','Hacer calor. / Use hacer calor.'],
['Hay niebla en el ___ del país. (north)','norte','Norte = north.'],
['La máxima será de veinte ___.','grados','Unidad de temperatura. / Temperature unit.'],
['Esta tarde va ___ llover.','a','Ir a + infinitivo. / Ir a + infinitive.']],
'El lunes habrá chubascos en el norte por la mañana. En el sur estará despejado hasta la tarde. Las máximas serán de diecisiete grados en el norte y veintitrés en el sur. El martes bajarán las temperaturas y habrá viento fuerte en la costa oeste.',[
[['¿Dónde y cuándo habrá chubascos el lunes?','Where and when will there be showers on Monday?'],'In the north in the morning.','chubascos en el norte por la mañana'],
[['¿Qué máxima se espera en el sur?','What maximum is expected in the south?'],'23 degrees.','veintitrés en el sur'],
[['¿Qué cambiará el martes?','What will change on Tuesday?'],'Temperatures will fall; strong wind on the west coast.','El martes bajarán las temperaturas y habrá viento fuerte en la costa oeste.'],
[['¿Despejado indica lluvia o ausencia de nubes?','Does despejado mean rain or clear sky?'],'Clear sky / no clouds.','En el sur estará despejado']],
['Describe el tiempo habitual en Irlanda y un pronóstico inventado para una excursión. Explica una consecuencia para tus planes.','Describe typical Irish weather and an invented forecast for a trip. Explain one consequence for your plans.'],
'En Irlanda llueve a menudo y en invierno hace frío. El sábado va a llover por la tarde, así que voy a visitar el museo por la mañana.');
block('T12',`
las vacaciones|holidays|Paso las vacaciones con mi familia.
el viaje|trip / journey|El viaje duró dos horas.
el hotel|hotel|Nos alojamos en un hotel pequeño.
el camping|campsite / camping|Dormimos en un camping junto al mar.
el alojamiento|accommodation|El alojamiento está cerca del centro.
la reserva|booking|Tengo una reserva para dos noches.
la playa|beach|Fuimos a la playa por la mañana.
la montaña|mountain|Me gusta caminar por la montaña.
visitar|to visit|Voy a visitar un museo.
volver|to return|Vuelvo a casa el domingo.
fui a|I went to|Fui a Valencia con mi familia.
visité|I visited|Visité un castillo antiguo.
me alojé|I stayed|Me alojé en casa de mi prima.
compré|I bought|Compré un regalo para mi hermana.
lo pasé bien|I had a good time|Lo pasé bien porque conocí a gente.
el verano pasado|last summer|El verano pasado viajé en tren.
el próximo verano|next summer|El próximo verano voy a ir a Málaga.
voy a viajar|I am going to travel|Voy a viajar con mi padre.
me gustaría|I would like|Me gustaría visitar un museo.
para visitar|in order to visit|Voy a Cork para visitar a mi tío.
el equipaje|luggage|Llevo poco equipaje.|extended
el vuelo|flight|El vuelo sale a las seis.|extended
la habitación doble|double / twin room|Reservamos una habitación doble.|extended
el desayuno incluido|breakfast included|Busco alojamiento con desayuno incluido.|extended`,[
['El verano ___ fui a Bilbao.','pasado','Marco de pasado. / Past time marker.'],
['Me ___ en un hotel. (I stayed)','alojé','Alojarse en pasado: me alojé.'],
['El sábado voy ___ visitar el puerto.','a','Plan: ir a + infinitivo. / Plan construction.'],
['Lo ___ bien con mis primos. (I had a good time)','pasé','Lo pasé bien. / I had a good time.'],
['Voy a Sevilla ___ visitar a mi tía. (in order to)','para','Para + infinitivo: finalidad. / Purpose.']],
'El verano pasado, Aina viajó a Granada en tren con su madre. Se alojaron en un apartamento, no en un hotel. Visitaron un museo, pero no pudieron entrar en el castillo porque estaba cerrado. El próximo verano van a volver para visitar el castillo y pasar más tiempo con unos amigos.',[
[['¿Cómo viajó Aina y con quién?','How did Aina travel and with whom?'],'By train with her mother.','en tren con su madre'],
[['¿Dónde se alojaron?','Where did they stay?'],'In an apartment.','Se alojaron en un apartamento'],
[['¿Por qué no entraron en el castillo?','Why did they not enter the castle?'],'It was closed.','porque estaba cerrado'],
[['Da dos motivos por los que quieren volver.','Give two reasons why they want to return.'],'To visit the castle and spend more time with friends.','para visitar el castillo y pasar más tiempo con unos amigos']],
['Cuenta una experiencia de vacaciones con acción, circunstancia y valoración. Añade un plan futuro con finalidad.','Describe a holiday experience with an action, circumstance and reaction. Add a future plan with a purpose.'],
'El verano pasado fui a Granada con mi madre. Visitamos un museo y lo pasé bien porque aprendí mucho. El próximo verano voy a volver para visitar el castillo.');
block('T13',`
la cabeza|head|Me duele la cabeza.
el estómago|stomach|Me duele el estómago.
la garganta|throat|Me duele la garganta.
la pierna|leg|Me duele la pierna derecha.
el pie / los pies|foot / feet|Me duelen los pies.
la mano|hand|Tengo la mano fría.
tengo fiebre|I have a fever|No voy a clase porque tengo fiebre.
estoy cansado / cansada|I am tired|Estoy cansada después del entrenamiento.
me encuentro mal|I feel unwell|Hoy me encuentro mal.
necesito ayuda|I need help|Necesito ayuda para encontrar la salida.
el médico / la médica|doctor|Tengo cita con la médica.
el enfermero / la enfermera|nurse|La enfermera trabaja en el hospital.
el farmacéutico / la farmacéutica|pharmacist|El farmacéutico trabaja en la farmacia.
el profesor / la profesora|teacher|Mi profesora enseña español.
el camarero / la camarera|waiter / waitress|El camarero trae la cuenta.
el cocinero / la cocinera|cook|La cocinera prepara el menú.
la cita|appointment|La cita es a las cuatro.
la urgencia|emergency / urgency|Es una urgencia.|extended
el dolor|pain|El dolor empezó ayer.|extended
el horario de atención|opening / service hours|Consulta el horario de atención.|extended`,[
['Me ___ la cabeza.','duele','Cabeza singular → duele.'],
['Me ___ los pies.','duelen','Pies plural → duelen.'],
['Tengo ___ y no me encuentro bien. (fever)','fiebre','Tener fiebre. / Have a fever.'],
['La ___ prepara la comida del restaurante. (female cook)','cocinera','Profesión y lugar de trabajo. / Occupation and workplace.'],
['Tengo una ___ con el médico a las diez.','cita','Cita = appointment.']],
'Centro de salud Los Olmos. Hoy la doctora Ruiz atiende por la mañana y el enfermero Gil por la tarde. Para pedir cita, llame antes de las doce. La farmacia de al lado abre hasta las ocho. Martín no va a entrenar porque le duele la pierna; su hermana está cansada, pero sí va a clase.',[
[['¿Cuándo atiende la doctora?','When does the doctor see patients?'],'In the morning.','la doctora Ruiz atiende por la mañana'],
[['¿Antes de qué hora se pide cita?','Before what time should an appointment be requested?'],'Before noon.','llame antes de las doce'],
[['¿Por qué no entrena Martín?','Why is Martín not training?'],'His leg hurts.','porque le duele la pierna'],
[['¿Quién sí va a clase a pesar del cansancio?','Who still goes to class despite being tired?'],'His sister.','su hermana está cansada, pero sí va a clase']],
['Escribe un mensaje para explicar que no puedes asistir a una actividad. Describe cómo te encuentras y pregunta por otro horario. Puedes inventar la situación.','Write a message explaining that you cannot attend an activity. Say how you feel and ask about another time. You may invent the situation.'],
'Hoy no puedo entrenar porque me duele la pierna. ¿Hay entrenamiento el viernes? Me gustaría ir otro día.');
block('T14',`
el país|country|Irlanda es mi país.
la ciudad|city|Córdoba es una ciudad española.
la costa|coast|El pueblo está en la costa.
la isla|island|Visitamos una isla pequeña.
el río|river|Hay un puente sobre el río.
la fiesta|festival / celebration|La fiesta se celebra en julio.
la entrada|admission ticket / entrance|La entrada al museo cuesta cinco euros.
gratis|free of charge|La entrada es gratis los domingos.
abierto / cerrado|open / closed|El museo está cerrado los lunes.
se celebra|takes place / is celebrated|La fiesta se celebra en la plaza.
el museo|museum|El museo abre a las diez.
el castillo|castle|Subimos al castillo por la mañana.
la visita guiada|guided tour|La visita guiada dura una hora.
reciclar|to recycle|Reciclamos papel en el instituto.
la basura|rubbish|No dejamos basura en la playa.
proteger|to protect|Queremos proteger el río.
el medio ambiente|environment|Es importante cuidar el medio ambiente.
ahorrar agua|to save water|Cierro el grifo para ahorrar agua.
los residuos|waste|Hay que reducir los residuos.|extended
el contenedor|waste / recycling bin|El papel va en ese contenedor.|extended
el patrimonio|heritage|La visita explica el patrimonio del pueblo.|extended
la tradición|tradition|Es una tradición local.|extended`,[
['La entrada no cuesta nada: es ___.','gratis','Gratis = free of charge.'],
['El museo no abre el lunes: está ___.','cerrado','Cerrado = closed.'],
['La fiesta se ___ en agosto.','celebra','Se celebra: takes place.'],
['Cierro el grifo para ahorrar ___.','agua','Ahorrar agua = save water.'],
['No tires ___ en la playa. (rubbish)','basura','Basura = rubbish.']],
'Jornada del Río, sábado 8 de junio. Por la mañana habrá una recogida de residuos junto al puente. A las doce empieza una visita guiada al molino; dura cincuenta minutos y es gratis para menores de dieciséis años. Por la tarde se celebra un concierto en la plaza. Trae una botella reutilizable para reducir la basura.',[
[['¿Dónde se recogen residuos?','Where is waste collected?'],'Beside the bridge.','junto al puente'],
[['¿Cuánto dura la visita y quién entra gratis?','How long is the tour and who gets free entry?'],'50 minutes; under-sixteens.','dura cincuenta minutos y es gratis para menores de dieciséis años'],
[['¿Dónde se celebra el concierto?','Where is the concert held?'],'In the square.','un concierto en la plaza'],
[['¿Para qué se pide una botella reutilizable?','Why is a reusable bottle requested?'],'To reduce rubbish.','para reducir la basura']],
['Propón una visita cultural y una acción para cuidar el entorno. Indica lugar, horario o precio y justifica tu propuesta.','Suggest a cultural visit and one action to protect the surroundings. Include place, time or price and explain your suggestion.'],
'Podemos visitar el molino a las doce. La visita dura cincuenta minutos y es gratis para nosotros. Voy a llevar una botella reutilizable para reducir la basura.');
block('T15',`
quién|who|¿Quién viene contigo?
qué|what|¿Qué haces los sábados?
dónde|where|¿Dónde está la estación?
cuándo|when|¿Cuándo empieza la película?
cuánto / cuánta|how much|¿Cuánto cuesta la entrada?
cuántos / cuántas|how many|¿Cuántas clases tienes hoy?
cómo|how / what ... like|¿Cómo es tu barrio?
por qué|why|¿Por qué te gusta nadar?
para qué|what for|¿Para qué necesitas el ordenador?
porque|because|Juego al tenis porque me divierte.
pero|but|Me gusta correr, pero hoy estoy cansado.
también|also|Mi hermana también juega.
tampoco|not ... either|No tengo coche y mi hermano tampoco.
aunque|although|Voy a salir aunque hace frío.
por eso|that is why|Hoy llueve; por eso llevo un abrigo.
primero / luego / finalmente|first / then / finally|Primero comemos y luego salimos.
ayer / hoy / mañana|yesterday / today / tomorrow|Ayer llovió, pero hoy hace sol.
muy / bastante|very / quite|Mi barrio es bastante tranquilo.
además|also / in addition|Además, hay una biblioteca.|extended
sin embargo|however|Es barato; sin embargo, está lejos.|extended
ya / todavía|already / still|Ya he terminado, pero mi amiga todavía trabaja.|extended
lo que más me gusta|what I like most|Lo que más me gusta es el patio.|extended`,[
['¿___ te gusta el español? — Porque es útil.','Por qué','Interrogativo de motivo separado. / Why: por qué.'],
['¿___ libros hay? — Tres.','Cuántos','Libros: masculino plural. / Masculine plural.'],
['No juego al rugby y mi hermana ___. (neither)','tampoco','Tampoco continúa una negación. / Nor / neither.'],
['Llueve; por ___ llevo un paraguas.','eso','Por eso expresa consecuencia. / Result.'],
['Me gusta la biblioteca ___ puedo leer tranquilo. (because)','porque','Porque introduce un motivo. / Because introduces a reason.']],
'Ayer Sara no salió porque tenía muchos deberes. Su hermano tampoco salió. Hoy ya ha terminado y quiere quedar con sus amigas, aunque hace frío. Primero van a la biblioteca y luego al parque. Mañana no podrán verse porque Sara tiene un partido.',[
[['¿Por qué se quedó en casa ayer?','Why did she stay home yesterday?'],'She had a lot of homework.','porque tenía muchos deberes'],
[['¿Salió su hermano? ¿Qué palabra lo confirma?','Did her brother go out? Which word confirms this?'],'No; tampoco.','Su hermano tampoco salió.'],
[['¿Qué lugar visitan primero hoy?','Which place do they visit first today?'],'The library.','Primero van a la biblioteca'],
[['¿Qué impide que se vean mañana?','What prevents them meeting tomorrow?'],'Sara’s match.','porque Sara tiene un partido']],
['Amplía estas ideas con información pertinente: me gusta…, ayer…, mañana voy a…. Usa un motivo y un contraste, sin insertar conectores innecesarios.','Develop these ideas with relevant details: me gusta…, ayer…, mañana voy a…. Give a reason and a contrast, without unnecessary linking words.'],
'Me gusta correr porque me relaja, pero ayer no salí porque tenía deberes. Mañana voy a correr con mi prima después de clase.');
// Unify the existing core bank with the authored extensions, without changing OL data.
// Exact entry matching removes repeated labels; these are learning entries, not lemmas.
for(const [id,v]of Object.entries(X.vocabulary)){
 v.authoredCount=v.words.length;v.words.forEach(w=>w.source='work06');
 const seen=new Set(v.words.map(w=>w.es.toLocaleLowerCase('es')));
 for(const group of JC_DATA.themes.find(t=>t.id===id).groups)for(const w of JC_DATA.groups[group].words){
  if(seen.has(w.es.toLocaleLowerCase('es'))||w.es.includes('(n)'))continue;
  // The abbreviated social-media label is expanded only in this new JC view.
  const es=w.es==='subir a Insta'?'subir fotos a Instagram':w.es;
  v.words.push({es,en:w.en,example:w.example,tier:'core',source:group});seen.add(es.toLocaleLowerCase('es'));
 }
}
})();
// Case-sensitive excerpts below are also used to verify answer evidence.
