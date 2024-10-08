document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
  
    if (hamburger && nav) {
      hamburger.addEventListener('click', function () {
        nav.classList.toggle('open');
      });
    }
  });
  