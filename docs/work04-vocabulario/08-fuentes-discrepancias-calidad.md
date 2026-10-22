# Fuentes, discrepancias y control de calidad

Work 04 · Consulta: 22 de octubre de 2026

## Línea base comprobada

- JC main: `b420c49e2d7ec75c659c77b344993facdde47051`, tras fusionar PR #2. PR #1 y PR #2 constan fusionados; Work 04 parte de esa revisión.
- OL main: `d45e23a31c4a63145503389570071933d62556cb`, la misma revisión de Work 02/03. No se ha reabierto la auditoría de sus 128 unidades.
- Se consultaron README, criterios, decisiones, estado de investigación y plan; no hay `AGENTS.md` en la raíz ni otro documento en `docs/criterios-pedagogicos/` en el árbol recuperado. Las instrucciones de esta petición delimitan la fase nueva.
- Las copias locales de todos los archivos de `docs/auditoria-ol/` y `docs/validacion-seleccion/` disponibles, incluidos sus JSON y matriz, coinciden por SHA Git con main. También coinciden los tres originales de investigación. Se usan como fuentes fechadas, sin repetir pruebas históricas.
- Los cuatro archivos léxicos actuales contrastados con GitHub tienen estos SHA Git: `js/vocab-study-data.js` = `e7457fab5d256837ff1ff096b6882de1d0128310`; `js/vocab-study.js` = `e8506f02db384ebe360591203e013ad771d89cb6`; `pages/vocab-study.html` = `26ae8b2767db198f4c225298d0336798fce0db64`; `docs/vocabulary-study-library.md` = `d35a20b1c621322a934b7a9184f7ba3e32e0ec5b`.

## Documentos y función en el diseño

