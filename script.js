const humburgerMenu = document.querySelector(".humburger");
const xMark = document.querySelector(".x-mark");
const bars = document.querySelector(".bars");
const listItem = document.querySelector("#navbar nav ul");
humburgerMenu.addEventListener("click", function() {
    xMark.classList.toggle("active");
    bars.classList.toggle("active");
    listItem.classList.toggle("active");
});