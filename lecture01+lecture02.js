a="Avanish Rai";
console.log(a);
let age = 24;
console.log(age);
x=null;
console.log(x);
y=undefined;
console.log(y);
reading=false;
console.log(reading);
writing=true;
console.log(writing);
writing=false;
console.log(writing);
// console cannot be used as variable beacause it is a reserved word in javascript while Console can be used as variable because it is not reserved word in javascript
// oops logic 
const student ={
    Name:"Avanish Rai",
}
console.log(student)

 A=student["Name"]
 console.log(A)

 B=student.Name
 console.log(B)
//  practice-01
const product = {
    name: "Parker_Jotter_Standard_CT_Ball_Pen_Black",
    rating: 7002,
    price: 270,
    discount: 5,
}
console.log(product)

// practice-=02
const info={
Name:"Avanish Rai",
Posts:195,
Followers:"569K"
}
console.log(info)
console.log(typeof info)
console.log(typeof info.Name)

// operators
alpha=24,
beta=23,

console.log("alpha*beta=",alpha*beta)

a=28,//number
b="28";//string number
console.log(a==b)/*true*/
console.log(a===b)/*false*/
console.log(a!=b)/*false*/
console.log(a!==b)/*true*/

a="AVANISH";
b="AVANISH";
cond1=(a==b);//true
cond2=(a=="AVANISH");//true
console.log(cond1 && cond2)//true

a="AVANISH";
b="AVANISH";
cond1=(a==b);//true
cond2=(a=="AVANISH");//true
console.log(!cond1 && cond2)//false

cond1=(a==b);//true
cond2=(a=="AVANIS");//false
console.log(cond1 || cond2)//true

cond1=(a==b);//true
cond2=(a=="AVANIS");//false
console.log(!cond1 || cond2)//false

//conditional statements
let mode="light";
let background;

if (mode==="dark") {
    background="black";
}else{
    background="white";
}
// if (mode==="light") {
//     background="white";
// }
console.log(background);


// checking number is even or odd

let number=1001;
if (number%2==0) {
console.log("even")
}else if (number*2==18){
console.log("18")
}else{
    console.log("odd")
}
// Teranary Operators
 let age1 = 18;
 let result = age >= 18 ? "adult" : "not adult";
 console.log(result);

// practice questions
 let ax=alert("practice of taking input")
 let axe = prompt("enter number");
 let result1= axe % 5 == 0 ? "yes multiple of 5" : "not multiple of 5";
console.log(result1);

// practice
let grade=alert("practice for grade decision")
let grade1 =prompt("enter marks obtained");
if (grade1 >= 80 && grade1 <= 100){
console.log("GRADE A")
}else if(grade1 >= 70 && grade1 <= 89){
console.log("GRADE B")
}else if(grade1 >= 60 && grade1 <= 69){
console.log("GRADE C")
}else if(grade1 >= 50 && grade1 <= 59){
console.log("GRADE D")
}else if(grade1 >= 0 && grade1 <= 49){
console.log("GRADE F")
}












 