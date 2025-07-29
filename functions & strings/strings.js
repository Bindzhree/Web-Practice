// strings

let firstName="phoebe"
console.log(firstName.length); // length of string
console.log(firstName.toUpperCase()); // convert to uppercase
console.log(firstName.toLowerCase()); // convert to lowercase


// template literals
// they use backticks `` instead of quotes
let lastName = "Buffay";
console.log(`Hello, ${firstName} ${lastName}!`); 
// also print with double quotes using backticks
console.log(`hello, "joe" welcome!`);

// escacpe sequences characters
console.log("Hello, \"World\"!"); // using backslash to escape double quotes
console.log('Hello, \'World\'!'); // using backslash to escape single quotes
console.log("Hello, \\World\\!"); // using backslash to escape backslash
console.log("Hello, \nWorld!"); // using \n for new line
console.log("Hello, \tWorld!"); // using \t for tab space
console.log("Hello, \rWorld!"); // using \r for carriage return

//string properties and methods
let nam="Chandler";
console.log(nam.length); 
console.log(nam.slice(0, 4)); // slicing the string from index 0 to 4(4 is not included)

console.log(nam.slice(4)); // slicing the string from index 4 to end

console.log(nam.indexOf("l")); // finding the index of first occurrence of 'l'

let newnam=nam.replace("Chandler", "Monica"); // replacing 'Chandler' with 'Monica'

console.log(newnam);

let nam3=nam.concat(" Bing"); // concatenating 'Bing' to 'Chandler'

console.log(nam3);
console.log(nam[0]); // accessing the first character of the string
console.log(nam[nam.length - 1]); // accessing the last character of the string

console.log(nam.charAt(2)); // accessing the character at index 2

console.log(nam.split("a")); // splitting the string at 'a' and returning an array and it wont include 'a' in the array
console.log(nam.split("")); // splitting the string into an array of characters

console.log(nam.startsWith("Chan")); // checking if the string starts with 'Chan'   
console.log(nam.endsWith("ler")); // checking if the string ends with 'ler'
console.log(nam.includes("nd")); // checking if the string includes 'nd'

// string comparison
let str1 = "apple"; 
let str2 = "banana";
console.log(str1 < str2); // comparing strings 
// this will return true because 'a' comes before 'b' in the alphabet


