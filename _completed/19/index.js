// Javascript While Loops

const _result = document.getElementById("myP");

/*
let username = "";

while (username === "" || username === null) {
    username = window.prompt("Enter a username", "A while Loop");
}

_result.textContent = username;

username = "";

do {
    username = window.prompt("Enter a username", "A do ... while Loop");
} while (username === "" || username === null)

_result.textContent = username;
*/

let loggedIn = false;
let username;
let password;

/*
while(!loggedIn) {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "markus73" && password === "Hilltopper#95") {
        loggedIn = true;
        _result.textContent = "You are logged in";
    } else  {
        _result.textContent = "Please try again";
    }
}
*/

do {
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if (username === "markus73" && password === "Hilltopper#95") {
        loggedIn = true;
        _result.textContent = "You are logged in";
    } else {
        _result.textContent = "Please try again";
    }
} while (!loggedIn) 