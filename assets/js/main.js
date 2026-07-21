const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

document.getElementById('current-year').textContent = new Date().getFullYear();

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 12), { passive: true });

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', isOpen);
  menuButton.querySelector('.sr-only').textContent = isOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación';
});

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.focus();
  }
});

if (window.gsap && window.ScrollTrigger && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero-reveal', { opacity: 0, y: 28, duration: 0.8, stagger: 0.12, ease: 'power2.out', delay: 0.15 });
  gsap.utils.toArray('.reveal').forEach((element) => {
    gsap.from(element, { opacity: 0, y: 24, duration: 0.65, ease: 'power2.out', scrollTrigger: { trigger: element, start: 'top 88%', once: true } });
  });
}
