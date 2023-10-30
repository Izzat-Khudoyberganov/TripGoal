let burgerMenu = document.querySelector(".burger-menu");
let mobileMenu = document.querySelector(".header-actions");
let bannerItem = document.querySelectorAll(".banner-item");
let travelContentItems = document.querySelectorAll(".travel-content_items");

travelContentItems.forEach((el) => {
    el.addEventListener("mousemove", rotate);
    el.addEventListener("mouseout", defaultRotate);
});

function rotate(e) {
    let halfHeight = this.offsetHeight / 2;
    let x = e.offsetX - halfHeight;
    let y = e.offsetY - halfHeight;
    this.style.transform = `rotateX(${-x / 4}deg) rotateY(${-y / 4}deg)`;
}

function defaultRotate() {
    this.style.transform = `rotate(0deg)`;
}

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
