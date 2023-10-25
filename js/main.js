let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".header-actions");
let bannerItem = document.querySelectorAll(".banner-item");

console.log(bannerItem);

burgerMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    burgerMenu.classList.toggle("show");
});

window.addEventListener("DOMContentLoaded", () => {
    bannerItem.forEach((el) => {
        el.style = `transform: translateX(0);
                    opacity: 1`;
    });
});
