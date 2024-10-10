// Javascript Method Chaining

_result = document.getElementById("myP");

// no method chaining

let username = window.prompt("Enter your username");

/*
username = username.trim();

let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();

username = letter + extraChars;

_result.textContent = username;
*/


// method chaining

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

_result.textContent = username;