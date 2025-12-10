console.log("Asynsc/Await");

function one(n) {
    return n + 1;
}

function two(num1, one) {
    return num1 + one(num1);
}
async function getvlues(two, one) {
    let res = new Promise(
        (success, failure) => {
            let respones_code = 200;
            if (respones_code == 200) {
                setTimeout(() => {
                    success(two(5, one));

                }, 2000);

            } else {
                setTimeout(() => {
                    failure("somting went wroung");
                }, 3000);
            }
        }
    )
    return await res;
}
getvlues(two, one).then(
    (success) => {
        console.log(success);
    },

    (failure) => {
        console.log(failure);
    }
)