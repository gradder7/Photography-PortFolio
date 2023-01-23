// return location object
// const activePage=window.location;
const activePage = window.location.pathname;
// path name : file which is loaded
console.log(activePage);
const navLinks = document.querySelectorAll("nav .nav__links li a");
console.log(navLinks);

 export default function activeToggle() {
  navLinks.forEach((links) => {
    // links.href=> links where they are pointing
    if (links.href.includes(`${activePage}`)) {
      links.classList.add("active");
    }
  });
}
activeToggle();
