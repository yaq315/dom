






// let myIdElement = document.getElementById("my-div");
// let myElements = document.getElementsByTagName("p");
// let myClassElement= document.getElementsByClassName("my-span")
// let myQueryElement = document.querySelector("#my-div")
// let myAllQueryElement = document.querySelectorAll(".my-span")
// console.log(myIdElement);
// console.log(myElements[1]);
// console.log( myClassElement[1]);
// console.log(myQueryElement);
// console.log(myAllQueryElement[0])

// ///

// console.log(document.title)
// console.log(document.forms[0].tow.value)
// console.log(document.links[1].href)

// ////

// let myElement=document.querySelector(".js")

// console.log(myElement.innerHTML)
// console.log(myElement.textContent)
// myElement.innerHTML="text from<span>main.js</span> file"

// myElement.textContent="text from<span>main.js</span> file"

// ///
// document.images[0].src="domimg.png"
// }
const form = document.getElementById("registration-form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const registerButton = document.getElementById("register-button");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const validateForm = () => {
  let isValid = true;
  if (email.value.trim() === "") {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }
  if (password.value.trim() === "") {
    passwordError.style.display = "block";
    isValid = false;
  } else {
    passwordError.style.display = "none";
  }
  if (confirmPassword.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password is required.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordError.style.display = "block";
    isValid = false;
  } else {
    confirmPasswordError.style.display = "none";
  }
  registerButton.disabled = !isValid;
};
email.addEventListener("input", validateForm);
password.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
form.addEventListener("submit", (e) => {
  validateForm();
  if (registerButton.disabled) {
    e.preventDefault();
  } else {
    alert("User registration successful!");
  }
});




