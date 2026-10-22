# Matriz de cobertura de Grammar

Base anterior: `c0fe594d5e1a1b8da7f073e1f1efe973e869c302`, PR #4 fusionado. Fuente anterior: `web/activities.js`, array `grammar`. Fuentes nuevas: `web/grammar-training.js` y `web/grammar-extension.js`. Todos los talleres anteriores se conservan. Los dictámenes de suficiencia, con objetivo definido y justificación, están en [auditoria-estados.md](auditoria-estados.md).

La dificultad es estimada: reconocimiento accesible, recuperación contextual intermedia y transformación más exigente. No son niveles oficiales ni resultados de pilotaje. P1 señala utilidad inmediata; P2 de producción significa reconocimiento prioritario y uso selectivo.

| ID y contenido | Cobertura anterior real / personas | Cobertura nueva: formas y personas | Contextos | Ítems nuevos | Prioridad y laguna residual |
|---|---|---|---|---:|---|
| `present` Regular | estudio, vive, bebo, escucha; yo/él-ella, cuatro frases | -ar/-er/-ir; seis personas, escucha/comer/abrir/vivir/beber/aprender/escribir/practicar/terminar; cambios de sujeto | Instituto, casa, comida, ocio | 19 | P1; falta una segunda ocasión independiente más extensa |
| `irregular` Frecuentes | Sin taller propio; algún modelo en otras áreas | ir/hacer/salir con seis personas; veo, sé, conozco, doy; vengo/venimos, pongo/ponéis, digo/dice/dicen; saber/conocer por significado | Trayecto, deberes, ocio, agradecimiento | 27 | P1; no todos los irregulares ni todas sus formas |
| `stem` Cambios vocálicos | Sin práctica específica | querer/poder/jugar/pedir/volver/dormir/empezar/preferir; seis personas y contraste nosotros/vosotros | Preferencias, posibilidad, horarios y pedidos | 17 | P1; ampliar encuentros receptivos variados |
| `be-have` Ser/estar/tener/hay | tiene, es, está, hay; tercera singular e impersonal | soy/estás/tiene/hay/estamos/tenéis/son/es; edad, hambre, estado, origen, ubicación y evento; plural y corrección | Identidad, instituto, barrio, fiesta | 17 | P1; no explicación permanente/temporal; matices avanzados quedan fuera |
| `opinions` Gustos/dolor | gusta/gustan, simpática, blancas; me, yo | me/te/le/nos/os/les; gusta(n), encanta(n), interesa(n), duele(n); infinitivo y sustantivo | Asignaturas, ocio, salud | 17 | P1; concordancia nominal se amplía además en taller propio |
| `reflexives` Rutina | Un hueco levantarme en planes; sin taller | levantarse/ducharse/vestirse/acostarse/despertarse/lavarse; seis personas, infinitivo y dos posiciones válidas de pronombre | Rutina y planes | 17 | P1; pasado reflexivo ampliado pendiente |
| `agreement` Concordancia | Dos huecos en opinions, femenino singular/plural | Artículos, posesivos, adjetivos variables/invariables en género, plural; mi/mis, nuestro; el agua fría | Ropa, familia, instituto | 17 | P1; comparativos en taller propio; excepciones nominales no exhaustivas |
| `questions` Pregunta/negación | dónde/cuándo/por qué/no; tú/yo | quién/cuánto/cuántas/dónde/por qué/para qué; porque, nadie, nada, nunca; referentes y transformación | Residencia, horarios, precio, compañía, motivo | 17 | P1; tipos de respuesta aplicados en textos nuevos |
| `connections` Preposiciones/conectores | en/de/porque/pero; cuatro huecos | al/del, en/a pie, antes de, para, porque/pero/luego; interpretación de aunque/por eso | Transportes, compras, rutina, necesidades | 17 | P1; no enseñanza exhaustiva de por/para |
| `modal` Obligación/acción en curso | Modelos aislados; sin taller | tener que/hay que/no se puede/querer/deber/acabar de + infinitivo; estoy/está/están/estamos + leyendo/haciendo/comiendo | Normas, estudio y actividad actual | 20 | P1 de función; perífrasis menos frecuentes quedan para recepción posterior |
| `past` Acción terminada | vi/fui/hice/comí; solo yo | fui/hice/vi/comí/visité/jugué/compré/pasé/estuve/tuve; visitaste/compró/comimos/visteis/hicieron/fueron/escribió/salimos; seis personas, ir/ser por contexto | Fin de semana, viaje, compra y valoración | 26 | P1; no todos los verbos irregulares productivos |
| `past-context` Perfecto/imperfecto | Era solo en modelo; sin ejercicios específicos | he/ha/hemos/han + participio; visto/hecho; tenía/estaba/iba/hacía; contraste con estuve y reconocimiento de personas | Deberes, infancia, alojamiento y contexto meteorológico | 17 | P1 receptivo/P2 producción; no regla universal de marcador=tiempo ni paradigma exhaustivo |
| `plans` Planes/deseos | a/visitar/gustaría/levantarme; yo | seis formas de ir a, infinitivo/reflexivo, gustaría; reconocer habrá/había, hará, tendremos | Vacaciones, visitas y pronósticos | 17 | P1; futuro simple más amplio receptivo pendiente |
| `pronouns` Referencias | Sin taller específico | lo/la/los/las, le/les, su; antes de verbo/unido a infinitivo; referencia explícita | Compra, visita, regalos, correspondencia | 14 | P1 recepción/P2 producción; combinaciones dobles no exigidas |
| `comparisons` Comparación/cantidad | Sin taller específico | más/menos…que, tan…como, mejor; muy/mucho/a/os/as | Transportes, casa, instituto y precio | 14 | P1; ampliar datos comparados en contextos posteriores |

