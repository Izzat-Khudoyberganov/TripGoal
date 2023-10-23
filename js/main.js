let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".header-actions");

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burgerMenu.classList.toggle("show");
});
