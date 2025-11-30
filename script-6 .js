console.log("day-6--array--");

let array = [34, 5, 67, 45, 34, 56];
console.log(array);

let subject = ["kannada", "english", 'hindi', "social", "science", "maths"];
console.log(subject);

let len = subject.length;
console.log(len);
for (let i = 0; i < len; i++) {
    console.log(subject[i]);

}
let leng = array.length;
for (let b = 0; b < leng; b++) {
    console.log(subject[b], ":", array[b]);
}

console.log("------display array elemets using forEach---------");
subject.forEach((item, index) => {
    console.log(item)
    console.log(array[index], ":", item);
})

console.log("pop the elements in array");
subject.pop();
console.log(subject);

console.log("push the elements in the array ");
subject.push("pushed elemente");
console.log(subject);

console.log("remove the elements the array using shift");
subject.shift();
console.log(subject);

console.log("add the first element in the arraty");
subject.unshift("subject");
console.log(subject);