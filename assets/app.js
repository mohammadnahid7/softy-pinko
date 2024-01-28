const menuToggleButton = document.getElementsByClassName(
	"main-navbar__toggle-button"
)[0];
const navMenu = document
	.getElementsByClassName("main-navbar")[0]
	.getElementsByClassName("row")[0];

menuToggleButton.addEventListener("click", () => {
	navMenu.classList.toggle("show-main-navbar");
});
// console.dir(menuToggleButton);
