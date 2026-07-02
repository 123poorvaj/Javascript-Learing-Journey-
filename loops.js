let x = 1; //x is a variable that store the value 5

//using for loop print the even numbers 0 to 20
for (x = 0; x <= 20; x = x + 2) {
    console.log("even x is =" + x);
}
//using for print odd numbers 0 to 20;
for (x = 1; x <= 20; x = x + 2) {
    console.log("odd x is = " + x);
}


//using while loop print a multiplication table 0 to 10;
while (x <= 10) {
    console.log("2 X " + x + " = " + x * 2);
    x++;
}

//calculate the power 2 up to 1 to 10; 
while (x <= 10) {
    console.log(2 ** x);
    x++;
}
// using do while loop
do {
    console.log(x * 2);
    x++;
} while (x <= 10);

// BREAK IS USE TO COMES OUT OF THE LOOP;
let a = 0;
while (a <= 110) {
    console.log(a);
    a++;
    if (a == 20) {
        break; //when a value is 20 that time loop will break    
    }
}

// conteneu is use to skip the loop exicution
let b = 0;
while (b <= 10) {
    if (b == 5) {
        b++;
        continue;
    }
    console.log("b= " + b);
    b++;
}

//break is use to comes outside the loop
for (b = 0; b <= 10; b++) {
    if (b == 5) {
        break;
    }
    console.log("b= " + b);
}