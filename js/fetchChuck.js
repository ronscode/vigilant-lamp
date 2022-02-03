async function fetchChuck() {
	const chuckDIV = document.getElementById("contacts");
	chuckDIV.innerHTML = "";
	//console.log(chuckDIV);
	const response = await fetch(
		"https://api.coingecko.com/api/v3/search/trending"
	);
	const data = await response.json();

	console.dir("From fetchChuck", data);
	// const joke = data;
	// console.log(joke);

	// let tempJokeHTML = `
	//     <div class="col-4 ">
	//       <div class="card" style="width: 18rem;">
	//         <img src="${joke.icon_url}" class="card-img-top" alt="Chuck Joke">
	//         <div class="card-body">
	//           <h5 class="card-title">Chuck Norris Joke</h5>
	//           <p>${joke.value}</p>
	//         </div>
	//       </div>
	//       </div>
	//     </div>`;

	// console.log(tempJokeHTML);
	// chuckDIV.innerHTML += tempJokeHTML;
}

export { fetchChuck };
