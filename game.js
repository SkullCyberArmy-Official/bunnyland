const bunnyLayers = [1, 2, 4, 6];
const bunnies = [];
let score = 0;
let time = 0;
let isFirstGame = true;

const gameDescription = document.querySelector('#game-description');
const scoreSpan = document.querySelector('#score span');
const scoreText = document.querySelector('#score');
const btn = document.querySelector('#start-btn');

for (let i of bunnyLayers) {
	let bunny = Array.from(document.getElementsByClassName(`layer-${i}`));
	bunnies.push(...bunny);
}

const initialGame = () => {
	if (!isFirstGame) {
		scoreText.style.visibility = 'block';
	} else {
		scoreText.style.visibility = 'hidden';
	}
	gameDescription.innerText = `${
		isFirstGame ? 'Catch as many bunnies as you can in 10 secs' : 'Time!!!'
	}`;
	btn.style.display = 'block';
	btn.innerText = `${isFirstGame ? 'Start' : 'Play again'}`;
	bunnies.forEach((element) => {
		element.classList.toggle('animation-off');
	});
};

const totalScore = () => {
	score += 1;
	scoreSpan.innerText = score;
};
// CLICK ON THE BTN, START THE GAME
btn.addEventListener('click', () => {
	bunnies.forEach((element) => {
		element.addEventListener('click', totalScore);
	});

	isFirstGame = false;
	score = 0;
	scoreSpan.innerText = score;
	btn.style.display = 'none';
	gameDescription.style.display = 'none';
	scoreText.style.visibility = 'visible';

	bunnies.forEach((element) => {
		element.classList.toggle('animation-off');
	});

	// GAME DURATION
	setTimeout(() => {
		gameDescription.style.display = 'block';
		bunnies.forEach((element) => {
			element.removeEventListener('click', totalScore);
		});
		initialGame();
	}, 1000 * 11);
});

initialGame();
