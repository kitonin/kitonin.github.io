var themes = [theme1, theme2, theme3, theme4, theme5, theme6];

function compareRandom(a, b) {
  return Math.random() - 0.5;
};

themes.sort(compareRandom);

let titles = document.getElementsByClassName('game-item_title');
let rows = document.getElementsByClassName('game-row');
let cells = document.getElementsByClassName('game-item_cell');
let playerScore = document.getElementById('playerScore');
var rowCells = [];

for (let i = 0; i < titles.length; i++) {
	titles[i].textContent = themes[i].title;
	rowCells[i] = rows[i].cells;
	for (let k = 1; k < rowCells[i].length; k++) {
		var span = document.createElement('span');
		span.className = "hiden-quest";
		var answerHide = document.createElement('i');
		answerHide.className = 'hiden-answer';
		var a = rowCells[i][k];
		a.appendChild(span);
		a.appendChild(answerHide);
		span.textContent = themes[i].quest[k-1];
		answerHide.textContent = themes[i].answer[k-1];
	}
}

function getFinal() {
	let playerNameText = playerName.textContent;
	let playerScoreText = playerScore.textContent;
	wrap.style.display = "none";
	final.style.display = "flex";
	finalTitle.textContent = 'Game over. ' + playerNameText + ', your final score: ' + playerScoreText +'.';
}

for (let i = 0; i < cells.length; i++) {
	cells[i].onclick = function() {
		let point = this.textContent;
		point = parseInt(point);
		let playerScoreNumber;
		let playerScoreCurrent = playerScore.textContent;
		let  playerWrote= prompt(this.getElementsByClassName('hiden-quest')[0].textContent);
		let result = playerWrote.toLowerCase();
		cells[i].classList.add("wasted");
		let rightAnswer = this.getElementsByClassName('hiden-answer')[0].textContent;
		if ( result == rightAnswer) {
			playerScoreNumber = parseInt(playerScoreCurrent) + point;
			playerScore.textContent = playerScoreNumber;
			cells[i].classList.add("wasted__green");
			alert('Right Answer');
		} else {
			playerScoreNumber = parseInt(playerScoreCurrent) - point;
			playerScore.textContent = playerScoreNumber;
			cells[i].classList.add("wasted__red");
			alert('Wrong. Right answer: ' + rightAnswer + '.');
		}
		var arrCells = Object.values(cells);
		var wastedArr = arrCells.filter(function(item) {
			return item.classList.contains('wasted');
		});
		function endGame() {
			if (wastedArr.length == arrCells.length) {
				console.log('endGame');
				getFinal();
			}
		}
		endGame();
	}
}