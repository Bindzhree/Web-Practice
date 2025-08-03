// run these below in console or assign some variable and use in code to see results

// applying inserting and removing elements using js
let a=document.querySelector(".box")
document.querySelector(".box").innerHTML
document.querySelector(".box").innerText
document.querySelector(".box").outerHTML
document.querySelector(".box").hidden
document.querySelector(".box").hidden=true
document.querySelector(".box").innerHTML="event development"
document.querySelector(".box").innerHTML
document.querySelector(".box").hasAttribute("style")


let b=document.querySelector(".contain").innerHTML
document.querySelector(".contain").outerHTML
document.querySelector(".contain").tagName
document.querySelector(".contain").nodeName
document.querySelector(".contain").textContent


// there are data-attributes
document.querySelector(".box").setAttribute("style","display:flex")
document.querySelector(".contain").hasAttribute("style","display:flex")
document.querySelector(".box").hasAttribute("style","display:flex")
document.querySelector(".box").removeAttribute("style")
document.querySelector(".box").hasAttribute("style","display:flex")
document.designMode="on"


let node1=document.querySelector(".created")
node.insertAdjacentHTML("beforebegin","<b> im insert adjacent html</b>")
//           VM538:1 Uncaught NoModificationAllowedError: Failed to execute 'insertAdjacentHTML' on 'Element':    
//           The element has no parent.
//            at <anonymous>:1:6
//           (anonymous)
//error cause we added to class that has no parent
// so below is with which has parent
let node=document.querySelector(".box")
node.insertAdjacentHTML("beforebegin","<b> im insert adjacent html</b>")
node.insertAdjacentHTML("afterbegin","<b> im insert adjacent html</b>")
node.insertAdjacentHTML("beforeend","<b> im insert adjacent html</b>")
node.insertAdjacentHTML("beforeend","<b> im insert adjacent html</b>")
node.insertAdjacentHTML("afterend","<b> im insert adjacent html</b>")


// classList and  className
let elem=document.querySelector(".contain")
elem.classList
elem.className
elem.classList.remove("harry")
elem.classList.add("harry")
elem.className
elem.classList.add("harry")

let ele=document.querySelector(".box")
ele.classList
// DOMTokenList(2) ['box', 'green', value: 'box green']
ele.classList.toggle("green")
// false        -- these are the changes u see once u toggle [ it returns false if true and true if false]
ele.classList.toggle("green")
// true
ele.classList.toggle("green")
// false


// random color changing generation code using DOM
// also using event listener and setInterval() 
 let div=document.createElement("div");
        div.setAttribute("class","created");
        document.querySelector(".contain").append(div);
        document.querySelector(".box").before("before");
        div.innerHTML="ive been inserted";

        let timeid=setInterval(()=>{
            let rand=Math.random();
            if(rand<0.33 && rand>0.11){
                document.querySelector(".box").style.backgroundColor = "lightblue";
            }
            else if(rand<0.44 && rand>0.33){
                document.querySelector(".box").style.backgroundColor = "purple";
            }
            else if(rand<0.11 && rand>0.02){
                document.querySelector(".box").style.backgroundColor = "yellow";
            }
            else if(rand<0.55 && rand>0.44){
                document.querySelector(".box").style.backgroundColor = "black";
            }
            else if(rand<0.99&& rand>0.94){
                document.querySelector(".box").style.backgroundColor = "grey";
            }
            else if(rand<0.94 && rand>0.55){
                document.querySelector(".box").style.backgroundColor = "orange";
            }
            console.log(rand);
        },3000)


        elem.addEventListener("mouseover", function (){
    elem.style.backgroundColor='red'
})


// using setTimeout()
let ele1 = document.querySelector(".box");
function changecolor() {
    ele1.style.backgroundColor = 'green';
}
ele1.addEventListener("mouseover", changecolor);
setTimeout(() => {
    ele1.removeEventListener("mouseover", changecolor);
    console.log("Event listener removed");
}, 5000);