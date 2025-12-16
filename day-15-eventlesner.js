let btn = document.getElementById("bt");
let remove = document.querySelector(".remove");
let add = document.getElementById("add");
let aded = document.querySelector(".box-container")
console.log(btn.innerText);
btn.addEventListener('click', () => {
    let clone = aded.cloneNode(true);
    add.append(clone);
});

remove.addEventListener('click', () => {
    let aded = add.querySelectorAll('.box-container');

    if (aded.length > 0) {
        aded[aded.length - 1].remove();
    }
});