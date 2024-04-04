import{S as v,a as P,i}from"./assets/vendor-48b140de.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u=document.querySelector(".gallery");function m(r){const t=r.map(o=>`<li class="card">
   <a class="link" href="${o.largeImageURL}">
     <img
             src="${o.webformatURL}"
             alt="${o.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${o.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${o.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${o.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${o.downloads}</li>
      </ul>
   </a>
 </li>`).join("");u.insertAdjacentHTML("beforeend",t),f.refresh()}const f=new v(".link",{captionsData:"alt",captionDelay:250});f.refresh();async function g(r,t){const o="https://pixabay.com/api/",n={key:"43098974-eee2e6d48134054f86f6d867e",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await P.get(o,{params:n})).data}const d=document.querySelector(".form"),y=document.querySelector(".loader"),p=document.querySelector(".load-more-btn");let l,a=1,L=0;const S=15;d.addEventListener("submit",E);async function E(r){if(r.preventDefault(),h(),l=d.elements.query.value.trim(),u.innerHTML="",a=1,l===""){i.error({title:"Error",message:"Please enter a search term",color:"red",maxWidth:"432px",height:"88px",position:"topRight"});return}try{b();const t=await g(l,a);L=Math.ceil(t.totalHits/S),t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}):(m(t.hits),F())}catch(t){console.error("Error fetching images:",t),i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}w(),d.reset()}p.addEventListener("click",q);async function q(){a+=1,h(),b();try{const r=await g(l,a);m(r.hits)}catch(r){console.error("Error fetching images:",r),i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}w(),M(),F()}function x(){p.classList.remove("is-hidden")}function h(){p.classList.add("is-hidden")}function F(){a>=L?(h(),i.info({message:"We're sorry, but you've reached the end of search results.",theme:"dark",progressBarColor:"#FFFFFF",color:"blue",position:"topRight"})):x()}function b(){y.classList.remove("is-hidden")}function w(){y.classList.add("is-hidden")}function M(){const r=u.firstChild.getBoundingClientRect().height;scrollBy({top:r,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
