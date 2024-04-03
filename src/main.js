import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery, gallery } from './js/render-functions';

const formElem = document.querySelector('.form');
const loader = document.querySelector('.loader');

formElem.addEventListener('submit', event => {
  event.preventDefault();
  const query = formElem.elements.query.value.trim();
  gallery.innerHTML = '';

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      color: 'red',
      maxWidth: '432px',
      height: '88px',
      position: 'topRight',
    });

    return;
  }

  loader.classList.remove('is-hidden');

  getImage(query)
    .then(data => {
      const markup = renderGallery(data.hits);
      gallery.innerHTML = markup;
      const lightbox = new SimpleLightbox('.link', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      lightbox.refresh();
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
    .finally(() => {
      loader.classList.add('is-hidden');
      formElem.reset();
    });
});
