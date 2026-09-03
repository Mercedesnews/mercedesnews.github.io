# Propuestas de Diseño: Integración de Buscador (Lupa) y Clima en la Cabecera

Este documento analiza las opciones de diseño, geometría y experiencia de usuario (UX) para incorporar dos nuevas funciones clave en la cabecera de **Mercedes News**:
* **`tarea0003`**: Buscador interactivo (lupa).
* **`tarea0004`**: Clima dinámico de Mercedes en tiempo real (temperatura e ícono).

---

## 🧭 1. El Desafío de la Cabecera: Inventario de Elementos

Actualmente, la cabecera del diario reúne una cantidad significativa de información institucional y de navegación:

1. **Fecha del día** (*jueves, 3 de septiembre de 2026*)
2. **Edición Digital** (marca formal)
3. **Localidad** (*Mercedes, Buenos Aires*)
4. **Logotipo Gigante** (*MERCEDES NEWS* a ancho completo)
5. **Lema Institucional** (*«El portal de noticias hecho para vos»*)
6. **Redes Sociales** (Facebook, Instagram)
7. **Selector de Secciones** (`SECCIÓN: Todas ▾`)
8. **Doble Pleca Azul** (separador identitario)

A esto se sumarán:
9. **Lupa / Buscador** (`tarea0003`)
10. **Widget de Clima** (`tarea0004`)

