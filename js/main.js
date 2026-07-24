// Shared site scripts
const prog = document.getElementById('scroll-progress');
if (prog) {
  window.addEventListener('scroll', () => {
    const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    prog.style.width = pct + '%';
  }, { passive: true });
}

const backTop = document.getElementById('back-top');
if (backTop) {
  window.addEventListener('scroll', () => {
    backTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
}

const ham = document.getElementById('hamburger');
const mob = document.getElementById('mobile-menu');
if (ham && mob) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    mob.classList.toggle('open');
  });
}

function closeMobile() {
  if (ham) ham.classList.remove('open');
  if (mob) mob.classList.remove('open');
}

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a');
if (sections.length && links.length) {
  const navObs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const a = document.querySelector(
          `.nav-links a[href="#${e.target.id}"], .nav-links a[data-section="${e.target.id}"]`
        );
        if (a) a.classList.add('active');
      }
    }),
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => navObs.observe(s));
}

const fadeObs = new IntersectionObserver(
  entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
  { threshold: 0.1 }
);
document.querySelectorAll('.fade-up').forEach(el => fadeObs.observe(el));

const typed = document.getElementById('typed-text');
if (typed) {
  const phrases = [
    'build data pipelines.',
    'ship AI-driven apps.',
    'turn data into decisions.',
    'design backend systems.',
    'build full-stack products.',
  ];
  let pi = 0, ci = 0, deleting = false;
  function type() {
    const phrase = phrases[pi];
    if (!deleting) {
      typed.textContent = phrase.slice(0, ++ci);
      if (ci === phrase.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      typed.textContent = phrase.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(type, 300); return; }
    }
    setTimeout(type, deleting ? 40 : 65);
  }
  setTimeout(type, 800);
}

function copyEmail() {
    navigator.clipboard.writeText('akshat.px08@gmail.com').then(() => {
    const btn = document.getElementById('copy-btn');
    if (!btn) return;
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(() => { btn.textContent = 'copy'; btn.classList.remove('copied'); }, 2000);
  });
}

const footerYear = document.getElementById('footer-year');
if (footerYear) footerYear.textContent = new Date().getFullYear();

document.querySelectorAll('.skills-toggle-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.skills;
    document.querySelectorAll('.skills-toggle-btn').forEach(b => {
      const on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-selected', on ? 'true' : 'false');
    });
    document.querySelectorAll('.skills-panel').forEach(panel => {
      const on = panel.id === `skills-${target}`;
      panel.classList.toggle('active', on);
      if (on) panel.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
    });
  });
});
