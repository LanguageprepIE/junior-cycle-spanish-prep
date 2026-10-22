# Modelo de aprendizaje y práctica

Work 04 · Propuesta pedagógica sin implementación

## Dos dimensiones que no deben confundirse

Recognise, Understand y Use describen **qué aprende** el alumno. Aprender, práctica guiada, independiente y examen describen **con qué apoyo y condiciones trabaja**. No son siete pasos consecutivos: en cada fase pueden aparecer varios objetivos, con una exigencia de uso acotada. Se trabaja también una relación importante entre datos, no solo más palabras.

## Especificación de las fases

| Fase | Entrada y actividad | Apoyos | Respuesta y feedback | Evidencia para avanzar |
|---|---|---|---|---|
| Aprender | Pequeño conjunto temático, normalmente 4–8 expresiones; artículo/construcción, significado y ejemplo; asociación breve de acceso | EN opcional; ejemplos visibles; lectura sin tiempo límite | Señalar/emparejar; explicación inmediata; escuchar solo si existe material validado | Identifica significado y puede explicar qué dato aporta en el ejemplo |
| Guiada | Frases independientes, ficha o texto natural; huecos con pista; extraer un dato y señalar su evidencia | Banco o pista EN, modelo, subrayado, repetición según necesidad | Respuesta corta; decir qué encaja y por qué; diferenciar forma y significado | Resuelve con apoyo y reconoce qué ayuda necesita; volver a aprender es válido |
| Independiente | Otro contexto breve, con cambio real de persona/día/cifra; extracción abierta y uso breve pertinente | Sin traducción ni banco al primer intento; ayuda disponible después, registrada | Comprobar al terminar; clave para hechos y criterios/modelos para respuesta abierta | Comprende sin modelo visible y transfiere el repertorio; prueba posterior en otra ocasión |
| Examen cuando corresponda | Fuente original y formato comparable: asociación visual, respuesta localizada, banco contextual o contribución a Q17/Q18 | Sin pistas léxicas/modelo durante intento; instrucciones y adaptaciones pertinentes | Corrección después; pauta ajustada a tarea; no nota SEC inventada | Evidencia independiente en condiciones explicitadas; no basta completar todos los pasos |

4–8 es una decisión orientativa para las tandas de aprendizaje, no una extensión obligatoria de textos, respuestas o simulaciones. No todos los bloques necesitan una actividad diferente para cada fase: el estudio OL y sus huecos cubren varias necesidades iniciales. Sí se necesita un contexto nuevo para afirmar transferencia independiente.

## Familias de actividades mínimas

| Familia | Qué aporta | Uso previsto y economía de diseño |
|---|---|---|
| Asociación palabra/expresión–significado o imagen | Acceso Recognise, incluido acciones completas | Recurso breve; imágenes originales o autorizadas cuando aporten referente. No una imagen por palabra abstracta |
| Lectura de ejemplos, fichas o texto | Understand de significado, referentes y colocaciones | Reutilizar los tres formatos OL; no forzar historias con palabras incompatibles |
| Recuperación contextual con hueco | Recuperar forma a partir de significado y sintaxis | Reutilizar OL como guiada; no duplicar otros huecos iguales |
| Extracción y relación en fuente nueva | Transferir a fechas, listas, motivos, persona y cualificadores | Dos o tres demandas distintas al principio; después ampliar según fuente, sin inventar información |
| Respuesta breve y ampliación | Use para información, opinión, experiencia o plan | Modelo después del intento; alternativas por criterio, sin coincidencia literal obligatoria |
| Tarea con formato de examen | Aplicar con exigencia comparable | Autoría posterior de formatos originales; no convertir toda práctica en test |

La opción múltiple sirve para una discriminación concreta y diagnóstica, pero no sustituye extracción ni producción. No se añaden arrastrar tarjetas, juegos o clasificación compleja cuando señalar, completar o responder logra el objetivo.

## Qué ofrece realmente OL

`js/vocab-study-data.js` contiene objetos por identificador: `title`, `topic`, `reference`, `words` y `sentences`; `format` distingue texto, frases y fichas (texto es el valor por defecto). Cada palabra registra `id`, `es`, `en`, `answer`, `alternatives`, `example`, `translation` y `source`. Los fragmentos de `sentences.parts` relacionan huecos y palabras. Esta trazabilidad conviene conservar en cualquier adaptación futura, junto al bloque JC, objetivo y comprobaciones pendientes.

