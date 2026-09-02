# Mercedes News — Manual de Estilo y Diseño Editorial

Este documento establece los estándares de identidad visual, tipografía, paleta de colores, maquetación y experiencia de usuario del diario digital **Mercedes News** (`https://mercedesnews.github.io`), basados en la guía de marca oficial.

Cualquier cambio de diseño, maquetación o nuevos componentes de interfaz debe adherir estrictamente a los lineamientos aquí detallados.

---

## 🏛️ 1. Filosofía Visual y Principios de Diseño

1. **Estilo Prensa Clásica Moderna:**
   - Inspirado en la sobriedad, elegancia y jerarquía tipográfica de los grandes diarios impresos y digitales.
   - Fondo blanco inmaculado (`#ffffff`). Se evitan intencionalmente las tarjetas grises flotantes, bordes de hoja artificiales o sombras pesadas.
   - Disposición de **ancho completo (`100% width`)** con un contenedor máximo contenido (`1280px`) centrado para pantallas de alta resolución.
2. **Jerarquía Clara y Lectura sin Distracciones:**
   - Alto contraste entre el texto y el fondo.
   - Espaciado respirable y proporciones cuidadas entre titulares, bajadas y cuerpo de texto.
   - Separadores lineales de acento en lugar de bloques de color estridentes.

---

## 🎨 2. Paleta Cromática Oficial

El diario utiliza la paleta institucional definida en el manual de marca:

| Color | HEX | RGB | Uso / Justificación |
| :--- | :--- | :--- | :--- |
| **Azul Institucional** | `#0252c5` | `R: 2, G: 82, B: 197` | Color de identidad, divisores principales, acentos y llamados a la acción. |
| **Negro / Carbón** | `#1e2126` | `R: 30, G: 33, B: 38` | Color principal para titulares, logo, textos y elementos de alto contraste. |
| **Gris Claro de Apoyo** | `#d5d9da` | `R: 213, G: 217, B: 218` | Divisores secundarios suaves, bordes sutiles y fondos de soporte. |
| **Fondo General** | `#ffffff` | `R: 255, G: 255, B: 255` | Blanco puro, máxima legibilidad y limpieza visual. |
| **Texto de Bajada / Metadatos** | `#555555` / `#888888` | — | Gris neutro para fechas, autores y extractos secundarios. |

### 📐 Jerarquía de Líneas y Transparencias (Divisores):
Para lograr distinción y sutileza sin recargar la pantalla, el color azul institucional `#0252c5` se modula según su importancia:

- **Doble Pleca Principal (Cabecera y Pie):**
  - Línea primaria: `3px solid #0252c5` (trazo firme de cierre editorial).
  - Línea secundaria: `1px solid rgba(2, 82, 197, 0.4)` (trazo fino acompañante).
- **Barra Superior de Metadatos:** `1px solid rgba(2, 82, 197, 0.35)`.
- **Línea de Título de Secciones:** `height: 1px; background: rgba(2, 82, 197, 0.35);`.
- **Divisores entre Artículos (Separación de notas):**
  - Desktop: `1px solid rgba(2, 82, 197, 0.18)` (vertical entre tarjetas).
  - Mobile: `1px solid rgba(2, 82, 197, 0.15)` (horizontal inferior).
- **Divisor Vertical en Lectura (Página de Nota):** `column-rule: 1px solid rgba(2, 82, 197, 0.15)`.
- **Subrayado de Lectura ("Leer nota completa"):** `border-bottom: 2px solid #0252c5`.

---

## ✍️ 3. Sistema Tipográfico Oficial

El portal utiliza tipografías de Google Fonts con roles bien diferenciados:

### A. Logotipo: `Archivo Expanded Black Italic`
- **Familia:** `Archivo`
- **Variante:** Ancho expandido (`font-stretch: expanded`), peso Black (`font-weight: 900`), cursiva (`font-style: italic`).
- **Aplicación:** Logotipo principal del diario en el encabezado (*masthead*). Le confiere dinamismo, peso periodístico y contundencia.

