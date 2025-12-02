//let name = prompt("enter your name");
//console.log(name);

function functionname() {
    var user = parseInt(document.getElementById("num1").value);
    var user2 = parseInt(document.getElementById("num2").value);
    var sum = user + user2;
    document.getElementById("result").innerHTML = sum;
}

function add() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let sum = number1 + number2;
    document.getElementById("result").innerHTML = sum;
}

function substract() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let sum = number1 - number2;
    document.getElementById("result").innerHTML = sum;
}

function divison() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let sum = number1 / number2;
    document.getElementById("result").innerHTML = sum;
}

function multiplay() {
    let number1 = parseInt(document.getElementById("num1").value);
    let number2 = parseInt(document.getElementById("num2").value);
    let sum = number1 * number2;
    document.getElementById("result").innerHTML = sum;
}