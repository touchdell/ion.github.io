(self.webpackChunktest=self.webpackChunktest||[]).push([[8592],{8225:(e,t,n)=>{"use strict";n.d(t,{c:()=>s});var r=n(3150),i=n(2954),o=n(9461);const s=(e,t)=>{let n,s;const c=(e,r,i)=>{if("undefined"==typeof document)return;const o=document.elementFromPoint(e,r);o&&t(o)?o!==n&&(l(),a(o,i)):l()},a=(e,t)=>{n=e,s||(s=n);const i=n;(0,r.c)(()=>i.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;(0,r.c)(()=>t.classList.remove("ion-activated")),e&&s!==n&&n.click(),n=void 0};return(0,o.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>c(e.currentX,e.currentY,i.a),onMove:e=>c(e.currentX,e.currentY,i.b),onEnd:()=>{l(!0),(0,i.h)(),s=void 0}})}},7330:(e,t,n)=>{"use strict";n.d(t,{a:()=>i,d:()=>o});var r=n(2377);const i=async(e,t,n,i,o)=>{if(e)return e.attachViewToDom(t,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return i&&i.forEach(e=>s.classList.add(e)),o&&Object.assign(s,o),t.appendChild(s),await new Promise(e=>(0,r.c)(s,e)),s},o=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,n)=>{"use strict";n.d(t,{a:()=>o,b:()=>s,c:()=>i,d:()=>a,h:()=>c});const r={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},i=()=>{r.selection()},o=()=>{r.selectionStart()},s=()=>{r.selectionChanged()},c=()=>{r.selectionEnd()},a=e=>{r.impact(e)}},6575:(e,t,n)=>{"use strict";n.d(t,{s:()=>r});const r=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!s()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let r=n.length-1;r>=0;r--){const e=n[r];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const s=o(e);for(let t=0;t<s.length;t++)i(s[t])}});const r=o(t);for(let e=0;e<r.length;e++)i(r[e]);const c=document.createElement("div");c.appendChild(t);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},i=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),r=t.name;if(!c.includes(r.toLowerCase())){e.removeAttribute(r);continue}const i=t.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(r)}const t=o(e);for(let n=0;n<t.length;n++)i(t[n])},o=e=>null!=e.children?e.children:e.childNodes,s=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},408:(e,t,n)=>{"use strict";n.d(t,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const r=e*t/n-e+"ms",i=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(i)+"px",left:9*Math.cos(i)+"px","animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const r=t/n,i=e*r-e+"ms",o=2*Math.PI*r;return{r:5,style:{top:9*Math.sin(o)+"px",left:9*Math.cos(o)+"px","animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},1269:(e,t,n)=>{"use strict";n.d(t,{c:()=>i,g:()=>o,h:()=>r,o:()=>c});const r=(e,t)=>null!==t.closest(e),i=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,o=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},s=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,n,r)=>{if(null!=e&&"#"!==e[0]&&!s.test(e)){const i=document.querySelector("ion-router");if(i)return null!=t&&t.preventDefault(),i.push(e,n,r)}return!1}},4762:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(639);let i=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Xpm({type:e,selectors:[["app-explore-container"]],inputs:{name:"name"},decls:7,vars:1,consts:[["id","container"],["target","_blank","rel","noopener noreferrer","href","https://ionicframework.com/docs/components"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0),r.TgZ(1,"strong"),r._uU(2),r.qZA(),r.TgZ(3,"p"),r._uU(4,"Explore "),r.TgZ(5,"a",1),r._uU(6,"UI Components"),r.qZA(),r.qZA(),r.qZA()),2&e&&(r.xp6(2),r.Oqu(t.name))},styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),e})()},581:(e,t,n)=>{"use strict";n.d(t,{e:()=>c});var r=n(8583),i=n(665),o=n(3083),s=n(639);let c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,i.u5,o.Pc]]}),e})()}}]);