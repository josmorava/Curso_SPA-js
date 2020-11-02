(()=>{"use strict";const t="https://rickandmortyapi.com/api/character/",n=async n=>{const a=n?`${t}${n}`:t;try{const t=await fetch(a);return await t.json()}catch(t){console.log("Fetch, Error",t)}},a=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ',s={"/":async()=>`\n    <div class="Characters">\n      ${(await n()).results.map((t=>`\n        <article class="Characters-item">\n          <a href="#/${t.id}/">\n            <img src="${t.image}" alt="${t.name}">\n            <h2>${t.name}</h2>\n          </a>\n        </article>\n      `)).join("")}\n    </div>\n    `,"/:id":async()=>{const t=a(),e=await n(t);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.name}">\n        <h2>${e.name}</h2>\n      </article>\n      <article class="Character-card">\n        <h3>Episodes: <span>${e.episode.length}</span> </h3>\n        <h3>Status: <span>${e.status}</span></h3>\n        <h3>Species: <span>${e.especies}</span></h3>\n        <h3>Gender: <span>${e.gender}</span></h3>\n        <h3>Origin: <span>${e.origin.name}</span></h3>\n        <h3>Last Location: <span>${e.location.name}</span></h3>\n      </article>\n    </div>\n  `},"/contact":"Contact"},i=async()=>{const t=document.getElementById("header"),n=document.getElementById("content");t.innerHTML=await'\n\t\t<div class="Header-main">\n\t\t\t<div class="Header-logo">\n\t\t\t\t<h1>\n\t\t\t\t\t<a href="/">\n\t\t\t\t\t\t100tifi.co\n\t\t\t\t\t</a>\n\t\t\t\t</h1>\n\t\t\t</div>\n\t\t\t<div class="Header-nav">\n\t\t\t\t<a href="#/about/">\n\t\t\t\t\tAbout\n\t\t\t\t</a>\n\t\t\t</div>\n\t\t</div>\n\t';let i=a(),c=await(t=>t.length<=3?"/"===t?t:"/:id":"/"+t)(i),r=s[c]?s[c]:e;n.innerHTML=await r()};window.addEventListener("load",i),window.addEventListener("hashchange",i)})();