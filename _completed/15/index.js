// Javascript String Slicing

const _result = document.getElementById("myP");
const fullName = "Mark Johnson";

let firstName = fullName.slice(0,4);

_result.textContent = firstName;

let lastName = fullName.slice(5,12);

_result.textContent = lastName;

let firstChar = fullName.slice(0,1);

_result.textContent = firstChar;

let lastChar = fullName.slice(-1);

_result.textContent = lastChar;

lastChar = fullName.slice(-7);

_result.textContent = lastChar;

firstName =  fullName.slice(0, fullName.indexOf(" "));

_result.textContent = firstName;

lastName =  fullName.slice(fullName.indexOf(" ") + 1);

_result.textContent = lastName;

const email = "markus73.tn@gmail.com";

let userName = email.slice(0, email.indexOf("@"));

_result.textContent = userName;

let extension = email.slice(email.indexOf("@") + 1);

_result.textContent = extension;