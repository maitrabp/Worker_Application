!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){const r=n(1),o=n(2),s=n(3),l=n(4),i=[{name:"Author's Website",url:"https://www.maitrapatel.info"},{name:"Cloudflare",url:"https://www.cloudflare.com/"},{name:"Google",url:"https://www.google.com"}],a=[o,s,l],c="https://maitrapatel-personalbucket.s3.amazonaws.com/IMG-2595.jpg";addEventListener("fetch",t=>{t.respondWith(async function(t){const e=new r;e.get(".*/links",t=>function(t){const e=JSON.stringify(i);return new Response(e,{headers:{"Content-Type":"application/json"}})}()),e.get(".*/.*",t=>async function(t){const e=await(new HTMLRewriter).on("div#links",new u(i)).on("div#profile",{element:t=>t.removeAttribute("style")}).on("img#avatar",{element:t=>{t.setAttribute("src",c),t.setAttribute("alt","Maitra's Profile Pic")}}).on("h1#name",{element:t=>t.setInnerContent("Maitra Patel",{html:!0})}).on("div#social",{element:t=>t.removeAttribute("style")}).on("div#social",new h(a)).on("title",{element:t=>t.setInnerContent("Maitra Patel",{html:!0})}).on("body",{element:t=>t.setAttribute("class","bg-orange-400")}).transform(await fetch("https://static-links-page.signalnerve.workers.dev")),n=await e.text();return new Response(n,{headers:{"Content-Type":"text/html"}})}());return await e.route(t)}(t.request))});class u{constructor(t){this.links=t}element(t){let e;for(e in i){let n=`\n\t\t\t\t<a href=${i[e].url}>${i[e].name}</a>`;t.append(n,{html:!0})}t.append("\n\t\t\t",{html:!0})}}class h{constructor(t){this.svgIcons=t}element(t){let e;for(e in a){let n=`\n\t\t\t\t<a href=${a[e].source}>${a[e].svg}</a>`;t.append(n,{html:!0})}t.append("\n\t\t\t",{html:!0})}}},function(t,e){const n=t=>e=>e.method.toLowerCase()===t.toLowerCase(),r=n("connect"),o=n("delete"),s=n("get"),l=n("head"),i=n("options"),a=n("patch"),c=n("post"),u=n("put"),h=n("trace"),p=t=>e=>{const n=new URL(e.url).pathname;return(n.match(t)||[])[0]===n};t.exports=class{constructor(){this.routes=[]}handle(t,e){return this.routes.push({conditions:t,handler:e}),this}connect(t,e){return this.handle([r,p(t)],e)}delete(t,e){return this.handle([o,p(t)],e)}get(t,e){return this.handle([s,p(t)],e)}head(t,e){return this.handle([l,p(t)],e)}options(t,e){return this.handle([i,p(t)],e)}patch(t,e){return this.handle([a,p(t)],e)}post(t,e){return this.handle([c,p(t)],e)}put(t,e){return this.handle([u,p(t)],e)}trace(t,e){return this.handle([h,p(t)],e)}all(t){return this.handle([],t)}route(t){const e=this.resolve(t);return e?e.handler(t):new Response("resource not found",{status:404,statusText:"not found",headers:{"content-type":"text/plain"}})}resolve(t){return this.routes.find(e=>!(e.conditions&&(!Array.isArray(e)||e.conditions.length))||("function"==typeof e.conditions?e.conditions(t):e.conditions.every(e=>e(t))))}}},function(t,e){t.exports={title:"Cloudflare",slug:"cloudflare",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Cloudflare icon</title><path d="M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://www.cloudflare.com/logo/",hex:"F38020"}},function(t,e){t.exports={title:"JavaScript",slug:"javascript",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>JavaScript icon</title><path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"https://github.com/voodootikigod/logo.js",hex:"F7DF1E"}},function(t,e){t.exports={title:"HTML5",slug:"html5",svg:'<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>HTML5 icon</title><path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/></svg>',get path(){return this.svg.match(/<path\s+d="([^"]*)/)[1]},source:"http://www.w3.org/html/logo/",hex:"E34F26"}}]);