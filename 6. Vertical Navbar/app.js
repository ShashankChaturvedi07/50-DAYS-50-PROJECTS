let toggleClick = document.querySelector(".toggleBox");
let container = document.querySelector(".container");

toggleClick.addEventListener("click", () => {
    toggleClick.classList.toggle("active");
    container.classList.toggle("active");
})