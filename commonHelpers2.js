import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),o="feedback-form-state",s=l(o)||{email:"",message:""};t.addEventListener("input",e=>{s[e.target.name]=e.target.value.trim(),r(o,s)});document.addEventListener("DOMContentLoaded",()=>{const e=l(o);t.elements.email.value=(e==null?void 0:e.email)||"",t.elements.message.value=(e==null?void 0:e.message)||""});t.addEventListener("submit",m);function m(e){e.preventDefault();const a=t.elements.email.value.trim(),n=t.elements.message.value.trim();if(a===""||n==="")return alert("Fill please all fields");console.log(s),localStorage.removeItem(o),t.reset()}function r(e,a){const n=JSON.stringify(a);localStorage.setItem(e,n)}function l(e){const a=localStorage.getItem(e);try{return JSON.parse(a)}catch{return a}}
//# sourceMappingURL=commonHelpers2.js.map
