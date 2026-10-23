# Portal PueblaDeNoche

Sitio estático (HTML, CSS y JavaScript) para GitHub Pages. Sin servicios de pago, sin claves privadas.

## Estructura
- `index.html` — página principal
- `css/style.css` — estilos (colores en `:root`)
- `js/config.js` — **enlaces sociales y banners** (el único archivo que normalmente editarás)
- `js/main.js` — funcionalidades
- `assets/` — logo (`logo-puebladenoche.png`), avatar (`avatar-punto-rojo.png/.svg`), favicon y `banners/`

## Publicar en GitHub Pages
1. Crea una cuenta en github.com e inicia sesión.
2. **New repository** → nombre (ej. `puebladenoche`) → **Public** → Create.
3. **uploading an existing file** → arrastra **el contenido** de esta carpeta (no la carpeta) → **Commit changes**.
4. **Settings → Pages** → *Source*: **Deploy from a branch** → *Branch*: `main` / `/ (root)` → **Save**.
5. Espera 1–2 minutos. La dirección aparece en esa misma pantalla (`https://TU-USUARIO.github.io/puebladenoche/`).

## Agregar publicaciones de Facebook
Abre la publicación o video en Facebook → Compartir → Copiar enlace. En GitHub abre `js/config.js` → ✏️ → pega el enlace como línea nueva dentro de `window.PUBLICACIONES` (entre comillas, separadas por coma) → Commit changes.
Si un enlace no carga, ábrelo en el navegador y copia la dirección completa de la barra (por ejemplo `facebook.com/reel/...`).

## Cambiar banners
1. Sube la imagen a `assets/banners/` (**Add file → Upload files**). Recomendado: JPG/WebP de máx. 300 KB, ancho ~1200 px.
2. Abre `js/config.js` → lápiz ✏️ → agrega un bloque dentro de `window.BANNERS` (hay un ejemplo comentado).
3. **Commit changes**. En ~1 minuto se actualiza.
- Ocultar sin borrar: `activo: false`. Programar: `inicio` y `fin` (`"AAAA-MM-DD"`). Orden: `orden` (menor = primero).
- Si no hay banners activos, la sección «Avisos y promociones» se oculta sola.

## Actualizar enlaces sociales
Edita `redes` en `js/config.js` (Instagram, YouTube, TikTok). Los botones y el pie se actualizan solos.

## Limitaciones de Facebook
- Las publicaciones se muestran con el **Page Plugin oficial de Facebook** (un iframe). No requiere API ni claves.
- La API oficial (Graph API) necesita una app de Meta con revisión y tokens que caducan; no es adecuada para un sitio estático público.
- El plugin muestra lo que Facebook decide mostrar; no se puede personalizar su diseño. Puede no cargar con bloqueadores de contenido o ajustes de privacidad estrictos.
- Se usa la URL directa de la página (`facebook.com/PueblaDeNoche`). Si cambia, edita `facebookPaginaUrl` en `js/config.js`.
- El portal solo enlaza a Facebook con «Ver página original»; seguir o activar notificaciones se hace allí, no desde el portal.

## Futuro: panel privado de banners
Requiere un servicio con autenticación (por ejemplo, un CMS con login). Por ahora la administración es desde GitHub.

## Pruebas realizadas
Navegador de pruebas (Chromium): sin errores de JavaScript, sin desplazamiento horizontal a 390 px (móvil) ni 1280 px (escritorio), menú móvil abre/cierra.
**No verificado:** carga real del visor de Facebook (el entorno de prueba no tenía internet), enlaces en iPhone/Android reales, publicación en GitHub Pages.
