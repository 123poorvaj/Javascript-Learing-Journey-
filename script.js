let number = document.getElementById("num");
let addbtn = document.getElementById("addbtn");
let subbtn = document.getElementById("subbtn");
let num = 0;

addbtn.addEventListener("click", () => {
    num++;
    number.innerHTML = num;
});

subbtn.addEventListener('click', () => {
    if (num > 0) {
        num--;
        number.innerHTML = num;
    } else {
        number.textContent = "0 is least Count!you cann't decrease";
    }
})