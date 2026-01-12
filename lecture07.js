
// events
let a=document.querySelector(".event");
// a.onclick=(e)=>{
//     console.log("hello!");
//     console.log(e);
//     console.log(e.type,e.target,e.clientX,e.clientY);
// }

const removal=()=>{
console.log("hello!");  
}

a.addEventListener("click",removal)

// removing events
a.removeEventListener("click",removal);

a.addEventListener("click",()=>{
  console.log("hello! new");
})


// practice
let btn = document.querySelector(".mode");
let body= document.querySelector("body");
let color="light";
btn.addEventListener("click",()=>{
    if (color==="light"){
      color="dark";
      body.classList.add("dark_mode");
      body.classList.remove("light_mode");
    }else{
        color="light";
        body.classList.add("light_mode");
        body.classList.remove("dark_mode");
    }
    console.log(color);
})