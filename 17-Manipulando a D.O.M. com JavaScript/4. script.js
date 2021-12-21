const darkModeClass = "dark-mode";
const button =  document.getElementById("mode-selector");
const h2 = document.getElementById("page-title");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];

function changeClasses() {
	button.classList.toggle("dark-mode");
	h2.classList.toggle("dark-mode");
	body.classList.toggle("dark-mode");
	footer.classList.toggle("dark-mode");
}

function changeText() {

	const lightMode = "Ligh Mode";
	const darkMode = "Dark Mode";

	if(body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h2.innerHTML = `${darkMode} ON`;
		return;
	}

	button.innerHTML = darkMode;
	h2.innerHTML = `${lightMode} ON`;
}


button.addEventListener('click', changeMode);

function changeMode(){
	changeClasses();
	changeText();
};
