import { fetchContacts } from "./js/fetchContacts.js";
import { fetchChuck } from "./js/fetchChuck.js";

if (window.location.pathname === "/") {
	console.log("On home page");
	fetchContacts();
}

if (window.location.pathname.includes("chuck")) {
	fetchChuck();
	let buttonDIV = document.createElement("div");
	buttonDIV.className = "text-center";
	let button = document.createElement("a");
	button.className = "btn btn-primary m-2";
	button.textContent = "Load Joke";
	button.addEventListener("click", fetchChuck);
	// let button = `<a class="btn btn-primary">Load Joke</a>`;
	buttonDIV.appendChild(button);
	chuckDIV.parentElement.appendChild(buttonDIV);
}



console.log(window.location);
