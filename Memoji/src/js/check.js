function checkCards() {
	let openCard = document.querySelectorAll('.card_open');
	if (openCard.length % 2 == 0) {
		for (var i = 0; i < openCard.length; i++) {
			let openCardItem = openCard[i];
			if (openCard[0].textContent == openCard[1].textContent) {
				function checkYes() {
					openCardItem.classList.add('table-list-item__green');
					let greenCard = document.getElementsByClassName('table-list-item__green');
					for (var i = 0; i < greenCard.length; i++) {
						let back = greenCard[i].lastElementChild;
						back.classList.add('table-list-item_back__green');
						openCardItem.classList.remove('card_open');
						openCardItem.classList.add('card_open__checked');
					}
				}
				checkYes();
			}
			else {
				function checkNo() {
					openCardItem.classList.add('table-list-item__red');
					let redCard = document.getElementsByClassName('table-list-item__red');
					for (var i = 0; i < redCard.length; i++) {
						let back = redCard[i].lastElementChild;
						function getRed() {
							back.classList.add('table-list-item_back__red');
						}
						setTimeout(getRed, 5);
						openCardItem.classList.remove('always-open');
						function deleteRed() {
							openCardItem.classList.remove('card_open');
							function delayRed() {
								openCardItem.classList.remove('table-list-item__red');
								back.classList.remove('table-list-item_back__red');
							}
							setTimeout(delayRed, 100);
						}
						setTimeout(deleteRed, 800);
						
					}
				}
				checkNo();
			}
		}
	}
}

