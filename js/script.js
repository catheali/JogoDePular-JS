let sol = document.querySelector('.sol');
let panel = document.querySelector('.panel');
let sunClouds = document.querySelector('.sun-clouds');
let clouds = document.querySelector('.clouds');
let btn = document.getElementById("game");

btn.innerHTML = 'Iniciar';

function jump() {
	sol.classList.add('jump');
	setTimeout(()=>{
		sol.classList.remove('jump');
	}, 500)
}

function loop() {
	document.addEventListener('keydown', jump);
	document.querySelector('.iniciar').style.display = 'none';
	let score = 0;
	panel.style.animation = 'panel-animation 1.5s infinite linear';
	sol.src = './image/sol-running.gif';
	sunClouds.style.animation = 'sun-clouds-animation 20s infinite linear'; 
	clouds.style.animation = 'clouds-animation 15s infinite linear';
	 const game = setInterval(() => {
		scorePoints(score++);
		let panelPosition = panel.offsetLeft;
		let solPosition = +window.getComputedStyle(sol).bottom.replace('px', ''); 
		if(panelPosition <= 100 && panelPosition > 9 && solPosition < 1.86) {
			panel.style.animation = 'none';
			panel.style.left= `${panelPosition}px`;
			sol.style.animation = 'none';
			sol.style.bottom= `${solPosition}px`;
			sol.src = "./image/sol-end.png";
			clouds.style.animation = 'none';
			sunClouds.style.animation = 'none';
			document.querySelector('.iniciar').style.display = 'flex';
			btn.innerHTML = 'Jogar de novo';
			scorePoints(score)	
			clearInterval(game);
		} 
	}, 10);
}

function playAgain(){
	if(btn.innerHTML == 'Iniciar'){
		return loop();
	}	
	else{
		location.reload(true);
	}//implementar função de jogar de novo;
}

function scorePoints(point) {
	document.getElementById("points").innerHTML = point;
}