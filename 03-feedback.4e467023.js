function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,f,a,u,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,f=e.apply(i,n)}function h(e){return c=e,a=setTimeout(w,t),l?b(e):f}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function w(){var e=g();if(j(e))return O(e);a=setTimeout(w,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function O(e){return a=void 0,p&&o?b(e):(o=r=void 0,f)}function S(){var e=g(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===a)return h(u);if(s)return a=setTimeout(w,t),b(u)}return void 0===a&&(a=setTimeout(w,t)),f}return t=y(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=u=r=a=void 0},S.flush=function(){return void 0===a?f:O(g())},S}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||f.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b={form:document.querySelector(".js-form")},h={};!function(e,t){try{const n=JSON.parse(localStorage.getItem(t));if(!n)return;const o=new FormData(e);for(const[t]of o.entries())e.elements[t].value=n[t]}catch(e){console.log("Parsing error.",e)}}(b.form,"feedback-form-state"),b.form.addEventListener("input",e(t)((function(e){const t=new FormData(b.form);h.email=t.get("email"),h.message=t.get("message"),localStorage.setItem("feedback-form-state",JSON.stringify(h))}),500)),b.form.addEventListener("submit",(function(e){e.preventDefault();try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));console.log(e)}catch(e){console.log("Parsing error.",e)}b.form.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.4e467023.js.map