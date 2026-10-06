# Plan del sitio web — Grupo Quantum

Versión inicial: 6 de octubre de 2026 · Rama de trabajo: `dev`

## 1. Objetivo y público

Construir una presencia institucional que transmita solvencia técnica y cercanía a responsables de tecnología, compras y dirección de empresas argentinas de más de 50 empleados, además de organismos públicos. El resultado principal buscado es una consulta comercial calificada por WhatsApp o correo electrónico; el sitio no será una tienda en línea.

La propuesta de valor se basará en lo documentado por Grupo Quantum: asesoramiento, provisión de equipamiento y servicios informáticos, rapidez de respuesta y respaldo técnico. La experiencia de más de 14 años corresponde al **equipo directivo**, no se presentará como antigüedad de la empresa.

## 2. Dirección visual y editorial

- **Estilo:** tecnológico, minimalista e institucional. Azul noche, azul eléctrico y cian en la apertura; fondos claros y fríos en las secciones de lectura para mantener contraste y descanso visual.
- **Tipografía:** sans serif contemporánea, con titulares breves y cuerpo cómodo de leer. La identidad debe verse precisa, sin saturación de efectos.
- **Recursos:** geometría limpia, líneas de conexión discretas y dispositivos reconocibles. Sin emoticones. Las imágenes, íconos y animaciones deben responder a la oferta real de la empresa.
- **Tono:** claro, experto y concreto. Evitar afirmaciones grandilocuentes y detalles técnicos sin contexto comercial.
- **Marca:** el JPEG actual de 298 × 263 px sirve para la pantalla provisoria. Para el sitio definitivo se necesita el logo vectorial o una versión de mayor resolución.

## 3. Mapa del sitio propuesto

| Página | Propósito y contenido principal | Acción principal |
| --- | --- | --- |
| `/` Inicio | Presentar oferta, sectores, ventajas comprobadas y una síntesis de la empresa. | Solicitar asesoramiento |
| `/quienes-somos` | Trayectoria del equipo, forma de trabajo, misión y valores, con texto editado para lectura web. | Contactar |
| `/productos` | Categorías de equipos: puestos de trabajo, impresión y digitalización, infraestructura y energía, conectividad y colaboración. PDF como complemento cuando exista. | Consultar por equipos |
| `/servicios` | Soporte y mantenimiento, redes, ciberseguridad, energía, colaboración y videoconferencia. Alcance concreto por servicio. PDF como complemento cuando exista. | Consultar por servicios |
| `/soluciones` | Necesidades y soluciones para energía y petróleo, farmacéutica y alimentos, logística y retail, universidades y sector público. | Hablar de un proyecto |
| `/marcas` | Fabricantes con los que trabaja Grupo Quantum, una vez validados nombres, relaciones y uso de logos. | Consultar disponibilidad |
| `/contacto` | Correo, WhatsApp, teléfono y dirección confirmados; vías claras para pedir una cotización. | Iniciar conversación |

La página de inicio tendrá este recorrido: hero → productos y servicios → sectores → por qué Grupo Quantum → marcas → contacto. Las páginas de categoría o sector individuales se crearán después de disponer de información específica suficiente; no conviene publicar páginas casi vacías sólo para captar búsquedas.

## 4. Hero dinámico

**Mensaje inicial propuesto**

- H1: «Tecnología para que tu empresa avance».
- Bajada: «Equipamiento, infraestructura y servicios informáticos para empresas, con asesoramiento y respaldo técnico en todo el país».
- Acciones: «Explorar soluciones» y «Hablar con un asesor».

**Secuencia visual base**

1. La cámara avanza suavemente hacia un puesto de trabajo con notebook y monitor.
2. El recorrido fluye hacia una sala de videoconferencia con pantalla y cámara.
3. Termina en un espacio de infraestructura con rack y access point. Trazos de luz muy discretos conectan los tres ámbitos.

**Dirección confirmada:** oficina 3D estilizada en perspectiva, sin personas ni marcas de terceros. El recorrido debería durar aproximadamente 6–8 segundos y detenerse; habrá control para pausar o volver a reproducirlo. El texto y los botones permanecerán estables, fuera de la animación. La escena será decorativa y no contendrá información indispensable.

La producción preferida es una animación prerenderizada y optimizada, acompañada por una imagen fija de la misma composición. Así se logra el aspecto de motion graphics sin cargar una escena 3D interactiva en cada dispositivo. El móvil puede usar un encuadre estático más cerrado. Quienes activen «reducir movimiento» verán la imagen fija. No habrá audio automático ni parpadeos.

Antes de producir el hero se definirá un storyboard con tres cuadros, el estilo definitivo de la oficina y los modelos visuales de los equipos. Se usarán representaciones genéricas hasta contar con material y autorizaciones de fabricantes.

## 5. Implementación propuesta

El sitio definitivo será multipágina y estará prerenderizado como HTML para favorecer velocidad, indexación y mantenimiento. Astro es una opción adecuada para este alcance: permite páginas estáticas, componentes reutilizables y JavaScript sólo donde haga falta. La animación 3D se producirá como recurso visual optimizado, con imagen de respaldo; no necesita un motor 3D en tiempo real. `dev` alojará el trabajo y las pruebas; `main` recibirá la versión aprobada para producción.

