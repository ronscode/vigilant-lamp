import { fetchContacts } from "./js/fetchContacts.js";
import { fetchChuck } from "./js/fetchChuck.js";

// LOAD THE HOME PAGE JS, which comes from fetchContacts.js

if (window.location.pathname === "/") {
  console.log("On home page");
	fetchContacts();
  
	const addForm = document.getElementById("addForm");
	const addButton = document.getElementById("addContact");
	console.log(addContact);
	addButton.addEventListener("submit", (e) => {
    e.preventDefault();
		console.log(e);
    console.log(
			Object.values(e).reduce((obj, field) => {
				obj[field.name] = field.value;
				return obj;
			}, {})
		);
	});
}

// LOAD THE CHUCK NORRIS API PAGE JS, which comes from fetchChuck.js

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
