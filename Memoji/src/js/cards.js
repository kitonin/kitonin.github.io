const card 					= document.querySelectorAll('.table-list-item');
const emojiList 		= ['🐵', '🐼', '🐱', '🐶', '🐰', '🐙',
											'🐵', '🐼', '🐱', '🐶', '🐰', '🐙'];
const emoji 				= document.querySelectorAll('.table-list-item_emoji');
let emojiRandomList = emojiList.sort(compareRandom);
const list = document.getElementById('table-list');
let endGameModal = document.getElementById('endGame');
let endTitle = document.getElementById('winOrLoseTitle');

function compareRandom(a, b) {
  return Math.random() - 0.5;
};

function getRandomEmoji() {
	for (var i = 0; i < emoji.length; i++) {
		let res = emoji[i];
		res.textContent = emojiRandomList[i];
	}
};

for (var i = 0; i < card.length; i++) {
  let result = card[i];
  result.addEventListener('click', function() {
    if (this.classList.contains('always-open')) {
      return false;
    }
    this.classList.toggle('card_open');
    this.classList.add('always-open');
    checkCards();
  });
};

window.onload = getRandomEmoji();
