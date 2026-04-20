/* ==========================================================
   Het Joshi — minimal interactions
   Only two things: active section in nav, reveal on scroll.
   ========================================================== */

(function () {
  'use strict';

  /* ---- Active section highlighting in nav -------------- */
  const sections = Array.from(document.querySelectorAll('.plate[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const linkById = Object.fromEntries(
    navLinks
      .map((a) => {
        const href = a.getAttribute('href') || '';
        return [href.replace('#', ''), a];
      })
      .filter(([id]) => id)
  );

  if ('IntersectionObserver' in window && sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkById[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove('is-active'));
            link.classList.add('is-active');
          }
        });
      },
      {
        rootMargin: '-40% 0px -55% 0px',
        threshold: 0,
      }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ---- Reveal on scroll (plates + chapter dividers) ---- */
  const revealTargets = document.querySelectorAll('.plate, .chapter-divider');
  if ('IntersectionObserver' in window && revealTargets.length) {
    revealTargets.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            reveal.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealTargets.forEach((el) => reveal.observe(el));
  }
})();
