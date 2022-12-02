const menuButton = document.getElementById("menuButton");
const menuOptions = document.getElementById("menuOptions");

var isOpen = false;

menuButton.onclick = function() {
	if (isOpen == false) {
		menuOptions.style.display = "flex";
		isOpen = true;
	} else {
		menuOptions.style.display = "none";
		isOpen = false;
	}
	
}