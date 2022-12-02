const book = document.querySelector(".book");

let audio = new Audio();
audio.preload = 'auto';
audio.src = '../media/audio/page-flip.wav';

book.addEventListener("click", () => {
	audio.play();
});