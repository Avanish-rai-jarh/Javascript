console.log("avanish rai");

// object
const student={
    name:"avanish",
    age:34,
    class:12,
}
console.log(student);
console.log(student.age);

// function
let functionName = (a,b,c) =>   {
    avg= (a+b+c)/3;
    return avg;
}
let average= functionName(10,20,30);
console.log(average-5);//15

// using prototype
const runtime={
//    avgnew:function(a,b) {
//    console.log(a+b);
//    }
    name() {
     console.log("this is a function");
    },
}
runtime.name();

const obj1={
    eng:"Avanish",
}
obj1.__proto__=runtime;//helps in accessing information of "runtime" in obj1
console.log(obj1);
console.log(obj1.name());


const obj2={
    last:"Rai",
}
obj2.__proto__=runtime;//helps in accessing information of "runtime" in obj2
console.log(obj2);
console.log(obj2.name());



