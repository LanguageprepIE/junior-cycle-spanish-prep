# Inventario de la primera versión

22 de octubre de 2026 · Work 05 · Material funcional para revisión del profesor

Las unidades siguientes no se suman a las 128 de Work 02: son agrupaciones de implementación y conservan otra granularidad. «Funcional» significa implementado/probado en esta versión, no pilotado con alumnado ni aprobado de nuevo automáticamente.

## Resumen por área

| Área | Implementado | Adaptación o contenido nuevo | Pendiente / próximo |
|---|---|---|---|
| Listening | Estructura, estrategia y ocho fichas de candidatos | Separación visible de dictamen de audio y preguntas | Escucha íntegra y correspondencia sonora; no reproductores, ejercicios o simulación habilitados |
| Reading | Ocho fuentes, 36 preguntas con evidencia/autocotejo | Ocho preguntas Nadal conservadas; 28 nuevas; ajuste contextual de rc02 | Práctica independiente por fuente y más géneros; ya hay un horario original en la situación de billetes |
| Writing | Cinco tareas: banco Q16, formulario, correo Q17, blog Q17 y ocho temas Q18 | Todo el contenido JC nuevo es original; modelos parciales, edición, borrador voluntario y revisión | Más variantes y pilotaje; sin nota semántica automática |
| Vocabulary | 15 bloques navegables; 26 grupos/149 ítems con aprendizaje, reconocimiento y recuperación guiada | Cafetería matizada; tres situaciones Work 04 con otra fuente en fase independiente y uso propio | 14 grupos/74 ítems en reserva; ampliaciones por tema y simulación léxica futura |
| Grammar | Siete talleres, 28 huecos contextualizados y modelos funcionales | Reexpresión JC y ejercicios nuevos; reflexivo correcto escrito, sin importar el generador OL | Ampliación receptiva y pilotaje según fuente; no paradigmas exhaustivos |
| Study Guide | Seis apartados de referencia/estrategia y seguimiento descriptivo local | Inglés desplegable en textos largos, objetivos y revisión separados | Study Plan/Tracker completos; sin calendario arbitrario |

## Bloques de Vocabulary y cobertura real

| ID / ruta tras `#/` | Bloque | Grupos propios | Ítems | Situación y estado |
|---|---|---:|---:|---|
| `T01` · `vocabulary/T01` | Identidad y datos personales | 0 | 0 | Banco específico próximo |
| `T02` · `vocabulary/T02` | Familia y descripciones | 4 | 20 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T03` · `vocabulary/T03` | Casa y barrio | 2 | 10 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T04` · `vocabulary/T04` | Instituto y asignaturas | 5 | 25 | Instituto, guiada/independiente/uso |
| `T05` · `vocabulary/T05` | Rutinas y horarios | 1 | 6 | Enlace a situación de instituto |
| `T06` · `vocabulary/T06` | Aficiones y deportes | 1 | 5 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T07` · `vocabulary/T07` | Comida, bebidas e ingredientes | 1 | 5 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T08` · `vocabulary/T08` | Ropa, colores y compras | 2 | 11 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T09` · `vocabulary/T09` | Números, fechas y cantidades | 7 | 51 | Billetes/horarios, guiada/independiente/uso |
| `T10` · `vocabulary/T10` | Ciudad, direcciones y transporte | 0 | 0 | Enlace a situación de billetes; banco específico próximo |
| `T11` · `vocabulary/T11` | Tiempo atmosférico | 1 | 7 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T12` · `vocabulary/T12` | Viajes, experiencias y planes | 1 | 4 | Viajes, guiada/independiente/uso |
| `T13` · `vocabulary/T13` | Salud, servicios y profesiones | 1 | 5 | Aprendizaje y práctica guiada disponibles; transferencia específica próxima |
| `T14` · `vocabulary/T14` | Cultura, geografía y entorno | 0 | 0 | Banco específico próximo |
| `T15` · `vocabulary/T15` | Herramientas comunicativas | 0 | 0 | Banco específico próximo |

