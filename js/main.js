/* PueblaDeNoche — funcionalidades. La configuración está en js/config.js */
(function () {
  var S = window.SITE, $ = function (s) { return document.querySelector(s); };

  // Enlaces de Facebook
  document.querySelectorAll("[data-red]").forEach(function (a) { a.href = S.redes[a.dataset.red]; });
  $("#anio").textContent = new Date().getFullYear();

  // Menú móvil
  var b = $(".burger"), nav = $("#menu");
  b.addEventListener("click", function () {
    var o = nav.classList.toggle("abierto");
    b.setAttribute("aria-expanded", o); b.setAttribute("aria-label", o ? "Cerrar menú" : "Abrir menú");
  });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("abierto"); b.setAttribute("aria-expanded", false); } });

  // Botones de redes con su icono
  var ICONOS = {
    facebook: '<path d="M13.5 22v-8.2h2.8l.5-3.4h-3.3V8.3c0-1 .4-1.7 1.8-1.7h1.6V3.6c-.3 0-1.3-.2-2.5-.2-2.5 0-4.1 1.5-4.1 4.2v2.8H7.5v3.4h2.8V22h3.2z"/>',
    instagram: '<path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.3-3.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>',
    youtube: '<path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4a2.5 2.5 0 0 0-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8a2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8c.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5.2 3L10 15z"/>',
    tiktok: '<path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.6V9a7.3 7.3 0 0 0 4.3 1.4V7.3a4.3 4.3 0 0 1-3.2-1.5z"/>'
  };
  var NOMBRES = { youtube: "YouTube", instagram: "Instagram", tiktok: "TikTok" };
  function botones(dest) {
    ["instagram", "youtube", "tiktok"].forEach(function (k) {
      var a = document.createElement("a");
      a.className = "red"; a.href = S.redes[k]; a.target = "_blank"; a.rel = "noopener";
      a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + ICONOS[k] + "</svg><span>" + NOMBRES[k] + "</span>";
      dest.appendChild(a);
    });
  }
  botones($("#redes-botones")); botones($("#redes-pie"));

  // Publicaciones elegidas (incrustadas con los plugins oficiales de Facebook)
  var visor = $("#fb-visor");
  var cargando = visor.querySelector(".cargando");
  var lista0 = window.PUBLICACIONES || [];
  function incrustar(url) {
    var esVideo = /\/(reel|videos|watch|share\/[rv])\b/.test(url);
    var vertical = /\/(reel|share\/r)\b/.test(url);
    var w = vertical ? 340 : 500, h = esVideo ? (vertical ? 620 : 281) : 560;
    var f = document.createElement("iframe");
    f.title = "Publicación de PueblaDeNoche en Facebook";
    f.width = w; f.height = h; f.loading = "lazy"; f.allowFullscreen = true;
    f.allow = "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
    f.src = "https://www.facebook.com/plugins/" + (esVideo ? "video.php" : "post.php") +
            "?href=" + encodeURIComponent(url) + "&show_text=true&width=" + w + (esVideo ? "&height=" + (h - 115) : "") + "&t=0";
    var caja = document.createElement("div"); caja.className = "fb-item"; caja.appendChild(f);
    visor.appendChild(caja);
  }
  lista0.forEach(incrustar);
  if (S.mostrarVisorPagina) {
    var w = Math.min(500, Math.max(280, visor.clientWidth || 340));
    var f = document.createElement("iframe");
    f.title = "Publicaciones de PueblaDeNoche en Facebook";
    f.width = w; f.height = 700; f.loading = "lazy"; f.allow = "encrypted-media";
    f.src = "https://www.facebook.com/plugins/page.php?href=" + encodeURIComponent(S.facebookPaginaUrl) +
            "&tabs=timeline&width=" + w + "&height=700&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false";
    visor.appendChild(f);
  }
  if (cargando) cargando.remove();
  if (!lista0.length && !S.mostrarVisorPagina) {
    var v = document.createElement("p"); v.className = "cargando";
    v.textContent = "Pronto publicaremos aquí. Mientras tanto, visita nuestra página en Facebook.";
    visor.appendChild(v);
  }

  // Banners: activos, dentro de fechas, ordenados
  var hoy = new Date().toISOString().slice(0, 10);
  var lista = (window.BANNERS || []).filter(function (x) {
    return x.activo && (!x.inicio || x.inicio <= hoy) && (!x.fin || x.fin >= hoy);
  }).sort(function (a, c) { return (a.orden || 0) - (c.orden || 0); });
  if (lista.length) {
    $("#avisos").hidden = false; $("#nav-avisos").hidden = false;
    var cont = $("#banners");
    lista.forEach(function (x) {
      var el = document.createElement(x.enlace ? "a" : "div");
      el.className = "banner";
      if (x.enlace) { el.href = x.enlace; el.target = "_blank"; el.rel = "noopener"; }
      var img = document.createElement("img");
      img.src = x.imagen; img.alt = x.alt || x.texto || "Banner promocional"; img.loading = "lazy";
      el.appendChild(img);
      if (x.texto) { var p = document.createElement("p"); p.textContent = x.texto; el.appendChild(p); }
      cont.appendChild(el);
    });
  }
})();
