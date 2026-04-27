(function () {
  'use strict';

  // Track scroll direction
  var lastY = window.scrollY;
  var scrollDir = 'down';
  window.addEventListener('scroll', function () {
    scrollDir = window.scrollY > lastY ? 'down' : 'up';
    lastY = window.scrollY;
  }, { passive: true });

  // Sections managed by postMessage (about handles itself on load)
  var SECTIONS = ['skills', 'experience', 'projects', 'contact'];

  // Per-section state
  var state = {};
  SECTIONS.forEach(function (id) {
    state[id] = { visible: false, ready: false, iframe: null };
  });

  function send(id, visible) {
    var s = state[id];
    if (!s || !s.iframe || !s.ready) return;
    try {
      s.iframe.contentWindow.postMessage(
        { type: 'scroll-reveal', visible: visible, dir: scrollDir },
        '*'
      );
    } catch (_) {}
  }

  // Wire up iframes
  SECTIONS.forEach(function (id) {
    var section = document.getElementById(id);
    if (!section) return;
    var iframe = section.querySelector('iframe');
    if (!iframe) return;
    state[id].iframe = iframe;

    iframe.addEventListener('load', function () {
      state[id].ready = true;
      // If already in viewport when iframe finished loading, reveal immediately
      if (state[id].visible) {
        setTimeout(function () { send(id, true); }, 80);
      }
    });
  });

  // IntersectionObserver on sections
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.id;
      if (!state[id]) return;
      state[id].visible = entry.isIntersecting;
      send(id, entry.isIntersecting);
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -20px 0px' });

  SECTIONS.forEach(function (id) {
    var section = document.getElementById(id);
    if (section) observer.observe(section);
  });
})();
