console.log("object and class");

class porson {
    constructor(name, id, salry) {
        this.name = name;
        this.id = id;
        this.salry = salry;
    }
    display() {
        console.log(`name=${this.name} ,salary ${this.salry},id=${this.id}`);
    }
}
class employe extends porson {
    constructor(employename, employesallay, employeid) {
        super(employename, employeid, employesallay);
    }
    displayemployeditails() {
        console.log(`name = ${this.name}, id = ${this.id}, salary = ${this.salry}`);
    }

}

let a = new porson("poorvaj", 5678, 576);
a.display();
let b = new employe("fdjkh", 6546, 678);
b.displayemployeditails();