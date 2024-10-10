// Javascript Tutorial
// ARRAYS
// array = a variable-like structure that can hold more than 1 value

let bear = "Grizzly";   // 1 value

// array
let bears = ["Grizzly", "Kodiak", "Polar", "Black", "Brown"];

// change an element
bears[3] = "American Black";

// add new element to end of array
bears.push("Asian Black");

console.log(bears);
console.log(bears[0]);
console.log(bears[1]);
console.log(bears[2]);
console.log(bears[3]);      // "Black" -> "American Black"
console.log(bears[4]);
console.log(bears[5]);
console.log(bears[6]);      // undefined: element does not exist

// remove last element
bears.pop();
console.log(bears);

// add element to beginning of array
bears.unshift("Sloth");
console.log(bears);

// remove element at beginning of array
bears.shift();
console.log(bears);

// get length (number of items) of array
let numOfBears = bears.length;
console.log(numOfBears);

// find index of array item
let index = bears.indexOf("Kodiak");
console.log(index);
console.log(bears.indexOf("non-existent bear"));    // output: -1

// loop through array
for (let i = 0; i < bears.length; i++) {
  console.log("Current bear: " + bears[i]);
}

// reverse loop
for(let i = bears.length-1; i >=0; i--) {
  console.log("Current reverse bear: " + bears[i]);
}

// shortcut
for(let bear of bears) {
  console.log("Current of bear: " + bear);
}

// sorting
bears.sort();
console.log(bears);

// reverse sort
bears.sort().reverse();
console.log(bears);