// arrays
let a=[1,2,3,4,5];
console.log(a);
console.log(a[0]); // 1
console.log(a[2]); // 3

// assign or change a value
a[2] = 10;
console.log(a[2]); // 10

// lenght of the array
console.log(a.length); // 5
console.log(a[5]); // undefined cause no 5th index

// type of operator on array returns object
console.log(typeof a); 


// ARRAY METHODS
let n=[1,5,7]
// toString()
console.log(n.toString()); 
// join()
console.log(n.join(","));
// pop()
console.log(n.pop()); //updates original array and returns popped value
// push()
console.log(n.push(10)); // updates original array and returns new length       
// shift()
console.log(n.shift()); // removes first element and returns it
// unshift()
console.log(n.unshift(0)); // adds element at the beginning and returns new length
// delete()
console.log(delete n[0]); // deletes element at index 0 and returns true
console.log(delete n[34]); // returns true but does not change array length

let m=['ram','shyam'];
// concat()
console.log(n.concat(m)); // combines two arrays and returns new array
console.log(n); // original array remains unchanged

// sort()
console.log(n.sort());

// splice()
console.log(n.splice(1, 2)); // removes 2 elements starting from index 1 and returns them
console.log(n); // original array is updated
console.log(n.splice(1, 0, 100)); // inserts 100 at index 1 without removing any elements

// slice()
console.log(n.slice(1, 3)); // returns a new array with elements from index 1 to 3 (not including 3)

// reverse()
console.log(n.reverse()); // reverses the array in place and returns it



// LOOPING THROUGH ARRAYS

// 1. for each loop
let arr=[10,20,30,40,50];
arr.forEach((value,index,Array)=>{
    console.log(`Value: ${value}, Index: ${index}, Array: ${Array}`);
})

// 2.map()
const square=arr.map((value,index)=>{
    return value*value
})
console.log(square); // [100, 400, 900, 1600, 2500]

// 3.filter()
const even=arr.filter((value)=>{
    return value%2===0
})
console.log(even); // [10, 20, 30, 40, 50]  

// 4.reduce()
const sum=arr.reduce((a, b)=>{
    return a + b;
}, 0);
console.log("sum of all values of array:"+sum); // 150

// 5.find()
const greater=arr.find((value)=>{
    return value>30;
})
console.log("first value greater than 30: "+greater); // 40

// 6. array from
const str="morning";
const arr2=Array.from(str); // this creates an array from a string
console.log(str); // ['m', 'o', 'r', 'n', 'i', 'n', 'g']
console.log(arr2); // ['m', 'o', 'r', 'n', 'i', 'n', 'g']

// 7. for of loop
console.log("Using for of loop:");
for (const value of arr) {
    console.log(value); // prints each value in the array
}

// 8. for in loop
console.log("Using for in loop:");
for (const a in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, a)) {
        const element = arr[a];
        console.log(element); // prints each value in the array
    }
}