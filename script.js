// ===== Mobile nav =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');
burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ===== Menu category filter =====
const filters = document.getElementById('filters');
const products = [...document.querySelectorAll('.product')];
filters.addEventListener('click', (e) => {
  const btn = e.target.closest('.pill');
  if (!btn) return;
  filters.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  const cat = btn.dataset.cat;
  products.forEach(p => {
    const show = cat === 'all' || p.dataset.cat === cat;
    p.style.display = show ? '' : 'none';
  });
});

// ===== Add-to-cart toast =====
const toast = document.getElementById('toast');
let toastTimer;
document.querySelectorAll('.add').forEach(btn => {
  btn.addEventListener('click', () => {
    const name = btn.closest('.product').querySelector('h3').textContent;
    toast.textContent = `${name} hinzugefügt 🧋`;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  });
});

// ===== Animate On Scroll (AOS library) =====
if (window.AOS) {
  AOS.init({ duration: 750, easing: 'ease-out-cubic', once: true, offset: 60 });
}

// ===== Count-up for hero stats =====
const stats = document.querySelectorAll('.hero-stats strong');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const raw = el.textContent.trim();           // e.g. "20+", "100%", "2"
    const target = parseInt(raw, 10) || 0;
    const suffix = raw.replace(/[0-9]/g, '');     // "+", "%", ""
    const duration = 1100, start = performance.now();
    function step(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);       // ease-out
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
    countObserver.unobserve(el);
  });
}, { threshold: .6 });
stats.forEach(s => countObserver.observe(s));
