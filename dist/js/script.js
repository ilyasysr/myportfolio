// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// Darkmode toggle
const sun = document.querySelector("#sun");
const moon = document.querySelector("#moon");

const html = document.querySelector("html");
const svg = document.querySelector("#blobSvg");
const img = document.querySelector("#imgHero");

//theme
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefer-color-scheme: dark)").matches;

//Ganti Icon
const iconToogle = () => {
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");
};

//Theme Check
const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    html.classList.add("dark");
    img.setAttribute("href", "dist/img/bg-ilyas-b.png");
    moon.classList.add("hidden");
    return;
  }
  sun.classList.add("hidden");
};

//Theme Swich
const themeSwitch = () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
    img.setAttribute("href", "dist/img/bg-ilyas-w.png");
    iconToogle();
    return;
  }

  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
  img.setAttribute("href", "dist/img/bg-ilyas-b.png");
  iconToogle();
};

sun.addEventListener("click", () => {
  themeSwitch();
});

moon.addEventListener("click", () => {
  themeSwitch();
});

themeCheck();

// target element hide alert
function closeAlert(event){
  let element = event.target;
  while(element.nodeName !== "BUTTON"){
    element = element.parentNode;
  }
  element.parentNode.parentNode.removeChild(element.parentNode);
}