Los grupos se asignan una sola vez como recursos propios; los enlaces entre bloques no duplican recuentos. T01, T10, T14 y T15 tienen estructura y orientaciones pero no banco propio en esta tanda. La tarea de formulario de Writing también permite trabajar datos personales; no se presenta por eso como un banco léxico completo.

## Grupos integrados

Todos proceden de `js/vocab-study-data.js` de OL en la revisión fijada. Ruta común JC: `#/vocabulary/Txx/ID`. Los tres pasos funcionales son Aprender, Recognise e Understand con recuperación guiada. Use/independiente solo se habilitan mediante las situaciones originales enlazadas donde existen.

| ID OL exacto | Bloque | Ítems | Estado y cambios |
|---|---|---:|---|
| `numbers-0-7` | T09 | 8 | Contenido conservado; nueva interfaz JC |
| `numbers-8-15` | T09 | 8 | Contenido conservado; nueva interfaz JC |
| `numbers-16-23` | T09 | 8 | Contenido conservado; nueva interfaz JC |
| `numbers-24-31` | T09 | 8 | Contenido conservado; nueva interfaz JC |
| `days` | T09 | 7 | Contenido conservado; nueva interfaz JC |
| `months-1` | T09 | 6 | Contenido conservado; nueva interfaz JC |
| `months-2` | T09 | 6 | Contenido conservado; nueva interfaz JC |
| `colours-1` | T08 | 6 | Contenido conservado; nueva interfaz JC |
| `colours-2` | T08 | 5 | Contenido conservado; nueva interfaz JC |
| `weather-basics` | T11 | 7 | Contenido conservado; nueva interfaz JC |
| `school-subjects-1` | T04 | 5 | Contenido conservado; nueva interfaz JC |
| `school-subjects-2` | T04 | 6 | Contenido conservado; nueva interfaz JC |
| `school-routine` | T05 | 6 | Contenido conservado; nueva interfaz JC |
| `school-opinions` | T04 | 4 | Contenido conservado; nueva interfaz JC |
| `family-members-1` | T02 | 4 | Contenido conservado; nueva interfaz JC |
| `family-members-2` | T02 | 4 | Contenido conservado; nueva interfaz JC |
| `home-rooms-1` | T03 | 6 | Contenido conservado; nueva interfaz JC |
| `food` | T07 | 5 | Contenido conservado; nueva interfaz JC |
| `school-places-1` | T04 | 5 | Adaptado: glosa/traducción de cafetería y nota comedor |
| `school-places-2` | T04 | 5 | Contenido conservado; nueva interfaz JC |
| `family-appearance` | T02 | 7 | Contenido conservado; nueva interfaz JC |
| `family-personality` | T02 | 5 | Contenido conservado; nueva interfaz JC |
| `home-location-1` | T03 | 4 | Contenido conservado; nueva interfaz JC |
| `free-time` | T06 | 5 | Contenido conservado; nueva interfaz JC |
| `travel` | T12 | 4 | Contenido conservado; nueva interfaz JC |
| `health` | T13 | 5 | Contenido conservado; nueva interfaz JC |

## Reserva sin actividad JC habilitada

`animals` (7); `descriptions-1` (5); `descriptions-2` (5); `school-people` (7); `school-feelings` (5); `family-relationships` (4); `home-housing` (6); `home-rooms-2` (6); `home-furniture` (6); `home-appliances-1` (6); `home-appliances-2` (4); `home-chores-1` (4); `home-chores-2` (5); `home-location-2` (4). Total: 14 grupos, 74 ítems. `home-housing` necesita matizar chalé/aislado antes de su integración; la reserva no equivale a descarte.

## Reading: fuentes y preguntas separadas

