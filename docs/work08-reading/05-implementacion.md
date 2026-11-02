# Implementación técnica y pedagógica

## Banco y progresión

- `web/reading-data.js`: banco activo separado, 24 actividades / 121 preguntas, 9 A, 10 B y 5 C. Conserva ocho lecturas, incorpora dos fuentes OL con nuevas preguntas y catorce actividades originales. Cada pregunta declara lengua, habilidad, evidencia y unidades con puntuación. Cada actividad incluye género, tema, nivel interno, vocabulario y procedencia.
- `web/reading-ui.js`: catálogo con filtros A/B/C; documentos, glosario y pistas; modo sin ayudas; preguntas, corrección, revisión y total. Ilustraciones vectoriales locales originales para dos series de asociación, con descripción accesible inglesa.
- A y B empiezan con apoyo. C empieza sin ayudas. El alumno puede cambiar de modo; se reinicia el intento y se advierte que las preguntas se repiten. Las soluciones se revelan al terminar. Se permiten respuestas en blanco: el total se mantiene provisional hasta revisar todos los datos abiertos.
- Todas las consignas y soluciones mantienen su lengua de respuesta aunque se cambie English/Bilingüe/Español. Los controles de autoevaluación permanecen en inglés, como se acordó en Work07.

## Puntuación

La suma se deriva de las unidades declaradas, sin constante universal de cuatro puntos. Las asociaciones tienen 1 o 2 puntos por correspondencia; el cartel C suma 25 (5+5+5+10), por analogía funcional con Q11, sin presentarse como pregunta SEC. Otras tareas utilizan asignaciones propias de práctica.

Los selectores abiertos asignan de 0 al máximo de cada unidad. El alumno compara con solución y evidencia; se aceptan paráfrasis y se exige precisión de los datos pedidos. Las opciones intermedias permiten reflejar información parcial, pero no equivalen a reglas oficiales anuales de crédito parcial. No se intenta adivinar el significado de texto libre ni se penaliza la formulación mediante comparación exacta.

El resultado se actualiza al cambiar la revisión y mediante «Recalculate score», tanto por pregunta como en el total. Se puede editar la respuesta (conserva texto y borra valoraciones), reiniciar o volver a otra lectura. La memoria es solo de sesión, sin envíos ni nuevos guardados persistentes.

## Reutilización y arquitectura

Se mantienen rutas `#/reading` y `#/reading/:id`, plantillas de cabecera, botones, navegación y estilos comunes. La implementación sigue el patrón aislado de Listening. Su evaluador tiene constantes de seis preguntas/cuatro puntos y controles de audio específicos; extraerlo habría ampliado el riesgo transversal. Se crea únicamente una función pura para puntuar el nuevo esquema de unidades, usada por todos los resultados de Reading. No se duplica el reproductor ni se modifica `listening-ui.js`.

El banco histórico de ocho lecturas de `data.js` se conserva como origen trazable, pero la interfaz usa exclusivamente `JC_READING`; no aparecen duplicadas al alumno. No se cambia contenido de Writing, Vocabulary, Grammar, Study Guide ni Listening.

## Cambios transversales mínimos

1. `app.js`: delegación de Reading y sus eventos input/change/submit/click; inicialización del módulo; estado de la tarjeta Reading de inicio actualizado a disponible.
2. `index.html` y `web/index.html`: carga de los dos scripts antes de app.js.
3. `styles.css`: reglas limitadas a Reading, anchuras fluidas, documentos y dibujos escalables.
4. `scripts/export-preview.cjs`: incluye los nuevos módulos en la exportación autónoma y cambia su nombre a Work08.
5. Tests: `content.cjs` consulta el banco real `JC_LISTENING` en lugar del array histórico vacío `D.listening` (fallo reproducido antes de editar). Work06/07 dejan de exigir las funciones antiguas de Reading byte por byte; Work08 valida sus sustitutas y conserva comprobaciones de todas las demás áreas. No se retiran pruebas de puntuación o audio.

Sin nuevas dependencias, servicios, APIs, cuentas ni analítica. No se modifican repositorios de referencia ni se fusiona main.
