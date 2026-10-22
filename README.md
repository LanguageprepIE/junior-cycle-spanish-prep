# Preparación JC — Junior Cycle Spanish

Proyecto de investigación, planificación y recursos para preparar al alumnado de **3rd Year** para el examen final de **Junior Cycle Spanish** en Irlanda.

> **Estado:** Work 01–05 incorporados a main; Work 05 mediante PR #4. Work 06 amplía Grammar y Vocabulary en una rama para revisión, sin fusionar.

## Plataforma JC — primera versión

- Código estático en [web/](web/), con seis áreas y tres modos de idioma.
- [Work 06: cobertura anterior/nueva, inventario y pruebas](docs/work06-grammar-vocabulary/README.md).
- [Arquitectura y ejecución](docs/work05-plataforma/arquitectura.md).
- [Inventario implementado y pendiente](docs/work05-plataforma/inventario.md).
- [Pruebas y límites](docs/work05-plataforma/pruebas-y-limites.md).
- [Siguiente iteración y publicación](docs/work05-plataforma/pendientes.md).
- Para revisar sin servidor: `node scripts/export-preview.cjs` genera un HTML autónomo en `artifacts/`.

La implementación está autorizada expresamente por Work 05. No se modifica OL ni se publica infraestructura nueva. La fusión y un destino de alojamiento adicional requieren aprobación expresa.

## Objetivos
- Analizar exámenes oficiales y criterios de corrección de la SEC, con referencia curricular NCCA.
- Identificar destrezas prioritarias en Listening, Reading y Writing.
- Auditar, sin modificar, los recursos de [LC Ordinary Level](https://github.com/LanguageprepIE/informal-letter-ol) para determinar qué se puede reutilizar o adaptar.
- Diseñar posteriormente recursos accesibles, rigurosos y motivadores; cualquier desarrollo técnico requerirá autorización expresa.

## Documentación
- [Criterios pedagógicos — versión 1.0 aprobada](docs/criterios-pedagogicos/criterios-v0.1.md)
- [Estado de la investigación y fuentes pendientes](docs/investigacion/estado-investigacion.md)
- [Plan de auditoría de recursos OL](docs/auditoria-ol/plan-auditoria.md)
- [Registro de decisiones](docs/decisiones.md)

## Principios de trabajo
1. Distinguir hechos verificados, interpretación pedagógica y decisiones acordadas.
2. No confundir Junior Cycle con Leaving Certificate Ordinary Level.
3. Evaluar textos/audios y preguntas por separado al auditar OL.
4. Priorizar la comunicación natural y la progresión de dificultad.
5. No crear web, despliegues, ni modificar otros repositorios sin permiso.

**Documentos originales de Work incorporados:**
- [Informe de auditoría 2022–2025](docs/investigacion/Informe_auditoria_Preparacion_JC.docx)
- [Matriz completa](docs/investigacion/Matriz_completa_Preparacion_JC.xlsx)
- [JC Writing Toolkit — informe de diseño](docs/investigacion/JC_Writing_Toolkit_Informe_diseno.docx)

Examen y marking scheme 2026: validación documental incorporada en Work 03. Pendiente: validación auditiva directa de los MP3 oficiales/OL, pilotaje y comprobaciones de dispositivos según alcance. Los documentos históricos conservan el estado de su propia fase.
