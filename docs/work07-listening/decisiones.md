# Decisiones pedagógicas y técnicas

## Investigación antes de editar

- Main `44fdb10` incluía Work 05, Work 06 y la aclaración de PR #6. Las ocho filas de `web/data.js` eran metadatos `pending-jc-questions`: sin reproductores habilitados, preguntas JC ni MP3 locales. No se confundió esta situación con ausencia de los originales OL.
- Work 01: informe original de `docs/investigacion/Informe_auditoria_Preparacion_JC.docx`, especialmente patrones de Listening, precisión y conservación de referentes. Work 02: `docs/auditoria-ol/` (informe, inventario, control de calidad y propuesta). Work 03: `docs/validacion-seleccion/03-primera-seleccion-pedagogica.md`, informe, comparación 2022–2026 y anexo 2026. Work 04: diseño combinado en su documentación y arquitectura posterior. Work 05: inventario, arquitectura y pendientes. Work 06: README, pruebas, límites y registro de decisiones. PR #6 se consultó directamente y se contrastó con main.
- Las auditorías existentes, no una nueva descarga de exámenes, fundamentan esta autoría. No se modifican los formatos oficiales, las puntuaciones SEC ni el marco de la promoción. No se presume el formato de 2027.
- Se conservan las ocho seleccionadas en Work 03: everyday-01, weather-01, everyday-02, culture-02, people-01, news-01, everyday-03, weather-02.
- No se encontró una segunda lista definitiva de ocho en los documentos del repositorio. Las ocho nuevas se presentan expresamente como propuesta Work 07: people-02, culture-01, news-02, everyday-04, culture-03, people-03, culture-04, everyday-05.

## Razón de las incorporaciones

| Fuente nueva | Aportación respecto de la selección inicial |
|---|---|
| Diego (people-02) | Familia, comida con ingredientes, premio no monetario y finalidad del viaje. Acceso breve. |
| Fallas (culture-01) | Fecha concreta, museo, oposición biblioteca/comedor y actividad pasada frente a presente. |
| Noticias locales (news-02) | Ropa real del guion, donaciones, fecha límite y parada alternativa. |
| Excursión (everyday-04) | Precio por persona/ida y vuelta, lesión causal, ropa, duración y cita frente a salida. |
| Granada (culture-03) | Taller, comida, precio, condición de edad, reserva y alternativa por lluvia. |
| Elena (people-03) | Profesiones, cambio de vida, motivos y contraste entre salario y satisfacción. |
| Cine (culture-04) | Tarifas, permiso/prohibición, horario relativo y efectos diferentes de la lluvia. |
| Trabajo de verano (everyday-05) | Horario laboral, salario, ahorro, incompatibilidad de viaje y plazo con motivo. |

No se añade otro boletín meteorológico por aumentar el número; se busca más variedad. Se reservan teatro/invento/Canarias/alimentos para futuras decisiones sin declararlos inadecuados ni rechazados por sonido.

## Secuencia y formatos

Cuatro actividades iniciales, siete de consolidación y cinco de ampliación. Los niveles son estimaciones documentales, no CEFR certificados ni resultados observados. Dentro de cada fuente: dos preguntas de reconocimiento, dos de extracción y dos con relaciones o detalles más exigentes, sin pretender una escalera rígida. En fuentes largas hay detalles iniciales accesibles.

Cada actividad combina dos opciones múltiples españolas y cuatro respuestas abiertas. Esto trabaja acceso y extracción precisa sin copiar los cinco ítems OL. El banco tiene 32 preguntas cerradas y 64 abiertas. Las preguntas abiertas no se corrigen con coincidencia literal: modelo, evidencia, explicación y autocotejo de detalle evitan rechazar paráfrasis correctas. La cifra 0–2 solo valora las dos cerradas; no representa una nota SEC.

Práctica guiada: enunciados y ayudas según el idioma elegido, pistas metacognitivas sin clave, reproducción libre. Respuesta inglesa recomendada, española admisible para aprender. Práctica de examen: consigna inglesa fija, opciones españolas, respuestas abiertas en inglés, sin pistas ni transcripción durante el intento. Interfaz English/Bilingüe/Español alrededor de estas condiciones fijas. El alumno controla las reproducciones y recibe recomendación de hasta tres; no se programa un examen completo ni la pausa SEC Q8.

Ambos modos usan el mismo contenido. Se advierte que repetir con menos apoyo no es una prueba inédita o independiente. Cambiar de modo reinicia el intento. Las seis respuestas son necesarias antes de mostrar soluciones; no se revela la transcripción mediante un desplegable disponible desde el inicio. El intento entregado queda bloqueado para que una edición no deje feedback obsoleto. Reiniciar elimina respuestas, soluciones, autocotejos y posición de audio.

## Evidencia y límites lingüísticos

Las transcripciones se extraen del bloque `#transcript-text` de las páginas OL fijadas en la revisión indicada. Se retiran exclusivamente etiquetas `[Qx]` y marcado HTML; se normalizan espacios. No se crea una transcripción nueva por inferencia. Las citas son literales de ese guion normalizado. Las preguntas con información repartida incluyen ambas citas.

Horas relativas: everyday-03, seis menos media hora = 17:30; culture-04, diez menos media hora = 21:30. No se pide aritmética monetaria inventada cuando el total se ofrece. «Antes del jueves» se conserva como antes del jueves, sin ampliar el plazo. «Menores de dieciséis» no se traduce como 16 o menos.

No se preguntan colores/tallas ausentes ni ingredientes deducidos por cultura general. news-01 conserva su aviso de ficción en la grabación y transcripción; los otros boletines también son materiales didácticos del banco, no noticias verificadas ni recomendaciones meteorológicas actuales.

## Integración y accesibilidad

`listening-data.js` mantiene fuente, duración, hash, transcripción, preguntas, respuestas, evidencia, pistas y destrezas. `listening-ui.js` aísla estados y renderizadores. `data.js` ya no conserva la antigua lista inactiva; el módulo nuevo asigna las 16 actividades a `JC_DATA.listening`.

Reproductor HTML nativo, sin autoplay, con rótulo, estado de carga/error y enlace MP3. Campos etiquetados, fieldsets/legends, radios nativos, foco tras acciones, controles de opción de 48 px y diseño de ancho adaptable. La posición de audio se conserva en cambios de idioma y revisión; no se reanuda automáticamente. La vuelta a una audición puede recuperar su posición de sesión; el reinicio la pone a cero. No se recoge audio, nombre ni respuestas en servidor.

La entrada raíz y `web/index.html` resuelven el MP3 respecto al archivo JS, no respecto a una ruta supuesta. La exportación de revisión incrusta los MP3 sin alterar sus bytes para funcionar sin recursos remotos. La vista privada es una copia de revisión; main/GitHub Pages permanecen sin cambios hasta aprobación.
