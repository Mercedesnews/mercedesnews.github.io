# Mercedes News — Manual de Estilo y Diseño Editorial

Este documento establece los estándares de identidad visual, tipografía, paleta de colores, maquetación y experiencia de usuario del diario digital **Mercedes News** (`https://mercedesnews.github.io`).

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

## 🎨 2. Paleta Cromática y Sistema de Divisores

El diario utiliza una paleta monocromática editorial contrastada con un **azul institucional característico**:

| Elemento | Código Color | Uso / Justificación |
| :--- | :--- | :--- |
| **Fondo General** | `#ffffff` | Blanco puro, máxima legibilidad y limpieza visual. |
| **Texto Principal** | `#1a1a1a` | Negro carbón suave para titulares y encabezados. |
| **Texto de Cuerpo** | `#222222` | Gris muy oscuro para lectura prolongada sin fatiga ocular. |
| **Metadatos y Fechas** | `#666666` / `#888888` | Gris neutro para información secundaria (fechas, autores, edición). |
| **Azul Institucional** | `#004dbf` | Color base para líneas divisorias, acentos y llamados a la acción. |

### 📐 Jerarquía de Líneas y Transparencias (Divisores):
Para lograr distinción y sutileza sin recargar la pantalla, el color azul `#004dbf` se modula según su importancia:

- **Doble Pleca Principal (Cabecera y Pie):**
  - Línea primaria: `3px solid #004dbf` (trazo firme de cierre editorial).
  - Línea secundaria: `1px solid rgba(0, 77, 191, 0.4)` (trazo fino acompañante).
- **Barra Superior de Metadatos:** `1px solid rgba(0, 77, 191, 0.35)`.
- **Línea de Título de Secciones:** `height: 1px; background: rgba(0, 77, 191, 0.35);`.
- **Divisores entre Artículos (Separación de notas):**
  - Desktop: `1px solid rgba(0, 77, 191, 0.18)` (vertical entre tarjetas).
  - Mobile: `1px solid rgba(0, 77, 191, 0.15)` (horizontal inferior).
- **Divisor Vertical en Lectura (Página de Nota):** `column-rule: 1px solid rgba(0, 77, 191, 0.15)`.
- **Subrayado de Lectura ("Leer nota completa"):** `border-bottom: 2px solid #004dbf`.

---

## ✍️ 3. Sistema Tipográfico

El portal utiliza dos familias tipográficas de Google Fonts complementarias:

### A. Titulares y Metadatos: `Montserrat` (Sans-serif geométrica)
- **Pesos utilizados:** `300` (Light/Fino), `700` (Bold), `900` (Black).
- **Tratamiento editorial de titulares:**
  - Los titulares combinan frecuentemente peso grueso y fino (ej. antetítulo en negrita y subtítulo fino en cursiva).
  - Interletrado compacto (`letter-spacing: -1.5px` a `-3px` según el tamaño).
  - Interlineado ajustado (`line-height: 0.95` a `1.1`) para evitar saltos excesivos entre líneas del título.

### B. Cuerpo de Lectura: `Open Sans` (Sans-serif humanista)
- **Pesos utilizados:** `400` (Regular), `600` (Semibold), `700` (Bold).
- **Criterio de Justificación y Flujo:**
  - Los párrafos de lectura utilizan justificación editorial completa:
    ```css
    text-align: justify;
    text-align-last: left;
    text-justify: inter-word;
    text-wrap: pretty;
    ```
  - Enlaces y URLs largas utilizan `overflow-wrap: anywhere; word-break: break-all;` para evitar que enlaces extensos fuercen espacios en blanco gigantes en la justificación.

### C. Citas Destacadas (*Pull Quotes*):
- Creadas mediante sintaxis Markdown estándar: `> Frase citada`.
- Tipografía `Montserrat` en cursiva (`1.65rem`).
- Comillas tipográficas gigantes `“` y `”` en color `#888888`, compactadas con interlineado mínimo (`line-height: 0.6`) para mantenerse pegadas a la frase destacada.

---

## 📰 4. Estructura de la Portada (`index.astro`)

1. **Cintillo Superior (Meta Bar):**
   - Fecha completa en español (`miércoles, 2 de septiembre de 2026`).
   - Etiqueta "Edición Digital".
   - Localidad: "Mercedes, Buenos Aires".
2. **Cabecera del Diario (Masthead):**
   - Marca principal: **MERCEDES NEWS** en tipografía contundente de 4.5rem (desktop).
   - Lema institucional formal: *«El portal de noticias hecho para vos»*.
   - Doble pleca azul divisoria.
3. **Noticia de Tapa (Lead):**
   - Fotografía de apertura con relación de aspecto panorámica y badge flotante negro con texto blanco: **TAPA**.
   - Titular principal a gran escala.
   - Bajada o extracto informativo alineado a la izquierda.
   - Enlace de lectura con flecha dinámica: `Leer nota completa →`.
4. **Archivo y Noticias Secundarias:**
   - Título de sección "Otras Publicaciones" con línea continua azul hacia el margen derecho.
   - Grilla a **2 columnas balanceadas** en escritorio con divisor vertical sutil.
   - Tarjetas con imagen (efecto zoom sutil al cursor `scale(1.03)`), fecha, titular y extracto.
5. **Pie de Página:**
   - Doble pleca azul simétrica con la cabecera.
   - Mención de derechos reservados.
   - Botón discreto de acceso a redacción y CMS (`⚙️ Redacción / CMS`).

---

## 📄 5. Estructura de la Nota Individual (`noticias/[slug].astro`)

1. **Cabecera de Nota:**
   - Imagen de portada a ancho completo (hasta 520px de altura).
2. **Titular y Fecha:**
   - Titular monumental (hasta 5rem en desktop) con soporte para saltos de línea y subtítulos.
   - Fecha de publicación en español formal.
3. **Lectura a Dos Columnas (Desktop):**
   - A partir de pantallas medianas (`min-width: 768px`), el texto se organiza automáticamente en **2 columnas de lectura paralela** (`column-count: 2; column-gap: 50px;`), simulando la diagramación física de un periódico.
   - Divisor vertical suave entre ambas columnas (`column-rule`).
4. **Pestaña del Navegador (`<title>`):**
   - Limpieza automática: toma únicamente el primer renglón del titular y elimina cualquier símbolo de Markdown (`**`, `_`) para una pestaña limpia y profesional.

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

## 🗂️ 7. Organización Temática y Navegación Futura

Para el crecimiento del portal hacia secciones temáticas (Locales, Sociedad, Cultura, Deportes, etc.):

- **Categorización:** Cada noticia contará con un tag o metadato de sección para su clasificación en portada y archivo.
- **Barra de Navegación / Menúes:**
  - Se ubicará debajo del lema y antes de la doble pleca divisoria, o integrada como barra de secciones adhesiva (*sticky*).
  - Menúes desplegables con diseño plano, fondo blanco, bordes finos azules y tipografía `Montserrat` en mayúsculas pequeñas.
