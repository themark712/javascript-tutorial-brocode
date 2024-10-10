// javascript counter

const _decreaseBtn = document.getElementById("decreaseBtn");
const _resetBtn = document.getElementById("resetBtn");
const _increaseBtn = document.getElementById("increaseBtn");
const _countLabel = document.getElementById("countLabel");

let count = 0;

_increaseBtn.onclick = function () {
    count++;
    _countLabel.textContent = count;
}

_decreaseBtn.onclick = function () {
    count--;
    _countLabel.textContent = count;
}

_resetBtn.onclick = function () {
    count = 0;
    _countLabel.textContent = count;
}