## Actividad, dificultad y aplicación

Todos los apartados nuevos tienen tres conjuntos elegibles (reconocer significado/persona/tiempo; conjugar o completar; corregir o transformar) y una producción breve. No hay bloqueo secuencial. Los conjuntos usan opciones lingüísticas delimitadas o una transformación concreta para que la corrección automática sea verificable. Los textos libres se autocotejan con un modelo orientativo y criterios, sin nota semántica automática.

| Destreza | Aplicación concreta | Qué se comprueba y qué no |
|---|---|---|
| Reading | Distinguir persona, momento, referente, negación, motivo y finalidad | Reconocimiento escrito y fuentes nuevas de Vocabulary; no se modifica Reading |
| Listening | Anticipar formas como salen/fueron/va a y conservar sujeto, tiempo o negación | Preparación lingüística escrita; pendiente comprobar estas discriminaciones en sonido |
| Q16 | Concordancia, construcciones, preposiciones, tiempos y datos en compleciones | Práctica de conocimientos con retroalimentación; no nueva simulación oficial |
| Q17 | Describir instituto/familia/alojamiento, hábitos, experiencias o planes según la consigna | Aplicaciones parciales con detalles pertinentes; no imponer todos los tiempos a cada correo |
| Q18 | Responder personalmente, ampliar, justificar y situar una experiencia/plan | Quince propuestas adaptables; la tarea oficial sigue siendo ocho temas personales |

La revisión ampliada añade los siguientes apartados explícitos:

| ID | Antes | Formas, contextos y dominio definido | Ítems | Prioridad |
|---|---|---|---:|---|
| `soler` | Sin taller propio | Seis personas presentes; rutina, instituto, fines de semana, ocio, comida, vacaciones y transporte; solía/solían receptivos; preguntas y respuesta natural | 17 | P1, por instrucción docente; sin recurrencia oficial confirmada |
| `perfect` | Formas mezcladas en past-context | Seis personas de haber, -ado/-ido y hecho/visto/escrito/puesto, experiencia/negación y variación regional; producción selectiva | 18 | P1 reconocimiento y expresiones productivas |
| `imperfect` | Formas mezcladas en past-context | Era/tenía/vivía/iba/hacía/jugaba; descripción, hábito y fondo narrativo; producción opcional | 16 | P1 receptiva |
| `future-simple` | Algunas formas en plans | Será/tendrá/habrá/iremos/haré/podré/estudiaré; avisos, persona y tiempo; producción opcional | 16 | P1 receptiva |
| `progressive` | Parte de modal | Estar + -ando/-iendo; haciendo/leyendo/durmiendo/diciendo, diferentes personas, escena y contraste con plan | 17 | P1 funcional |

El taller `irregular` pasa de 19 a **27** ítems al practicar venir, poner y decir; `past`, de 19 a **26**, con las diez primeras personas prioritarias representadas y más formas regulares -ir; `modal`, de 17 a **20**, con deber y acabar de. Las filas de la tabla y el registro de estados reflejan este alcance vigente.

Se incorporan además tres textos mixtos (`web/mixed-training.js`, ruta `grammar/integration`): instituto, visita/plan y compra para un viaje, con ocho huecos cada uno. Combinan selección semántica, concordancia, persona, tiempo, perífrasis y referencia. Son práctica de conocimientos aplicados, no simulaciones oficiales de Q16. Los veinte talleres suman 357 ítems y los textos añaden 24: **381 nuevos**, más los 28 introductorios conservados. Hay veinte producciones abiertas.

La ampliación resuelve la escasez de personas, verbos y operaciones del taller inicial. No cierra toda necesidad posible del corpus: siguen pendientes más textos mixtos, nuevas ocasiones independientes y pilotaje. Véase [pendientes](pendientes.md).
