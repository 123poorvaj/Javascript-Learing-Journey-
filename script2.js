let btn = document.getElementById("btn-g");
let input = document.getElementById("num");
let givennum = 56;

btn.addEventListener('click', () => {
    btn.style.color = "green";
    let num = input.value;
    compere(num);
});

function compere(num) {
    if (num < givennum) {
        alert("number is leserthan given number,try agin");
    }
    if (num > givennum) {
        alert("number is greaterthan given number,try agin")
    } else {
        alert("you guess carect answer");
    }
}