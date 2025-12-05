let num = 102;

function revnum(num) {
    let revnum = 0;
    while (num) {
        temp = num % 10;
        revnum = (revnum * 10) + temp;
        num = parseInt(num / 10);
    }
    return revnum;
}
console.log(revnum(num));