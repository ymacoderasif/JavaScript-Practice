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








/*
========================================================================
Q11.Print all numbers from 1 to 50 that are divisible by 5 but 
not by 10. 
========================================================================
*/
for(let i = 1; i<= 50; i++){
    if(i%5===0 && !(i%10===0)){
        console.log(i);

    }
}








/*
======================================================
Q12.Print the multiplication table of 7. 
Example: 
7 x 1 = 7 
7 x 2 = 14
======================================================
*/
for(let i = 1; i <= 10; i++){
    console.log(`7 * ${i} = ${7 * i}`);
}








/*
===============================================================
Q13.Find the sum of numbers from 1 to 50. 
===============================================================
*/
let sum = 0;
for(let i = 1; i <= 50; i++){
    sum = i + sum;
}
console.log(sum);








/*
=============================================================
Q14.Find the sum of all even numbers from 1 to 20. 
=============================================================
*/
let sum = 0;
for(let i = 1; i <= 20; i++){
    if(i%2===0){
        sum = i + sum;
    }
}
console.log(sum);








/*
======================================================================
Q15.Count how many even numbers are present from 1 to 100. 
======================================================================
*/
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%2===0){
         count++;
    }
}
console.log(count);








/*
=====================================================================
Q16.Print all odd numbers from 1 to 25 using a do while loop. 
=====================================================================
*/
let i = 1;
do{
    if(i % 2 === 1){
        console.log(`1 to 25 odd number is ${i}`);   
    }
    i++;
}while(i <= 25);








/*
==========================================================
Q17.Print numbers from 1 to 20. 
If the number is even print: 
“Even” 
Otherwise print: 
“Odd” 
==========================================================
*/
for( let i = 1; i <= 20; i++){
    if(i%2===0){
        console.log(`even number : ${i}`);
    }else{
        console.log(`odd number : ${i}`);
    }
}








/*
========================================================
Q18.Find the largest number from: 
let a = 10; 
let b = 25; 
let c = 18; 
using if else. 
========================================================
*/
let a = 50;
let b = 25;
let c = 35;
if(a > b && a > c){
    console.log("largest number is A :-",a);
}else if(b > a && b > c){
    console.log("largest number is B :-",b);
}else{
    console.log("largest number is C :-",c);
}








/*
===================================================================
Q19.Check whether a number is positive, negative, or zero. 
Example: 
let n.um = -5; 
===================================================================
*/
let num = prompt("Enter a number :-");
if(num > 0){
    console.log("Positive");
}else if(num < 0){
    console.log("Negative");
}else{
    console.log("Zero");
}








/*
===========================================================================
Q20.Print all numbers from 1 to 50 that are divisible by 3 and 5.
===========================================================================
*/
for(let i = 1; i <= 50; i++){
    if(i%3===0 && i%5===0){
        console.log(i);
    }
}








/*
=============================================================
Q21.Calculate the factorial of 5. 
Expected: 
5 × 4 × 3 × 2 × 1 = 120
=============================================================
*/
let num = prompt("Enter a Number :-");

let result = 1;
for(let i = num; i >= 1; i--){
    result = result * i
}
console.log(`${num}! = ${result}`);








/*
=====================================================================
Q22. (Good Practice) 
Count how many numbers between 1 and 100 are divisible by 
7. 
=====================================================================
*/
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%7===0){
        count++;
    }
}
console.log(count);


