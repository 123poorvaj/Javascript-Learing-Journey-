//javascript object

//how to create object
//1. object literal syntax
let person = {
    name: "John",
};
document.getElementById("discription").innerHTML = person.name; // John

//2. using Object constructor   
let person2 = new Object();
person2.name = "Doe";
console.log(person2.name); // Doe           
//3. using a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let person3 = new Person("Alice", 30);
console.log(person3.name);

//4. using Object.create()
let person4 = Object.create(null);
person4.name = "Bob";
console.log(person4.name); // Bob