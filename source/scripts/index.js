/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav ');
const navBurger = document.querySelector('.main-nav__burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const navIcon = document.querySelector('.main-header__icon');

navBurger.addEventListener('click', () => {
  if (navIcon.classList.contains('main-icon--opened')) {
    navIcon.classList.remove('main-icon--opened');
    navIcon.classList.add('main-icon--closed');
  } else {
    navIcon.classList.add('main-nav--opened');
    navIcon.classList.remove('main-icon--closed');
  }
});


