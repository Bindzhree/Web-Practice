// functions in javascript
function add(a, b) {
    let sum=a+b;
    console.log(sum);
}
add(5,7);

// function returning a value
function multiply(a, b) {
    return a * b;
}   
let a=prompt("Enter first number");
let b=prompt("Enter second number");
let result=multiply(a,b);
alert("The product is: " + result);
console.log("The product is: " + result);

// arrow function
const square = (x) => { 
    return x * x;
}
let sq=square(4);
console.log("The square of 4 is: " + sq);

// random number generation
let rand=Math.random();
console.log(rand);
console.log("converting random number to integer from 0 to 9: "+ Math.floor(rand * 10)); // converting to integer between 0 and 9
console.log("converting random number to integer from 0 t0 99: "+ Math.floor(rand * 100)); // converting to integer between 0 and 99

// function expression
const greet = function(name) {
    return "Hello, " + name + "!";
}
console.log(greet("everyone!"));



