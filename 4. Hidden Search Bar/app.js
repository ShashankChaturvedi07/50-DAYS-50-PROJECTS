const search = document.querySelector(".search");
const btn = document.querySelector(".btn");


btn.addEventListener("click", () =>  {
    // toggle use to toggle between hide and show for the selected elements
    search.classList.toggle("active");
})