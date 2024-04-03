import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const gallery = document.querySelector('.gallery');
export const renderGallery = images => {
  return images
    .map(
      image => `<li class="card">
   <a class="link" href="${image.largeImageURL}">
     <img
             src="${image.webformatURL}"
             alt="${image.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${image.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${image.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${image.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${image.downloads}</li>
      </ul>
   </a>
 </li>`
    )
    .join('');
};
