function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);const s=new(0,(u=r("1JzdB")).default),i="data-genresArr";function l(e){let t=[];return function(){try{if(localStorage.getItem(i)){return JSON.parse(localStorage.getItem(i))}return}catch{return!1}}().map((({id:n,name:o})=>{e.map((e=>{e===n&&t.push(o)}))})),t}var a=r("fb9GJ");var c=e(r("amrNH")).template({1:function(e,t,n,o,r){var s,i,l=null!=t?t:e.nullContext||{},a=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='card' data-id='"+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:a)===c?i.call(l,{name:"id",hash:{},data:r,loc:{start:{line:2,column:28},end:{line:2,column:34}}}):i)+"'>\n"+(null!=(s=d(n,"if").call(l,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,r,0),inverse:e.program(4,r,0),data:r,loc:{start:{line:3,column:4},end:{line:17,column:11}}}))?s:"")+"    <div class='card__box-info'>\n      <h2 class='card__title'>"+u(typeof(i=null!=(i=d(n,"title")||(null!=t?d(t,"title"):t))?i:a)===c?i.call(l,{name:"title",hash:{},data:r,loc:{start:{line:19,column:30},end:{line:19,column:39}}}):i)+"</h2>\n      <div class='card__data'>\n        "+(null!=(s=d(n,"if").call(l,null!=t?d(t,"genre_ids"):t,{name:"if",hash:{},fn:e.program(6,r,0),inverse:e.program(8,r,0),data:r,loc:{start:{line:21,column:8},end:{line:23,column:80}}}))?s:"")+"\n\n        "+(null!=(s=d(n,"if").call(l,null!=t?d(t,"release_date"):t,{name:"if",hash:{},fn:e.program(10,r,0),inverse:e.program(12,r,0),data:r,loc:{start:{line:25,column:8},end:{line:27,column:86}}}))?s:"")+"\n      </div></div>\n  </li>\n"},2:function(e,t,n,o,r){var s,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,a="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='https://image.tmdb.org/t/p/w500"+c(typeof(s=null!=(s=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?s:l)===a?s.call(i,{name:"poster_path",hash:{},data:r,loc:{start:{line:6,column:44},end:{line:6,column:59}}}):s)+"'\n        alt='"+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:l)===a?s.call(i,{name:"title",hash:{},data:r,loc:{start:{line:7,column:13},end:{line:7,column:22}}}):s)+"'\n        data-id='"+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:l)===a?s.call(i,{name:"id",hash:{},data:r,loc:{start:{line:8,column:17},end:{line:8,column:23}}}):s)+"'\n      />\n"},4:function(e,t,n,o,r){var s,i=null!=t?t:e.nullContext||{},l=e.hooks.helperMissing,a="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"      <img\n        class='card__img'\n        src='https://media.istockphoto.com/id/911590226/uk/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D1%96-%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0-%D1%96%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D1%96%D1%8F-%D1%87%D0%B0%D1%81%D1%83-%D1%84%D1%96%D0%BB%D1%8C%D0%BC%D1%83-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D1%96%D1%8F-%D0%BA%D1%96%D0%BD%D0%BE%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80%D1%83-%D0%BD%D0%B0-%D1%87%D0%B5%D1%80%D0%B2%D0%BE%D0%BD%D0%BE%D0%BC%D1%83-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D0%BC%D1%83-%D1%82%D0%BB%D1%96.jpg?s=612x612&w=0&k=20&c=xj1wHSzUN8OEHhOo8Xa_Z7FlJLxFXPppehw0-6KnmRs='\n        alt='"+c(typeof(s=null!=(s=u(n,"title")||(null!=t?u(t,"title"):t))?s:l)===a?s.call(i,{name:"title",hash:{},data:r,loc:{start:{line:14,column:13},end:{line:14,column:22}}}):s)+"'\n        data-id='"+c(typeof(s=null!=(s=u(n,"id")||(null!=t?u(t,"id"):t))?s:l)===a?s.call(i,{name:"id",hash:{},data:r,loc:{start:{line:15,column:17},end:{line:15,column:23}}}):s)+"'\n      />\n"},6:function(e,t,n,o,r){var s,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span\n            class='card__genres'\n          >"+e.escapeExpression("function"==typeof(s=null!=(s=i(n,"genre_ids")||(null!=t?i(t,"genre_ids"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"genre_ids",hash:{},data:r,loc:{start:{line:23,column:11},end:{line:23,column:24}}}):s)+"</span>"},8:function(e,t,n,o,r){return"<p class='card__undefined'>N/A</p>"},10:function(e,t,n,o,r){var s,i=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"<span class='card__year'>\n            |\n            "+e.escapeExpression("function"==typeof(s=null!=(s=i(n,"release_date")||(null!=t?i(t,"release_date"):t))?s:e.hooks.helperMissing)?s.call(null!=t?t:e.nullContext||{},{name:"release_date",hash:{},data:r,loc:{start:{line:27,column:12},end:{line:27,column:28}}}):s)+"</span>"},12:function(e,t,n,o,r){return"<p class='card__undefined'>| N/A</p>"},compiler:[8,">= 4.3.0"],main:function(e,t,n,o,r){var s;return null!=(s=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,r,0),inverse:e.noop,data:r,loc:{start:{line:1,column:0},end:{line:30,column:9}}}))?s:""},useData:!0}),u=r("1JzdB"),d=r("kyRuT"),h=(u=r("1JzdB"),d=r("kyRuT"),r("2ezs4"));function f(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}function p(e,t){return n=e,(o=f(e,t,"get")).get?o.get.call(n):o.value;var n,o}function m(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function g(e,t,n){m(e,t),t.set(e,n)}function v(e,t,n){return function(e,t,n){if(t.set)t.set.call(e,n);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=n}}(e,f(e,t,"set"),n),n}function b(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function D(e,t){m(e,t),t.add(e)}const y=document.createElement("template"),w=String.raw;y.innerHTML=w`
  <style>
    :host {
      all: initial;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 1px;
    }
    :host button {
      position: fixed;
      bottom: 16px;
      right: 16px;
      cursor: pointer;
    }
    :host([hidden]) button {
      opacity: 0;
      visibility: hidden;
    }
  </style>
  <button type="button" part="button"><slot>Scroll to top</slot></button>
`;var _=new WeakMap,B=new WeakSet,O=new WeakSet,E=new WeakMap;class L extends HTMLElement{get visibleAfter(){return this.getAttribute("visible-after")}set visibleAfter(e){this.setAttribute("visible-after",e)}get smoothScrolling(){return this.hasAttribute("smooth-scrolling")}set smoothScrolling(e){e?this.setAttribute("smooth-scrolling",""):this.removeAttribute("smooth-scrolling")}get topOffset(){return Number(this.getAttribute("top-offset"))||0}set topOffset(e){const t=Number(e)||0;this.setAttribute("top-offset",t>0?t:0)}static get observedAttributes(){return["visible-after"]}attributeChangedCallback(e,t,n){"visible-after"===e&&b(this,O,T).call(this,n)}connectedCallback(){b(this,B,k).call(this,"visibleAfter"),b(this,B,k).call(this,"smoothScrolling"),b(this,B,k).call(this,"topOffset"),this.topOffset||(this.topOffset=0),this.visibleAfter||(this.visibleAfter="50vh"),v(this,_,this.shadowRoot.querySelector("button")),b(this,O,T).call(this,this.visibleAfter);try{this.observer=new IntersectionObserver((([e])=>{this.hidden=e.isIntersecting,p(this,_).part.toggle("button--hidden",e.isIntersecting),this.dispatchEvent(new CustomEvent("scroll-top:visibility-change",{bubbles:!0,composed:!0,detail:{visible:!e.isIntersecting}}))})),this.observer.observe(this)}catch(e){console.error(e)}p(this,_).addEventListener("click",p(this,E))}disconnectedCallback(){this.observer&&(this.observer.disconnect(),this.observer=null),p(this,_).removeEventListener("click",p(this,E))}static defineCustomElement(e="scroll-top"){"undefined"==typeof window||window.customElements.get(e)||window.customElements.define(e,L)}constructor(){super(),D(this,B),D(this,O),g(this,_,{writable:!0,value:void 0}),g(this,E,{writable:!0,value:e=>{e.preventDefault();const t={top:this.topOffset};this.smoothScrolling&&(t.behavior="smooth"),document.scrollingElement.scrollTo(t)}}),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(y.content.cloneNode(!0))}}function k(e){if(Object.prototype.hasOwnProperty.call(this,e)){const t=this[e];delete this[e],this[e]=t}}function T(e){"string"==typeof e&&(this.style.height=e)}a=r("fb9GJ"),u=r("1JzdB"),d=r("kyRuT");const q=new(0,u.default),M=document.querySelector(".js-search-form"),S=document.querySelector(".js-error-notify");const x=document.querySelector(".js-search-form"),C=document.querySelector(".js-card-collection"),A=document.querySelector(".js-error-notify"),P=new(0,u.default);async function W(e){try{if((0,d.spinerOn)(),P.resetPage(),P.quary=x.query.value.trim(),!P.quary)return A.innerHTML="Search result not successful.",setTimeout(Q,3e3),void(0,d.spinerOff)();P.page=e;const{page:t,results:n,total_pages:o,total_results:r}=await P.getMovieByName();if(setTimeout(d.spinerOff,500),0===r)return A.innerHTML="Enter the correct movie name and try again.",void setTimeout(Q,3e3);(0,h.addLocal)(n),C.innerHTML="",function(e){const t=c(j(e));C.insertAdjacentHTML("beforeend",t)}(n)}catch(e){(0,d.spinerOff)(),console.log(e.message)}}function j(e){const t=e.map((e=>(e.genre_ids=l(e.genre_ids).join(", "),e.release_date=e.release_date.slice(0,4),e)));return(0,h.addLocal)(t),t}function Q(){A.innerHTML=""}x.addEventListener("submit",(async function(t){t.preventDefault();try{if((0,d.spinerOn)(),q.resetPage(),q.quary=M.query.value.trim(),!q.quary)return S.innerHTML="Search result not successful.",setTimeout(resetErorrMarkup,3e3),void(0,d.spinerOff)();const{page:t,results:n,total_pages:o,total_results:r}=await q.getMovieByName();if(setTimeout(d.spinerOff,500),0===r)return S.innerHTML="Enter the correct movie name and try again.",void setTimeout(resetErorrMarkup,3e3);const s=document.querySelector("#pagination"),i={totalItems:r,itemsPerPage:20,visiblePages:5,centerAlign:!0},l=new(e(a))(s,i);l.on("beforeMove",(e=>{W(e.page),window.scrollTo({top:0,behavior:"smooth"})})),l.movePageTo(0)}catch(e){(0,d.spinerOff)(),console.log(e.message)}})),L.defineCustomElement(),A.innerHTML="";const H=document.getElementById("film-cards");async function z(e){try{(0,d.spinerOn)();const n=new(0,u.default);n.page=e;const o=await n.getPopularFilms();setTimeout(d.spinerOff,500),t=o.results,H.innerHTML=c(j(t))}catch(e){console.log(e.message)}var t}document.addEventListener("DOMContentLoaded",async function(){try{const{genres:e}=await s.getMovieGenres();!function(e){try{localStorage.setItem(i,JSON.stringify(e))}catch{return!1}}(e)}catch(e){console.log(e.message)}}()),document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector("#pagination"),n={totalItems:2e4,itemsPerPage:20,visiblePages:5,centerAlign:!0},o=new(e(a))(t,n);o.on("beforeMove",(e=>{z(e.page),window.scrollTo({top:0,behavior:"smooth"})})),o.movePageTo(0)}()),r("i8szs"),r("gffsD"),r("2ezs4"),r("37v9V");h=r("2ezs4");var N=r("gffsD"),I=r("i8szs");const J=document.querySelector(".backdrop"),F="js-watched-modal",R="js-queue-modal",G="reviewed",U="in your turn";function X(e){const t={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};N.toWatched.getWatchedOne(e)&&N.toWatched.getWatchedOne(e).length>0&&K(t.btn_watched),I.toQueue.getQueueOne(e)&&I.toQueue.getQueueOne(e).length>0&&V(t.btn_queue)}function K(e){e.classList.add(F),e.textContent=G}function V(e){e.classList.add(R),e.textContent=U}function Z(e){e.classList.remove(F),e.textContent="add to watched"}function Y(e){e.classList.remove(R),e.textContent="add to queue"}J.addEventListener("click",(function(e){const t=+e.target.dataset.id,n={btn_watched:document.querySelector(".btn_watched"),btn_queue:document.querySelector(".btn_queue")};if(e.target.classList.contains("btn_watched"))if(!N.toWatched.getWatchedOne(t)||N.toWatched.getWatchedOne(t).length<1){N.toWatched.setWatchedOne(...(0,h.getLocalOne)(t)),K(n.btn_watched);try{void 0!==I.toQueue.getQueueAll()&&I.toQueue.getQueueOne(t).length>0&&(I.toQueue.removeQueueOneEl(t),Y(n.btn_queue))}finally{return}}else N.toWatched.removeWatchedOneEl(t),Z(n.btn_watched);if(e.target.classList.contains("btn_queue"))if(!I.toQueue.getQueueOne(t)||I.toQueue.getQueueOne(t).length<1){I.toQueue.setQueueOne(...(0,h.getLocalOne)(t)),V(n.btn_queue);try{void 0!==N.toWatched.getWatchedAll&&N.toWatched.getWatchedOne(t).length>0&&(N.toWatched.removeWatchedOneEl(t),Z(n.btn_watched))}finally{return}}else I.toQueue.removeQueueOneEl(t),Y(n.btn_queue)})),r("lpPzL");var $=r("lpPzL"),ee=(h=r("2ezs4"),r("9x1Bf"));function te(){$.refs.backdrop.classList.add("is-hidden"),re()}function ne(e){e.target.classList.contains("modal")&&$.refs.backdrop.classList.add("is-hidden"),re()}function oe(e){"Escape"===e.key&&($.refs.backdrop.classList.add("is-hidden"),re())}function re(){$.refs.backdrop.classList.contains("is-hidden")&&($.refs.modalClose.removeEventListener("click",te),$.refs.backdrop.removeEventListener("click",ne),document.removeEventListener("keydown",oe),$.refs.body.classList.remove("disable-scroll"))}document.querySelector(".container").addEventListener("click",(function(e){if(e.preventDefault(),!e.target.classList.contains("card__img"))return;const t=+e.target.dataset.id;$.refs.body.classList.add("disable-scroll"),$.refs.modalClose.addEventListener("click",te),$.refs.backdrop.addEventListener("click",ne),document.addEventListener("keydown",oe),$.refs.backdrop.classList.remove("is-hidden"),$.refs.modalMovie.innerHTML=(0,ee.default)((0,h.getLocalOne)(t)),X(t)})),r("kyRuT"),r("1JzdB"),window.addEventListener("keydown",(function e(t){"27"===t.code&&(modal.close(),window.removeEventListener("keydown",e))})),e(r("amrNH")).registerHelper("if_eq",(function(e,t,n){return e==t?n.fn(this):n.inverse(this)}));
//# sourceMappingURL=index.a03bf2c8.js.map
