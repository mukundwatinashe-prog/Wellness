(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var menuToggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawerOverlay');

  function isDrawerOpen() {
    return drawer && drawer.classList.contains('open');
  }

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }
    document.body.classList.add('drawer-open');
    if (menuToggle) {
      menuToggle.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-label', 'Close menu');
    }
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
    document.body.classList.remove('drawer-open');
    if (menuToggle) {
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.setAttribute('aria-label', 'Open menu');
    }
  }

  function toggleDrawer() {
    if (isDrawerOpen()) closeDrawer();
    else openDrawer();
  }

  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', toggleDrawer);
  }
  if (overlay) overlay.addEventListener('click', closeDrawer);

  var drawerClose = document.getElementById('drawerClose');
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  var heroSlides = document.querySelectorAll('.hero-slide');
  var heroIndex = 0;
  var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (heroSlides.length > 1 && !prefersReducedMotion) {
    setInterval(function () {
      heroSlides[heroIndex].classList.remove('active');
      heroIndex = (heroIndex + 1) % heroSlides.length;
      heroSlides[heroIndex].classList.add('active');
    }, 3500);
  }

  document.querySelectorAll('.service-hero-video, .service-top-video').forEach(function (video) {
    if (prefersReducedMotion) {
      video.pause();
      video.removeAttribute('autoplay');
    }
  });

  var areaPhoneSelect = document.getElementById('areaPhoneSelect');
  var callAreaBtn = document.getElementById('callAreaBtn');
  if (areaPhoneSelect && callAreaBtn) {
    areaPhoneSelect.addEventListener('change', function () {
      var value = this.value;
      if (value) {
        callAreaBtn.href = value;
        callAreaBtn.classList.remove('is-disabled');
        callAreaBtn.setAttribute('aria-disabled', 'false');
      } else {
        callAreaBtn.href = '#';
        callAreaBtn.classList.add('is-disabled');
        callAreaBtn.setAttribute('aria-disabled', 'true');
      }
    });
    callAreaBtn.addEventListener('click', function (e) {
      if (callAreaBtn.classList.contains('is-disabled')) e.preventDefault();
    });
  }
})();
