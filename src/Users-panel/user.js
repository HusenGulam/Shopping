const barsMain = document.getElementById("barsMain");
const menuBar = document.querySelector("[data-menu-bar]");
const mainNav = document.querySelector("[data-main-nav]");

barsMain.addEventListener("click", () => {
    menuBar.classList.toggle("menuActive");
});