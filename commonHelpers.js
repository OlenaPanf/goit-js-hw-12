import{a as d,i as u,S as m}from"./assets/vendor-48b140de.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();const l=document.querySelector(".gallery"),f=o=>o.map(t=>`<li class="card">
   <a class="link" href="${t.largeImageURL}">
     <img
             src="${t.webformatURL}"
             alt="${t.tags}"
             width="360"
             height="200"
             class="gallery-img"
         />
         <ul class="list-container">
         <li class="item-description"><span class="gal-span">Likes</span> ${t.likes}</li>
         <li class="item-description"><span class="gal-span">Views</span> ${t.views}</li>
         <li class="item-description"><span class="gal-span">Comments</span> ${t.comments}</li>
         <li class="item-description"><span class="gal-span">Downloads</span> ${t.downloads}</li>
      </ul>
   </a>
 </li>`).join("");async function h(o,t,r){const n="https://pixabay.com",e="/api/",s=encodeURIComponent(o),a=new URLSearchParams({key:"43098974-eee2e6d48134054f86f6d867e",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:r}),p=`${n}${e}?${a}`;return(await d.get(p,a)).data}const i=document.querySelector(".form"),c=document.querySelector(".loader");i.addEventListener("submit",o=>{o.preventDefault();const t=i.elements.query.value.trim();if(l.innerHTML="",t===""){u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",maxWidth:"432px",height:"88px",position:"topRight"});return}c.classList.remove("is-hidden"),h(t).then(r=>{const n=f(r.hits);l.innerHTML=n,new m(".link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(r=>{console.error("Error fetching data:",r)}).finally(()=>{c.classList.add("is-hidden"),i.reset()})});
//# sourceMappingURL=commonHelpers.js.map
