# Pruebas técnicas y revisión de contenido

26-10-2026. No se equiparan pruebas técnicas, revisión documental y escucha humana.

## Comprobaciones automatizadas ejecutadas

| Prueba | Resultado |
|---|---|
| `node tests/content.cjs` | PASS. Se conservan 15 temas, 26 grupos/149 ítems, 8 lecturas/36 preguntas y actividades originales anteriores. Catálogo actualizado de 16 audiciones. |
| `node tests/work06.cjs` | PASS. 20 áreas gramaticales/357 ítems + 24 huecos mixtos, 499 entradas léxicas, 90 huecos y 64 preguntas con evidencia. La aserción histórica de conservación excluye ahora Listening, que es el alcance autorizado. |
| `node tests/work07.cjs` | PASS. 16 rutas únicas; 16 hashes SHA-256 idénticos a los originales, duraciones ffprobe, decodificación completa ffmpeg sin errores; 96 preguntas con evidencia literal. |
| Contratos de interacción de Work 07 | PASS. 16 × 2 modos × 3 idiomas = 96 combinaciones. Intento vacío, completo correcto, opciones erróneas, bloqueo tras entregar, reinicio y puertas de revelado. Las cuatro abiertas se autocotejan: no se inventa un aprobado automático. |
| Evidencia textual | Cada pasaje citado pertenece al guion OL correspondiente; cinco preguntas con datos en segmentos separados incorporan las dos citas. Revisión de claves, referentes, unidades, negaciones y horas relativas. |
| `node --check` | PASS en módulos y scripts nuevos/modificados. |
| `git diff --check` | PASS. |
| `node scripts/document-listening.cjs` | Genera inventario, matriz, preguntas y procedencia estructurada a partir del banco integrado. |
| `node scripts/export-preview.cjs` | Exportación Work07 HTML autónoma con los 16 MP3 incrustados. No necesita servicios remotos. |
| Integridad de otras áreas | Comparación de datos excluyendo Listening y de funciones Reading/Writing/Vocabulary/Grammar/Study Guide con main `44fdb10`. Módulos de actividades y Grammar/Vocabulary idénticos. Solo cambia en inicio el estado disponible de Listening, además de los enlaces de carga/ruta compartidos. |
| OL | `git status --porcelain` vacío. No hay commits ni cambios en el repositorio fuente. Unas Tapitas no se modifica. |

## Navegador real: Chrome remoto, vista de revisión

Se usó `http://terminal.local:4173/` mediante la infraestructura de preview existente, con la entrada raíz real y recursos estáticos de `web/`.

- Catálogo: visibles las 16 fichas en el orden documentado, tema, duración, dificultad y destrezas.
- **16/16 reproductores:** apertura de cada actividad por navegación visible; reproducción iniciada con control nativo (Pablo, tiempo) o tecla Espacio con foco en audio (resto). Se comprobó `paused=false`, tiempo avanzando, duración finita y ausencia de `MediaError`. La ruta `currentSrc` de cada uno corresponde al archivo del inventario. Esta prueba acredita carga/reproducción, no una escucha semántica íntegra nueva.
- Duración del reproductor: Chrome descuenta unas centésimas de relleno MP3 respecto de ffprobe. Ejemplo Pablo: 50,805 s de medios frente a 50,834 s técnicos. No cambia el archivo ni el redondeo mostrado.
- Pablo: intento sin respuestas bloquea soluciones y transcripción; se eligen 17/en autobús y se rellenan las cuatro abiertas; la entrega muestra 2/2 únicamente para las cerradas, conserva respuestas y habilita cuatro autocotejos y evidencia. Reinicio limpia la actividad.
- Idiomas: Bilingüe y English sobre Pablo; Español sobre trabajo de verano. La selección cambia la interfaz y preguntas guiadas; en examen las consignas/preguntas inglesas permanecen fijas con opciones españolas. Se verificó `aria-pressed` false/true y cero pistas en la práctica de examen.
- Teclado: reproducción con Espacio; controles nativos de selección y escritura. Ratón: navegación, radios, entrega, reinicio y cambio de idioma/modo.
- Al cargar un reproductor nuevo, el árbol accesible puede mostrar brevemente medios sin datos; después cambia a audio listo. En la verificación final de examen: readyState 4, sin error, posición cero. No se confunde un estado transitorio de carga con un fallo persistente.
- Revisión visual de escritorio: sin solapamientos; reproductor ancho y tarjetas/preguntas legibles. Los controles de audio se mantienen nativos.

## Límites y mejoras futuras

- No se ha probado en iPad/Safari físico, ni un dispositivo táctil real; no se presenta la prueba de teclado Chrome como prueba táctil. El diseño evita autoplay, librerías de audio y eventos exclusivos del ratón, y usa controles nativos, pero requiere prueba docente en su dispositivo.
- No hay auditoría formal de lector de pantalla ni validación exhaustiva WCAG.
- No se reprodujeron completos los 16 MP3 en navegador: hubo reproducción iniciada y tiempo avanzado; la decodificación íntegra corresponde a ffmpeg. La aprobación sonora previa pertenece al profesor y no se repitió.
- Las 96 combinaciones se prueban en el módulo con un DOM simulado; no se afirma haber contestado las 96 preguntas manualmente en los tres idiomas en navegador. La muestra real anterior complementa los contratos.
- Las preguntas están verificadas contra los guiones originales asociados a los MP3 aprobados; no se afirma cotejo independiente palabra por palabra de señal y guion. Si el profesor observa una discrepancia puntual, debe corregirse el ítem afectado.
- No hay pilotaje de dificultad ni calificación oficial SEC; las abiertas requieren autocotejo honesto o revisión docente. Conviene ampliar fuentes para colores/tallas, direcciones y descripción física.
- Ambos modos comparten preguntas; una repetición no mide transferencia a una fuente inédita. Se declara expresamente al alumno.
