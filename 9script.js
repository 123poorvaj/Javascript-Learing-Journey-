console.log("error handling");
let a = 10;
let b = 78;
try {
    console.log(divide(a, b));
} catch (e) {
    console.log(e);
} finally {
    console.log("code exicuted succesfuly")
}

function divide(a, b) {
    if (a == 0) {
        throw new Error("divison by zero is infinet that reson doesn't consider");
    } else {
        return b / a;
    }
}