(()=>{const e=document.getElementById("email"),t=(document.getElementById("zip-code"),document.getElementById("password")),n=document.getElementById("password-conf"),d=document.getElementById("submit-btn"),i=e=>{e.checkValidity()?(e.classList.remove("invalid"),e.parentElement.classList.remove("invalid"),e.previousElementSibling.classList.remove("invalid-text")):(e.classList.add("invalid"),e.parentElement.classList.add("invalid"),e.previousElementSibling.classList.add("invalid-text"))};e.addEventListener("focusout",(()=>{i(e)})),t.addEventListener("focusout",(()=>{i(t)})),n.addEventListener("focusout",(()=>{i(n)})),d.addEventListener("click",(e=>{e.preventDefault(),i(t),i(n)}))})();