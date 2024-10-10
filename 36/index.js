// Javascript Tutorial
// FUNCTION EXPRESSIONS

// function declaration :  define a resuable block of code that performs a specific task
//         VS
// function expression  :  a way to define functions as values or variables,
//                         used in:
//                          1. Callbacks in asynchronous operations
//                          2. Higher-order functions
//                          3. Closures
//                          4. Event listeners

// const _result = document.getElementById("myP");

// function declaration
function helloDec() {
  console.log("Hello from function declaration");
}

// function expression
const helloExp = function () {
  console.log("Hello from function expression");
}

helloDec();
helloExp();

// setTimout example
setTimeout(helloExp, 3000);

// setTimout anonymouse function example
setTimeout(function() {
  console.log("Hello from anonymouse setTime()")
}, 3000);

// examples with map(), filter(), reduce()
const numbers = [1,2,3,4,5,6];

const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

const evenNums = numbers.filter(function (element) {
  return element % 2 === 0;
});

const addNums = numbers.filter(function (element) {
  return element % 2 === 1;
});

const total = numbers.reduce(function(accumulator, element) {
  return accumulator + element;
})

console.log(numbers);
console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(addNums);
console.log(total);

