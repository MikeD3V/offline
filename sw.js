if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,t)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let d={};const o=e=>i(e,n),c={module:{uri:n},exports:d,require:o};s[n]=Promise.all(r.map((e=>c[e]||o(e)))).then((e=>(t(...e),d)))}}define(["./workbox-8366b1fe"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon.png",revision:"d2d48a3a83de3e2fa1fa9190eb5b7c17"},{url:"assets/vinyl.png",revision:"2624d135c1c4f2065a423dd4664df2f2"},{url:"index.html",revision:"d98b8cd25c4d1a859859a501be0d6532"},{url:"script.js",revision:"98dbdac36e4d84b5bf64708d0c62022f"},{url:"styles.css",revision:"9e7876fd9aed36b0bacb5a32c0936471"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
