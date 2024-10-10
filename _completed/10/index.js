// if Statements

const _result = document.getElementById("myP");
const _myText = document.getElementById("myText");
const _mySubmit = document.getElementById("mySubmit");

let age;

if (age >= 18) {
    _result.textContent = "You are old enough to enter this site."
} else {
    _result.textContent = "You are must be 18+ to enter this site."
}

let time = 16;

if (time < 12) {
    _result.textContent = "Good morning";
} else {
    _result.textContent = "Good afternoon";
}

let isStudent = true;

if (isStudent) {
    _result.textContent = "You are a student";
} else {
    _result.textContent = "You are NOT a student";
}

//age = 0;
let hasLicense = false;

if (age >= 16) {
    _result.textContent = "You are old enough to drive";
    if (hasLicense) {
        _result.textContent += "You have your license";
    } else {
        _result.textContent += "You do not have your license";
    }
} else {
    _result.textContent += "You must be 16+ to have a license";
}

_mySubmit.onclick = function() {
    age = _myText.value;
    age = Number(age);

    if (age >= 100) {
        _result.textContent = "You are too old to enter this site";
    }
    else if (age == 0) {
        _result.textContent = "You can't enter. You were just born";
    } 
    else if (age >= 18) {
        _result.textContent = "You are old enough to enter this site";
    } else if (age < 0) {
        _result.textContent = "Your age can't be below 0";
    }
    else {
        _result.textContent = "You must be 18+ to enter this site";
    }
}