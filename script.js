import { fetchContacts } from "./js/fetchContacts.js";
import { fetchChuck } from "./js/fetchChuck.js";

const jokeBTN = document.getElementById('newJoke');

//fetchContacts();
fetchChuck();

jokeBTN.addEventListener("click", fetchChuck);