| ID / ruta | Fuente | Preguntas en JC | Estado |
|---|---|---|---|
| `rc01` · `reading/rc01` | Casa y hogar · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `nadal` · `reading/nadal` | Rafael Nadal — Una vida dedicada al tenis · texto conservado | 8 reutilizadas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `new-9` · `reading/new-9` | Feria de Abril — Música y convivencia · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `rc02` · `reading/rc02` | Instituto y exámenes · referencia final adaptada a JC | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `rc05` · `reading/rc05` | Viajes y vacaciones · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `new-6` · `reading/new-6` | Carnaval de Cádiz — Humor y música · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `new-13` · `reading/new-13` | Deporte femenino — Más visibilidad · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |
| `new-14` · `reading/new-14` | Turismo sostenible — Viajar con respeto · texto conservado | 4 nuevas con modelo y evidencia | Práctica guiada; autocotejo abierto, sin corrección semántica automática |

## Listening: candidatos pendientes

| ID OL | Archivo original, no copiado a la web | Audio | Preguntas |
|---|---|---|---|
| `everyday-01` | `assets/audio/LCOL_LISTENING_02_EVERYDAY.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `weather-01` | `assets/audio/LCOL_LISTENING_01_WEATHER.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `everyday-02` | `assets/audio/LCOL_LISTENING_06_EVERYDAY.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `culture-02` | `assets/audio/LCOL_LISTENING_08_CULTURE.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `people-01` | `assets/audio/LCOL_LISTENING_03_PEOPLE.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `news-01` | `assets/audio/LCOL_LISTENING_05_NEWS.mp3` | Pendiente de escucha | Conservables para guiada (A) |
| `everyday-03` | `assets/audio/LCOL_LISTENING_11_EVERYDAY.mp3` | Pendiente de escucha | Rehacer progresión (B) |
| `weather-02` | `assets/audio/LCOL_LISTENING_10_WEATHER.mp3` | Pendiente de escucha | Conservables para guiada (A) |

Los metadatos de duración no prueban ritmo, pronunciación ni inteligibilidad. No se ha generado ni sustituido audio.

## Situaciones y tareas originales

| Ruta | Implementación real | Fuente / alcance |
|---|---|---|
| `practice/school` | Acceso de tres asociaciones, cuatro preguntas guiadas, tres de contexto nuevo, producción con autocotejo y tres huecos de compleción | Ejemplo A Work 04 |
| `practice/tickets` | Acceso numérico, tres preguntas guiadas, tres de otro horario y mensaje con datos de viaje | Ejemplo B Work 04; localidades ficticias |
| `practice/travel` | Acceso pasado/futuro, cuatro preguntas guiadas, cuatro en tercera persona y experiencia/plan propios | Ejemplo C Work 04 |
| `writing/q16` | Diez huecos, banco desordenado, corrección cerrada y explicación | Simulación original; consigna fija en inglés y respuesta española |
| `writing/form` | Seis campos de ficha original, con alternativas válidas de fecha e idioma | Práctica de formato documentado; sin reproducir ficha SEC |
| `writing/email` | Correo original con cinco contenidos, apoyo o simulación, borrador y autocotejo | El pasado y el plan se piden en esta tarea concreta |
| `writing/blog` | Blog escolar original con cinco contenidos, apoyo o simulación | No exige pasado si la consigna no lo necesita |
| `writing/personal` | Ocho temas, modelos parciales opcionales y orientación total de unas 200 palabras | No diálogo; experiencia y plan según temas; sin descuento automático por extensión |
| `grammar/present`, `be-have`, `opinions`, `questions`, `connections`, `past`, `plans` | Cuatro huecos por taller con corrección, reinicio, explicación y modelos | Principios funcionales OL; ejercicios JC nuevos; sin generador defectuoso |

Cada situación completa es un recurso, no cuatro actividades nuevas contabilizadas por sus pestañas. Las preguntas abiertas de transferencia son 21 en total. Los accesos/compleción de esas situaciones añaden 13 ítems cerrados; no se confunden con los 149 ítems OL.
