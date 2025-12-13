let paragraph = document.getElementsByTagName("p");
console.log(paragraph[0]);
Array.from(paragraph).forEach(ele => {
    console.log(ele.innerText);
    ele.style.fontFamily = "Roboto";
    ele.style.fontSize = "15px"
});
paragraph[0].innerText = "om namshivaya";