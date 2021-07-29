const galleryItems = document.querySelectorAll('.section-gallery__item');

function createOverlay() {
  if (galleryItems.length > 5) {
    const overlay = document.createElement('div');
    const overlayСontent = document.createElement('span');
    overlay.classList.add('section-gallery__item-overlay');
    overlayСontent.textContent = `${galleryItems.length - 5} фото`;
    overlay.append(overlayСontent);
    galleryItems[4].append(overlay);
  }
}

createOverlay();
