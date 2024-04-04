import{S as w,a as P,i}from"./assets/vendor-48b140de.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p=document.querySelector(".gallery");function f(o){const t=o.map(s=>`<li class="card">
   <a class="link" href="${s.largeImageURL}">
     <img
             src="${s.webformatURL}"
             alt="${s.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${s.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${s.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${s.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${s.downloads}</li>
      </ul>
   </a>
 </li>`).join("");p.insertAdjacentHTML("beforeend",t),g.refresh()}const g=new w(".link",{captionsData:"alt",captionDelay:250});g.refresh();async function y(o,t){const e="https://pixabay.com"+"/api/",r={key:"43098974-eee2e6d48134054f86f6d867e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await P.get(e,{params:r})).data}const d=document.querySelector(".form"),L=document.querySelector(".loader"),h=document.querySelector(".load-more-btn");let l,a=1,F=0;const S=15;d.addEventListener("submit",v);async function v(o){if(o.preventDefault(),m(),E(),l=d.elements.query.value.trim(),p.innerHTML="",a=1,l===""){i.error({title:"Error",message:"Please enter a search term",color:"red",maxWidth:"432px",height:"88px",position:"topRight"}),u();return}try{const t=await y(l,a);F=Math.ceil(t.totalHits/S),t.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}):(f(t.hits),b())}catch(t){console.error("Error fetching images:",t),i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}u(),d.reset()}h.addEventListener("click",R);async function R(){a+=1,m(),E();try{const o=await y(l,a);f(o.hits)}catch(o){console.error("Error fetching images:",o),i.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight"})}u(),x(),b()}function q(){h.classList.remove("is-hidden")}function m(){h.classList.add("is-hidden")}function b(){a>=F?(m(),i.info({message:"We're sorry, but you've reached the end of search results.",theme:"dark",progressBarColor:"#FFFFFF",color:"blue",position:"topRight"})):q()}function E(){L.classList.remove("is-hidden")}function u(){L.classList.add("is-hidden")}function x(){const o=p.firstChild.getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
