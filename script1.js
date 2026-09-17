// console.log("start");
// setTimeout(()=>{console.log("this is async javaScript")},3000);
// console.log("end");

// let arr1=[1,2,3,4,5];
// console.log(arr1);
// console.log(arr1[0]);
// console.log(arr1.length);

// const arr2=[1,2,3,4,5];
// arr2[0]=34;         //value is upadtes
// console.log(arr2);

// arr2.push(6);       //new value is added
// console.log(arr2);
// let d=arr2.pop();        //last value is removed
// console.log(arr2);
// console.log(d);
// arr2.unshift(23);      //first value is added
// console.log(arr2);
// arr2.shift();         //first value is removed
// console.log(arr2);
// arr2.splice(3,4);      //starting from index 3, 4 values are removed
// console.log(arr2);

let arr1=["apple","banana","mango","grapes"];
// arr1.splice(0,3);
// arr1.splice(1,1,"kiwi");   //Value is updated at index 1
// console.log(arr1);  

let arr2=arr1.slice(0,2);
console.log(arr1);
console.log(arr2);
let d= arr1.indexOf("mango");
console.log(d);
let e=arr1.includes("banana");
console.log(e);
