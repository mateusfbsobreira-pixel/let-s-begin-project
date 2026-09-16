# Plan: Landing Page "La Casa del Pan Artesanal" — Fundación + Hero

Landing page de ventas de lujo (español latinoamericano) con estética de horno de piedra y panadería artesanal. Esta etapa construye la base visual completa y la sección hero above-the-fold.

## Lo que vas a ver al aprobar

1. **Sistema de diseño "Atelier Panadero"** — paleta oscura piedra/horno (#130A06–#22120A), acentos dorados (#C9972A, #D97706, #F59E0B), verde esmeralda (#16A34A) solo para precio/conversión, resplandores radiales ámbar, tarjetas #1F1008 con borde dorado delicado. Tipografías: Playfair Display (títulos) + Plus Jakarta Sans (cuerpo), cargadas vía Google Fonts.

2. **Barra de anuncio superior** — degradado dorado, texto en mayúsculas: "👑 EDICIÓN 2026: Tu Aplicación Interactiva + Chef IA 24/7 + 8 Libros Maestros por solo $6.90 USD (Pago Único Vitalicio)".

3. **Navbar sticky minimalista** — fondo oscuro translúcido con blur, logo con icono de trigo "LA CASA DEL PAN", badge con punto verde "Acceso Inmediato Activo en Todo el Mundo" y botón "Acceder por $6.90 »" hacia Hotmart.

4. **Hero de conversión** — resplandor dorado central, pill "✨ LA NUEVA ERA DE LA PANADERÍA · EDICIÓN 2026", H1 serif autoritario y sub-headline sensorial exactamente como los textos entregados.

5. **Mockup auténtico de la app en un smartphone CSS** — teléfono estilo iPhone (Dynamic Island, biseles, rounded-3xl, sombra dorada) mostrando la interfaz real: saludo "¡Hola, Alumno!", carrusel destacando "El Método Completo del Pan Artesanal" con tag "⭐ Guía Maestra", tarjeta "El Secreto del Maestro", fila de 3 stats (8 Libros, 320 Mins, 7 Días 🔥), tarjeta "Continúa Donde lo Dejaste" al 84%, y botón flotante dorado del Chef IA con punto de notificación.

6. **3 tarjetas flotantes glassmorphism** alrededor del teléfono con animación suave: Chef Panadero en Vivo (izquierda), Modo Horno con Vapor (derecha arriba), Diploma Oficial Incluido (derecha abajo).

7. **CTA principal** — botón grande esmeralda con brillo/pulso: "SÍ, QUIERO MI APLICACIÓN + 8 LIBROS POR $6.90 USD »" abriendo Hotmart en pestaña nueva, más las 4 señales de confianza (pago seguro Hotmart, acceso inmediato, garantía 7 días, un solo pago).

## Detalles técnicos

- Tokens de color en `src/styles.css` (oklch) mapeados a utilidades Tailwind v4; colores personalizados de marca como tokens semánticos.
- Fuentes vía `<link>` en `src/routes/__root.tsx` (nunca @import remoto en CSS).
- Componentes en `src/routes/index.tsx` + `src/components/landing/` (AnnouncementBar, Navbar, Hero, PhoneMockup, FloatingCards).
- Imágenes generadas con IA para: foto de pan artesanal (portada del libro en el mockup) y textura ambiental sutil del hero.
- Animaciones: flotación suave en tarjetas, pulso/shine en CTA, keyframes en CSS.
- `head()` con título, descripción, og:type y twitter:card propios de la marca.
- Totalmente responsivo: en móvil las tarjetas flotantes se apilan debajo del teléfono.

## Alcance

Solo fundación + hero (anuncio, navbar, hero completo). Las secciones siguientes (libros, testimonios, precio, FAQ) quedan para la próxima iteración.
