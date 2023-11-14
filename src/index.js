const { zip } = require("prelude-ls");

const checkFormValidity = () => {
  const email = document.getElementById("email");
  const zipCode = document.getElementById("zip-code");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("password-conf");
  const submitBtn = document.getElementById("submit-btn");
  const country = document.getElementById("country");

  const checkInputs = (e) => {
    if (!e.checkValidity()) {
      e.classList.add("invalid");
      e.parentElement.classList.add("invalid");
      e.previousElementSibling.classList.add("invalid-text");
    } else {
      e.classList.remove("invalid");
      e.parentElement.classList.remove("invalid");
      e.previousElementSibling.classList.remove("invalid-text");
    }
  };

  const checkPasswordMatch = () => {
    if (password.value !== confirmPass.value) {
      console.log("no match");
    } else {
      console.log("match");
    }
  };

  const checkZip = () => {
    const constraints = {
      fr: [
        "^(F-)?\\d{5}$",
        "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
      ],
      ge: [
        "^(D-)?\\d{5}$",
        "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
      ],
    };

    const countryV = document.getElementById("country").value;
    const zipCodeV = document.getElementById("zip-code");

    const constraint = new RegExp(constraints[countryV][0], "");

    if (constraint.test(zipCodeV.value)) {
      zipCode.setCustomValidity("");
      zipCodeV.classList.remove("invalid");
      zipCodeV.parentElement.classList.remove("invalid");
      // zipCodeV.previousElementSibling.classList.remove("invalid-text");
      console.log("pass");
    } else {
      zipCodeV.setCustomValidity(constraints[countryV][1]);
      zipCodeV.classList.add("invalid");
      zipCodeV.parentElement.classList.add("invalid");
      // zipCodeV.previousElementSibling.classList.add("invalid-text");
      console.log("not pass");
    }
  };

  email.addEventListener("focusout", () => {
    checkInputs(email);
  });
  password.addEventListener("focusout", () => {
    checkInputs(password);
  });
  confirmPass.addEventListener("focusout", () => {
    checkInputs(confirmPass);
  });
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // checkPasswordMatch();
    checkInputs(password);
    checkInputs(confirmPass);
    checkZip();
  });
  // zipCode.addEventListener("focusout", () => {
  //   // checkInputs(zipCode);
  //   checkZip();
  // });
  window.onload = () => {
    country.onchange = checkZip;
    zipCode.oninput = checkZip;
  };
};

checkFormValidity();
