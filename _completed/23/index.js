// Javascript Tutorial
// VARIABLE SCORE

const _result = document.getElementById("myP");

let z = 3;
function1();
function2();


function function1() {
  let x = 1;
  console.log(x);
  console.log(z);
}

function function2() {
  let y = 2;  
  let z = 4;  
  console.log(y);
  console.log(z);     // output: 4, uses local variable
  console.log(x);      // error: variable is not in scope
}