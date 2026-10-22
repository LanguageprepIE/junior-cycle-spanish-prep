# Auditoría pedagógica de los recursos OL para Junior Cycle Spanish

22 de octubre de 2026 · Work 02 · Preparación JC

## Resultado y alcance

La plataforma OL ofrece una base sustancial para la futura preparación JC. Se han examinado documentalmente **25 audiciones con 131 preguntas, 20 textos con 132 preguntas, los 40 grupos de vocabulario con 223 ítems que cubren 221 entradas originales, 8 talleres de construcción de frases, 14 componentes de Writing, 9 componentes de Grammar y 4 recursos complementarios**. También se han revisado las ocho secciones del banco léxico de referencia. El inventario principal tiene **128 unidades de auditoría**. Estas unidades son de distinta granularidad: no son 128 actividades independientes ni debe sumarse otra vez el vocabulario o las preguntas para obtener un total de recursos.

La reutilización más inmediata corresponde al vocabulario contextualizado, los modelos de lengua funcional, los apoyos para localizar evidencia y varias lecturas de vida cotidiana, biografías y cultura. La coincidencia temática con JC no basta para reutilizar una actividad como simulación de examen. El principal trabajo futuro será **alinear las preguntas y las consignas**, ampliar la variedad de géneros y cubrir las lagunas léxicas y de escritura específicas de JC.

La auditoría documental abarca todo el inventario identificado. **No equivale a una validación sonora completa ni a una comprobación integral de interacción en navegador.** Se han decodificado los 25 MP3 sin errores y comprobado su disponibilidad pública y coincidencia binaria con el repositorio. No se ha realizado escucha directa. Por ello los 25 dictámenes finales de audio permanecen pendientes y las estimaciones de dificultad auditiva son documentales. La escucha de los MP3 oficiales JC también sigue pendiente; este trabajo no la ha realizado.

No se ha modificado OL ni iniciado desarrollo JC. Todos los entregables son documentación.

## Fuentes y reglas de interpretación

Se ha leído primero la documentación de `LanguageprepIE/junior-cycle-spanish-prep`: README, criterios v1.0 conservados en `docs/criterios-pedagogicos/criterios-v0.1.md`, los dos DOCX y la matriz XLSX originales de investigación, estado de investigación, plan de auditoría y registro de decisiones. La matriz previa contiene 389 registros, con granularidad distinta, y 72 preguntas principales. Los tres binarios se han recuperado de GitHub y leído; no se ha realizado un nuevo contraste completo de los exámenes SEC en esta fase.

La línea base JC es el corpus documental aprobado de 2022–2025. Sus observaciones de formato son hechos documentados en ese trabajo, no garantías para convocatorias futuras. La especificación y los ajustes pertinentes deberán revisarse antes del diseño definitivo; el examen de 2026 queda fuera de esta auditoría.

