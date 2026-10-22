# Pruebas y límites de Work 06

22 de octubre de 2026. Los resultados distinguen datos, lógica, navegador y dispositivo. No constituyen pilotaje pedagógico ni garantía de resultados de examen.

## Comprobaciones automatizadas

- `node tests/content.cjs`: pasa la regresión Work 05. Conserva quince temas, 26 grupos/149 entradas y catorce grupos de reserva, 36 preguntas lectoras, 21 preguntas de las tres situaciones previas, Q16/formulario, tareas Q17/Q18 y los 28 huecos anteriores.
- `node tests/work06.cjs`: pasa quince bancos/472 entradas (350 contextualizadas + 122 heredadas), 75 huecos, 60 preguntas con evidencia literal en su fuente, quince talleres/255 ítems y tres textos/24 huecos. Comprueba etiquetas esenciales/ampliadas, opciones correctas, referencias, contratos de renderizado y alternativas reflexivas.
- Pares de error relevantes: persona, cambios vocálicos, tiempo, concordancia, gustar/doler, muy/mucho, participios y preposiciones. No basta comparar una clave consigo misma.
- Se mantiene distinción ñ/n; omitir una tilde da aviso de escritura, no acierto exacto. Se admite omitir ¿ en una pregunta breve. Las variantes `Voy a levantarme temprano` / `Me voy a levantar temprano` se aceptan.
- El test compara `web/data.js` con la revisión base para detectar cambios accidentales en recursos conservados.
- Análisis de sintaxis de los módulos JS, rutas de carga de los dos puntos de entrada, exportación autónoma y `git diff --check`.

## Pruebas reales en Chrome remoto

| Prueba | Resultado observado |
|---|---|
| Navegación Listening/Reading/Writing/Vocabulary/Grammar/Study Guide | Las seis vistas cargan con su encabezado |
| Quince bancos nuevos | T01–T15 abren y muestran ocho fichas en su primera tanda |
| Presente: diez conjugaciones | Respuestas correctas; `vivis` produce aviso y 9/10, `vivís` permite el acierto exacto |
| Transformaciones del presente | 5/5 con respuestas escritas; admite punto final y cambio de mayúscula |
| Reconocimiento gramatical | Opciones inglesas en modo English con valores correctos; 4/4 en el presente |
| Edición posterior a corregir | Retira resultado y resumen antiguos al cambiar una respuesta |
| Reflexivos | 5/5, incluida la alternativa `Me voy a levantar temprano` |
| Banco escolar | Selección de significado funcional; cinco huecos 5/5; cambio a fuente independiente con cuatro preguntas |
| Tres textos mixtos | Las tres claves se completaron en formularios: 8/8, 8/8 y 8/8 |
| Idiomas | English, Bilingüe y Español cambian instrucciones y etiquetas; el español que se estudia permanece. Bilingüe se conserva tras recarga |
| Producción | Campo editable, modelo posterior y acción de vaciado disponibles; sin calificación semántica automática |
| Tamaños | Nueve combinaciones en iframes Chrome: presente, banco escolar y textos mixtos, con anchos externos 390/768/1366 px (área interna útil 375/753/1351 por barra). Sin desbordamiento horizontal en esas vistas |

Durante la integración, el navegador permitió detectar y corregir una confusión entre la posición de las consignas bilingües y las opciones de selección. Se añadió una prueba específica del contrato de datos. También se alineó la instrucción de respuesta de la práctica independiente con el inglés utilizado por el autocotejo existente.

## Alcance pendiente

- No se ha probado Safari, un iPad real, el teclado virtual ni un dispositivo táctil físico. Se usan controles nativos, campos etiquetados, foco visible y controles principales con tamaño mínimo existente; eso no equivale a validar accesibilidad completa.
- No hay auditoría formal con lector de pantalla ni contraste de cada combinación de color. El CSS existente se conserva.
- No se han contestado manualmente en navegador los 279 ítems nuevos ni las 472 selecciones léxicas. Se combina revisión lingüística, pruebas de todas las claves/opciones y una muestra funcional en navegador.
- No se han escuchado, regenerado ni sustituido audios. El estado de Listening no cambia.
- Las producciones libres se autocotejan; las claves cerradas evalúan lo indicado por el enunciado y no son un sistema exhaustivo de corrección de cualquier paráfrasis.
- No se ha realizado pilotaje con alumnos. La dificultad y la selección léxica requieren revisión docente y observación de uso.
- GitHub Pages se conserva con su entrada raíz y rutas relativas; Work 06 se revisa por rama/vista privada hasta autorización de fusión.
