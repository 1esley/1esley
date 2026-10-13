// ============================================
// NAV — Mobile toggle
// ============================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
const navIcon = document.getElementById('navIcon');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('nav__links--open');
  navIcon.className = isOpen ? 'ri-close-line' : 'ri-menu-3-line';
});

// Close menu on link click
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    navIcon.className = 'ri-menu-3-line';
  });
});

// ============================================
// NAV — Scroll shadow
// ============================================
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
}, { passive: true });

// ============================================
// Scroll to top button
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add('scroll-top--visible');
  } else {
    scrollTopBtn.classList.remove('scroll-top--visible');
  }
}, { passive: true });

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ============================================
// Fade-in on scroll (Intersection Observer)
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in--visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections, cards, and key elements
document.querySelectorAll(
  '.section__title, .project-card, .skill-group, .about__info, .about__text, .experience__item, .education__degree, .education__certs, .contact__card, .hero__content, .hero__visual'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// ============================================
// Active nav link highlight on scroll
// ============================================
const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
  const scrollPos = window.scrollY + 100;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav__link[href="#${id}"]`);

    if (link) {
      if (scrollPos >= top && scrollPos < top + height) {
        link.style.color = 'var(--text-primary)';
      } else {
        link.style.color = '';
      }
    }
  });
};

window.addEventListener('scroll', highlightNav, { passive: true });
