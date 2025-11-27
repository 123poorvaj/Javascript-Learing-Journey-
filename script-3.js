console.log("condition statements");
//if else stement
let a = 78;
if (a > 0) {
    console.log("a is greater than zero ");
} else {
    console.log("a is not greater than zero");
}

let b = 67;
if (a == b) {
    console.log("a is equal to b ");
} else if (a > b) {
    console.log("a is greater than b");

} else {
    console.log("a is less than b");
}

let c = 94;
if (a > b) {
    if (a > c) {
        console.log("a is greater");

    } else {
        console.log("c is greater");
    }
} else if (b > a) {
    if (b > c) {
        console.log("b is greate");

    } else {
        console.log("c is greater");
    }
} else {
    vonsole.log("c is greater")
}