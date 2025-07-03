
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  revealElements.forEach(el => observer.observe(el));
 // About Section Slide-in Animation//
  document.addEventListener('DOMContentLoaded', function () {
  const slideEls = document.querySelectorAll('.slide-left, .slide-right');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.2 });

  slideEls.forEach(el => observer.observe(el));
});
