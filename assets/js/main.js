// Luma — petites interactions du site. Aucun traceur, aucune requête externe.
(function () {
  "use strict";
  var root = document.documentElement;

  // Barre de navigation plus marquée une fois la page défilée.
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () { header.classList.toggle("scrolled", window.scrollY > 8); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
    return;
  }

  // Apparition des blocs au défilement.
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  // Ambiance du fond : chaque partie a sa lumière, comme dans le style Aura de l'app.
  var moods = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) root.setAttribute("data-mood", e.target.getAttribute("data-mood"));
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  document.querySelectorAll("[data-mood]").forEach(function (el) {
    if (el !== root) moods.observe(el);
  });

  // Étapes des interventions : l'étape au centre de l'écran change l'image du téléphone.
  var shots = document.querySelectorAll(".phone.stack img");
  var steps = document.querySelectorAll(".step");
  var stepIo = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var n = Number(e.target.getAttribute("data-step"));
      steps.forEach(function (s) { s.classList.toggle("active", s === e.target); });
      shots.forEach(function (img, i) { img.classList.toggle("on", i === n); });
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  steps.forEach(function (s) { stepIo.observe(s); });
})();
