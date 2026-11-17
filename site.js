// Burger menu: opens/closes the full-screen menu on small screens.
(function () {
  var nav = document.querySelector('.nav');
  if (!nav) return;
  var btn = nav.querySelector('.burger');

  function setOpen(open) {
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    document.body.style.overflow = open ? 'hidden' : '';
  }

  btn.addEventListener('click', function () {
    setOpen(!nav.classList.contains('open'));
  });

  // close when a link is chosen, on Escape, or when the screen gets wide again
  nav.querySelectorAll('nav a').forEach(function (a) {
    a.addEventListener('click', function () { setOpen(false); });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      setOpen(false);
      btn.focus();
    }
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', function (e) {
    if (e.matches) setOpen(false);
  });
})();
