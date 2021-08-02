/* eslint-disable */

const ESC_KEYCODE = 27;
const menu = document.querySelector('.header__menu');
const menuOpen = document.querySelector('.header__menu-open');
const menuClose = document.querySelector('.header__menu-close');

function onEscPress(evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menu.classList.remove('header__menu_open');
    if (document.querySelector('body').classList.contains('lock')) {
      document.querySelector('body').classList.remove('lock');
    }

    document.removeEventListener('keydown', onEscPress);
  }
}

function openMenu() {
  menu.classList.add('header__menu_open');
  if (!document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.add('lock');
  }
  menu.scrollTop = 0;

  document.addEventListener('keydown', onEscPress);
}

function closeMenu() {
  menu.classList.remove('header__menu_open');
  if (document.querySelector('body').classList.contains('lock')) {
    document.querySelector('body').classList.remove('lock');
  }
  document.removeEventListener('keydown', onEscPress);
}

function onmenuOpen() {
  openMenu();
}

function onMenuClose() {
  closeMenu();
}

menuOpen.addEventListener('click', onmenuOpen);
menuClose.addEventListener('click', onMenuClose);