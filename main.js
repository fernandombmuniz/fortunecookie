const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
const btnGetLuck = document.querySelector('#btnGetLuck');
const btnAgain = document.querySelector('#btnAgain');
const fortunePhrases = document.querySelector('#fortunePhrases');
const luckPhrases = [
  "Life will bring good things if you have patience,",
  "Show love and joy at every opportunity and you will see that peace is born within you.",
  "Don't make up in anger what you lack in reason.",
  "Defects and virtues are just two sides of the same coin.",
  "The greatest of all towers begins in the ground.",
  "The greatest of all towers begins in the ground.",
  "One doesn't have to be strong. You have to be flexible",
  "Every day you organize your hair, why don't you do the same with your heart?",
  "There are three things that never come back",
  "There are three things that never come back; the arrow shot the word spoken, and the opportunity missed.",
  "Youth is not a season of life, it is a state of mind.",
  "We can choose what we sow, but we are bound to reap what we plant."
]
let randomPhrases = luckPhrases[Math.floor(Math.random() * luckPhrases.length)];

btnGetLuck.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keydown', function(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
})

function handleTryClick(e) {
  e.preventDefault();
  toggleScreen();
  fortunePhrases.innerText = `${randomPhrases}`
}

function handleResetClick() {
  toggleScreen();
  randomPhrases = luckPhrases[Math.floor(Math.random() * luckPhrases.length)];
}

function toggleScreen() {
  screen1.classList.toggle('hide');
  screen2.classList.toggle('hide');
}