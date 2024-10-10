// Javascript Logical Operators

const _result = document.getElementById("myP");

const temp = 31;

// without logical operators

if (temp > 0) {
    _result.textContent = "The weather is good";
} else if (temp <= 30) {
    _result.textContent = "The weather is good";
} else {
    _result.textContent = "The weather is BAD";     // never executes
}

// with logical operators

if (temp > 0 && temp <= 30) {
    _result.textContent = "The weather is good";
} else {
    _result.textContent = "The weather is BAD";     
}


if (temp <= 0 || temp > 30) {
    _result.textContent = "The weather is BAD";
} else {
    _result.textContent = "The weather is good";     
}

const isSunny = true;

if(!isSunny) {
    _result.textContent = "It is cloudy";
} else {
    _result.textContent = "It is sunny";
}