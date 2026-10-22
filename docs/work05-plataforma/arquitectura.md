# Work 05 — Arquitectura y funcionamiento

22 de octubre de 2026 · Primera versión funcional para revisión · Rama independiente

## Solución elegida

Una aplicación estática sin framework, instalación ni compilación, alojada en `web/`. El repositorio documental se conserva. La navegación por fragmentos `#/…` evita reglas de redirección o dependencia del alojamiento. No se han añadido servicios, cuentas, API, analítica, fuentes externas, base de datos ni formularios de envío.

| Archivo | Responsabilidad |
|---|---|
| `web/index.html` | Documento inicial, carga de recursos y enlace para saltar al contenido |
| `web/styles.css` | Diseño adaptable, foco visible, disposición de lectura, impresión y movimiento reducido |
| `web/data.js` | 15 bloques, 26 grupos/149 ítems, reserva descriptiva de 14 grupos, ocho textos y ocho candidatos de audio; origen OL conservado |
| `web/activities.js` | Tres situaciones Work 04, siete talleres funcionales y tareas Q16/Q17/Q18 originales |
| `web/core.js` | Comprobación cerrada, normalización, tratamiento de escritura y recuento orientativo de palabras |
| `web/app.js` | Interfaz, rutas, modos de lengua, respuestas en sesión, autocotejo y almacenamiento local voluntario |
| `tests/content.cjs` | Integridad pedagógica/datos y casos de corrección cerrada |
| `scripts/export-preview.cjs` | Produce un HTML autónomo reproducible para revisión sin servidor |

Los datos y los renderizadores están separados para ampliar el contenido sin rehacer la navegación. Los modelos de datos siguen siendo sencillos y editables; no se añaden capas de servidor para resolver necesidades locales.

## Idiomas y condiciones de práctica

Bilingüe es el modo inicial en un navegador sin preferencia guardada. English cambia instrucciones/explicaciones y conserva el español que se aprende. Español retira apoyos ingleses ordinarios, dejando consulta voluntaria donde corresponde. Las explicaciones largas bilingües ofrecen el inglés desplegable.

El idioma se mantiene entre rutas y recargas. Las respuestas actuales no se borran al cambiar de idioma o de paso durante la sesión. Las simulaciones originales fijan consigna inglesa y contenidos españoles independientemente del selector. Cambia la interfaz, no la condición de la tarea. Volver a práctica con apoyo es una elección visible, no una ayuda secreta en simulación.

## Corrección y progreso

Los huecos comparan respuesta y alternativas contextualizadas. Se separan vacío, respuesta por revisar, significado reconocido con escritura pendiente y respuesta exacta. Una tilde ausente no cuenta como escritura exacta; ñ se conserva diferente de n. No se acepta automáticamente un artículo incorrecto ni una concordancia equivocada. Al editar se retira el resultado previo, para no dejar una corrección obsoleta.

Reading y las producciones libres usan modelos, evidencia y autocotejo. No hay evaluación semántica automática ni nota SEC inventada. Q17 presenta cinco contenidos; Q18 ocho temas personales, sin reconstrucción de diálogo. La extensión orientativa no produce descuentos automáticos. Los modelos parciales enseñan ampliación pertinente, no redacciones para memorizar.

El seguimiento Recognise/Understand/Use lo registra el alumno de manera descriptiva, sin marcar dominio por abrir páginas o acertar huecos. Study Plan y Study Tracker completos siguen próximos; no hay semanas fijadas.

## Persistencia y privacidad

Solo se usa `localStorage` del navegador con prefijo `jc:`: idioma, valoración de progreso cuando se guarda y borrador cuando se pulsa Guardar. No se envía texto ni progreso a ningún servidor. Las respuestas de las demás actividades permanecen en memoria durante la sesión. Se pueden usar datos inventados.

Los borradores guardados se recuperan con un botón y se pueden borrar separadamente del texto que sigue en pantalla. La escritura no se guarda silenciosamente al teclear. Si falla el guardado, se informa y se conserva la sesión. En equipos compartidos debe borrarse el borrador local al terminar; no hay cuentas para separar usuarios.

## Ejecución y revisión

En un equipo con Python: `python3 -m http.server 8000 --directory web`; abrir `http://localhost:8000`. Los archivos de `web/` también se pueden abrir localmente sin peticiones fetch. Para generar una copia autónoma: `node scripts/export-preview.cjs`; produce `artifacts/Preparacion-JC-Work05.html` con todos los recursos incorporados. Este archivo derivado no se mantiene manualmente ni necesita otro repositorio.

En este entorno se utilizó el supervisor de vista previa de Sites solo para QA local; su configuración local no se incorpora a Git. El servidor de QA no es un enlace público. La solución no depende de Sites para funcionar.

## Publicación

No había proyecto JC en la búsqueda de Netlify; el conector disponible no expone carga/despliegue de archivos y no hay autenticación de CLI configurada. No se creó un alojamiento ni se cambió producción. El flujo disponible de Sites crea un repositorio fuente adicional y publica en una URL de producción privada; esas operaciones no se ejecutaron por las restricciones expresas de Work 05. Para una URL alojada externa hace falta aprobar el destino y, en su caso, esa infraestructura adicional. Se entrega una versión autónoma y el PR concreto para revisión; no se proporciona una dirección interna como si fuese pública.

## Fuentes y autorización

Base JC: main `22fff0ba59b3d3f5c2874c2d11b5fc95b754c68b`, tras fusionar Work 04/PR #3. Se contrastó el árbol: criterios y documentos Work 01–04 coinciden con las revisiones leídas anteriormente; no se repitieron auditorías. Work 05 autoriza expresamente el desarrollo técnico, sustituyendo las prohibiciones de fases anteriores sin cambiar los principios pedagógicos.

OL: `d45e23a31c4a63145503389570071933d62556cb`. Se consultaron los datos y comportamiento de vocabulario, las ocho fuentes lectoras seleccionadas, sus preguntas/modelos y los componentes gramaticales/estrategias de Writing auditados. No se ha ejecutado ni trasladado el generador reflexivo defectuoso. La atribución y los cambios de contenido están en `ATTRIBUTION.md` y en el inventario. No se modifica OL ni ningún otro proyecto.