### B. Titulares y Subtítulos: `Poppins`
- **Título Principal (Línea 1):** `Poppins Bold` (peso `700`).
  - Interletraje compacto y gran impacto visual.
- **Subtítulo / Bajada Integrada (Línea 2 en adelante):** `Poppins Light` (peso `300`).
  - Proporciona un contraste tipográfico refinado con el título en negrita, optimizado para garantizar una lectura cómoda y nítida en pantallas.
- **Regla Editorial y CMS:**
  - En el panel de redacción, el campo de título es un área de texto plano sin botones de formato:
    - **Renglón 1:** Título principal (automáticamente en Poppins Bold).
    - **Renglón 2:** Subtítulo (automáticamente en Poppins Light).
  - Esto garantiza 100% de consistencia en todo el sitio sin necesidad de que el redactor aplique negritas o cursivas manuales.

### C. Cuerpo de Lectura: `Open Sans`
- **Pesos utilizados:** `400` (Regular), `600` (Semibold), `700` (Bold).
- **Criterio de Justificación y Flujo:**
  - Los párrafos de lectura utilizan justificación editorial completa:
    ```css
    text-align: justify;
    text-align-last: left;
    text-justify: inter-word;
    text-wrap: pretty;
    ```
  - Enlaces y URLs largas utilizan `overflow-wrap: anywhere; word-break: break-all; color: #0252c5;` para evitar que enlaces extensos fuercen espacios en blanco gigantes en la justificación.

### D. Citas Destacadas (*Pull Quotes*):
- Creadas mediante sintaxis Markdown estándar: `> Frase citada`.
- Tipografía `Poppins Thin` en cursiva (`1.65rem`).
- Comillas tipográficas gigantes `“` y `”` en color `#888888`, compactadas con interlineado mínimo (`line-height: 0.6`) para mantenerse pegadas a la frase destacada.

---

## 📰 4. Estructura de la Portada (`index.astro`)

1. **Cintillo Superior (Meta Bar):**
   - Fecha completa en español (`miércoles, 2 de septiembre de 2026`).
   - Etiqueta "Edición Digital".
   - Localidad: "Mercedes, Buenos Aires".
2. **Cabecera del Diario (Masthead):**
   - Marca principal: **MERCEDES NEWS** en `Archivo Expanded Black Italic` (4.5rem en desktop) en color azul institucional (`#0252c5`).
   - Lema institucional formal: *«El portal de noticias hecho para vos»*.
   - Doble pleca azul divisoria (`#0252c5`).
3. **Noticia de Tapa (Lead):**
   - Fotografía de apertura con relación de aspecto panorámica y badge flotante en `#1e2126` con texto blanco: **TAPA**.
   - Titular en `Poppins Bold` y subtítulo en `Poppins Light`.
   - Extracto informativo alineado a la izquierda.
   - Enlace de lectura con flecha dinámica: `Leer nota completa →`.
4. **Archivo y Noticias Secundarias:**
   - Título de sección "Otras Publicaciones" con línea continua azul hacia el margen derecho.
   - Grilla a **2 columnas balanceadas** en escritorio con divisor vertical sutil.
   - Tarjetas con imagen (efecto zoom sutil al cursor `scale(1.03)`), fecha, titular (`Poppins Bold` + `Poppins Light`) y extracto.
5. **Pie de Página:**
   - Doble pleca azul simétrica con la cabecera.
   - Mención de derechos reservados en `#1e2126`.
   - Botón discreto de acceso a redacción y CMS (`⚙️ Redacción / CMS`).

---

## 📄 5. Estructura de la Nota Individual (`noticias/[slug].astro`)

1. **Cabecera de Nota:**
   - Imagen de portada a ancho completo (hasta 520px de altura).
