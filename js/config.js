/* ============================================================
   CONFIGURACIÓN PÚBLICA — PueblaDeNoche
   Edita este archivo desde GitHub (lápiz ✏️ → Commit changes).
   No pongas contraseñas ni claves aquí: el repositorio es público.
   ============================================================ */
window.SITE = {
  nombre: "PueblaDeNoche",
  lema: "ALL ACCESS",

  // Enlaces a redes (se usan en botones y pie de página)
  redes: {
    facebook:  "https://www.facebook.com/PueblaDeNoche",   // solo para "Ver página original"
    instagram: "https://www.instagram.com/jwh.001",
    youtube:   "https://youtube.com/@mrjwh",
    tiktok:    "https://www.tiktok.com/@jwh.one"
  },

  // URL de la página de Facebook cuyo contenido se muestra en el visor.
  facebookPaginaUrl: "https://www.facebook.com/PueblaDeNoche",

  // Visor automático de la página (puede salir en blanco según el navegador).
  // Déjalo en false si prefieres mostrar solo las publicaciones elegidas abajo.
  mostrarVisorPagina: false
};

/* ------------------------------------------------------------
   PUBLICACIONES DE FACEBOOK ELEGIDAS
   Para agregar una: abre la publicación o video en Facebook →
   Compartir → Copiar enlace → pégalo como una línea nueva abajo.
   La primera de la lista aparece primero.
   Si un enlace no carga, ábrelo en el navegador y copia la
   dirección completa de la barra (ej. facebook.com/reel/123...).
   ------------------------------------------------------------ */
window.PUBLICACIONES = [
  "https://www.facebook.com/share/r/19nwhEkLJm/"
];

/* ------------------------------------------------------------
   BANNERS PROMOCIONALES
   1) Sube la imagen a assets/banners/
   2) Agrega un bloque como el de ejemplo (quita los // del inicio)
   Campos:
     id      nombre único
     imagen  ruta de la imagen
     alt     descripción de la imagen (accesibilidad)
     texto   texto opcional bajo la imagen
     enlace  a dónde lleva al tocarlo (opcional)
     inicio  fecha "AAAA-MM-DD" (opcional)
     fin     fecha "AAAA-MM-DD" (opcional, incluye ese día)
     orden   número menor = aparece primero
     activo  true para mostrar, false para ocultar
   Si no hay banners activos, la sección se oculta sola.
   ------------------------------------------------------------ */
window.BANNERS = [
  // {
  //   id: "ejemplo",
  //   imagen: "assets/banners/ejemplo.jpg",
  //   alt: "Descripción del banner",
  //   texto: "Texto opcional",
  //   enlace: "https://ejemplo.com",
  //   inicio: "2026-11-01",
  //   fin: "2026-11-30",
  //   orden: 1,
  //   activo: true
  // }
];
