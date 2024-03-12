const navLinksCont = document.querySelector(".mobile__nav");
const startBtn = document.querySelector(".start");
const closeBtn = document.querySelector(".close");
const mobileContainer = document.querySelector(".moble__container");
const hambuger = document.querySelector(".ri-menu-3-line");
const allLinks = document.querySelectorAll(".nav__links");
const searchService = document.querySelector(".ri-search-eye-line");
const crossBtn = document.querySelector(".ri-close-circle-fill");
const serviceWrapper = document.querySelector(".service__wrapper");
const requestService = document.querySelector(".request");
const agreeBtn = document.querySelector(".ok__btn");

const openMobileContainer = () => {
  mobileContainer.style.display = "block";
};

const openLinks = () => {
  navLinksCont.style.left = "1rem";
};

const closeMobileContainer = () => {
  navLinksCont.style.left = "-100%";
  mobileContainer.style.display = "none";
  serviceWrapper.style.right = "-100%";
};
let width = "1023px";
allLinks.forEach((link) => {
  if (width > "1024px") {
    link.style.display = "block";
  } else {
    link.addEventListener("click", closeMobileContainer);
  }
});

const openRequest = () => {
  serviceWrapper.style.right = "0";
};

hambuger.addEventListener("click", openMobileContainer);
startBtn.addEventListener("click", openLinks);
closeBtn.addEventListener("click", closeMobileContainer);
searchService.addEventListener("click", openRequest);
crossBtn.addEventListener("click", closeMobileContainer);
requestService.addEventListener("click", openRequest);
agreeBtn.addEventListener("click", closeMobileContainer);
