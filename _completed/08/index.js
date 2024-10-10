// Math object
const _result = document.getElementById("myP");
let x = 3;
let y = 2;
let z  = 1;

z = Math.round(x);
_result.textContent = z;

z = Math.floor(x);
_result.textContent = z;

z = Math.ceil(x);
_result.textContent = z;

z = Math.trunc(x);
_result.textContent = z;

z = Math.pow(x, y);
_result.textContent = z;

z = Math.sqrt(x);
_result.textContent = z;

z = Math.log(x);
_result.textContent = z;

z = Math.sin(x);
_result.textContent = z;

z = Math.cos(x);
_result.textContent = z;

z = Math.tan(x);
_result.textContent = z;

z = Math.abs(x);
_result.textContent = z;

z = Math.sign(x);
_result.textContent = z;

z = Math.cos(x);
_result.textContent = z;

let max = Math.max(x, y, z);
_result.textContent = max;

let min = Math.min(x, y, z);
_result.textContent = min;
