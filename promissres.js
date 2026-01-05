let data = new Promise(function(resolve, reject) {
    let a = 30;
    if (a) {
        resolve()
    } else {
        reject();

    }
});
data.then(function() {
    document.write("the a is full")
}).catch(function() {
    document.write('a is not full')
});