2. **Titular y Fecha:**
   - Título en `Poppins Bold` (hasta 4.5rem en desktop) y subtítulo en `Poppins Light` (hasta 2.2rem).
   - Fecha de publicación en español formal y enlace directo a su categoría temáticia (`fecha • categoría`).
3. **Lectura a Dos Columnas (Desktop):**
   - A partir de pantallas medianas (`min-width: 768px`), el texto se organiza automáticamente en **2 columnas de lectura paralela** (`column-count: 2; column-gap: 50px;`), simulando la diagramación física de un periódico.
   - Divisor vertical suave entre ambas columnas (`column-rule: 1px solid rgba(2, 82, 197, 0.15)`).
4. **Pestaña del Navegador (`<title>`):**
   - Limpieza automática: toma únicamente el primer renglón del titular para una pestaña limpia y profesional.

---

## 🎬 6. Estándar de Contenido Multimedia

Todos los elementos multimedia respetan la regla `break-inside: avoid;` para nunca quebrarse ni partirse a la mitad entre dos columnas de texto.

- **Imágenes:**
  - Sintaxis: `![Descripción](/assets/img/archivo.jpg)`.
  - Ancho 100% de la columna, bordes rectos sobrios, margen vertical de 20px.
- **Videos Locales (`.mp4`, `.webm`):**
  - Insertados mediante el componente de editor **`Video (.mp4)`** del CMS.
  - Reproductor de video nativo con controles completos (`controls`, `playsinline`).
  - Esquinas suavemente redondeadas (`border-radius: 8px`) y sombra sutil (`box-shadow: 0 4px 15px rgba(0,0,0,0.08)`).
- **Videos de YouTube:**
  - Insertados mediante el componente de editor **`YouTube`** o pegando la URL directa.
  - Reproductor responsivo embebido con relación de aspecto cinematográfica fija **16:9** y esquinas redondeadas de 8px.

---

## 🗂️ 7. Organización Temática y Navegación Interactiva

### A. Categorías Oficiales
El portal organiza sus notas en 4 secciones fijas:
1. **Actualidad Local** (`actualidad-local`)
2. **Crónicas & Particularidades** (`cronicas`)
3. **Mano a Mano** (`entrevistas`)
4. **Opinión & Ensayos** (`opinion`)

### B. Header Interactivo (Sticky-Shrink)
- **Modo Superior:** El encabezado se muestra en su escala completa, con la fecha/edición arriba, el logo `MERCEDES NEWS` a ancho completo en azul `#0252c5`, el lema oficial y el selector desplegable de secciones.
- **Modo Scrolled (Fijo Reducido):** Al hacer scroll pasando la cabecera (`scrollY > 200px`), el header pasa a `position: fixed; top: 0;` deslizándose suavemente. Oculta la fecha y el lema, y compacta el logo hacia la izquierda para convivir en una sola fila con el selector de categorías sobre la derecha. El contenedor exterior mantiene reservada la altura para evitar cualquier salto o rebote en las noticias.

### C. Menú Desplegable y Filtrado Reactivo
- En la cabecera se ubica un selector desplegable visible (`SECCIÓN: Todas ▾`).
- Al desplegar y elegir una sección:
  - El selector se actualiza dinámicamente con el nombre de la sección activa.
  - La nota más reciente de la categoría elegida pasa a liderar la página en el espacio de Tapa, y las demás notas de esa categoría se muestran en la grilla secundaria.
  - Si una categoría aún no contiene artículos, se presenta una pantalla limpia con aviso editorial y botón para regresar a la portada general.
- **Diseño limpio de tarjetas:** Las fotografías se mantienen limpias y despejadas (únicamente la nota de apertura lleva la etiqueta sobria `TAPA`).
- Cada tarjeta en la portada y cada nota individual cuenta con un enlace directo y clicable a su categoría al lado de la fecha (`fecha • CATEGORÍA`), el cual activa el filtro de esa sección de inmediato.
