(()=>{"use strict";var e=[,(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});t(2);function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}const o=function(){function e(){var r,t,n;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),n="hello-world-button",(t="buttonCssClass")in(r=this)?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n}var r,t,o;return r=e,(t=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello World",e.classList.add(this.buttonCssClass),e.onclick=function(){var e=document.createElement("p");e.innerHTML="hello world paragraph",e.classList.add("hello-world-text"),r.appendChild(e)};var r=document.querySelector("body");r.appendChild(e)}}])&&n(r.prototype,t),o&&n(r,o),Object.defineProperty(r,"prototype",{writable:!1}),e}()},(e,r,t)=>{t.r(r)}],r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};t.r(n),(new(t(1).default)).render()})();