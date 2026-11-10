import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './gallery-items';

const imageContainer = document.querySelector('.gallery');

const imagesMarkup = images
  .map(({ preview, original, description }) => {
    return `<li class="gallery-item"><a class="gallery-link" href="${original}">
  <img class="gallery-image" src="${preview}" alt="${description}" loading="lazy"/>
</a></li>`;
  })
  .join('');

imageContainer.insertAdjacentHTML('beforeend', imagesMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  animationSlide: true,
  animationSpeed: 100,
  captionsData: 'alt',
  captionDelay: 205,
  loop: true,
});

lightbox.on('show.simplelightbox', () => {
  const overlay = document.querySelector('.gallery');
  if (overlay) {
    const overlayText = document.createElement('p');
    overlayText.classList.add('custom-background-text');
    overlayText.textContent = 'count';
    overlay.appendChild(overlayText);
  }
});

lightbox.on('close.simplelightbox', () => {
  const overlayText = document.querySelector('.custom-background-text');
  if (overlayText) {
    overlayText.remove();
  }
});
