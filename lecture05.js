// functions in js

function f1(){
    console.log("avanish rai");
}
f1();

function sum(a,b){
    // a and b will act as local variable for this function only
    console.log(a+b);
}
sum(2,3);
sum(5,10);

function avg(a,b){
    console.log((a+b)/2);
}
avg(10,20);
avg(5,15);

// returning values from functions---it is reusable
function ret(a,b){
    product=a*b;
    return product;
}
let val=ret(9,10);
console.log(val/14);

// arrow function
// it is small way to write function
const sum1=(a,b)=>{
    console.log(a/b);
}
sum1(3,2)


const name=()=>{
    console.log("avanish rai rai");
}
name()

//practice using function
console.log("method 1")
function string1(sting1){
    for(i=0;i<=(sting1.length)-1;i+=1){
        if(sting1[i]=='a' || sting1[i]=='e' || sting1[i]=='i' || sting1[i]=='o' || sting1[i]=='u'){
       console.log(`detected vowel at index (${i}) is = ${sting1[i]}`)
        }
    }
}
string1("my name is avanish rai");



// practice using arrow function
console.log("method 2")
const string2=(sting2)=>{
    for(i=0;i<=(sting2.length)-1;i+=1){
        if(sting2[i]=='a' || sting2[i]=='e' || sting2[i]=='i' || sting2[i]=='o' || sting2[i]=='u'){
         console.log(`detected vowel at index (${i}) is = ${sting2[i]}`)
        }
    }
}
string2("my name is avanish rai");


// FOREACH FUNCTION OR METHOD

Array=["avanish rai","ransome prevent"];
Array.forEach(function first(val,){
  console.log(val.toUpperCase());
})

arr=[1,12,2,3,4,5,7,8,9,0,];
arr.forEach((val,idx,arr)=>{
    console.log(val,idx,arr);
})


// practice

let sigma=[1,2,3,4,5,6,7,8,9,10];
sigma.forEach((val)=>{
    console.log(`square of ${val} is = ${val**2}`);
})

// some more array methods
// 1. Map

let alpha=[1,2,3,4,5,6,7,8,9,10];
let beta=alpha.map((val)=>{
    return val*19;
})
console.log(beta)

// 2. filter
// prime
let gamma=[1,2,3,4,5,6,7,8,9,10];
let newArr=gamma.filter((val)=>{
        return val % 2 !== 0;
})
console.log(newArr);



// 3. reduce
let a=[1,1,2,3,4,5];
let output=a.reduce((first,second)=>{
    return first+second;
})
console.log(output);//16

// practice

let marks=[20,30,45,67,89,90,99,99.5,93];
let newMarks=marks.filter((val)=>{
    return val>90;
})
console.log(newMarks)

// practice
let number=prompt("enter number");
let numbers=[];
for(let i=1;i<=number;i+=1){
    numbers.push(i);
}
console.log("Array",numbers)

let sum2=numbers.reduce((val1,val2)=>{
    return val1+val2;
})
console.log("sum of all numbers in array",sum2);

let prod=numbers.reduce((val1,val2)=>{
    return val1*val2;
})
console.log("product of all numbers in array",prod);



