const navLinksCont = document.querySelector(".mobile__nav");
const startBtn = document.querySelector(".start");
const closeBtn = document.querySelector(".close");
const mobileContainer = document.querySelector(".moble__container");
const hambuger = document.querySelector(".ri-menu-3-line");
const allLinks = document.querySelectorAll(".nav__links");

const openMobileContainer = () => {
  mobileContainer.style.display = "block";
};

const openLinks = () => {
  navLinksCont.style.left = "1rem";
};

const closeMobileContainer = () => {
  navLinksCont.style.left = "-100%";
  mobileContainer.style.display = "none";
  window.mobileContainer.remove();
};

allLinks.forEach((link) => {
  link.addEventListener("click", closeMobileContainer);
});

hambuger.addEventListener("click", openMobileContainer);
startBtn.addEventListener("click", openLinks);
closeBtn.addEventListener("click", closeMobileContainer);
