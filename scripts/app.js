import activeToggle from "./activePage.js";
import navRun from "./navBar.js";
import swiper from "./swiperHome.js";
import toggleMode from "./toggleMode.js";

// change nav style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

//contact button(circular text button)
const textButton = document.querySelectorAll(".contact__btn");
// console.log(textButton);
textButton.forEach((textButton) => {
  let text = textButton.querySelector("p");
  //   console.log(text);
  text.innerHTML = text.innerHTML
    .split("")
    .map((char, index) => {
      return `<span style="transform: rotate(${index * 12}deg)">${char}</span>`;
    })
    .join("");
});

// nav menu for max width 1024px
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");
navRun(nav, openNavBtn, closeNavBtn);


// toggle mode
const toggle = document.querySelector(".slider");
toggleMode(toggle);

