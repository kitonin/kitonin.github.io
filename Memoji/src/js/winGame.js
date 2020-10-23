function winGame() {
	let card_array = Array.prototype.slice.call(card);
	function isEveryGreen(item) {
	  return item.classList.contains('table-list-item__green');
	};
let countGreenCards = card_array.every(isEveryGreen);
	if (countGreenCards) {
	  endGameModal.classList.remove('deleted');
	  endTitle.textContent = 'You win';
	  clearTimeout(timerId);
	};
};
setInterval(winGame, 100);