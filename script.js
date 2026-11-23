
const phrases = [
  "Web Developer | Builder",
  "Learning HTML, CSS & JS",
  "Creating Modern Solutions"
];

let phraseIndex = 0;
let letterIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typed");

function typeLoop() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    typedElement.textContent = currentPhrase.substring(0, letterIndex - 1);
    letterIndex--;
  } else {
    typedElement.textContent = currentPhrase.substring(0, letterIndex + 1);
    letterIndex++;
  }

  let speed = isDeleting ? 50 : 100;

  if (!isDeleting && letterIndex === currentPhrase.length) {
    speed = 1500;
    isDeleting = true;
  } else if (isDeleting && letterIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 400;
  }

  setTimeout(typeLoop, speed);
}

typeLoop();
