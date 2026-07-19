/* ============================================================
   ProfeOS – Main script
   ============================================================ */

/* ---------- Header scroll ---------- */
const header = document.querySelector('[data-header]');
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}, { passive: true });

/* ---------- Mobile menu ---------- */
const menuButton = document.querySelector('[data-menu-button]');
const navLinks = document.querySelector('[data-nav-links]');

menuButton?.addEventListener('click', () => {
  const open = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

/* ---------- Dark-mode ---------- */
const THEME_KEY = 'profeos-theme';
const html = document.documentElement;
const themeBtn = document.querySelector('[data-theme-toggle]');
const iconSun  = themeBtn?.querySelector('.icon-sun');
const iconMoon = themeBtn?.querySelector('.icon-moon');

function applyTheme(dark) {
  html.classList.toggle('dark', dark);
  if (iconSun && iconMoon) {
    iconSun.style.display  = dark ? 'none' : 'block';
    iconMoon.style.display = dark ? 'block' : 'none';
  }
}

// Initialise from saved preference or system preference
const saved = localStorage.getItem(THEME_KEY);
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(saved ? saved === 'dark' : prefersDark);

themeBtn?.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
  applyTheme(isDark);
});

// React to system changes if user hasn't chosen manually
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem(THEME_KEY)) applyTheme(e.matches);
});

/* ---------- Scroll-to-top ---------- */
const scrollTopBtn = document.querySelector('[data-scroll-top]');
if (scrollTopBtn) {
  window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- Reveal on scroll (improved) ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

/* ---------- Footer year ---------- */
document.querySelector('[data-year]').textContent = new Date().getFullYear();

/* ---------- Beta form ---------- */
document.querySelector('[data-beta-form]')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const status = document.querySelector('[data-form-status]');
  if (!form.checkValidity()) { form.reportValidity(); return; }
  status.textContent = 'Gracias. Te avisaremos cuando la beta esté lista.';
  form.reset();
});
