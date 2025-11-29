console.log("day 5 of java script");

function functioname(name) {
    console.log(name);
}
let a = functioname("poorvaj");


function studentditailes(name, age) {
    console.log("name :", name, "age :", age);
}

let s1 = studentditailes("poorvaj", 19);
let s2 = studentditailes("sonu", 12);

console.log("recursive function");

function Foct(num) {
    if (num == 1) {
        return 1;

    } else {
        return num * Foct(num - 1);
    }
}
let re = Foct(43);
console.log(re);