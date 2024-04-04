import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { renderGallery, gallery } from './js/render-functions';

//====================================================
const formElem = document.querySelector('.form');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-btn');
//====================================================
let query;
let currentPage = 1;
let maxPage = 0;
const perPage = 15;
//====================================================
formElem.addEventListener('submit', onFormSubmit);
async function onFormSubmit(event) {
  event.preventDefault();
  //hideLoadMore;
  query = formElem.elements.query.value.trim(); //отримую що ввів користувач
  gallery.innerHTML = ''; //очищаю попередню розмітку. Навіть якщо її немає, видаляю все старе
  currentPage = 1; // щоб при новому запиті завжди показувало спочатку першу сторінку

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      color: 'red',
      maxWidth: '432px',
      height: '88px',
      position: 'topRight',
    });
    return;
  }
  try {
    const data = await getImage(query, currentPage); //посилаю кур'єра за новими даними, чекаю кур'єра, коли кур'єр повертається з даними data
    maxPage = Math.ceil(data.totalHits / perPage);
    renderGallery(data.hits); //дані data відмальовую на сторінці
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topCenter',
    });
  } finally {
    hideLoader();
  }

  checkBtnStatus();
  formElem.reset();
}
//=====================================================
loadMoreBtn.addEventListener('click', onLoadMoreClick);
async function onLoadMoreClick() {
  currentPage += 1;
  const data = await getImage(query, currentPage); //посилаю кур'єра за новими даними, чекаю кур'єра, коли кур'єр повертається з даними data
  renderGallery(data.hits); //дані data відмальовую на сторінці
  checkBtnStatus();
}
//=====================================================

function showLoadMore() {
  loadMoreBtn.classList.remove('is-hidden');
}
function hideLoadMore() {
  loadMoreBtn.classList.add('is-hidden');
}

function checkBtnStatus() {
  if (currentPage >= maxPage) {
    hideLoadMore();
  } else {
    showLoadMore();
  }
}

function showLoader() {
  loader.classList.remove('is-hidden');
}
function hideLoader() {
  loader.classList.add('is-hidden');
}

// =====================================================
//====================================================
