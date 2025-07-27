// this code is for conditional statements in JavaScript
console.log("Using if-else statements:");
let a=10;
let b=6;
 if(a>b){
     console.log("a is greater than b");    
    }   else if(a<b){
        console.log("b is greater than a");
    } else{
        console.log("a is equal to b");
    }


// this code is for ternary operator in JavaScript
(a>b)? console.log("a is greater than b") : console.log("b is greater than a");

// this code is for switch case in JavaScript
console.log("Using switch case:");
day=prompt("Enter a number between 1 and 7 to get the day of the week:");
switch(day){
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


// for loop in JavaScript
console.log("Using for loop:");
let array=[1,2,3,4,5];
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(element);
}

// for in loop in JavaScript
console.log("Using for in loop:");
let obj={
    a:1,
    b:2,
    c:3
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(`the key is: ${key} the value is ${element}`);
    }
}

// for of loop in JavaScript
console.log("Using for of loop:");
let arr=[1,2,3,4,5];
for (const element of arr) {
    console.log(element);
}

// while loop in JavaScript
let fact=1
let f=5
console.log("Using while loop:");   
console.log(`The factorial of ${f} is: ${fact}`);
while(f>0){
    fact=fact*f;
    f--;    
}
console.log(fact);


// do while loop in JavaScript
num=prompt("Enter a number to print its multiplication table:");  
console.log("Using do while loop:");
let j=1;
do{
 console.log(`${num} x ${j} = ${num*j}`);
 j++;
}while(j<=10);