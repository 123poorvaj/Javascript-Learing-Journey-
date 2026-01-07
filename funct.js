let subheading = document.getElementsByClassName('heading')[0];
subheading.innerHTML = 'functions';

function add(a, b) {
    return a + b;
};
let addition = add(3, 5);
console.log(addition);
let exp = function(a, b) { //function using expretion
    return a * b;
};
console.log(exp(2, 6));

//function constructer
// function defined using in-bult javascript function contracter called Function()  -->F is capital not small f; 
let myfunction = new Function("a", 'b', 'return a*b');
var x = myfunction(4, 6);
console.log(x);

//slef-invoking functions
//call (start) the function itslef
(function() {
    alert("hello ! welcom");
})();