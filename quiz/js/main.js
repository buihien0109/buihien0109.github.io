const btnRegister = document.querySelector(".btn__register-form");
const welcomePage = document.querySelector(".js-welcome-page");

welcomePage.classList.add("out");

btnRegister.addEventListener("click", () => {
  welcomePage.classList.toggle("in");
});
