let add = document.getElementById('ddd');
let remu = document.getElementById('remove')
let area = {
    name: "box",
    length: 23,
    breadth: 45,
    height: 45,
};
let a = 30;
let b = 40;

function hel() {
    alert('hello');

}
area.message = hel;
const c = document.createElement("h1");
c.innerHTML = 'heading is created in side the container element';
document.getElementById('content').innerHTML = area.name;

let btn = document.getElementById('click');
btn.addEventListener('click', () => {
    add.append(c)
})