| Fuente interna o repositorio | Uso concreto |
|---|---|
| [Criterios aprobados](../criterios-pedagogicos/criterios-v0.1.md), [decisiones](../decisiones.md) y README principal | Progresión combinada, comunicación natural, reconocimiento amplio/producción selectiva y límites de autorización |
| [Informe Work 01](../investigacion/Informe_auditoria_Preparacion_JC.docx), [matriz oficial](../investigacion/Matriz_completa_Preparacion_JC.xlsx), [Toolkit](../investigacion/JC_Writing_Toolkit_Informe_diseno.docx) | Demandas documentadas de 2022–2025, persona/tiempo, clases de datos, formatos Q16–Q18; no se vuelven a consultar los exámenes SEC |
| [Auditoría OL](../auditoria-ol/informe-auditoria.md), [anexo](../auditoria-ol/anexo-inventario.md), [matriz](../auditoria-ol/matriz-auditoria-ol.xlsx), propuesta y control de calidad en esa carpeta | Inventario real, 223 filas léxicas, fuente/preguntas, incidencias y límites técnicos; JSON de verificación como evidencia histórica |
| [Todos los documentos Work 03](../validacion-seleccion/README.md), especialmente [selección](../validacion-seleccion/03-primera-seleccion-pedagogica.md) y [prioridades](../validacion-seleccion/04-prioridades-correcciones-contenidos.md) | Línea de partida 18+8, lagunas y continuidad 2022–2026; comparación y anexo 2026 evitan perpetuar pendientes ya cerrados |
| [Datos OL fijados a la revisión](https://github.com/LanguageprepIE/informal-letter-ol/blob/d45e23a31c4a63145503389570071933d62556cb/js/vocab-study-data.js), comportamiento y página de práctica | Identificadores exactos, estructura, contenido y ayudas realmente implementadas; relación con source original |
| [Documentación de biblioteca OL](https://github.com/LanguageprepIE/informal-letter-ol/blob/d45e23a31c4a63145503389570071933d62556cb/docs/vocabulary-study-library.md) | Explicación de 221 entradas/223 ítems, variantes y tres formatos; contrastada con datos y código |

Las matrices se han consultado en lectura: hojas de vocabulario, inventario/lagunas y referencias pertinentes. No se sobrescriben ni se recalculan los dictámenes históricos. La matriz nueva es Markdown: dos tablas temáticas relacionadas y un anexo de recursos; evita mantener un XLSX duplicado en esta fase de revisión de 15 bloques. Los ejemplos originales tienen sus propias claves/pautas, sin transcribir materiales SEC.

## Discrepancias de fecha, granularidad o uso

| Origen | Diferencia observada | Tratamiento y efecto en Work 04 |
|---|---|---|
| README principal, criterios §2 y control de calidad Work 02 | Sus pendientes/alcance son anteriores a la validación documental 2026 incorporada por Work 03 | Work 03 es la actualización factual posterior; 2026 leído y guion consultado, escucha directa pendiente. No cambiar silenciosamente documentos aprobados |
| Nombre `criterios-v0.1.md` | El título y aprobación dicen versión 1.0 | Se usa v1.0 aprobada; no se crea otra versión por el nombre antiguo |
| Estado inicial de investigación | Conserva pendientes de presencia/cotejo o bibliografía anteriores | Work 03 documenta cotejo y fuentes concretas; se distingue el historial del estado actual, sin repetir investigación |
| Documentación léxica OL y notas de plan | La biblioteca describe su incorporación sin cambios al plan en ese momento; el plan posterior ya incluye vocabulario y tres ritmos | No basar el diseño JC en ausencia actual de enlaces; tampoco trasladar calendario LC |
| 221 entradas / 223 ítems / 149 seleccionados | Granularidades diferentes; dos entradas originales se desdoblan y hay expresiones/repeticiones | Registrar 18/109 + 8/40 + 14/74 = 40/223; no anunciar 223 palabras distintas ni cobertura JC completa |
| Etiqueta OL Understand/Read/Complete | Tres pasos de estudio/recuperación con mismos contextos y pistas, no cuatro fases JC | Reutilizar aprendizaje/guiada; transferencia y examen requieren contenidos/condiciones adicionales |
| «Words recognised» y tolerancia ortográfica | La corrección compara con respuestas previstas y puede reconocer forma con aviso de escritura | No inferir competencia R/U/P ni dominio auditivo; separar escritura y reconocimiento en seguimiento |
| C de `school-places-1` / `home-housing` en Work 02 | C indica adaptar contenido, no necesariamente adaptación de gran esfuerzo | Ajustes menores en futura copia, no recurso corregido hoy. Los otros ítems siguen conservables |
| Fuera de primera tanda / no recomendable JC | Prioridad y adecuación son dimensiones distintas | Reserva no equivale a D; conservar repertorio y rescatar expresiones cuando sean útiles |

Estas diferencias no exigen cambiar los principios aprobados; sí explican qué fuente posterior informa cada aplicación. Si surge un cambio sustancial, se presentará por separado al profesor.

## Comprobaciones realizadas y límites

1. Reconciliados 40 ID de grupos y 223 ítems con la matriz; los 18/109 y 8/40 corresponden exactamente a Work 03; los 14/74 de reserva completan el total, sin duplicar grupos al conectarlos con varios temas.
2. Confrontados datos, comportamiento, página y documentación actuales con GitHub, en solo lectura. Ejecutado una vez el test existente `node tests/vocab-study.cjs`: pasa los tres formatos, alternativas/concordancia, pasos, conservación entre pasos, reinicio y destinos léxicos del plan. Es simulación DOM; no prueba real de navegador ni escucha.
3. Comprobados identificadores, enlaces relativos, recuentos, cobertura de los 15 bloques y claves de ejemplos. Verificadas las cifras de horarios/precios y que cada pregunta factual de los ejemplos tiene evidencia en su fuente original.
4. El PR contiene solo Markdown en la carpeta Work 04. No se modifican los otros documentos, matrices originales, recursos OL, Sentence Builder o plataforma. No hay HTML, CSS, JavaScript, grabaciones ni nuevos repositorios.

**Pendiente:** aprobación docente del diseño y ejemplos; pilotaje real; validación auditiva OL/oficial; navegador/iPad cuando corresponda; disposiciones administrativas de 2027 antes de fijar una simulación anual completa. Nada de ello se da por cerrado aquí. Las dificultades son estimaciones pedagógicas y los modelos de respuesta son orientativos, no una lista cerrada de respuestas válidas.
