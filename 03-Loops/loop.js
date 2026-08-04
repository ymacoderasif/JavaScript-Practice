/*                                                                              ============== All The Best ===================                                                  */








/*
========================================================
Q1. Print number form 1 to 10 using a for loop. 
========================================================
*/
for(let i = 1; i <= 10; i++){
    console.log(i);
}








/*
==========================================================
Q2. Print number form 10 to 1 using a while loop. 
==========================================================
*/
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}








/*
===============================================================
Q3.print even number form 1 to 20 using  a for loop. 
===============================================================
*/
for(let i = 1; i <= 20 ; i++){
    if(i%2===0){
        console.log(i);
    }
}








/*
==========================================================
Q4. Print odd number form 1 to 15 using while loop. 
==========================================================
*/
let i = 1;
while(i <= 15){
    if(i%2===1){
        console.log(i);
    }
    i++;
}








/*
=================================================
Q5. Print the multiplication table of 5. 
=================================================
*/
for(let i = 1; i <= 10;i++){
    console.log(`5 * ${i} = ${5 * i}`);
}








/*
============================================================
Q6. Find the sum of number form 1 to 100 using a loop. 
============================================================
*/
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);








/*
====================================================================
Q7. Print all number between 1 to 50 that are divisible by 3.
====================================================================
*/
for(let i = 1; i <= 50; i++){
    if(i%3===0){
        console.log(i);
    }
}








/*
====================================================================
Q8. Ask the user for a number and print whether each number 
form 1 to that number is even or odd.
====================================================================
*/
let val = prompt("Enter a Number ");

for(let i = 1; i<= val; i++){
    if(val%2===0){
        console.log(`${val} is a even number`);
    }else{
        console.log(`${val} is a odd number`)
    }
}









/*
====================================================================
Q9. Count how many number between 1 to 100 are divisible by 
both 3 and 5. 
====================================================================
*/
for(let i = 1; i <= 100; i++){
    if(i%3===0 && i%5===0){
        console.log(i);   
    }
}








/*
===================================================================
Q10. Print all numbers from 1 to 30 that are divisible by 3. 
===================================================================
*/
for(let i = 1; i <= 30; i++){
    if(i%3===0){
        console.log(i);
    }
}

