alert("stylesheet is added")
console.log(document.getElementsByClassName("js"))
console.log(document.getElementById("id1"))
console.log(document.getElementsByTagName("h2"))

// query selector
console.log(document.querySelector(".js"))
console.log(document.querySelectorAll("#id1"))


// Properties
let tag=document.querySelector("#id4");

// for tagNmae write tag.tagName in console of browser
// for content in tag write tag.innerText or tag.innerContent in console browser
// for content in tag inclding tags too write tag.innerHTML in console of browser 

 
// practice 1
let tex=document.querySelector("#id5");
tex.innerText="hello Avanish Rai"
console.log(tex);

// practice2

let work=document.querySelectorAll(".box");

for(i=0;i<=2;i+=1){
    NEW=work[i].innerText="AVANISH RAI";
    console.log(NEW);
}





