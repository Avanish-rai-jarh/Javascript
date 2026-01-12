// attributes 
// 1. ele.getAttribute("attribute name") => helps to find attribute value
let att=document.querySelector("header");
var alphaNos=att.getAttribute("class");
console.log(alphaNos);

// 2. ele.setAttribute("attribute name","value") => helps to change attribute value
let change=document.querySelector("header");
change.setAttribute("class","approval")
console.log(change);


// style
// for accessing syyle
let style0=document.querySelector("div");
console.log(style0.style)
// for changing style
let styl2=document.querySelectorAll(".box")
for(i=0;i<=2;i+=1){
    a=styl2[i].style.backgroundColor="blue";
    b=styl2[i].style.fontSize="2rem";
    console.log(a,b);
}

// inserting elements

let create=document.createElement("button");
create.innerText="click here";
let call=document.querySelector("#id5");
call.before(create);
console.log(create);
create.style.backgroundColor="white";
create.style.color="green";
create.style.fontWeight="800";


// deleting element

let del=document.querySelector("#id6");
del.remove();
console.log(del);


// practice

// 1
let nbt=document.createElement("button");
nbt.innerText="click me";
nbt.style.backgroundColor="red";
nbt.style.color="white";
(document.querySelector("body")).prepend(nbt);
console.log(nbt);


// 2

//method one

// let new1=document.querySelector(".hero");
// new1.setAttribute("class","noob");//it completely overwrite
// console.log(new1);

//method two

let new2=document.querySelector(".hero");
new2.classList.add("noob");//it completely not overwrite the first one
console.log(new2);



       