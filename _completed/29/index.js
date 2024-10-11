// Javascript Tutorial
// ROLL DICE GAME

const _numOfDice = document.getElementById("numOfDice");
const _diceResult = document.getElementById("diceResult");
const _diceImages = document.getElementById("diceImages");

function rollDice() {
  const numOfDice = _numOfDice.value;
  const values = [];
  const images = [];

  for (let i = 0; i < numOfDice; i++) { 
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src='img/${value}.png' alt='Dice ${value}'>`);
  }

  _diceResult.textContent = `dice: ${values.join(', ')}`;
  _diceImages.innerHTML = images.join('');
}