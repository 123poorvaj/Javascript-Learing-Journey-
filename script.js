console.log("hellow world");
// single line comment

/* multi 
line
 comment*/


console.log("------variables------")
console.log("1.var")
var a = 10;
console.log("Befor change the value of a = " + a);
var a = 20;
console.log("After change the value of a = " + a);

console.log("2. let")
    //let is a block-level scope means works only where it is declared;
let b = 34;

// let b=24;   <-- this line give the error becouse let cannot redeclered;
console.log("Before change the value of b = " + b);

b = 5; //this line don't  give Error
console.log("After change the value of b = " + b);



console.log("3.const")

// const  is a block-level scope means works only where it is declared
// you dose not change the value in the const variable 
// const c; <-- this line gives the error becous const variable must be initialized while diclaring 

const c = 78;
console.log("value of c = " + c);
//c = 68; //this line gives error
console.log("c value does not change becous it is contstant");