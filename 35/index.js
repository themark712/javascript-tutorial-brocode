// Javascript Tutorial
// reduce() METHOD

// reduce()  :  reduce the elements of an array to a single value,
//              accepts a callback function as an argument


// const _result = document.getElementById("myP");

const prices = [19.99, 159.99, 6.99, 5.99, 86.55];

const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, next) {
  return accumulator + next;
}

const grade = [75, 85, 50, 99, 80, 65, 82];

const maximum = grade.reduce(getMax);
console.log(maximum);

const minimum = grade.reduce(getMin);
console.log(minimum);

function getMax(accumulator, next) {
  return Math.max(accumulator, next);
}

function getMin(accumulator, next) {
  return Math.min(accumulator, next);
}