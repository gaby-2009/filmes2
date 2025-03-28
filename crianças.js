//efeitos assustadores para o site de terror//


// Chance aleatória de um sussurro ao mover o mouse
  if (Math.random() > 0.997) {
    playRandomWhisper();
  }
});

// Lista de sussurros
const whispers = [
  'https://www.soundjay.com/human/sounds/whisper-1.mp3',
  'https://www.soundjay.com/human/sounds/whisper-2.mp3'
];

// Reproduz um sussurro aleatório
function playRandomWhisper() {
  const audio = new Audio();
  audio.src = whispers[Math.floor(Math.random() * whispers.length)];
  audio.volume = 0.2;
  audio.play();
}
