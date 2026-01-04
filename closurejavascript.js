 let addd = document.getElementsByClassName('add');

 let a = 12 //global variable
 function outer() { //outer function
     let b = 30 //localvariable of outer function 
     function inner() {
         let c = 23 // localvariable of inner function

         let sum = a + b + c;
         return sum;
     };
     return inner();
 };
 let add = outer();
 addd[0].innerText = `adding global variable + outer function valrable + inner function variable =  ${add}`;