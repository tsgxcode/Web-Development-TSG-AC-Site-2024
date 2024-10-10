//Contact page
const input = document.querySelectorAll(".input");

function focusFunc() {
	let perant = this.perantNode;
	perant.classList.add("focus");
}

	function blurFunc() {
		let perant = this.perantNode;
		if (this.value == "") {
          perant.classList.remove("focus");   
		}
	}

	inputs.forEach((input) =>{
		inputs.addEventListeners("focus", focusFunc);
		inputs.addEventListeners("blur", blurFunc);

	})