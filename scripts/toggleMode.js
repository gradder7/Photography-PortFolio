
export default function toggleMode(toggle){
    toggle.addEventListener("click", (e) => {
      document.body.classList.toggle("purple-Theme");
      toggle.classList.toggle("active");
    });
}
