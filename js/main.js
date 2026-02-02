/**
 * ProForce Site Services - Static Site Interactions
 * Dumpster Rental Loudon TN
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initScrollAnimations();
  initDurationSelection();
  initCalendarMock();
  initFormPlaceholders();
});

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav-mobile');
  if (!toggle || !nav) return;
  
  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
  
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  
  elements.forEach(el => observer.observe(el));
}

function initDurationSelection() {
  document.querySelectorAll('.duration-card').forEach(card => {
    card.addEventListener('click', () => {
      card.closest('.duration-grid')?.querySelectorAll('.duration-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}

function initCalendarMock() {
  const days = document.querySelectorAll('.calendar-day:not(.disabled)');
  days.forEach(day => {
    day.addEventListener('click', () => {
      days.forEach(d => d.classList.remove('selected'));
      day.classList.add('selected');
    });
  });
}

function initFormPlaceholders() {
  // Static forms - no submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('This is a static demo. No booking will be processed.');
      return false;
    });
  });
}
