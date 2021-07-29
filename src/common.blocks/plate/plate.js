const openMessengersBtn = document.querySelector('.plate__button_open');
const closeMessengersBtn = document.querySelector('.plate__button_close');
const messengers = document.querySelector('.plate__messengers');
const buttons = document.querySelector('.plate__buttons');

function hideMessengers() {
  messengers.classList.remove('plate__messengers_open');
  buttons.classList.remove('plate__buttons_hide');
  closeMessengersBtn.removeEventListener('click', hideMessengers);
}

function showMessengers() {
  messengers.classList.add('plate__messengers_open');
  buttons.classList.add('plate__buttons_hide');
  closeMessengersBtn.addEventListener('click', hideMessengers);
}

if (openMessengersBtn) {
  openMessengersBtn.addEventListener('click', showMessengers);
}
