 let keypress = document.getElementById("keypress");
 let keyreleas = document.getElementById("keyrelease");
 let btnoff = document.getElementById("btnoff");
 let btnon = document.getElementById("btnon");
 btnon.style.backgroundColor = "green";
 btnoff.style.backgroundColor = "red";

 btnon.addEventListener("click", () => {
     btnoff.style.backgroundColor = "red";
     btnon.style.backgroundColor = "green";
     document.addEventListener("keydown", pressoutput);
     document.addEventListener("keyup", releasedoutput);
 });

 btnoff.addEventListener("click", () => {

     document.removeEventListener("keydown", pressoutput);
     document.removeEventListener("keyup", releasedoutput);
     keypress.innerHTML = " ";
     keyreleas.innerHTML = ' ';
 });

 function pressoutput(even) {
     let key = even.key;
     keypress.innerHTML = `key ${key} is presed`;
 }

 function releasedoutput(even) {
     let key = even.key;
     keyreleas.innerHTML = `key ${key} is presed`;
 }