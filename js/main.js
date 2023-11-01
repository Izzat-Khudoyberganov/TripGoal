let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".header-actions");
let bannerItem = document.querySelectorAll(".banner-item");

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

const swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 47,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
