export default function navRun(nav, openNavBtn, closeNavBtn) {
  const openNav = () => {
    nav.style.display = "flex";
    openNavBtn.style.display = "none";
    closeNavBtn.style.display = "inline-block";
  };
  openNavBtn.addEventListener("click", openNav);
  // close
  const closeNav = () => {
    nav.style.display = "none";
    openNavBtn.style.display = "inline-block";
    closeNavBtn.style.display = "none";
  };
  closeNavBtn.addEventListener("click", closeNav);

  // when click link of menu close menu
  nav.querySelectorAll("li a").forEach((navlink) => {
    navlink.addEventListener("click", () => {
      if (window.screen.width <= "1024") {
        closeNav();
      }
    });
  });
}

