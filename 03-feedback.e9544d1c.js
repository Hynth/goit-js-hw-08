function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o="Expected a function",i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,c="object"==typeof t&&t&&t.Object===Object&&t,s="object"==typeof self&&self&&self.Object===Object&&self,g=c||s||Function("return this")(),d=Object.prototype.toString,m=Math.max,p=Math.min,v=function(){return g.Date.now()};function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return i;if(y(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=y(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var o=l.test(e);return o||f.test(e)?u(e.slice(2),o?2:8):a.test(e)?i:+e}n=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),function(e,t,n){var i,r,a,l,f,u,c=0,s=!1,g=!1,d=!0;if("function"!=typeof e)throw TypeError(o);function S(t){var n=i,o=r;return i=r=void 0,c=t,l=e.apply(o,n)}function O(e){var n=e-u,o=e-c;return void 0===u||n>=t||n<0||g&&o>=a}function j(){var e,n,o,i=v();if(O(i))return h(i);f=setTimeout(j,(e=i-u,n=i-c,o=t-e,g?p(o,a-n):o))}function h(e){return(f=void 0,d&&i)?S(e):(i=r=void 0,l)}function T(){var e,n=v(),o=O(n);if(i=arguments,r=this,u=n,o){if(void 0===f)return c=e=u,f=setTimeout(j,t),s?S(e):l;if(g)return f=setTimeout(j,t),S(u)}return void 0===f&&(f=setTimeout(j,t)),l}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(g="maxWait"in n)?m(b(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=u=r=f=void 0},T.flush=function(){return void 0===f?l:h(v())},T}(e,t,{leading:i,maxWait:t,trailing:r})};const S="feedback-form-state",O=document.querySelector(".feedback-form");if(O.querySelector("button"),localStorage.getItem(S)){let e=JSON.parse(localStorage.getItem(S));O[0].value=e.email?e.email:"",O[1].value=e.message?e.message:""}O.addEventListener("input",t=>{let o=t.target.name,i={};if(localStorage.getItem(S)){let i=JSON.parse(localStorage.getItem(S));i[o]=t.target.value,e(n)(localStorage.setItem(S,JSON.stringify(i)),500)}else i[o]=t.target.value,e(n)(localStorage.setItem(S,JSON.stringify(i)),500)}),O.addEventListener("submit",e=>{e.preventDefault(),console.log(JSON.parse(localStorage.getItem(S))),localStorage.clear(),O.reset()});
//# sourceMappingURL=03-feedback.e9544d1c.js.map
