// Javascript Tutorial
// Temperature Conversion Project

const _textBox = document.getElementById("textBox");
const _toFahr = document.getElementById("toFahrenheit");
const _toCel = document.getElementById("toCelsius");
const _result = document.getElementById("result");

let temp;

function convert() {
  if(_toFahr.checked) {
    temp = Number(_textBox.value);
    temp = (temp * 9/5 + 32).toFixed(2);
    _result.textContent = temp + "°F";
  } else if (_toCel.checked) {
    temp = Number(_textBox.value);
    temp = ((temp - 32) * 5/9).toFixed(2);
    _result.textContent = temp + "°C";
  } else {
    _result.textContent = "Select a unit";
  }
}