const hamburger = document.querySelector('.nav__hamburger');
const navLinks = document.querySelector('.nav__links--mobile');
const modal = document.querySelector('.modal');
const overlay = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('nav__hamburger--active');
  navLinks.classList.toggle('nav__links--active');
  modal.classList.toggle('modal--active');
  overlay.classList.toggle('overlay-active');
});

const accordionItem = document.querySelectorAll('.accordion__item');

console.log(accordionItem);

accordionItem.forEach((item) => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
    } else {
      item.classList.add('active');
    }
  });
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const currentScroll = window.scrollY;

  if (currentScroll <= 0) {
    nav.style.top = '0';
    return;
  }

  if (currentScroll > lastScroll) {
    // Scrolling down
    nav.style.top = '-100%';
  } else {
    // Scrolling up
    nav.style.top = '0';
  }

  lastScroll = currentScroll;
});
