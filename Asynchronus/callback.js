//callback is a fuction pass into another function as an argument.

function one(n) {
    return n + 1;
}

function two(val, one) {
    return val + one(val);
}

let sum = two(5, one);
console.log(sum)