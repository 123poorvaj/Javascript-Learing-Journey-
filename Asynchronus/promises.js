// A promise is an object representiong the eventual completion or failure of an Asynchronous opertion
//it allows you to attach callbacks for handling the success or failure of the operation .
//states of promise:
// 1.pending : initial state ,neither fulfilled or rejection ,
// 2.fulfilled: operation completed succesfully -> use .then method handel
//3.rejected: operation rise error -> use .catch metod to handel
function one(n) {
    return n + 1;
}

function two(val, one) {
    return val + one(val);
}


let variable = new Promise(
    (success, failure) => {
        let respons = 1000;
        if (respons == 1000) {
            setTimeout(() => {
                let sum = two(5, one);
                console.log(sum)
                success("exixute succefuly"); //wait for the 3000ms/3second
            }, 3000)

        } else {
            failure("i am error");
        }

    }
)
variable.then((success) => {
    console.log(success);
}).catch((failure) => {
    console.log(failure);
})



console.log("i am last")//not wait