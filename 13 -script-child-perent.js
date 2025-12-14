console.log("parents clilds nodes ");
let element2 = document.querySelector(".element2");
let createpara = document.createElement("p"); //create a pragraph element
let addlistitem = document.querySelector("#maindiv");
let unorderd = document.querySelector(".unlist");
console.log(addlistitem); //print the element
console.log(addlistitem.childNodes.length); //find how many childs
console.log(addlistitem.children); //o/p is content of the element
createpara.innerText = "hara hara mahadeva,,,," //add the text to the elemetn
addlistitem.appendChild(createpara); //append the lement
//element2.remove(); //remove the element
console.log(addlistitem.lastChild) //find Last child.
console.log(element2.parentNode); // find paraent node
console.log(element2.nextElementSibling); //find element sibling;
console.log(element2.nextSibling) //find sibling