`pages/vocab-study.html?set=ID` y `js/vocab-study.js` ofrecen **tres pasos**, Understand/Read/Complete. El último repite los mismos contextos con pistas inglesas. Los modelos y listas pueden consultarse; las respuestas se conservan al cambiar de paso durante la sesión y se pueden borrar. Esto no acredita un registro de dominio entre sesiones ni un Study Tracker conectado. No hay audio, evaluación semántica de redacción libre ni una fase autónoma de examen en estos grupos.

| Componente actual | Dictamen para el programa propuesto | Ajuste o ampliación necesaria |
|---|---|---|
| Ejemplos, glosas y tres formatos naturales | Reutilizable sin cambios pedagógicos, excepto incidencias localizadas del documento 07 | Referencias/etiquetas JC en futura integración; conservar expresiones |
| Traducción opcional, consulta y modelos | Reutilizable sin cambios en aprendizaje/guiada | Retirarlos del primer intento independiente; permitir regreso con constancia de ayuda |
| Huecos ingleses del mismo contexto | Reutilizable sin cambios como práctica guiada | Para práctica independiente/examen requieren adaptación significativa: otro contexto, otras ayudas y criterios |
| Corrección por respuesta y alternativas previstas | Aprovechable con ajustes menores para huecos cerrados | Distinguir reconocimiento y escritura; revisar aceptación por contexto; no confundir con comprensión global |
| Resultado «words recognised» | Ajustes menores de interpretación/rotulado | Indica coincidencia con respuestas previstas, no dominio demostrado de Recognise/Understand/Use |
| Conservación dentro de sesión y reinicio | Reutilizable sin cambios como comportamiento de práctica | Progreso entre ocasiones y ayudas usadas sería funcionalidad nueva; no se promete ahora |
| Producción abierta y transferencia | No implementadas | Adaptación significativa del programa: contenido nuevo y autocotejo o revisión docente |
| Listening léxico | No implementado | Conexión futura con audio validado; no deducir habilidad sonora de lectura |
| Plan/tracker OL | No recomendable trasladarlo íntegro en esta fase | Diseñar después alcance JC; aprovechar principios de flexibilidad sin copiar calendario LC |

No se modifica ni copia código en esta fase. «Adaptación significativa» puede referirse al uso de un mecanismo dentro del programa; no invalida los datos originales conservables.

## Retroalimentación y aceptación

Para respuestas cerradas: indicar primero dato correcto o relación equivocada y después la forma española. Aceptar variantes verdaderamente equivalentes en ese contexto y explicarlas. Una tilde ausente puede mostrar reconocimiento, pero se registra la escritura pendiente: no se anuncia dominio ortográfico pleno. En nuevas ampliaciones se preserva la diferencia entre ñ/n y se revisan pares en que un acento cambia significado. No se aplica una normalización ciega de todas las respuestas.

Para respuestas abiertas: comprobar relevancia, claridad, dato solicitado y ampliación pertinente; después atender un objetivo lingüístico útil. Dos ejemplos de respuesta no agotan las posibilidades válidas. Una respuesta diferente al modelo no es automáticamente incorrecta. Los modelos se revelan después y el alumno señala su propia evidencia; si se automatiza posteriormente, no se promete que una comparación literal evalúe comunicación.

En cifras se separan dato, unidad y referente: 8:15 no es 8:50, precio por persona no es total ni llegada es salida. Se aceptan notaciones equivalentes cuando la tarea no exige escribir en letras. La dificultad principal es comprender el dato, no hacer cálculos ajenos a la situación. Si se propone una relación temporal, se enseña y se identifica como exigencia adicional.

## Inclusión, recuperación y evidencia

Una ruta de apoyo permite volver a la glosa, ver ejemplo o escuchar de nuevo en práctica. Una ruta de ampliación pide otro detalle o relación real de la fuente; no añade información ausente ni obliga a usar palabras raras. Ambas llegan a una prueba independiente con contexto nuevo. El alumno puede usar datos ficticios en tareas personales sin perder el objetivo comunicativo.

No se fija un umbral porcentual de dominio sin pilotaje. Registrar por objetivo: «con ayuda», «sin ayuda en este contexto», «revisado en otra ocasión», junto a fecha y error a retomar. El número de clics o un acierto inmediato no decide dominio. En Listening se registra evidencia auditiva específica solo tras una actividad realmente escuchada.

Antes de implementar: revisión docente de ejemplos/variantes, prueba pequeña con alumnado, y después comprobaciones funcionales y de navegador. El ensayo DOM de OL vuelve a pasar en esta revisión; no sustituye navegador/iPad ni validación sonora. Este modelo no declara esos pendientes cerrados.
