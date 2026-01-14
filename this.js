// main point is this key is refers the object ,
var a = 500;

function display() {
    let a = 40;
    console.log(`inner a ${a}`);
    console.log(`globale a using this key word ${this.a}`); //in function this key  refers the global variable;
}
display();

const b = {
    name: 'poorvaj',
    num: [12, 34, 45, 67, 68],
    disply() {
        console.log(this.name); // in object this key word refers the propertis,

        this.num.forEach(function(tag) {
            console.log(`${this.name} is ${tag}`); //in this time this key word insert after the function also,
        }, this);

    }
};
b.disply();