var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in t){var s=t[e];delete t[e];var n={id:e,exports:{}};return o[e]=n,s.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},e.parcelRequired7c6=s),s.register("btpe3",(function(e,o){var t,s,n,i;t=e.exports,s="default",n=function(){return d},Object.defineProperty(t,s,{get:n,set:i,enumerable:!0,configurable:!0});const c=document.querySelector("#root");console.log(c);const l=document.querySelector("#root-queue");let r=[],a=[];function d(e){const o=document.querySelector(".card-btn-watched"),t=document.querySelector(".card-btn-que");t.addEventListener("click",(function(o){try{a=[...JSON.parse(localStorage.getItem("queue"))]}catch(e){a=[]}for(const o of a)if(console.log(e.id),console.log(o.id),e.id===o.id){const o=a.filter((o=>o.id!==e.id));return a=[...o],void localStorage.setItem("queue",JSON.stringify(a))}a.push(e),localStorage.setItem("queue",JSON.stringify(a))})),o.addEventListener("click",(function(o){try{r=[...JSON.parse(localStorage.getItem("watched"))]}catch(e){r=[]}for(const o of r)if(console.log(e.id),console.log(o.id),e.id===o.id){const o=r.filter((o=>o.id!==e.id));return r=[...o],console.log(r),void localStorage.setItem("watched",JSON.stringify(r))}r.push(e),localStorage.setItem("watched",JSON.stringify(r))})),console.log(t)}console.log(r),console.log(a),console.log(JSON.parse(localStorage.getItem("watched"))),console.log(JSON.parse(localStorage.getItem("queue"))),function(){const e=JSON.parse(localStorage.getItem("watched"));console.log(e);const o=e.map((e=>{console.log(e);return`<div class="movie-card" data-movieId=${e.id}>\n                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="card">\n            \n                 <div class="movie-info">\n                     <h2 class="movie-title">${e.original_title}</h2>\n                    <h3 class="span-title">${e.genres.map((e=>e.name)).slice(0,3).join(", ")} | ${e.release_date.slice(0,4)}</h3>\n                     </div>\n                 </div>`})).join("");console.log(c),c.insertAdjacentHTML("beforeend",o)}(),function(){const e=JSON.parse(localStorage.getItem("queue"));console.log(e);const o=e.map((e=>{console.log(e);return`<div class="movie-card" data-movieId=${e.id}>\n                 <img class="movie-img" src="https://image.tmdb.org/t/p/w500${e.poster_path}" alt="card">\n            \n                 <div class="movie-info">\n                     <h2 class="movie-title">${e.original_title}</h2>\n                    <h3 class="span-title">${e.genres.map((e=>e.name)).slice(0,3).join(", ")} | ${e.release_date.slice(0,4)}</h3>\n                     </div>\n                 </div>`})).join("");console.log(c),l.insertAdjacentHTML("beforeend",o)}();document.querySelector(".lib-watched-btn").addEventListener("click",(function(){c.classList.contains("root-height")&&l.classList.contains("root-show")&&(c.classList.remove("root-height"),c.classList.add("root-show"),l.classList.remove("root-show"),l.classList.add("root-height"))}));document.querySelector(".lib-queue-btn").addEventListener("click",(function(){c.classList.contains("root-show")&&l.classList.contains("root-height")&&(c.classList.remove("root-show"),c.classList.add("root-height"),l.classList.remove("root-height"),l.classList.add("root-show"))}))})),s("btpe3");
//# sourceMappingURL=index.e03c6d28.js.map