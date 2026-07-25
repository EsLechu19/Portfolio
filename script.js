document.addEventListener('DOMContentLoaded', () => {

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ====================
     Loader
  ==================== */

  const loader = document.querySelector('.loader');

  function hideLoader() {
    if (loader) loader.classList.add('hidden');
  }

  if (prefersReducedMotion) {
    hideLoader();
  } else {
    window.addEventListener('load', () => {
      setTimeout(hideLoader, 1500);
    });
  }

  /* ====================
     Mobile Menu
  ==================== */

  const navMenu = document.querySelector('.navbar-nav');
  const trigger = document.querySelector('.mobile-trigger');

  if (trigger && navMenu) {
    trigger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = trigger.querySelector('i');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-xmark');
    });

    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        e.target !== trigger &&
        !trigger.contains(e.target)
      ) {
        navMenu.classList.remove('open');
        const icon = trigger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  }

  /* ====================
     Smooth Scroll + Scroll Spy
  ==================== */

  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  function updateActiveNav() {
    let current = 'home';
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= 200) {
        current = section.id;
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.section === current);
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.dataset.section;
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      if (navMenu && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        const icon = trigger.querySelector('i');
        icon.classList.add('fa-bars');
        icon.classList.remove('fa-xmark');
      }
    });
  });

  const navDataLinks = document.querySelectorAll('[data-nav]');
  navDataLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href').replace('#', '');
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  const initialHash = window.location.hash;
  if (initialHash) {
    const target = document.getElementById(initialHash.replace('#', ''));
    if (target) {
      setTimeout(() => target.scrollIntoView(), 100);
    }
  }
  updateActiveNav();

  setTimeout(revealSkillBars, 100);

  /* ====================
     Section Reveal Observer
  ==================== */

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.section').forEach((s) => observer.observe(s));
  }

  /* ====================
     Skills Tabs
  ==================== */

  const tabs = document.querySelectorAll('.tab');
  const panels = {
    frontend: document.getElementById('panel-frontend'),
    backend: document.getElementById('panel-backend'),
    tools: document.getElementById('panel-tools'),
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach((t) => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });

      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      Object.values(panels).forEach((p) => {
        if (p) p.classList.remove('active');
      });

      const panel = panels[target];
      if (panel) {
        panel.classList.add('active');
        revealSkillBars();
      }
    });
  });

  /* ====================
     Skill Bar Reveal
  ==================== */

  function revealSkillBars() {
    if (prefersReducedMotion) return;

    const skills = document.querySelectorAll('.skill');
    skills.forEach((skill) => {
      const fill = skill.querySelector('.skill-fill');
      if (!fill) return;
      const targetWidth = fill.style.width;
      fill.style.width = '0';

      const check = () => {
        const top = skill.getBoundingClientRect().top;
        if (top < window.innerHeight * 0.85) {
          fill.style.width = targetWidth;
          window.removeEventListener('scroll', check);
        }
      };

      requestAnimationFrame(check);
      window.addEventListener('scroll', check);
    });
  }

});
