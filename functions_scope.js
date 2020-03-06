// funtions is bit of re-usable code.
//Just how we like to re-use CSS classes, we love to re-use code. Let's start with an example:

/////// funtions 
function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(400);
console.log(finalAnswer);
console.log(addTwo(100))



function greet(firstname, lastname, greeting) {
    return `${greeting} ${firstname} ${lastname}`;
}

console.log(" Maxiel", "camargo", "Welcome to Medellin! ")




//////////// Scope 
const A = "A";
let F;

function doStuff(B) {
  console.log(B); // works, B parameter is still in scope
  const C = "C";
  let H = "H";
  if (1 + 1 === 2) {
    const D = "D";
    H = "something else";
  }
  console.log(D); // does not work, D was declared in that if statement block
  console.log(H); // works, H was declared outside the if statement
  F = "F";
}