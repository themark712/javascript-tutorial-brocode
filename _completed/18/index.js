// Javascript Strict Equality

//    = : assignment operator
//   == : comparison operator (compare if values are equal)
//  === : strict equality operator (compare if values AND datatypes are equal)
//   != : inequality operator 
//  !== : strict inequality operator 


const _result = document.getElementById("myP");

const PI = "3.14";        // datatype number

if (PI == "3.14") {     // comparison operator
    _result.textContent = "That is PI";
} else {
    _result.textContent = "That is NOT PI";
}

if (PI === "3.14") {     // strict equality operator
    _result.textContent = "That is PI";
} else {
    _result.textContent = "That is NOT PI";
}


if (PI != "3.14") {     // inequality operator
    _result.textContent = "That is NOT PI";
} else {
    _result.textContent = "That is PI";
}

if (PI !== "3.14") {     // strict inequality operator
    _result.textContent = "That is NOT PI";
} else {
    _result.textContent = "That is PI";
}


