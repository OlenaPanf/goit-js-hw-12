import{i as d,S as u}from"./assets/vendor-0fc460d7.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".gallery"),p=n=>n.map(t=>`<li class="card">
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
 </li>`).join("");function m(n){const t="https://pixabay.com",s="/api/",i=encodeURIComponent(n),e=new URLSearchParams({key:"43098974-eee2e6d48134054f86f6d867e",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${t}${s}?${e}`;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const a=document.querySelector(".form"),c=document.querySelector(".loader");a.addEventListener("submit",n=>{n.preventDefault();const t=a.elements.query.value.trim();if(l.innerHTML="",t===""){d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",color:"red",maxWidth:"432px",height:"88px",position:"topRight"});return}c.classList.remove("is-hidden"),m(t).then(s=>{const i=p(s.hits);l.innerHTML=i,new u(".link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(s=>{console.error("Error fetching data:",s)}).finally(()=>{c.classList.add("is-hidden"),a.reset()})});
//# sourceMappingURL=commonHelpers.js.map
