let btngreen = document.getElementById("btn-green");
let btnyellow = document.getElementById("btn-yellow");
let btnred = document.getElementById("btn-red");
let boxgreen = document.getElementById("box-green");
let boxred = document.getElementById("box-red");
let boxyellow = document.getElementById("box-yellow");

btngreen.addEventListener("click", () => {
    boxgreen.classList.toggle("d-green");
    btngreen.classList.toggle("d-green");
});

btnyellow.addEventListener("click", () => {
    boxyellow.classList.toggle("d-yellow");
    btnyellow.classList.toggle("d-yellow");
});
btnred.addEventListener("click", () => {
    boxred.classList.toggle("d-red");
    btnred.classList.toggle("d-red");
})