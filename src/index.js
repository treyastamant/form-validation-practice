const checkFormValidity = () => {
  const email = document.getElementById("email");
  const zipCode = document.getElementById("zip-code");
  const password = document.getElementById("password");
  const confirmPass = document.getElementById("password-conf");
  const submitBtn = document.getElementById("submit-btn");

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
  });
};

checkFormValidity();
