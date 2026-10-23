# Pruebas y límites de Work 06

22 de octubre de 2026. Los resultados distinguen datos, lógica, navegador y dispositivo. No constituyen pilotaje pedagógico ni garantía de resultados de examen.

## Comprobaciones automatizadas

- `node tests/content.cjs`: pasa la regresión Work 05. Conserva quince temas, 26 grupos/149 entradas y catorce grupos de reserva, 36 preguntas lectoras, 21 preguntas de las tres situaciones previas, Q16/formulario, tareas Q17/Q18 y los 28 huecos anteriores.
- `node tests/work06.cjs`: pasa quince bancos/499 entradas (376 contextualizadas + 122 heredadas + una referencia compartida), 90 huecos, 64 preguntas con evidencia literal en su fuente, veinte talleres/357 ítems y tres textos/24 huecos. Comprueba etiquetas esenciales/ampliadas, opciones correctas, referencias, contratos de renderizado y alternativas reflexivas.
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

## Verificación adicional del encargo ampliado

Se probaron en Chrome los cinco talleres específicos nuevos: soler (8/8 formación y 5/5 corrección, con sujeto explícito alternativo), perfecto compuesto (10/10), imperfecto (8/8), futuro simple (8/8) y estar + gerundio (9/9). Se comprobó el texto que limita el resultado al intento y no certifica dominio ni comprensión sonora. Las consignas nuevas se mostraron en inglés manteniendo las formas objeto de aprendizaje en español.

La regresión actual incluye veinte talleres, las opciones correctas, metadatos receptivos/productivos de las 499 entradas, las 90 claves léxicas y la evidencia de las 64 preguntas. Las variantes naturales seleccionadas se registran en las claves; una respuesta libre no se reduce a coincidencia literal.

Se probaron también en Chrome los ocho huecos de compras (8/8, incluida la alternativa «sienta»), la aparición del segundo anuncio de uniformes con sus cuatro preguntas y los enlaces entre rutinas, soler y reflexivos. Otras nueve comprobaciones de ancho externo 390/768/1366 px sobre soler, perfecto y T09 no detectaron desbordamiento horizontal. Son tamaños de iframe en Chrome, no dispositivos reales.

## Alcance pendiente

- No se ha probado Safari, un iPad real, el teclado virtual ni un dispositivo táctil físico. Se usan controles nativos, campos etiquetados, foco visible y controles principales con tamaño mínimo existente; eso no equivale a validar accesibilidad completa.
- No hay auditoría formal con lector de pantalla ni contraste de cada combinación de color. El CSS existente se conserva.
- No se han contestado manualmente en navegador los 381 ítems nuevos ni las 499 selecciones léxicas. Se combina revisión lingüística, pruebas de todas las claves/opciones y una muestra funcional en navegador.
- Work 06 no volvió a escuchar, regenerar ni sustituir audios. Según aclaración del profesor de 23-10-2026, los 25 MP3 OL ya habían sido escuchados y aprobados durante su desarrollo; lo pendiente para JC son preguntas, respuestas y comprobación técnica de integración. La auditoría JC no realizó una escucha independiente, y el audio oficial SEC 2026 continúa sin escucha documentada.
- Las producciones libres se autocotejan; las claves cerradas evalúan lo indicado por el enunciado y no son un sistema exhaustivo de corrección de cualquier paráfrasis.
- No se ha realizado pilotaje con alumnos. La dificultad y la selección léxica requieren revisión docente y observación de uso.
- GitHub Pages se conserva con su entrada raíz y rutas relativas; Work 06 se revisa por rama/vista privada hasta autorización de fusión.
