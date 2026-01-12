// arrays
array1=[1,1,2,2,3,"AVANISHRAI",true,undefined,null];
console.log(array1);
console.log(typeof array1);//object
console.log(array1.length);//property
// array indices
let marks=[10,20,30,40,50];
console.log(marks[4]);//50
// correcting an array element
marks[0]="avanishrai";
console.log(marks);

// looping over an array

// using for loop
let array2=[1,"hello world",3,"avanishrai",5];
for(i=0;i<=(array2.length-1);i+=1){
    console.log(array2[i]);
};
// using while loop
let array3=[1,"hello world",3,"avanishrai",5];
let x=0;
while(x<=array3.length-1){
    console.log(array3[x]);
    x+=1;
}

// using for of loop
let array5=[1,"hello world",3,"avanishrai",5];
for(let val1 of array5){
    console.log(val1);
};

let array6=[85,97,44,37,76,60];
let sum=0;
let m=0;
while(m<=array6.length-1){
    sum+=array6[m];
    avg=sum/(array6.length);
    m+=1;
};
console.log(`average value is:${avg}`)

let array7=[85,97,44,37,76,60];
let sum1=0;
for(p=0;p<=(array7.length-1);p+=1){
    sum1+=array7[p];
    avg1=sum1/(array7.length);
};
console.log(`average value is:${avg1}`)

// practice
let array8=[250,645,300,900,50];
for(y=0;(y<=array8.length-1);y+=1){
    newPrice=array8[y]-(array8[y]/10);
    array8[y]=newPrice;
}
console.log(array8);

// array methods

let array9=[1,2,3,4,5];
array9.push("avanish rai","aayush rai");
console.log(array9);

let array10=[1,2,3,4,5];
let deletedItem=array10.pop();
console.log(array10);
console.log(deletedItem);

let array11=[1,2,3,4,5];
console.log(array11.toString());


let array12=[1,2,3,4,5];
let array13=[6,7,8,9,10];
let array14=[11,12,13,14];
let final=array12.concat(array13,array14);
console.log(final);

let array15=[1,2,3,4,5];
array15.unshift("aayush rai");
console.log(array15);

let array16=[1,2,3,4,5];
let startDeleted=array16.shift();
console.log(array16);
console.log(startDeleted);

let array17=[1,2,3,4,5];
console.log(array17.slice(1,4));

let array18=[1,2,3,4,5];
let change=array18.splice(2,3,"avanish rai")
console.log(array18);//returns modified array
console.log(change);//returns deleted elements



//practice
let prac1=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
prac1.shift();
console.log(prac1);

//method 1 of adding and removing elements
let prac2=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
prac2[2]="Ola";
console.log(prac2);
//method 2 of adding and removing elements
let prac3=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
prac3.splice(2,1,"Ola");
console.log(prac3);

//method1 of adding at end
let prac4=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
prac4.push("Amazon");
console.log(prac4);
//method 2 of adding at end
let prac5=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
prac5[6]="Amazon";
console.log(prac5);