(()=>{const e=document.getElementById("email"),t=document.getElementById("zip-code"),s=document.getElementById("password"),d=document.getElementById("password-conf"),n=document.getElementById("submit-btn"),i=document.getElementById("country"),a=e=>{if(e.checkValidity())return e.classList.remove("invalid"),!0;e.classList.add("invalid")},o=()=>{if(s.value===d.value)return d.setCustomValidity(""),d.classList.remove("invalid"),!0;d.setCustomValidity("Passwords don't match, try again!"),d.classList.add("invalid")},l=()=>{const e={fr:["^(F-)?\\d{5}$","France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012"],ge:["^(D-)?\\d{5}$","Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345"],nl:["^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$","Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS"]};if(new RegExp(e[i.value][0],"").test(t.value))return t.setCustomValidity(""),t.classList.remove("invalid"),!0;t.setCustomValidity(e[i.value][1]),t.classList.add("invalid")};e.addEventListener("focusout",(()=>{a(e)})),s.addEventListener("focusout",(()=>{a(s)})),d.addEventListener("focusout",(()=>{a(d)})),n.addEventListener("click",(()=>{o()&&a(s)&&a(d)&&l()&&(document.querySelector("form").style.display="none")})),window.onload=()=>{i.onchange=l,t.oninput=l,d.oninput=o,e.oninput=a}})();