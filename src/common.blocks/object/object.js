const plate = document.querySelector('.plate');
const footer = document.querySelector('.footer');

function setOffset() {
  if (window.innerWidth >= 1240) {
    footer.style.paddingBottom = '0px';
  } else {
    footer.style.paddingBottom = `${plate.offsetHeight}px`;
  }
}

if (plate) {
  setOffset();
  window.addEventListener('resize', setOffset);
}
