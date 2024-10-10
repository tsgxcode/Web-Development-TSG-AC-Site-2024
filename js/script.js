//Contact page
const inputr = document.querySelectorAll(".input");

function focusFunc() {
	let parent = this.parentNode;
	parent.classList.add("focus");
}

	function blurFunc() {
		let psarent = this.parentNode;
		if (this.value == "") {
          preant.classList.remove("focus");   
		}
	}

	inputs.forEach((input) =>{
		inputs.addEventListeners("focus", focusFunc);
		inputs.addEventListeners("blur", blurFunc);

	})