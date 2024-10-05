/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav ');
const navBurger = document.querySelector('.main-header__burger');

navMain.classList.remove('main-nav--nojs');

navBurger.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navBurger.classList.add('main-header__burger--active');

  } else {

    navBurger.classList.remove('main-header__burger--active');
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
