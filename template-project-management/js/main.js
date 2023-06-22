const hamburgerEl = document.querySelector("header .navbar-brand");

hamburgerEl.addEventListener("click", () => {
    document.body.classList.toggle("active");
})