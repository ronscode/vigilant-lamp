async function fetchContacts() {
	const contactsDIV = document.getElementById("contacts");
	//console.log(contactsDIV);
	const response = await fetch("https://reqres.in/api/users/");
	const data = await response.json();

	console.log("From fetchContacts", data);
	const contacts = data.data;
	console.log(contacts);

	contacts.forEach((person) => {
		console.log(person.first_name);

    let tempPersonHTML = `
      <div class="card text-dark bg-info mb-1 col-3 mx-1" >
        <div class="card-body">
        <img src="${person.avatar}" class="img-thumbnail float-end" alt="${person.first_name}">
          <h5 class="card-title">${person.first_name} ${person.last_name}</h5>
          <p class="card-text">Laboriosam vel nihil et quas harum aliquam, cupiditate.</p>
          <a href="mailto:${person.email}" class="btn btn-primary">Email</a>
        </div>
      </div>

    `;

		contactsDIV.innerHTML += tempPersonHTML;
	});
}

export { fetchContacts };
