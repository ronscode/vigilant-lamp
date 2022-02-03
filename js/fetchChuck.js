async function fetchChuck() {
	const chuckDIV = document.getElementById("chuckDIV");
	chuckDIV.innerHTML = `<p>Joke is loading...</p>`;
	//console.log(chuckDIV);
	const response = await fetch("https://api.chucknorris.io/jokes/random");
	const data = await response.json();

	console.log("From fetchChuck", data);
	const joke = data;
	console.log(joke);

	let tempJokeHTML = `
      <div class="col-6 text-center ">
          <img src="${joke.icon_url}" class="img-thumbnail" alt="Chuck Fact">
          <figure class="text-center">
            <blockquote class="blockquote">
              <p>"${joke.value}"</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Chuck Norris
            </figcaption>
          </figure>
          </div>
      </div>`;

	// console.log(tempJokeHTML);

	chuckDIV.innerHTML = tempJokeHTML;
}

export { fetchChuck };
