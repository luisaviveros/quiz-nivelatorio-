const wordList = ['ODIO', 'LA', 'PROGRAMACION', 'ES', 'MUY', 'ABURRIDA', 'AGENCIA', 'INVESTIGACION'];
let hiddenWord = '';
let displayWord = [];
let mistakes = [];
let tries = 0;

const wordDisplay = document.getElementById('wordDisplay');
const letterInput = document.getElementById('letterInput');
const triesDisplay = document.getElementById('tries');
const mistakesDisplay = document.getElementById('mistakes');
const messageDisplay = document.getElementById('message');

function chooseRandomWord() {
  const index = Math.floor(Math.random() * wordList.length);
  return wordList[index].toUpperCase();
}

function initGame() {
  hiddenWord = chooseRandomWord();
  displayWord = Array(hiddenWord.length).fill('_');
  mistakes = [];
  tries = 0;
  updateDisplay();
  messageDisplay.textContent = '';
  letterInput.value = '';
  letterInput.disabled = false;
  letterInput.focus();
}

function updateDisplay() {
  wordDisplay.textContent = displayWord.join(' ');
  triesDisplay.textContent = `Tries: ${tries} / 6`;
  mistakesDisplay.textContent = `Mistakes: ${mistakes.join(', ')}`;
}

letterInput.addEventListener('keyup', (e) => {
  const letter = letterInput.value.toUpperCase();
  letterInput.value = '';

  if (!/^[A-ZÑ]$/.test(letter) || messageDisplay.textContent) return;

  if (hiddenWord.includes(letter)) {
    hiddenWord.split('').forEach((char, i) => {
      if (char === letter) {
        displayWord[i] = letter;
      }
    });
  } else if (!mistakes.includes(letter)) {
    mistakes.push(letter);
    tries++;
  }

  updateDisplay();
  checkGameStatus();
});





