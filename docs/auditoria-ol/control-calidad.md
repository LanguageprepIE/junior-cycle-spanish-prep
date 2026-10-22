# Control de calidad y verificaciones pendientes

22 de octubre de 2026 · Revisión OL `d45e23a31c4a63145503389570071933d62556cb`

## Comprobaciones realizadas

| Comprobación | Resultado | Alcance |
|---|---|---|
| Documentación JC previa | Ocho documentos consultados, incluidos dos DOCX y un XLSX | Base aprobada, sin nueva auditoría SEC íntegra |
| Inventario | 128 identificadores únicos, todas sus rutas existen | Unidades de auditoría heterogéneas |
| Listening | 25 actividades y 131 preguntas | Guiones, opciones, claves y evidencia documental |
| Reading | 20 textos y 132 preguntas únicas | Cuarenta modalidades; coincidencia de texto comprobada en los veinte pares |
| Vocabulary | 40 grupos, 223 ítems que cubren 221 entradas originales | Lectura de entradas, ejemplos, traducciones, alternativas y referencias |
| MP3 locales | 25 decodificaciones completas sin error | FFmpeg y metadatos FFprobe; no escucha |
| MP3 publicados | 25 HTTP 200, SHA256 idéntico al repositorio | Accesibilidad y copia publicada |
| Páginas publicadas | 73 HTTP 200, contenido idéntico al repositorio | 40 Reading, 25 Listening y ocho páginas de secciones/plan |
| Sintaxis inline | Cero errores en páginas revisadas | Compilación con Node, sin prueba de navegador |
| Test de vocabulario del repositorio | Superado | 40 grupos, cobertura, formatos, alternativas, respuestas y enlaces; simulación DOM |
| Test de Listening del repositorio | Superado | Modos, corrección, reinicio, evidencia, 23 selectores y audios preservados; simulación DOM |
| Test del Study Plan | Superado | 24 semanas, 96 tareas, 197 enlaces, tres ritmos y persistencia simulada |
| Test del temporizador | Superado | Inicio, pausa, reanudación, reinicio, descanso y finalización |
| Test del tracker | Superado | Seis páginas A4, 72 casillas de ritmo, 96 de tareas y límites de texto |
| Fallo de reflexivos | Reproducido en función original | Resultado: «Yo voy a levantarse a las siete» |
| Matriz | Nueve hojas, tablas con filtros, cabeceras y dos columnas congeladas | Resumen calculado con COUNTIF; valores conciliados y sin errores de fórmula detectados |
| Revisión visual de matriz | Previsualizadas las nueve hojas | Tabla de detalle desplazable; textos y guiones completos también en anexo |
| Integridad OL | Árbol de trabajo sin cambios | Ninguna modificación de recursos o código OL |

Los tests que comparan con revisiones antiguas necesitaron recuperar el historial de Git de la copia de consulta. El fallo inicial por falta de historial no se atribuye a las actividades; tras recuperar el historial pasaron sin cambiar sus archivos.

## Qué falta para cerrar verificaciones

1. **Escucha de los 25 MP3 OL:** inteligibilidad, pronunciación, ritmo real, pausas, voces y correspondencia íntegra con el guion. Se puede registrar el dictamen posterior en la matriz sin alterar su clasificación histórica.
2. **Escucha de los MP3 oficiales JC:** continúa pendiente en el proyecto. No se ha dado por realizada.
3. **Navegador real e iPad/Safari:** reproducción, persistencia, foco e interacción. El intento de instalar navegador local falló por descarga no utilizable; las pruebas DOM y HTTP no sustituyen esa verificación.
4. **Actualidad del texto Tesla:** el enlace Reuters del original no pudo abrirse; la cobertura externa concordante no cierra cada detalle. No declarado falso ni plenamente verificado.
5. **Formato vigente:** revisar examen 2026 y documentos oficiales aplicables antes de fijar simulaciones y criterios de una futura plataforma.
6. **Pilotaje:** la dificultad es estimada por revisión pedagógica; no hay datos de acierto o tiempos de alumnos.

La auditoría documental cubre el inventario completo identificado. Las limitaciones anteriores impiden presentarla como validación sonora o funcional integral. No se han fabricado audios, transcripciones ni actividades para sustituir esas comprobaciones.

## Cómo actualizar la matriz

- Filtrar `Inventario` por categoría, tema, dificultad, dictamen, prioridad y verificación.
- Consultar `Listening` y `Reading` para dictámenes de fuente y preguntas por separado; usar `Preguntas` para cada ítem original.
- Consultar `Vocabulario` para las 223 unidades de práctica y su entrada de origen, y `Lagunas` para distinguir banco organizado de presencia incidental en otros materiales.
- `RetosWriting` desglosa los ocho retos incluidos en W10: no son ocho recursos adicionales al inventario principal.
- Los recuentos del resumen se calculan sobre las 128 filas de esta edición. Las tablas admiten filas; al ampliar el inventario debe ampliarse también el rango explícito de las fórmulas de resumen.
- Mantener la fecha y la revisión OL al registrar una comprobación nueva. A, B o C no sustituyen el campo de verificación.

## Archivos de evidencia

[MP3](verificacion-audios.json) · [Páginas y sintaxis](verificacion-paginas.json) · [Recuentos](resumen-auditoria.json) · [Detalle individual](anexo-inventario.md)
