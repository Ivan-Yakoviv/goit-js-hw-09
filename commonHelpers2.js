import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form");a.autocomplete="on";a.addEventListener("input",s);a.addEventListener("submit",m);const n={email:"",message:""};function s(e){const t=e.target.name;n[t]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(n))}o();function o(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;const{email:t,message:l}=a.elements;t.value=e.email,l.value=e.message}function m(e){e.preventDefault();const{email:t,message:l}=a.elements;if(t.value===""||l.value==="")return alert("Please fill in all the fields!");console.log(`Email: ${t.value}, Message: ${l.value}`),a.reset()}
//# sourceMappingURL=commonHelpers2.js.map