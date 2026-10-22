# Pruebas realizadas y límites

22 de octubre de 2026 · Work 05

## Comprobaciones automatizadas

`node tests/content.cjs` supera:

- 15 bloques únicos; 26 grupos y 149 ítems (109 entrada + 40 consolidación); 14 grupos en reserva; asignación sin doble conteo.
- Correspondencia palabra/hueco y alternativas de todos los grupos integrados; respuestas exactas, vacío, error, concordancia y escritura. «salon» se registra con escritura pendiente, «ano» no equivale a «año» y «simpático» no sustituye a «simpática».
- Ocho lecturas/36 preguntas; evidencia textual existente por cada pregunta; referencia final del instituto adaptada a JC.
- Tres situaciones con contextos guiado e independiente distintos; 21 preguntas con evidencia, 13 ítems de acceso/compleción y pautas de uso propio.
- Siete talleres/28 respuestas gramaticales; diez huecos y banco Q16 no ordenado como sus soluciones; seis campos de formulario con alternativas; cinco/cinco/ocho consignas en Writing.
- Ausencia de llamadas de red, analítica o reproductores de audio habilitados en la aplicación.

También se comprobó sintaxis de los archivos JavaScript. La versión autónoma generada incluye CSS y los cuatro scripts, sin enlaces a scripts externos, y se abrió en Chrome. No depende de un servidor para cargar datos mediante fetch.

Se corrigieron durante la revisión una diferencia de mayúscula en una cita de evidencia y dos comportamientos de interfaz: el salto al contenido no debe activar una ruta inexistente y la edición de respuesta no debe dejar un resultado anterior visible. Las instrucciones del acceso A/B/C se hicieron explícitas.

## Pruebas reales en navegador

Se utilizó **Chrome remoto**, controlado mediante la API de navegador, con la vista previa interna. No es una simulación DOM ni una escucha auditiva.

| Prueba | Resultado observado |
|---|---|
| Navegación por las seis áreas | Seis encabezados y vistas correctos; sin ruta inexistente |
| Vocabulary | Quince bloques y veintiséis enlaces de grupos recorridos; todos muestran sus palabras |
| Selector English / Bilingüe / Español | Cambia interfaz real, conserva el español de aprendizaje y mantiene preferencia al recargar |
| Simulación Q16 | Diez respuestas correctas producen 10/10 exactas; consigna inglesa permanece igual al cambiar idioma; respuestas conservadas |
| Vocabulario casa | Alternativa baño válida; salón sin tilde produce recordatorio y 5/6 exactas; corregirlo retira resultado obsoleto y produce 6/6 |
| Recognise | Selección de significado comprobada; un acierto y restantes sin responder se muestran como 1/6, sin marcar dominio |
| Reading casa | Respuesta libre, revelado de modelo/evidencia y revisión propia disponibles; no nota automática |
| Q17 | Guardar borrador explícitamente, conservarlo al cambiar modo/idioma, recuperar tras recarga y borrar copia guardada; sin borrar texto visible |
| Simulación Q17 | Cinco consignas españolas estables entre modos de idioma y modelos/pistas ausentes durante intento |
| Grammar planes | Cuatro respuestas válidas producen 4/4; reinicio vacía campos; modelo levantarme correcto |
| Seguimiento | «Con ayuda» de T04 guardado y visible después de recarga; registro borrable |
| Transferencia de billetes | El contexto cambia de autobús/Puerto Claro a tren/Valleverde; fase Use permite respuesta propia y autocotejo |
| Adaptabilidad | Marcos reales de navegador con anchuras declaradas 390, 768 y 1366 px: portada, Writing Q18 y Vocabulary numérico sin desbordamiento horizontal interno |
| HTML autónomo | La vista Q16 muestra sus diez campos sin scripts externos; portada y selector funcionan |

Las anchuras se probaron con iframes del mismo origen para dar un viewport real al CSS. El área útil descuenta la barra de desplazamiento. No son emulaciones certificadas de dispositivos ni pruebas en Safari, iPadOS o teléfonos físicos. El arnés de QA no forma parte de la web entregada.

## Límites conservados

- No se ha escuchado directamente ninguna de las ocho audiciones candidatas. Su audio no queda aprobado por tener ruta y duración documentadas. La escucha de grabaciones oficiales también sigue pendiente.
- No se ha pilotado con alumnado. Dificultad y carga son valoraciones pedagógicas para revisión del profesor.
- No se realizó una auditoría WCAG completa; hay foco visible, etiquetas, navegación semántica, instrucciones claras y controles nativos. Debe completarse con uso real y tecnologías de apoyo.
- No existe calificación semántica automática de respuestas libres ni una rúbrica anual universal. Las simulaciones Writing son originales y sus resultados no certifican una nota de examen.
- Faltan bancos y géneros según inventario; no se presentan las quince categorías como quince unidades acabadas.
- No se publicó una URL externa ni se conectó infraestructura nueva. La vista interna no se entrega como enlace público. Para publicar en un destino nuevo o crear el repositorio fuente que exige Sites se necesita la autorización que Work 05 reserva.

## Integridad y alcance

El PR añade únicamente la web JC, pruebas, exportador y documentación de su funcionamiento; actualiza README/decisiones para reflejar la autorización de Work 05. Los criterios aprobados y las matrices históricas no se modifican. OL permanece sin cambios. No hay cuentas, bases de datos, analítica, materiales SEC publicados ni audio regenerado.
