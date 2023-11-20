// const { zip } = require("prelude-ls");

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
    } else {
      e.classList.remove("invalid");
      return true;
    }
  };

  const checkPasswordMatch = () => {
    if (password.value !== confirmPass.value) {
      confirmPass.setCustomValidity("Passwords don't match, try again!");
      confirmPass.classList.add("invalid");
    } else {
      confirmPass.setCustomValidity("");
      confirmPass.classList.remove("invalid");
      return true;
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

    const constraint = new RegExp(constraints[country.value][0], "");

    if (!constraint.test(zipCode.value)) {
      zipCode.setCustomValidity(constraints[country.value][1]);
      zipCode.classList.add("invalid");
    } else {
      zipCode.setCustomValidity("");
      zipCode.classList.remove("invalid");
      return true;
    }
  };

  const confirmSubmit = () => {
    const form = document.querySelector("form");
    form.style.display = "none";
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
  submitBtn.addEventListener("click", () => {
    // checkPasswordMatch();
    // checkInputs(password);
    // checkInputs(confirmPass);
    // checkZip();
    if (
      checkPasswordMatch() &&
      checkInputs(password) &&
      checkInputs(confirmPass) &&
      checkZip()
    ) {
      confirmSubmit();
    }
  });
  window.onload = () => {
    country.onchange = checkZip;
    zipCode.oninput = checkZip;
    confirmPass.oninput = checkPasswordMatch;
    email.oninput = checkInputs;
  };
};

checkFormValidity();