La fuente OL se fija en el commit [`d45e23a31c4a63145503389570071933d62556cb`](https://github.com/LanguageprepIE/informal-letter-ol/tree/d45e23a31c4a63145503389570071933d62556cb). Los enlaces al original de la matriz apuntan a esa revisión; los enlaces web permiten acceder a la publicación viva, que puede cambiar después.

Se distinguen tres clases de afirmación:

- **Hecho observado:** archivo, texto, pregunta, solución, manejador implementado, duración, prueba o respuesta HTTP comprobados.
- **Análisis pedagógico:** dificultad relativa, utilidad, prioridad o adaptación recomendada. No son niveles oficiales ni resultados medidos con alumnos.
- **Decisión aprobada:** progresión combinada; fuente y preguntas separadas; respuesta directa con ampliación pertinente; reconocimiento amplio y producción selectiva.

Los formatos JC documentados se respetan: Q16 varía entre compleción de expresiones/palabras y formulario; Q17 tiene cinco consignas, correo en 2022, 2023 y 2025 y blog escolar en 2024; Q18 tiene ocho temas personales. **Q18 no es reconstrucción de diálogos.** El saludo y la despedida no deben consumir artificialmente dos de las cinco consignas temáticas de una futura tarea JC.

## Cómo leer los dictámenes

| Código | Significado y alcance |
|---|---|
| A | Contenido o componente aprovechable para aprendizaje o práctica sin modificación pedagógica sustancial. No certifica equivalencia con un examen oficial. |
| B | Conservar el texto o guion fuente y rehacer o reorganizar el conjunto de preguntas para el uso JC previsto. |
| C | Cambiar contenido, explicación, consigna o funcionamiento del componente. |
| D | No recomendable para JC. No se ha encontrado un recurso completo que justifique este descarte. |
| Pendiente | Falta una comprobación necesaria para cerrar el dictamen. No equivale a A provisional contabilizado como definitivo. |

Un conjunto B puede contener preguntas individualmente aprovechables. Por eso las hojas Listening y Reading separan fuente y preguntas y la hoja Preguntas evalúa cada ítem. Para preguntas aisladas se usa C cuando la consigna necesita adaptación; B describe la decisión de conservar la fuente y rehacer su conjunto. En Listening la propuesta tras escucha queda en columna propia y no sustituye el estado pendiente.

La clasificación se refiere a utilidad pedagógica. A no significa copiar la etiqueta LC OL, sus enlaces, sus instrucciones de examen o su ubicación a JC sin ajuste editorial. La verificación de funcionamiento se registra por separado.

## Inventario implementado

| Categoría | Unidades principales | Contenido comprobado |
|---|---:|---|
| Listening | 25 | Cinco categorías, cinco audiciones por categoría; 131 preguntas de tres opciones. |
| Reading | 20 | Cuatro categorías, cinco textos por categoría; 40 páginas de práctica guiada e independiente y 132 preguntas únicas de la modalidad guiada. |
| Vocabulary actividades | 40 | 223 ítems; dos textos breves, 28 grupos de frases independientes y diez grupos de fichas. |
| Vocabulary banco | 8 | Básicos, instituto, familia, casa, ocio/tecnología, salud/deporte, viajes y comida. |
| Writing | 14 | Secciones y subbancos, editor, modelos y ocho retos incluidos dentro del componente W10. |
| Sentence Builder | 8 | IR, SER, ESTAR lugar, ESTAR emoción, TENER, regulares, GUSTAR y reflexivos. |
| Grammar | 9 | Explicaciones, modelos, cuatro huecos regulares y cinco de irregulares, más ampliación opcional. |
| Otros | 4 | Constructor de años, seis preguntas de años, Study Plan y tracker PDF. |
| Total | 128 | Unidades heterogéneas para revisión y filtrado. |

La documentación antigua no se ha usado como prueba de ejecución actual. Por ejemplo, el plan actual sí incorpora enlaces a vocabulario y tres ritmos semanales aunque alguna nota histórica diga que no se había cambiado. `docs/listening-review/content.json` recoge solo parte de la historia del proyecto; los datos actuales de todas las audiciones residen en las páginas publicadas.

### Estructuras de datos y mecanismos

Listening utiliza un array `items` por página con `q`, `opts`, índice `a`, pista `h` y, salvo las dos primeras actividades históricas de Pablo y tiempo, explicación `e`. El guion está en `#transcript-text`, con marcas que relacionan segmentos y preguntas. `js/listening-transcript.js` activa el resaltado después de escuchar. Hay selección con/sin pistas, puntuación y reinicio; 23 de 25 páginas incluyen selector de velocidad. Pablo y el primer boletín meteorológico no lo incluyen.

Reading tiene tres implementaciones: `guided-rc01` a `guided-rc05` con objetos `items`, Nadal con objetos `qs`, y catorce pares `guided-new`/`independent-new` con arrays `questions`, `answers` y pistas en modo guiado. Las cinco páginas `rc01` a `rc05` son la práctica independiente del catálogo y utilizan `js/reading-practice.js`. Se guardan respuestas localmente y se revelan modelos. **No hay evaluación automática semántica de respuestas libres.** Las dos modalidades no son dos textos distintos.

Vocabulary se define en `js/vocab-study-data.js` como grupos con `words`, `sentences`, tema, formato y referencia. Cada palabra contiene forma española, glosa, respuesta, alternativas, ejemplo, traducción y vínculo exacto a la entrada preservada. `js/vocab-study.js` ofrece estudio, lectura y recuperación con huecos. Acepta alternativas previstas, da aviso ortográfico y controla algunas concordancias. No es reconocimiento de voz ni evaluación libre de español. Los huecos vuelven sobre los mismos contextos: conviene añadir transferencia posterior cuando se autorice, no presentar completar de memoria como comprensión independiente.

Writing tiene ocho objetos de retos con tema y cinco puntos en `challengeSets`, además de bancos y ejemplos. El editor guarda/borrar borrador en el dispositivo; el checklist no calcula una nota. Sentence Builder usa ocho objetos `units`, una función de construcción y opciones acotadas; la traducción se compara con un modelo revelado y la producción propia se guarda localmente. Grammar utiliza explicaciones y respuestas exactas en `data-answer` para sus nueve huecos.

## Listening

### Material fuente

Los 25 audios existen, se decodifican completamente y sus copias publicadas responden HTTP 200 con SHA256 idéntico al archivo de la revisión examinada. Duran entre **42,81 y 98,53 segundos**. Son datos técnicos observados, no un juicio de ritmo o inteligibilidad. El fichero `verificacion-audios.json` conserva duración, tamaño, hash y resultado de acceso para cada uno.

La auditoría del guion encuentra cobertura valiosa de rutina escolar, cumpleaños, transporte, comida, cultura, servicios y tiempo. Edad, precio, fecha, asignatura, prendas y lugares conviven con motivos, finalidades, condiciones y contrastes entre personas o momentos. No hay razón documental para regenerar los audios por estar etiquetados OL.

Los guiones de mayor carga —teatro, invento, redistribución de alimentos y Canarias— pueden mantenerse como práctica avanzada con selección de información y ayudas. No se puede concluir que su velocidad o pronunciación sean excesivas. La entrevista de Clara etiqueta dos interlocutores en el guion; la comprobación de las voces efectivamente presentes queda pendiente.

### Preguntas

Todas son de opción múltiple con tres opciones. Se han revisado las **131 preguntas**, sus opciones, respuesta y evidencia marcada en el guion. Esto permite detectar qué información se evalúa, pero no demuestra correspondencia sonora íntegra. La retirada de pistas no cambia las preguntas ni transforma el modo independiente en simulación JC. Las opciones bilingües también ofrecen apoyo léxico que no debe confundirse con comprensión autónoma sin apoyos.

Nueve conjuntos resultan conservables como práctica guiada: Pablo, tren perdido, Clara, Diego, Fallas, mercado de Madrid, noticias del instituto y los dos primeros boletines del tiempo. Los otros dieciséis necesitan una selección o reorganización más clara para una progresión JC. La columna de propuesta posterior a escucha conserva esta valoración sin cerrar los audios.

Existe progresión posible en todos los guiones: números o lugares explícitos para acceso; acciones y detalles para nivel intermedio; motivos, secuencias y relaciones para mayor exigencia. La matriz especifica la información ya presente en cada grabación. **No se han redactado nuevas preguntas ni añadido información al material.**

Ejemplos de diferencias relevantes:

- `everyday-03`: identificar tarta de chocolate es distinto de deducir llegada a las 17:30 a partir de fiesta a las 18:00 y media hora antes.
- `culture-04`: la lluvia traslada películas y cancela el taller. La respuesta exige dos consecuencias distintas; se puede graduar sin modificar el audio.
- `news-02`: la pregunta de instalaciones está en plural, pero la opción correcta solo menciona dos pistas de baloncesto. El guion también incluye atletismo y bicicleta. La opción es verdadera; una futura versión abierta debe precisar cuántas instalaciones pide.
- `weather-03`: una bajada de seis grados no es una temperatura de seis grados. Es una relación que conviene enseñar explícitamente.
- `news-05`: el cierre del sábado, las actividades semanales y la inauguración permiten preguntas accesibles aunque la duración sea de 97,28 segundos.

Las instrucciones de escuchar dos veces en algunos materiales OL no reproducen las tres reproducciones documentadas en los exámenes JC. En práctica puede haber escucha flexible; una futura simulación debe distinguirse y ajustarse a la referencia oficial comprobada.

## Reading

Se han examinado los **20 textos y 132 preguntas**, junto con sus soluciones. Las lecturas tienen entre **96 y 131 palabras**, por recuento de tokens separados por espacios, no las longitudes aproximadas de algunos rótulos. La longitud breve no implica dificultad baja: energía y turismo sostenible contienen léxico abstracto, mientras que fechas y nombres en las biografías permiten acceso directo pese a sus pasados variados.

Los textos de casa, ocio, viajes, Nadal, Alcaraz y fiestas tienen alto rendimiento. Pueden practicar extracción y relaciones sin exigir producir todos sus tiempos verbales. Las catorce lecturas `new-*` piden responder en español. Esa producción puede ocultar una comprensión correcta; para preparación receptiva JC conviene adaptar la lengua de consigna/respuesta al formato pertinente. No se descartan los textos por ello.

Los géneros son poco variados: cinco relatos/descripciones personales, cinco biografías, cinco explicaciones culturales y cinco textos de actualidad/explicación temática. No constituyen una biblioteca de carteles, menús, horarios, mensajes o diálogos. Que un texto trate una fiesta no lo convierte en el cartel del examen.

Incidencias localizadas:

- `rc01`, `rc03` y `rc05`: se pide elegir el mejor título sin alternativas. Se puede pedir proponerlo o aportar opciones, sin tratarlo como formato oficial observado.
- `rc03` Q4 añade por la noche a un texto que solo fija el sábado pasado. Q7 es opinión personal y Q8 título; Q5 vuelve a un dato anterior en el texto. Son decisiones distintas de la dificultad lingüística.
- `rc04`: «voy a empezar un equipo» necesita precisar formar un equipo o incorporarse a él. La pregunta de dar consejo es una extensión productiva, no extracción factual.
- `rc02`: contiene una referencia final al Leaving Cert que requiere adaptar el contexto; no invalida el resto del texto escolar.
- `rc05`: la opinión final admite respuesta libre sin aclarar si se refiere al lector o al protagonista. Separarla del autocotejo factual.
- San Fermín: el modelo de Q4 «una carrera con toros» es menos fiel que la descripción del texto de toros que recorren calles delimitadas. El criterio de respuesta debe ceñirse a la información aportada.
- Tesla: incluye una fuente Reuters fechada, pero ese enlace no fue accesible durante la comprobación. La búsqueda externa encontró cobertura concordante; no verifica todos los detalles de la adaptación. Mantener el texto pendiente de validación factual completa, sin declararlo falso ni confirmado. La página pública de Tesla consultada tampoco confirma por sí sola cada detalle del relato.

La mayoría de preguntas son extracciones localizadas y algunas reúnen listas o relaciones. La práctica específica de vocabulario en contexto y de localizar un párrafo numerado es escasa. Los artículos más abstractos deben quedar como ampliación receptiva y no como lista de estructuras que todo alumno deba producir.

## Vocabulary

La hipótesis de conservar el repertorio léxico queda respaldada: **no se recomienda eliminar ninguna de las 221 entradas por su frecuencia relativa en JC**. Eso no significa que todo pueda copiarse sin revisión. Se han revisado las entradas, ejemplos, traducciones y contextos de los 223 ítems de práctica. El desglose de dos entradas originales —poner/recoger la mesa y me duele(n)— explica las dos unidades adicionales. No son 223 lemas distintos; hay repeticiones temáticas y formas relacionadas.

Los 40 grupos funcionan en las pruebas DOM existentes. Sus tres formatos evitan forzar un relato artificial con palabras incompatibles. La contextualización de entrar/salir, masculino/femenino y me duele/me duelen es especialmente útil. Los ejemplos dan una buena base para pasar de palabra a unidad de significado, pero no existe audio léxico propio en estos grupos ni se ha implementado dictado o comprensión auditiva del vocabulario.

El banco es desigual: instituto, familia y casa tienen bastante detalle; comida y viajes solo cinco y cuatro entradas respectivamente. Hay ropa, transportes y alimentos dentro de lecturas y guiones, pero **presencia incidental no equivale a un banco sistemático de aprendizaje**. La hoja Lagunas conserva esta diferencia para no afirmar que un tema está completamente ausente cuando sí aparece en otro recurso.

Revisiones menores necesarias:

- Distinguir cafetería y comedor para el contexto escolar; ambas palabras son válidas. Se respeta la preferencia del proyecto por comedor para canteen cuando corresponda.
- No usar chalé como equivalente inequívoco de detached house: la palabra no determina por sí sola que sea una vivienda aislada.
- En el banco de referencia, «Tomo el recreo» resulta poco natural y «Me gusta inglés» necesita el artículo en ese contexto. Las actividades recientes ya incluyen formulaciones más naturales en varios casos.
- Las glosas entrar=start, salir=finish y subir a Insta=upload necesitan contexto. Los grupos nuevos ya aclaran entrar en clase, salir del instituto y upload to Instagram.
- Almuerzo es válido; conviene presentar también comida para el uso peninsular de mediodía, sin declarar una única palabra universal.

Recomendación de organización: mantener el repertorio, distinguir núcleo/complemento y enlazarlo con situaciones e información —horas, precio, lugar, motivo— además de temas. Electrodomésticos menos frecuentes pueden quedar como complemento. La matriz no propone reducir cobertura por tratarse de JC.

## Writing y construcción de respuestas

Los componentes más transferibles son conectores, apoyo de tiempos, apertura/cierre de correo, traducciones opcionales, borrador y autoevaluación. Las tareas OL requieren adaptación: los ocho retos incluyen saludos y despedidas como puntos, y algunos orientan al trabajo o a la etapa posterior al LC. No sustituyen Q17 con cinco contenidos temáticos ni Q18 con ocho temas personales.

El modelo de correo guiado ofrece varias ideas muy breves. Para JC interesa enseñar a seleccionar y ampliar cada respuesta cuando proceda: detalle o ejemplo para describir; circunstancia para narrar; motivo para gustos, opiniones y preferencias. No imponer tres frases por punto ni pasado/presente/futuro en toda respuesta si la consigna no lo solicita. El checklist OL que pide pasado y futuro en general debe hacerse dependiente de la tarea.

Q16 no tiene equivalente real en la plataforma, aunque los huecos de vocabulario/gramática aporten un mecanismo útil. Faltan selección de expresiones/palabras en un contexto y traslado de datos desde ficha a formulario. Q18 necesita práctica de ocho temas, no reconstruir intervenciones de interlocutores. La futura evaluación deberá distinguir contenido y expresión y conservar las diferencias documentadas entre convocatorias.

El Sentence Builder permite respuesta breve, cambio de persona y tiempo y producción propia. Su estructura no obliga a memorizar redacciones. Sin embargo, las combinaciones necesitan control semántico y una ampliación pertinente vinculada al tema. SER y GUSTAR requieren contexto para que fui/gustó no se presenten como pasado universal de identidad o preferencia habitual. Las propias explicaciones reconocen que era/gustaba son naturales en esos usos, pero no bastan para impedir las combinaciones del generador.

Se ha reproducido mediante ejecución de la función original el fallo **«Yo voy a levantarse a las siete»**. Afecta al futuro en yo de los cuatro reflexivos del taller: se utiliza el infinitivo con se sin adaptarlo a me. Los modelos escritos pueden ser correctos mientras el resultado generado no lo es; por eso se evalúan por separado. Debe corregirse antes de cualquier reutilización. No se ha reparado OL, respetando el alcance del encargo.

## Grammar

La base gramatical se ajusta bastante bien al criterio aprobado: modelos en yo/él/ella, presente frecuente, futuro próximo y un pasado reducido. Se conservan las ocho formas irregulares esenciales y los modelos funcionales. La ampliación de 25 verbos debe continuar siendo opcional, como referencia o reconocimiento, sin convertirse en requisito general de producción.

Las explicaciones distinguen usos de ser y estar sin la regla permanente/temporal. El reconocimiento de imperfecto, perfecto, futuro simple, modales y construcciones impersonales deberá ampliarse en contexto cuando aparezcan en lecturas y audiciones. Eso no exige añadir paradigmas completos a Writing.

Los nueve huecos de gramática son práctica de respuesta exacta, no evidencia de dominio comunicativo. El reconocimiento ortográfico y la concordancia deben seguir trabajándose sin prometer una valoración automática completa. No se ha detectado una razón para descartar bloques gramaticales enteros.

## Clasificación global y prioridades

| Dictamen principal | Unidades |
|---|---:|
| A | 62 |
| B | 16 |
| C | 24 |
| D | 0 |
| Pendiente | 26 |
| Total | 128 |

Los pendientes son los 25 conjuntos de Listening, cuyo cierre depende de escucha, y el texto de Tesla. No se han mezclado dictámenes provisionales con los definitivos. De los 20 textos de Reading, 17 fuentes son conservables, dos necesitan cambio de contenido y una queda pendiente. Sus conjuntos de preguntas tienen un A y 19 B. En Listening se proponen nueve conjuntos de preguntas A para práctica y 16 B; el audio de todos sigue pendiente. Estas cifras de componentes **no se suman al total de 128**.

No asignar D no significa que se deba trasladar todo al núcleo JC. Hay recursos complementarios y componentes que requieren adaptación importante, pero contienen material válido. El descarte automático perdería más valor que una selección razonada.

Prioridades antes de diseñar la plataforma:

1. Cerrar escucha de OL y las verificaciones oficiales JC pendientes; resolver el texto de actualidad y comprobar el formato pertinente para la promoción.
2. Corregir en la futura copia autorizada las incidencias lingüísticas y el fallo de reflexivos; no importar esos defectos.
3. Consolidar vocabulario existente y cubrir ropa/tallas, alimentos, cifras, horas, direcciones y transportes.
4. Seleccionar una primera secuencia de fuentes de vida cotidiana, biografías y cultura; graduar preguntas con datos ya presentes y separar práctica de simulación.
5. Diseñar pedagógicamente Q16, Q17 y Q18 y ampliar géneros lectores. No comenzar implementación hasta aprobar el alcance.

## Verificación realizada y límites

Se ha comprobado inventario real, estructura de datos, contenido y soluciones. Las 73 páginas educativas revisadas respondieron HTTP 200 y coincidieron exactamente con el código examinado; los veinte pares de Reading conservaron el mismo texto. La compilación de sus scripts inline no detectó errores de sintaxis. Los tests existentes de vocabulario, Listening, plan, temporizador y tracker han pasado tras recuperar el historial requerido por sus comparaciones. Listening verifica modos, puntuación, reinicio, marcas de evidencia, 23 selectores y preservación de MP3. Vocabulary comprueba 40 grupos, 223 ítems, cobertura de 221 entradas, alternativas y contextos. Plan verifica 24 semanas, 96 tareas y tres ritmos; el PDF supera sus comprobaciones de seis páginas A4 y límites de texto. Estas pruebas son simulaciones DOM o verificaciones estructurales: no sustituyen una sesión real con alumnos.

Se ha intentado habilitar un navegador local, pero la descarga del ejecutable no produjo un archivo utilizable. Por tanto la reproducción real de audio, persistencia en Safari/iPad, interacción visual y usabilidad final quedan pendientes. La comprobación HTTP y el análisis de manejadores no se han presentado como prueba completa de navegador.

La validación factual externa exhaustiva de cada biografía o tradición no formaba parte de la investigación oficial JC previa; su contenido se ha valorado por comprensión y adecuación, sin convertir cada afirmación del recurso en hecho externo nuevamente certificado. Para noticias simuladas se conserva la distinción entre contexto pedagógico y noticia real.

Las dificultades son estimaciones de una revisión pedagógica, sin pilotaje ni datos de acierto. No se han inferido velocidad, acento, pronunciación o calidad sonora a partir de guiones ni de duración.

## Entregables y trazabilidad

- [Matriz filtrable de auditoría](matriz-auditoria-ol.xlsx): inventario, fuentes y preguntas separadas, 263 preguntas originales, 223 ítems léxicos, retos de Writing, lagunas y verificaciones.
- [Anexo de inventario y evidencias](anexo-inventario.md): detalle individual de audiciones y textos, guiones publicados, preguntas y soluciones, y valoración de todos los componentes.
- [Propuesta de reutilización](propuesta-reutilizacion.md): orden de trabajo y esfuerzo relativo.
- [Verificación técnica de MP3](verificacion-audios.json): resultados reproducibles por archivo.
- [Resumen de recuentos](resumen-auditoria.json): denominadores y clasificación principal.
- [Control de calidad](control-calidad.md): comprobaciones, incidencias y limitaciones.

Referencias principales: [documentación JC](https://github.com/LanguageprepIE/junior-cycle-spanish-prep/tree/main/docs), [plataforma OL examinada](https://github.com/LanguageprepIE/informal-letter-ol/tree/d45e23a31c4a63145503389570071933d62556cb) y [publicación OL](https://languageprepie.github.io/informal-letter-ol/). Comprobación acotada del texto de actualidad: [enlace Reuters del recurso](https://www.reuters.com/business/autos-transportation/tesla-set-unveil-next-generation-roadster-sports-ev-after-years-delay-2026-10-15/) no accesible, [página de Tesla](https://www.tesla.com/roadster) consultada sin confirmar toda la adaptación. La documentación JC conserva los enlaces originales SEC/NCCA y de sus alojamientos; esta auditoría no los presenta como vueltos a verificar íntegramente.

Referencia léxica acotada: [FundéuRAE sobre adosado](https://www.fundeu.es/consulta/bungalo-y-adosado-1598/), que contempla expresamente el chalé adosado, y [RAE sobre comedor](https://dle.rae.es/comedor). Fundamentan la recomendación de matizar equivalencias, no de eliminar vocabulario.
