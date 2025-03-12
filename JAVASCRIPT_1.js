// THIS IS NORMAL JAVASCRIPT VARIABLES AND LETS AND TYPEOF
console.log("hi im javascript")
var A=5;
var C='javascript'
console.log(A +C)
let B=10
console.log(b)
console.log(typeof B,typeof A,typeof C)
const item ={
    'java':'javascript',
    'c pro':'C++'

}
console.log(item)


//TAKING USER INPUT , AND PERFORMING RANDOM FUNCTION CALCULATOR PROBLEM
let n=prompt("enter 1st no: ")
let b=prompt("enter 2nd no: ")
let c=prompt("enter operation no: ")
let d=Math.random();
let object={
    "+":"-",
    "-":"+",
    "*":"/",
    "/":"**",
}
if(d<0.1){
    c=object[c]
    alert(`answer is ${n} ${c} ${b}`)
    
}else{
    alert(`answer is ${n} ${c} ${b}`)
}


// strings in javascript
let a='java script'
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a.length)
console.log(a.replace('du','sh'))
console.log(a.charAt(3))
console.log(a.slice(1,4))
console.log(a.slice(1))
let sentence='my name is JS i\'m learning java script'
let sentenc=`my name is JS ${a} learning java script`
console.log(sentenc)
console.log(sentence)
