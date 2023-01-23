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

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   breakpoints: {
//     599: {
//       slidesPerView: 2,
//       spaceBetween: 40,
//     },
//     1023: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//   },
// });
// swiper;

// nav menu for max width 1024px
const nav = document.querySelector(".nav__links");
const openNavBtn = document.querySelector("#nav__toggle-open");
const closeNavBtn = document.querySelector("#nav__toggle-close");
// open
// const openNav = () => {
//   nav.style.display = "flex";
//   openNavBtn.style.display = "none";
//   closeNavBtn.style.display = "inline-block";
// };
// openNavBtn.addEventListener("click", openNav);
// // close
// const closeNav = () => {
//   nav.style.display = "none";
//   openNavBtn.style.display = "inline-block";
//   closeNavBtn.style.display = "none";
// };
// closeNavBtn.addEventListener("click", closeNav);

// // when click link of menu close menu
// nav.querySelectorAll("li a").forEach((navlink) => {
//   navlink.addEventListener("click", () => {
//     if (window.screen.width <= "1024") {
//       closeNav();
//     }
//   });
// });
navRun(nav, openNavBtn, closeNavBtn);

//handle active class
// var parentActive = document.querySelector(".nav__links");
// Array.from(parentActive.children).forEach((element) => {
//   element.addEventListener("click", (event) => {
//     let activeLink = document.querySelector(".active");
//     activeLink.classList.remove("active");
//     event.target.classList.add("active");
//   });
// });

// const sections = document.querySelectorAll("section");
// console.log(sections);
// var navli = document.querySelector(".nav__links");
// window.onscroll = () => {
//   var current = "";

//   sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     if (scrollY >= sectionTop - 60) {
//       current = section.getAttribute("id");
//     }
//   });

//   Array.from(navli.children).forEach((li) => {
//     // console.log(li);
//     li.classList.remove("active");
//     if (li.classList.contains(current)) {
//       li.classList.add("active");
//     }
//   });
// };

const toggle = document.querySelector(".slider");
toggleMode(toggle);
// console.log(toggle);
// toggle.addEventListener("click", (e) => {
//   document.body.classList.toggle("purple-Theme");
//   toggle.classList.toggle("active");
// });
