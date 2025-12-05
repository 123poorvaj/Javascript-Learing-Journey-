let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let key = 4;
let present = false;
arr.forEach(Element => {
    if (Element == key) {
        present = true;
    }
});
if (present) {
    console.log("key is prasent");
} else {
    console.log("key is absent");
}