## 6. SEO: páginas útiles y rastreables

- Cada página tendrá una intención de búsqueda propia, título, descripción, H1 y URL claros en español de Argentina. El texto del hero, las categorías y los servicios estarán en HTML, nunca sólo dentro de un video o imagen.
- La información principal responderá con precisión qué se ofrece, a quién, en qué zonas y cómo solicitar una cotización. Habrá enlaces internos entre producto, servicio y sector relacionados.
- Los PDF de productos y servicios complementarán las páginas HTML; no reemplazarán el contenido rastreable.
- Se generarán `sitemap.xml`, `robots.txt`, URL canónicas y metadatos de compartición. Se revisarán indexación, enlaces rotos, textos alternativos e imágenes optimizadas.
- Los datos estructurados incluirán `Organization` con nombre y contacto verificados, y `BreadcrumbList` en páginas interiores. `Service` se usará cuando cada servicio tenga datos concretos. No se marcarán categorías genéricas como productos individuales.
- El hero priorizará el texto y una imagen de respaldo de carga rápida. Objetivos de experiencia: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1 en el percentil 75, medidos con datos reales tras publicar.

La investigación de términos se hará antes de escribir los títulos definitivos. Hipótesis iniciales: «equipos informáticos para empresas», «servicios informáticos para empresas», «infraestructura de redes» y búsquedas sectoriales en Argentina. Se validarán con demanda y lenguaje real de clientes.

## 7. GEO: información comprensible para asistentes de IA

GEO (optimización para motores generativos) se tratará como una extensión de la calidad editorial y técnica del sitio, sin prometer apariciones en respuestas de asistentes.

- Publicar respuestas breves y verificables a preguntas de compradores en la página correspondiente: qué equipos proveen, qué incluye cada servicio, qué sectores atienden, dónde entregan y cómo se inicia un proyecto.
- Mantener consistentes nombre, dirección, correo y teléfono en el sitio y perfiles públicos relevantes.
- Aportar evidencia autorizada: especificaciones de servicios, fabricantes confirmados y, si existen, casos de trabajo o testimonios publicables. Actualizar fechas cuando el contenido cambie.
- Usar encabezados descriptivos, tablas sólo cuando ayudan a comparar, enlaces internos y HTML accesible para que el contenido pueda interpretarse y citarse.
- Tratar `llms.txt` como opcional y de baja prioridad. No sustituye el contenido ni garantiza citas.

## 8. Medición y verificación

- Configurar Google Search Console y Bing Webmaster Tools para revisar cobertura, consultas, clics y páginas de entrada.
- Medir visitas y eventos de contacto: clic a WhatsApp, correo y descargas de PDF. La métrica comercial principal serán las consultas calificadas, no sólo el tráfico.
- Revisar rendimiento y accesibilidad en desktop y móvil. Comprobar navegación con teclado, contraste, reducción de movimiento, enlaces y formularios si se añaden.
- Observar consultas en asistentes y tráfico referido de IA como señal complementaria; su atribución es incompleta.

## 9. Entregas y dependencias

| Etapa | Entregable | Dependencia principal |
| --- | --- | --- |
| 1. Definición | Mapa, mensajes, storyboard del hero y sistema visual. | Validación de afirmaciones comerciales. |
| 2. Primer parcial | Prototipo responsive del inicio y hero con imagen o animación inicial. | Logo de buena calidad y activos visuales aprobados. |
| 3. Contenido y desarrollo | Páginas, enlaces de contacto, PDFs disponibles, SEO técnico y analítica. | Confirmar datos y materiales faltantes. |
| 4. Publicación | Revisión en móvil, accesibilidad, rendimiento, indexación y conexión del dominio. | Acceso al hosting y DNS. |

El cuestionario propone un parcial para el **9 de octubre** y el sitio completo para el **16 de octubre de 2026**. Son fechas objetivo sujetas a la entrega de activos y validaciones.

**Datos pendientes de confirmar antes de publicar:**

- Si `11-5796-1639` es también el WhatsApp comercial y si la dirección de Bacacay 1757, 2.º C, CABA debe mostrarse públicamente.
- Los PDF definitivos de productos y servicios, sus enlaces y quién mantendrá las versiones actualizadas.
- La relación comercial con cada fabricante y el permiso de uso de sus logos; disponibilidad real de líneas de producto.
- El alcance exacto de ciberseguridad, inteligencia artificial, entregas nacionales, financiación y soporte posventa.
- Si aseguradoras integran el foco sectorial: aparecen en el cuestionario inicial, pero no en el texto de soluciones.
- Logo de alta resolución, acceso al hosting/dominio y material visual de productos o autorización para producir renders propios.

## Fuentes entregadas

- [Respuestas al cuestionario inicial Website.docx](https://docs.google.com/document/d/1FyLZoAUh7lmohIqXF6T1TpI3nW3O2TdR/edit)
- [Contenido para la web Grupo Quantum.docx](https://docs.google.com/document/d/1q65ckDQj_7NOkIJeeD1hoGdjmi6mK9kX/edit)
- [LOGO QUANTUM.jpeg](https://drive.google.com/file/d/1MNn1EXwCLdKZxPytF5hMdQStAyxGD_J_/view)
