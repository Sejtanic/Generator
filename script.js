'use strict';
const r = document.querySelector(':root');
const numberSelect = document.querySelector('.randomNumGenerator');
const diceSelect = document.querySelector('.diceGenerator');
const coinSelect = document.querySelector('.coinGenerator');
const diceDisplayPlace = document.querySelector('.diceDisp');
const coinDisplay = document.querySelector('.coinDisp');
const select = document.querySelectorAll('.box');
//
const inputFrom = document.querySelector('.from'); // from input number random
const inputTo = document.querySelector('.to'); // to input number random
//
const theme = document.querySelector('.theme'); // lightbulb theme toggle
const dice = document.querySelector('.dice--roll'); // dice roll btn
const btnRnB = document.querySelector('.btn--random--number'); // random bumber btn
const coin = document.querySelector('.coin--flip'); // coin flip btn
// UI popup for selected option
const numberGen = document.querySelector('.numberGenerator');
const diceGen = document.querySelector('.diceGeneratorBox');
const coinGen = document.querySelector('.coinGeneratorBox');
const updateUI = function (one, two, three, e) {
  one.classList.toggle('hidden');
  two.classList.add('hidden');
  three.classList.add('hidden');
};
const clearFields = function () {
  document.querySelector('.randomNumPlaceholder').textContent = '';
  diceDisplayPlace.innerHTML = 'Press Roll';
  coinDisplay.innerHTML = 'Press Flip';
  inputFrom.value = '';
  inputTo.value = '';
  coinDisplay.style.fontSize = '20px';
  coinDisplay.style.fontWeight = 'bold';
  diceDisplayPlace.style.fontSize = '20px';
  diceDisplayPlace.style.fontWeight = 'bold';
};
//number selection display UI
numberSelect.addEventListener('click', function (e) {
  e.preventDefault();
  clearFields();
  updateUI(numberGen, diceGen, coinGen, e.target);
});
//dice selection display UI
diceSelect.addEventListener('click', function (e) {
  e.preventDefault();
  clearFields();
  updateUI(diceGen, coinGen, numberGen, e.target);
});
//coin selection display UI
coinSelect.addEventListener('click', function (e) {
  e.preventDefault();
  clearFields();
  updateUI(coinGen, numberGen, diceGen, e.target);
});

//theme
theme.addEventListener('click', function (e) {
  theme.classList.toggle('themeIcon');
  document.querySelector('body').classList.toggle('themeAll');
  document
    .querySelectorAll('.input')
    .forEach((mov) => mov.classList.toggle('themeAll'));
});
//dice
dice.addEventListener('click', function (e) {
  const num = Math.floor(Math.random() * 6) + 1;
  const text = ['&#9856', '&#9857', '	&#9858', '	&#9859', '	&#9860', '	&#9861'];
  diceDisplayPlace.style.fontSize = '200px';
  diceDisplayPlace.style.fontWeight = 'lighter';
  diceDisplayPlace.innerHTML = text[num - 1];
});
// random number
btnRnB.addEventListener('click', function (e) {
  const generateNumber = (min, max) =>
    Math.trunc(Math.random() * (max - min)) + min;
  const RandomNum = generateNumber(+inputFrom.value, +inputTo.value + 1);
  document.querySelector('.randomNumPlaceholder').textContent = RandomNum;
});
coin.addEventListener('click', function (e) {
  const flip = Math.floor(Math.random() * 2) + 1;
  if (flip === 1) coinDisplay.innerHTML = '&#9786';
  else coinDisplay.innerHTML = '&#8275';
  coinDisplay.style.fontSize = '200px';
  coinDisplay.style.fontWeight = 'lighter';
});