El principio fundamental del [Manual de Estilo](file:///home/mariano/Projects/mercedesnews.github.io/MANUAL_DE_ESTILO.md) es mantener la **sobriedad de la prensa clásica**, evitando que la parte superior se vuelva un tablero recargado que le quite protagonismo a la **Noticia de Tapa**.

---

## 📐 2. Opciones de Distribución en la Cabecera Completa (Reposo)

A continuación se presentan 4 alternativas geométricas para discutir con Paco:

---

### 🔹 Opción 1: La propuesta de Mariano (Cintillo Superior Doble en 2 Renglones)

Organiza la barra superior en dos niveles horizontales paralelos con 3 columnas simétricas cada uno:

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│ Jueves, 3 de septiembre de 2026        Edición Digital       Mercedes, Buenos Aires │  <- Renglón 1 (Institucional)
├──────────────────────────────────────────────────────────────────────────────────┤
│ 🔍 [Buscar noticias...]                   [FB]  [IG]           ⛅ 21°C • Despejado  │  <- Renglón 2 (Servicios)
└──────────────────────────────────────────────────────────────────────────────────┘

                                  MERCEDES NEWS
                       «El portal de noticias hecho para vos»

                                [SECCIÓN: Todas ▾]
════════════════════════════════════════════════════════════════════════════════════
```

* **Cómo funciona:**
  * **Renglón 1:** Metadatos tradicionales de periódico (Fecha | Edición | Ciudad).
  * **Renglón 2:** Servicios del lector (Buscador a la izquierda | Redes al centro | Clima a la derecha).
* **Ventajas:**
  * Muy ordenada; cada elemento tiene una posición fija y simétrica.
  * Resuelve la propuesta planteada por Mariano sin apretar textos.
* **Aspectos a considerar:**
  * Agrega ~32px de altura al encabezado antes de llegar al logo.
  * En celulares (<680px), dos renglones de tres columnas obligan a apilar o colapsar elementos en un acordeón.

---

### 🔹 Opción 2: Fusión Editorial "Contexto a la Izquierda | Servicios a la Derecha" (1 solo renglón) *(Recomendada por Estándar de Prensa)*

Inspirada en el modelo de *La Nación*, *Clarín* y *The New York Times*, donde la localidad se fusiona de manera natural con el clima (ya que el clima mostrado *es* el de Mercedes):

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│ Jueves, 3 de septiembre • ⛅ 21°C Mercedes    Edición Digital    [FB] [IG] • 🔍 Buscar │  <- 1 solo renglón
└──────────────────────────────────────────────────────────────────────────────────┘

                                  MERCEDES NEWS
                       «El portal de noticias hecho para vos»

                                [SECCIÓN: Todas ▾]
════════════════════════════════════════════════════════════════════════════════════
```

* **Cómo funciona:**
  * **Izquierda (Bloque Noticioso & Clima):** `Jueves, 3 de septiembre de 2026 • ⛅ 21°C Mercedes`
  * **Centro (Identidad):** `Edición Digital` (perfectamente centrada).
  * **Derecha (Comunidad & Búsqueda):** `[FB] [IG]  •  🔍 Buscar` (la lupa abre el buscador interactivo).
* **Ventajas:**
  * **100% limpia y respirable:** Mantiene la barra superior en un único renglón elegante.
  * Ahorra espacio vertical para que la foto de Tapa se vea inmediatamente al ingresar.
  * Fusión lógica: El clima no necesita decir "Mercedes" en una punta y la ciudad en la otra; se leen juntos como un servicio meteorológico local.
  * Excelente adaptación responsiva a móviles.

---

### 🔹 Opción 3: Fila de Control Interactiva (Buscador + Secciones + Redes)

Mantiene la barra superior 100% periodística y agrupa todos los elementos interactivos en una barra de control inferior, justo antes de la doble pleca:

```text
┌──────────────────────────────────────────────────────────────────────────────────┐
│ Jueves, 3 de septiembre de 2026        Edición Digital       Mercedes • ⛅ 21°C     │  <- Metadatos
└──────────────────────────────────────────────────────────────────────────────────┘

                                  MERCEDES NEWS
                       «El portal de noticias hecho para vos»

┌──────────────────────────────────────────────────────────────────────────────────┐
│ 🔍 [Buscar...]                 [SECCIÓN: Todas ▾]                      [FB] [IG] │  <- Barra de Acción
└──────────────────────────────────────────────────────────────────────────────────┘
════════════════════════════════════════════════════════════════════════════════════
```

* **Cómo funciona:**
  * La barra superior se dedica a la información de lectura (Fecha, Edición, Clima y Ciudad).
  * Debajo del lema se crea una **barra de herramientas del lector**:
    * A la izquierda: Caja o botón expandible de búsqueda (`🔍 Buscar...`).
    * Al centro: Selector desplegable `SECCIÓN: Todas ▾`.
    * A la derecha: Canales de redes sociales.
* **Ventajas:**
  * Separa conceptualmente lo que es *información del día* (arriba) de lo que son *herramientas del lector* (abajo).
  * Al lector le queda todo el control del sitio a la misma altura.

---

### 🔹 Opción 4: Lupa en la Barra Flotante + Clima en el Cintillo

Deja el buscador no como un texto o cajita en reposo, sino como un ícono de acceso rápido universal (botón flotante / header):

* **En reposo:**
  * Cintillo superior: `Fecha • ⛅ 21°C Mercedes  |  Edición Digital  |  [FB] [IG]`
  * Al lado del selector de secciones: Botón de lupa sobrio `🔍`.
  * Al presionar la lupa: Se despliega un panel flotante de búsqueda a pantalla completa o modal semitransparente con desenfoque de fondo (*glassmorphism*), permitiendo escribir y ver los resultados en tiempo real sin salir de la portada.

---

## 📌 3. Comportamiento en Modo Colapsado (Header Sticky-Shrink al scrollear)

Cuando el lector baja por la página, el encabezado se reduce para no tapar la lectura. El espacio disponible en la barra reducida es de **56px de alto**.

### Matriz de Supervivencia de Elementos:

| Elemento | ¿Sobrevive en Scroll (Desktop)? | ¿Sobrevive en Scroll (Móvil)? | Justificación Editorial |
| :--- | :---: | :---: | :--- |
| **MERCEDES NEWS (Logo)** | **SÍ** | **SÍ** | Identidad de marca obligatoria (reducido a 1 línea). |
| **Selector `SECCIÓN: ...`** | **SÍ** | **SÍ** | Navegación esencial para filtrar notas mientras se recorre el portal. |
| **Lupa (Buscador)** | **SÍ** *(Recomendado)* | **SÍ** *(Solo ícono)* | El lector suele querer buscar mientras explora el sitio; un ícono de lupa de 28px no estorba. |
| **Redes Sociales** | **SÍ** *(si ancho > 820px)* | **NO** | Como se implementó en la `tarea0012`, solo se muestran si hay espacio de sobra. |
| **Clima dinámico** | **NO** | **NO** | Es un dato contextual de apertura; en lectura continua resta espacio y no se consulta mientras se lee una nota. |
| **Fecha y Edición** | **NO** | **NO** | Ya cumplieron su rol en la parte superior; ocupan demasiado ancho. |
| **Lema institucional** | **NO** | **NO** | Se oculta para mantener la barra fija delgada. |

### Diagrama de la Barra Fija Reducida (Desktop):
```text
[MERCEDES NEWS] <───────────────────────> 🔍  [FB] [IG]  [SECCIÓN: Todas ▾]
```

### Diagrama de la Barra Fija Reducida (Móvil):
```text
[MERCEDES NEWS] <─────────────────────────────> 🔍  [SECCIÓN: Todas ▾]
```

---

## 🛠️ 4. Consideraciones Técnicas de las Nuevas Tareas

### Para `tarea0003` (Buscador Interactivo):
* **Tecnología recomendada:** Búsqueda indexada en cliente (Client-Side con JavaScript puro y Fuse.js o índice JSON autogenerado en build de Astro).
* **Ventajas:** Cero dependencias externas, velocidad instantánea (< 10ms), funciona offline o en GitHub Pages sin necesidad de backend ni base de datos.
* **Experiencia (UI):**
  * Al hacer clic en la lupa `🔍`, se abre una caja de búsqueda elegante con animación suave.
  * A medida que el usuario tipea ("Bomberos", "Salame", "Messi"), se listan abajo las coincidencias con título, fecha, categoría y enlace directo.

### Para `tarea0004` (Widget de Clima Dinámico):
* **API recomendada:** **[Open-Meteo](https://open-meteo.com/)** (API meteorológica abierta, 100% gratuita, sin límites comerciales, sin necesidad de tokens ni registro).
* **Coordenadas de Mercedes:** Latitud `-34.6514`, Longitud `-59.4307`.
* **Datos a mostrar:** Ícono SVG del estado del cielo (sol, nubes, lluvia) + temperatura actual (`⛅ 21°C`).
* **Microinteracción adicional:** Al pasar el mouse por encima o tocar en el celular, puede desplegar un popover sobrio con: *Mín / Máx del día, humedad y viento*.
* **Caché:** Guardado en `sessionStorage` por 30 minutos para evitar consultas repetitivas innecesarias.

---

## 💬 5. Preguntas Clave para Definir con Paco

1. **¿Prefieren 1 renglón integrado (Opción 2) o 2 renglones separados (Opción 1 de Mariano)?**
2. **En la barra fija al scrollear, ¿están de acuerdo con que la Lupa sobreviva junto al selector de secciones?**
3. **¿El clima debe mostrar solo temperatura e ícono (`⛅ 21°C`) o prefieren que incluya la condición textual (`21°C • Despejado`)?**
