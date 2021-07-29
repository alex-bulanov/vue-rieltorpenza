const openMessengersBtn = document.querySelector('.plate__button_open');
const closeMessengersBtn = document.querySelector('.plate__button_close');
const messengers = document.querySelector('.plate__messengers');

function hideMessengers() {
  messengers.classList.remove('plate__messengers_open');
  closeMessengersBtn.removeEventListener('click', hideMessengers);
}

function showMessengers() {
  messengers.classList.add('plate__messengers_open');
  closeMessengersBtn.addEventListener('click', hideMessengers);
}

if (openMessengersBtn) {
  openMessengersBtn.addEventListener('click', showMessengers);
}
