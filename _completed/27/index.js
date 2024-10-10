// Javascript Tutorial
// SPREAD OPERATOR

// The spread operator allows an iterable (such as an array or string)
// to be expanded into seperate elements, i.e., unpacks the elements

const _result = document.getElementById("myP");

let numbers = [1,2,3,4,5];
let max = Math.max(numbers);
let maximum = Math.max(...numbers);
let min = Math.min(numbers);
let minimum = Math.min(...numbers);

console.log(max);       // NaN
console.log(maximum); 
console.log(max);       // min
console.log(minimum); 

// unpacking string variable
let username = "Mark Johnson";
let letters = [...username];
console.log(...letters);

// unpack with added string
let letters2 = [...username].join("-");
console.log(letters2);
console.log(typeof letters2);

// unpacking array
let bears = ["Grizzly", "Kodiak", "Polar", "American Black", "Brown"]
let newBears = [...bears];

console.log(bears);
// unpack array
console.log(...bears);
console.log(...newBears);

// combine arrays
let wolves = ["Grey Wolf", "Desert Wolf", "Gray Wolf", "Prairie Wolf"];

let animals = [...bears, ...wolves, "Siberian Tiger", "Bengal Tiger"];
console.log(animals);