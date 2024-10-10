// Random Number Generator

const _label1 = document.getElementById("label1");
const _label2 = document.getElementById("label2");
const _label3 = document.getElementById("label3");
const _myButton = document.getElementById("myButton");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

_myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    _label1.textContent = randomNum1;
    randomNum2 = Math.floor(Math.random() * max) + min;
    _label2.textContent = randomNum2;
    randomNum3 = Math.floor(Math.random() * max) + min;
    _label3.textContent = randomNum3;
}