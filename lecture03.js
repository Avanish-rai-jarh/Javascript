// for loop
for(let i=1;i<=50;i+=1){
    console.log("avanish")
}

// sum of first n numbers
sum = 0;
var n = prompt("enter number");
for (var i = 1; i <= n; i += 1) {
    sum += i;
}

console.log("sum of first n numbers is= ", sum);

// factorial of a number
sum = 1;
var n1 = prompt("enter number");
for (var i = 1; i <= n1; i += 1) {
    sum *= i;
}

console.log("factorial of a number is= ", sum);

// // infinite loop
// for (let i = 1; i >= 0; i += 1) {
//     console.log(i);
// }

// while loop
sum = 0;
var i=1;
var n = prompt("enter number");
while (i<=n){
    sum += i;
    i += 1;
}
 console.log("sum of first n numbers is= ", sum);
   

 // do-while loop
var i=1;
do{
    console.log("hello avanish",i);
    i++;
}while(i<=5);

// for-of loop
let length=0;
let str="avanishrai";
for(var i of str){
    console.log("letter",i)
    length++;
}

console.log("length of string is= ", length);


// for-in loop
let books = {
    book1: "The Alchemist",
    book2: "1984",
    book3: "To Kill a Mockingbird"
}
for(let key in books){
    console.log(key,books[key])
}

// guess game
alert("next number is 25")
let o=25;
let n2=prompt("enter");


while(n2!=o){
    n2 = prompt("try again");
}
console.log("correct");

// strings
let str1="avanish";
console.log(str1);

let str2="avanish";
console.log(str2);

// PROPERTIES IN SRING 

// 1. LENGTH OF STRING 
var len='avanish rai';
console.log('length of string= ',len.length);

// accesing inex of string 
let ind="avanishrai";
console.log("index of selected char is  ",ind[5]);

// template literals
let obj={
    name: "avanish\trai",
    age: 20,
    city: "delhi"
}
console.log(`my name is ${obj.name} ,\t i am ${obj.age} years old , \ti live in city ${obj.city} `);

var name =`my name is avanish rai.\ni am 20 years old.\ni live in city delhi`;
console.log(name);

// string methods

var str11='      hello avanish rai';
// 1. toUpperCase
console.log(str11.toUpperCase());
// 2. toLowerCase
console.log(str11.toLowerCase());
// 3. trim
console.log(str11.trim());

// some other methods for strings in js
// slice
var name=`hello world`;
console.log(name.slice(0,5)); // hello
console.log(name.slice(0,9)); // hello wor
console.log(name.slice(0,4)); // hell
console.log(name.slice(0)); // complete string
// concat
var str3="avanish";
var str4="\trai";
console.log(str3.concat(str4))
// /replace
var str3=("avanish rai");
console.log(str3.replace('avanish','aayush'));
// charAt
var str3=("radiance academy");
console.log(str3.charAt(5));//n
console.log(str3.charAt(8));//null

// practice
let info={
    user: prompt("enter full name"),
}
let alpha=`@${info.user}${info.user.length}`
console.log("suggested username",alpha)
