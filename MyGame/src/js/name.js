var nameInput = document.getElementById("nameInput");
var nameForm = document.getElementById("nameForm");
var playerName = document.getElementById("playerName");
var nameWrap = document.getElementById("nameWrap");
var wrap = document.getElementById("wrap");
var lo = document.getElementById("lo");
var final = document.getElementById('final');
var finalTitle = document.getElementById('finalTitle');
var finalButton = document.getElementById('finalButton');

nameForm.onsubmit = function() {
	let nameValue = nameInput.value;
	event.preventDefault();
	if (nameValue != "") {
		playerName.textContent = nameValue;
	}
	nameWrap.style.display = "none";
	wrap.style.display = "block";
	return false
};

finalButton.onclick = function() {
	location.reload();
}