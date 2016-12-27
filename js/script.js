window.addEventListener('keydown', function(e){
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	console.log(audio);
	audio.currentTime = 0; //this will rewind to the start.
	if(!audio) return;
	audio.play();
	key.classList.add('playing');
});

function removeTransition(e){
	if (e.propertyName !== 'transform') return;
	console.log(e.propertyName);
	this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key'); 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));