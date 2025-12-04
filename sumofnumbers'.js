let num = 567;

function sumnumber(num) {
    let sum = 0;
    while (num) {
        let tmp = num % 10;
        sum += tmp;
        num = parseInt(num / 10);
    }
    return sum;
}
let a = sumnumber(129);
console.log("a =", a);