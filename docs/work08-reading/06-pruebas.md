# Pruebas ejecutadas y limitaciones

2 de noviembre de 2026. No se atribuyen a Work08 pruebas de otras sesiones.

## Punto de partida

Antes de modificar la plataforma:

- `node tests/content.cjs`: **falló** en la aserción `D.listening.length === 16`; el array histórico estaba vacío. El banco activo se había trasladado a `JC_LISTENING`.
- `node tests/work06.cjs`: **pasó**.
- `node tests/work07.cjs`: **pasó**, con decodificación completa de 16 MP3.

Se corrige únicamente la referencia obsoleta del primer test. Los tests históricos dejan de congelar la interfaz antigua de Reading; el test nuevo valida la ampliación y mantiene protegidas todas las demás áreas.

## Automatizadas finales

| Comando | Resultado | Qué comprueba |
|---|---|---|
| `node tests/content.cjs` | PASS | 15 temas, 26 grupos, respuestas base, evidencia del banco histórico, alternativas, acentos, ñ, concordancia y ausencia de servicios |
| `node tests/work06.cjs` | PASS | 20 áreas gramaticales, 357 ítems y 24 huecos mixtos; 499 entradas léxicas, progresión y contratos de interfaz |
| `node tests/work07.cjs` | PASS | 16 MP3 decodificados con hashes/duraciones; 96 preguntas y 96 combinaciones de actividad/modo/idioma; reinicio y regresiones de áreas no Reading |
| `node tests/work08.cjs` | PASS | 24 actividades, 121 preguntas, 194 unidades; evidencia textual y correspondencia de imágenes, sumas y lenguas fijas; 144 combinaciones (24×2×3), soluciones tras entrega, aciertos/errores, revisión parcial/incompleta, edición, reinicio, escape de HTML y protección de datos/interfaces ajenos a Reading |
| `node --check web/reading-data.js`, `node --check web/reading-ui.js`, `node --check web/app.js` | PASS | Sintaxis de los módulos nuevos y de la integración |
| `node scripts/export-preview.cjs` | PASS | Exportación autónoma incluye Reading y audios existentes |
| Compilación con `vm.Script` del script combinado exportado | PASS | Se comprueba una única etiqueta inline y presencia del nuevo banco |
| `git diff --check` | PASS | Sin errores de whitespace en los cambios |

Los tests se desarrollaron y corrigieron antes de la pasada final: dos aserciones de la nueva prueba necesitaban convertir arrays entre contextos VM y proporcionar texto en el stub de navegación. No fueron fallos ocultos de contenido. La versión final queda verificada con los comandos indicados.

## Navegador real: Chrome de la sesión

- Se abrieron las 24 rutas y se comprobaron título y número de preguntas de cada una.
- Festival: cuatro respuestas en español, entrega, revelado, revisión y total 25/25; al rebajar una unidad de 5 a 2 el total cambió a 22/25. Comprobación de actualización inmediata y botón Recalculate score. Después se precisó el desglose de fechas sin variar su total; la pasada automatizada final valida el desglose definitivo.
- Acciones: selección de seis números, envío con **Enter** y corrección automática **12/12**. Cambiar la navegación a inglés conservó las seis consignas españolas.
- Catálogo: filtro C muestra **5** actividades.
- Navegación a Listening, Writing, Vocabulary, Grammar y Study Guide: las cinco cargaron con sus encabezados correspondientes.
- Revisión visual de las ilustraciones, documento turístico y campos de respuesta. [Captura](captura-reading.jpg).

## Pantallas estrechas

Se cargó el documento turístico en iframes de 390 y 768 píxeles en Chrome. Con barras de desplazamiento, las anchuras útiles fueron 375 y 753. En ambos casos `scrollWidth === clientWidth`; no se detectaron elementos de main fuera del borde derecho. Se verificó el apilado y la legibilidad del documento con las preguntas debajo en esas anchuras.

No se afirma haber usado un iPad o iPhone físico, Safari, VoiceOver ni un teclado táctil real. Los controles nativos, etiquetas, foco visible, tamaños mínimos y `touch-action` están preparados, pero el pilotaje táctil y de tecnologías de apoyo queda para revisión del profesor. Las comprobaciones de anchura no certifican por sí solas accesibilidad completa.

## Límites educativos y documentales

- Sin pilotaje ni calibración de dificultad con estudiantes. La naturalidad y las soluciones se revisan durante la autoría y se cotejan con la evidencia, pero queda pendiente la aprobación docente.
- Los selectores de abiertos son autoevaluación: no pueden confirmar semánticamente si lo que escribió el alumno es correcto, ni certificar la lengua utilizada. No se añade IA ni comparación exacta que rechace paráfrasis válidas.
- No se reproduce una simulación íntegra SEC, una rúbrica anual completa de crédito parcial ni se predice el formato de 2027.
- SEC devuelve 403; 2026 se apoya en el anexo de adjuntos leído en Work03, y Reading 2022 en su auditoría más el marking scheme accesible. Se documenta en el registro de fuentes.
- Asociación visual y perfil comercial continúan con cobertura parcial según la matriz. No se declara que 24 actividades agoten todas las necesidades lectoras.
