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
  hideLoadMore();
  showLoader();
  query = formElem.elements.query.value.trim();
  gallery.innerHTML = '';
  currentPage = 1;

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      color: 'red',
      maxWidth: '432px',
      height: '88px',
      position: 'topRight',
    });
    hideLoader();
    return;
  }
  try {
    const data = await getImage(query, currentPage);
    maxPage = Math.ceil(data.totalHits / perPage);
    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        theme: 'dark',
        progressBarColor: '#FFFFFF',
        color: '#EF4040',
        position: 'topRight',
      });
    } else {
      renderGallery(data.hits);
      checkBtnStatus();
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  }

  hideLoader();
  formElem.reset();
}
//=====================================================
loadMoreBtn.addEventListener('click', onLoadMoreClick);

async function onLoadMoreClick() {
  currentPage += 1;
  hideLoadMore();
  showLoader();
  try {
    const data = await getImage(query, currentPage);
    renderGallery(data.hits);
  } catch (error) {
    console.error('Error fetching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  }

  hideLoader();
  myScroll();
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
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      theme: 'dark',
      progressBarColor: '#FFFFFF',
      color: 'blue',
      position: 'topRight',
    });
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

// ===================================================
function myScroll() {
  const height = gallery.firstChild.getBoundingClientRect().height;

  scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}
//====================================================
