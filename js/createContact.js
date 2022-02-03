function createContact() {
  	const addForm = document.getElementById("addForm");
		const addButton = document.getElementById("addContact");
		const contactsDIV = document.getElementById("contacts");
		console.log(addContact);
		addButton.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log(e);
			const { first_name, last_name, avatar, email } = Object.values(
				e.target
			).reduce((obj, field) => {
				obj[field.name] = field.value;
				return obj;
			}, {});
			console.log(first_name, last_name, avatar, email);
			let tempPersonHTML = `
      <div class="card text-dark bg-info mb-1 col-3 mx-1" >
        <div class="card-body">
        <img src="${avatar}" class="img-thumbnail float-end" alt="${first_name}">
          <h5 class="card-title">${first_name} ${last_name}</h5>
          <p class="card-text">Laboriosam vel nihil et quas harum aliquam, cupiditate.</p>
          <a href="mailto:${email}" class="btn btn-primary">Email</a>
        </div>
      </div>

    `;

			contactsDIV.innerHTML += tempPersonHTML;
		});
}

export { createContact };