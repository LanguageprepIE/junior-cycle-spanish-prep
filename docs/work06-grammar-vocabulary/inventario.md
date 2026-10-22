# Inventario implementado y arquitectura

## Grammar

Veinte apartados en `web/grammar-training.js` y `web/grammar-extension.js`: `present`, `irregular`, `stem`, `be-have`, `opinions`, `reflexives`, `agreement`, `questions`, `connections`, `modal`, `past`, `past-context`, `plans`, `pronouns`, `comparisons`, `soler`, `perfect`, `imperfect`, `future-simple`, `progressive`. La ruta es `#/grammar/{id}`.

Cada uno tiene explicación bilingüe, modelos españoles, tres conjuntos elegibles y aplicación escrita. Los 357 ítems incluyen 80 interpretaciones con opciones y 277 ítems de conjugación, compleción, corrección o transformación. `web/grammar-recognition.js` aporta opciones con valores españoles y apoyos ingleses: no se exige escribir terminología gramatical española para demostrar comprensión.

`web/mixed-training.js` añade tres textos de ocho huecos (`school`, `visit`, `purchase`) en `#/grammar/integration`. La gramática nueva suma **381 ítems cerrados**, además de veinte producciones abiertas. Los siete talleres de Work 05, 28 huecos, se conservan en «Ejercicio introductorio anterior».

## Vocabulary

`web/training-data.js` contiene quince bancos `T01`–`T15`: 376 entradas redactadas/contextualizadas, con `es`, `en`, `example`, `tier`, `source`. Se incorporan 122 etiquetas heredadas adicionales por coincidencia exacta de etiqueta, conservando como origen el ID del grupo; no se modifican `JC_DATA.groups` ni OL. `authoredCount` mantiene la cifra separada. La etiqueta abreviada «subir a Insta» pasa a «subir fotos a Instagram» únicamente en la vista nueva. Los dos destinos `me duele(n)` no se fusionan como etiquetas opacas: su práctica original se conserva y la ampliación enseña duele/duelen por contexto.

Resultado: **499 entradas de aprendizaje, 437 esenciales y 62 ampliadas**. No son lemas únicos; hay solapamientos y variantes agrupadas con `/`. Tampoco todas las 376 entradas constituyen vocabulario nunca visto: algunas reutilizan palabras en nuevos ejemplos. No sumar 149 + 376 para anunciar 525 palabras distintas.

La ruta `#/vocabulary/T04/training`, por ejemplo, permite elegir:

- Aprender: significado y ejemplo, esencial/ampliado/todo y tandas de hasta ocho.
- Recognise: ocho o menos selecciones de significado por tanda; hasta 499 entradas recuperables en el banco completo.
- Understand: cinco u ocho huecos por bloque, con banco opcional y explicación; 90 en total.
- Otro contexto: quince fuentes originales nuevas con cuatro preguntas cada una; 64 preguntas abiertas con evidencia, incluidas cuatro de un segundo anuncio original de uniforme, material, rebaja y devolución. Se responde en inglés para comprobar comprensión, aunque la interfaz pueda estar en español.
- Use: quince tareas originales de producción española, con modelo después del intento y tres criterios de autocotejo.

Los 26 grupos originales siguen disponibles en el desplegable de cada bloque. Sus 149 entradas y las tres situaciones originales Work 04/05 mantienen sus actividades. Los catorce grupos de reserva siguen en reserva: no se ha afirmado su integración completa.

## Funcionamiento técnico

- HTML/JS/CSS estáticos, sin dependencias nuevas ni llamadas externas.
- Se conservan navegación por hash, seis áreas, diseño adaptable y English/Bilingüe/Español.
- `web/grammar-extension.js` y `web/vocabulary-extension.js` concretan el encargo ampliado. Cada entrada registra `reception`, `production` y `kind`, además del nivel esencial/ampliado. T04 comparte por referencia la entrada docente de T13; ese uso no se suma como nueva autoría.
- `web/training-ui.js` reutiliza los formularios y la retroalimentación existentes; `web/training-language.js` aporta equivalencias de instrucciones redactadas, sin traducción automática.
- `web/app.js` integra las vistas nuevas, el selector de recorrido y el reinicio de producción. Los campos cerrados distinguen respuesta exacta, escritura a revisar, error y vacío. Las respuestas libres no reciben nota automática.
- `web/core.js` admite omitir los signos iniciales ¿/¡ al comparar una respuesta breve. Conserva la distinción de ñ y los avisos de tildes; no concede una exención ortográfica oficial.
- Las respuestas nuevas permanecen en la sesión. El idioma y las funciones anteriores de borradores/seguimiento mantienen su almacenamiento local. No hay cuentas, analítica ni recopilación de datos.
- `index.html` en la raíz conserva las rutas `web/…` para GitHub Pages; `web/index.html` permite servir la carpeta directamente. Ambos cargan los mismos módulos en el mismo orden.
- `scripts/export-preview.cjs` incluye los módulos nuevos y genera `artifacts/Preparacion-JC-Work06.html` sin servidor.

No se han cambiado `web/data.js` ni `web/activities.js`: fuentes, preguntas y actividades de Reading/Listening/Writing siguen intactas. Study Guide conserva su contenido y funcionamiento. Los cambios compartidos de formularios y normalización son los mínimos necesarios para la integración y se incluyen en regresión.
