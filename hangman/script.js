const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

/** @type {string[]} */
const correctLetters = [];
/** @type {string[]} */
const wrongLetters = [];


const displayWord = () => {
  wordEl.innerHTML = `${
    selectedWord.split('').map(letter =>
        `<span class="letter">
        ${correctLetters.includes(letter) ? letter : ''}
        </span>`
      ).join('')
    }`;

  const innerWord = wordEl.innerText.replace(/\n/g, '');

  if (innerWord === selectedWord) {
    finalMessage.innerText = 'Congratulations! You won! 😃';
    popup.style.display = 'flex';
  }
};

window.addEventListener('keydown', evt => {
  if (evt.keyCode >= 65 && evt.keyCode <= 90) {
    const letter = evt.key;

    if (selectedWord.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

displayWord();

const showNotification = () => {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000)
};

const updateWrongLettersEl = () => {};