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
      <div class="col-4 ">
        <div class="card" style="width: 18rem;">
          <img src="${person.avatar}" class="card-img-top" alt="${person.first_name}">
          <div class="card-body">
            <h5 class="card-title">${person.first_name} ${person.last_name}</h5>
            <a href="mailto:${person.email}" class="btn btn-primary">Email</a>
          </div>
        </div>
        </div>
      </div>`;

		contactsDIV.innerHTML += tempPersonHTML;
	});
}

export { fetchContacts };
