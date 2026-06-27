// ─── EASTER EGG NO CONSOLE ─────────────────────────────────────
console.log(
  '%c' +
  '  ██████╗ ██████╗ ██╗  ██╗\n' +
  ' ██╔════╝ ██╔══██╗██║ ██╔╝\n' +
  ' ██║  ███╗██████╔╝█████╔╝ \n' +
  ' ██║   ██║██╔═══╝ ██╔═██╗ \n' +
  ' ╚██████╔╝██║     ██║  ██╗\n' +
  '  ╚═════╝ ╚═╝     ╚═╝  ╚═╝\n',
  'color: #4ade80; font-family: monospace; font-size: 12px;'
);
console.log(
  '%c👋Opa dev, você é curioso que nem eu, sempre do um F12 > Console kkkkkk\n\n' +
  '%c📌 Gabriel Pacheco Kiesel\n' +
  '🎓 Ciência da Computação — 5ª fase\n' +
  '💻 Foco em back-end: Java, SQL, APIs REST\n' +
  '📱 WhatsApp: (48) 98871-1607\n' +
  '📧 gabriellpacheco.k@gmail.com\n' +
  '🔗 linkedin.com/in/gabriel-pacheco-3b637a362\n\n' +
  '%c→ Bora conversar? 🚀',
  'color: #e8edf5; font-size: 13px; font-weight: bold;',
  'color: #6b7a99; font-size: 12px; line-height: 1.8;',
  'color: #4ade80; font-size: 13px; font-weight: bold;'
);
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a[href^="#"]');

function updateActiveNav() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

// ─── HEADER MUDA AO SCROLLAR ───────────────────────────────────
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ─── ANIMAÇÃO DE ENTRADA AO SCROLLAR (INTERSECTION OBSERVER) ───
const animElements = document.querySelectorAll(
  '.skill-card, .projeto-card, .stat, .contato-item, .sobre-content'
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

animElements.forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

// ─── SMOOTH SCROLL COM OFFSET DO HEADER ────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 70;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ─── EFEITO DE TYPING NO EYEBROW ───────────────────────────────
const eyebrow = document.querySelector('.eyebrow');
if (eyebrow) {
  const text = eyebrow.textContent.trim();
  eyebrow.textContent = '';
  eyebrow.style.opacity = '1';

  let i = 0;
  const type = () => {
    if (i < text.length) {
      eyebrow.textContent += text[i++];
      setTimeout(type, 55);
    }
  };
  setTimeout(type, 600);
}

// ─── TOOLTIP NO BADGE DA FOTO ──────────────────────────────────
const badge = document.querySelector('.photo-badge');
if (badge) {
  badge.setAttribute('title', 'Disponível para trabalho imediato!');
}
