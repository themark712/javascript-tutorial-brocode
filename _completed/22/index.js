// Javascript Tutorial  - Functions

const _result = document.getElementById("myP");

function happyBirthday(username, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log("Happy birthday to you!");
  console.log(`You are ${age} years old!`);
}

//happyBirthday("Mark", 51);
//happyBirthday("Dwayne", 41);
//happyBirthday("Teddy", 57);

function add(x, y) {
  return x + y;
}

let answer = add(2, 30);
console.log(answer);

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

console.log(subtract(2024,1973));
console.log(multiply(2024,1973));
console.log(divide(2024,4));

function isEven(number) {
  return number % 2 === 0 ? true : false;
}

console.log(isEven(5));
console.log(isEven(10));

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("mark@gmail.com"));
console.log(isValidEmail("theman.com"));
console.log(isValidEmail("zucker@meta.com"));