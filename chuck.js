import { fetchChuck } from "./js/fetchChuck.js";

// If the page is chuck.html? Load chuck JS, which comes from fetchChuck.js

if (window.location.pathname.includes("chuck")) {
	/* Get the Chuck Norris fact from the API */

	fetchChuck();

	/* Create the "New Joke" div with a button inside using DOM methods */

	let buttonDIV = document.createElement("div");
	buttonDIV.className = "text-center";

	let button = document.createElement("a");
	button.className = "btn btn-primary m-2";
	button.textContent = "Load Joke";

	button.addEventListener("click", fetchChuck);

	buttonDIV.appendChild(button);
	chuckDIV.parentElement.appendChild(buttonDIV);
}
