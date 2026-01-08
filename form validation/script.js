let email = document.querySelector("#mail");
let passward = document.querySelector("#passward");

function vaildation() {
    if (email.value == "") {
        alert("enter the your mail");
        mail.focus()
        return false;
    } else if (passward.value == "") {
        alert("Enter  passward");
        passward.focus()
        return false;
    } else {
        return true;
    }
}