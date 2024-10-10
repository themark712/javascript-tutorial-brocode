// Javascript Tutorial
// REST PARAMETERS

// (...rest) allows a function to work with a variable number 
// of arguments by bundling them into an array

// spread = expands an array into seperate elements
// rest = bundles seperate elements into an array

const _result = document.getElementById("myP");

function openFridge(...foods) {
  console.log(foods);
  console.log(...foods);    // spread operator seperates array
}

function getFood(...foods) {
  return foods;

}
const food1 = "pizza";
const food2 = "chili";
const food3 = "sushi";
const food4 = "sandwich";
const food5 = "steak";

openFridge(food1, food2, food3, food4);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers) {
  let result = 0;

  for(let number of numbers) {
    result += number;
  }

  return result;
}

let total = sum(2,4,6);
console.log(`Your total is ${total}`);

total = sum(19.99,24.99,56.98);
console.log(`Your total is ${total}`);

function getAverage(...numbers) {
  let result = 0;

  for(let number of numbers) {
    result += number;
  }
  result = (result / numbers.length).toFixed(2);
  return result;
}

let average = getAverage(97, 93, 88, 71, 69);
console.log(`Your average is ${average}`);

function combineStrings(...strings) {
  return strings.join(' ');
}

const fullName = combineStrings ("Mr.", "Mark", "C", "Johnson", "III");
console.log(fullName);