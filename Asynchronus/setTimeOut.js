//setTimeout out functions takes 2 parameter one is function and another one is value(timeing),
//syntax : setTimeout(function,diletime);
function one(n) {
    return n + 1;
}

function two(val, one) {
    return val + one(val);
}



setTimeout(() => {
    let sum = two(5, one);
    console.log(sum)
}, 1000)//funtion print after 1000 milisecond

console.log("i am last!!"); 
