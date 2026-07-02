   let content = document.getElementById('display');

   let glo = 24;

   function outer() {
       let b = true;
       let d = new Promise(function(resolve, reject) {
           if (b) {
               resolve();
           } else {
               reject();

           }
       });

       let c = 5;
       d.then(function() {
           content.innerHTML = glo; //globale variable glo is use inside the funtion;(closer)

       }).catch(() => {
           function inner(a, b) {
               let e = 2;
               content.innerHTML = `${a + c}` + e;

           }
           if (c == 0) {
               content.innerHTML = 'c value is flase or zero'
           } else {
               return inner(glo, c);
           }
       })
   }
   let c = outer();
   console.log(c);