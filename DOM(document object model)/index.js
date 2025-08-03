// DOM USAGE AND CONCEPTS
// run these below in console or assign some variable and use in code to see results
document
document.body
document.body.childNodes
document.body.childNodes[1]
document.body.childNodes[1].childNodes

let element=document.body.childNodes[1]
element.firstChild
element.lastChild
element.childNodes
element.childElementCount
element.firstElementChild

document.body
document.body.childNodes
document.body.firstElementChild

let ele1=document.body.firstElementChild
ele1.firstElementChild
ele1.childNodes
ele1.childElementCount
ele1.firstChild
ele1.firstElementChild
ele1.firstElementChild.childNodes
ele1.firstElementChild.firstChild
ele1.firstElementChild.children
ele1.firstElementChild.nextElementSibling
ele1.firstElementChild.nextSibling
ele1.firstElementChild.previousElementSibling
ele1.firstElementChild.previousSibling
ele1.firstElementChild.parentElement
alert(Document.body.childnodes[0]);

// using with tables
document
document.body.table
document.body.childNodes
// NodeList(7) [text, div.container, text, table, text, script, text]
let table=document.body.childNodes[3];
table
table.rows
// HTMLCollection(4) [tr, tr, tr, tr]
table.caption
table.thead
table.tfoot
table.childNodes
// NodeList(2) [text, tbody]
let tbody1=table.childNodes
tbody1.rows
let tbody=table.childNodes[1]
tbody.rows
// HTMLCollection(4) [tr, tr, tr, tr]
tbody.childNodes
// NodeList(8) [tr, text, tr, text, tr, text, tr, text]
// let tr=tbody.childNodes[3]
// tr
// tr.cells
// tr.CDATA_SECTION_NODE
// for column values
let tr=tbody.childNodes[4]
tr.cells
// HTMLCollection(2) [td, td]
tr.sectionRowIndex
tr.rowIndex
tr.childNodes
// NodeList(5) [text, td, text, td, text]
td=tr.childNodes[1]
let td=tr.childNodes[1]
td.cellIndex


// searching DOM elements
let span=document.getElementById("box1");
console.log(span); 

let a=document.querySelectorAll(".box");
console.log(a);

let b=document.querySelector(".box");
console.log(b);

let c=document.getElementsByTagName("body")
console.log(c);

let d=document.getElementsByClassName("box");
console.log(d);

let elem=document.getElementById("box1");
if(elem.matches("container")){
    console.log("Element matches the container class"); 
}else{ 
    console.log("Element does not match the container class");
}

if(elem.closest("html")){
    console.log("Element is inside the html tag");  
}
else{ 
    console.log("Element is not inside the html tag");
}   

console.log(elem.contains(document.querySelector(".container")))







