 let buttons = document.querySelectorAll(".btns");
 let result = document.getElementById('displaybox');
 buttons.forEach((btns) => {
     btns.addEventListener("click", () => {
         let target = btns.innerText;

         console.log(target);
         switch (target) {
             case 'AC':
                 empty();
                 break;
             case '<':
                 popenum();
                 break;
             case '=':
                 rsul();
                 break;
             default:
                 result.value += target;
                 break;
         }
     });
 });

 function empty() {
     result.value = '';
 }

 function popenum() {
     let str = result.value.toString();
     result.value = str.slice(0, -1);
 }

 function rsul() {
     let str = result.value;
     let rr = eval(str);
     result.value = rr;
 }