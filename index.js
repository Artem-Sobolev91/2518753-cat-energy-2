/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-nav ');
const navBurger = document.querySelector('.main-header__burger');
const mapPicture = document.querySelector('.map__picture');
const mapIframe = document.querySelector('.map__iframe');
const headerBurger = document.querySelector('.main-header__burger');

headerBurger.classList.remove('main-header__burger--nojs');
navMain.classList.remove('main-nav--nojs');
mapPicture.classList.remove('map__picture--nojs');
mapIframe.classList.remove('map__iframe--nojs');

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
