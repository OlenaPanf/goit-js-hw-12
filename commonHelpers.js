import{S as L,a as w,i as u}from"./assets/vendor-48b140de.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const p=document.querySelector(".gallery");function f(o){const t=o.map(r=>`<li class="card">
   <a class="link" href="${r.largeImageURL}">
     <img
             src="${r.webformatURL}"
             alt="${r.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${r.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${r.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${r.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${r.downloads}</li>
      </ul>
   </a>
 </li>`).join("");p.insertAdjacentHTML("beforeend",t),m.refresh()}const m=new L(".link",{captionsData:"alt",captionDelay:250});m.refresh();async function h(o,t){const r="https://pixabay.com/api/",i={key:"43098974-eee2e6d48134054f86f6d867e",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15};return(await w.get(r,{params:i})).data}const c=document.querySelector(".form"),b=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");let n,a=1,g=0;const P=15;c.addEventListener("submit",S);async function S(o){if(o.preventDefault(),n=c.elements.query.value.trim(),p.innerHTML="",a=1,n===""){u.error({title:"Error",message:"Please enter a search term",color:"red",maxWidth:"432px",height:"88px",position:"topRight"});return}try{const t=await h(n,a);g=Math.ceil(t.totalHits/P),f(t.hits)}catch(t){console.error("Error fetching images:",t),u.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topCenter"})}finally{M()}y(),c.reset()}d.addEventListener("click",q);async function q(){a+=1;const o=await h(n,a);f(o.hits),y()}function v(){d.classList.remove("is-hidden")}function x(){d.classList.add("is-hidden")}function y(){a>=g?x():v()}function M(){b.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
