(function () {
  'use strict';

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var menuToggle = document.getElementById('menuToggle');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('drawerOverlay');
  var servicesTrigger = document.getElementById('servicesTrigger');
  var servicesSub = document.getElementById('servicesSub');

  function openDrawer() {
    if (drawer) drawer.classList.add('open');
    if (overlay) {
      overlay.classList.add('open');
      overlay.setAttribute('aria-hidden', 'false');
    }
    document.body.style.overflow = 'hidden';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    if (drawer) drawer.classList.remove('open');
    if (overlay) {
      overlay.classList.remove('open');
      overlay.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
  }

  if (menuToggle) {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.addEventListener('click', openDrawer);
  }
  if (overlay) overlay.addEventListener('click', closeDrawer);
  if (drawer) {
    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });
  }
  if (servicesTrigger && servicesSub) {
    servicesTrigger.addEventListener('click', function () {
      var open = servicesSub.classList.toggle('open');
      servicesTrigger.classList.toggle('expanded', open);
      servicesTrigger.setAttribute('aria-expanded', open);
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
