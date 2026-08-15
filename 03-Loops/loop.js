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








/*
===================================================================
Q23. (Mix of Loop + Condition) 
Print numbers from 1 to 30. 
• If divisible by 2 → print "Even"  
• If divisible by 3 → print "Divisible by 3"  
• Otherwise print the number.  
===================================================================
*/
for(let i = 1; i <= 30; i++){
    if(i%2===0){
        console.log("Even");
    }if(i%3===0){
        console.log("Divisible by 3");
    }if(i%2 !== 0 && i%3 !== 0){
        console.log(i);   
    }
}








/*
==========================================================================
Q24. (Mini Challenge  ) 
Print the multiplication tables from 1 to 5. 
Example: 
Table of 1 
1 x 1 = 1 
... 
Table of 2 
2 x 1 = 2 
... 
Isme nested loop lagega. Agar nested loop abhi nahi padha hai 
to baad me karna. 
Medium Level 
==========================================================================
*/
for (let i = 1; i <= 5; i++) {
    console.log(`Table of ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("---------------");
}








/*
===================================================================
Q25. Reverse Counting with Rules 
100 se 1 tak print karo. 
Lekin: 
• Agar number 10 se divisible hai → "Boom" print karo  
• Warna number print karo  
===================================================================
*/
for(let i = 100; i >= 1; i--){
    if(i%10===0){
        console.log("Boom");
    }else{
        console.log(i);
    }
}








/*
======================================================
Q26. Count Special Numbers 
1 se 100 tak count karo. 
Kitne numbers: 
• 3 se divisible hain  
• aur 2 se divisible nahi hain  
Sirf final count print karo.
======================================================
*/
let count = 0;
for(let i = 1; i <= 100; i++){
    if(i%3===0 && i%2 !==0){
    count++;
    }
}
console.log(count);








/*
===================================================================
Q27. Largest Even Number 
1 se 100 tak loop chalao. 
Sabse bada even number find karo aur print karo. 
===================================================================
*/
let even = 0;
for(let i = 1; i <= 100; i++){
    if(i%2===0 && i > even){
        even = i; 
    }
}console.log(even);








/*
=============================================================
Q28. Sum Until Limit 
1 se numbers add karte jao. 
Jab sum 200 se zyada ho jaye: 
• loop stop  
• jis number par stop hua wo print karo  
Example: 
1 + 2 + 3 + ... 
=============================================================
*/
let i = 1;
let sum = 0;
while(true){
    sum = sum + i;
    if(sum>200){
        console.log("Stoped",i);
        break;
    }
    i++;  

}








/*
=======================================================
Q29. Multiplication Table Checker 
Table of 7 print karo. 
Saath me check karo: 
• Result even hai ya odd  
Example: 
7 x 2 = 14 Even 
7 x 3 = 21 Odd 
Medium-Hard Level 
=======================================================
*/
console.log("Table of 7");
console.log("----------");
for(let i = 1; i <= 10; i++){
    if(i%2===0){
        console.log(`7 * ${i} = ${7 * i} Even`);
    }else{
        console.log(`7 * ${i} = ${7 * i} Odd`);
    }
}








/*
============================================================
Q30. ATM Simulation    
Balance = 5000 
Har iteration: 
withdraw = 750; 
Balance se subtract karo. 
Jab next withdrawal possible na ho: 
Transaction Failed 
Aur remaining balance print karo. 
============================================================
*/
let balance = 5000;
let withdraw = 750;
while(balance >= withdraw){
    balance = balance - withdraw;
    console.log(balance); 
}
console.log("Transation Failed");
console.log("Remaining Balance",balance);








/*
==================================================================
Q31. Health Regeneration             
health = 25; 
Rules: 
• Har turn +15 health  
• Agar health 80 cross kar jaye toh +5 hi add karo  
• 100 par stop  
Final health print karo. 
==================================================================
*/
let health = 25;
while(health < 100){

    if(health > 80){
        health = health + 5;
    }else{
        health = health + 15;
    }    
    console.log(health);

}
console.log("Final Health :",health);








/*
====================================================================
Q32. Number Pattern Logic 
1 se 50 tak: 
• 3 se divisible → Fizz  
• 5 se divisible → Buzz  
• 7 se divisible → Pop  
• Multiple conditions ek saath bhi handle karo  
Example: 
15 => FizzBuzz 
21 => FizzPop 
35 => BuzzPop 
====================================================================
*/
for(let i = 1; i <= 50; i++){
    result = "";
    if(i%3===0){
        result = result + "Fizz";
    }if(i%5===0){
        result = result + "Buzz";
    }if(i%7===0){
        result = result + "Pop";
    }
    if(result === ""){
        console.log(i);
    }else{
        console.log(result);
    }
}








/*
====================================================================
Q33. Secret Number Hunt 
Secret number = 37 
1 se 100 tak loop chalao. 
Jab secret number mile: 
• print "Found"  
• loop stop  
Saath me batao kitni iterations lagi. 
====================================================================
*/
let secretNumber = 37;
let iterationNumber = 0;

for(let i = 1; i <= 100; i++){
    iterationNumber = iterationNumber + 1;
    if(i === secretNumber){
        console.log("Found",i);
        console.log("IterationNumber",iterationNumber);
        break;

    }

}








/*
=======================================================
Q34. Highest Multiplication Result 
1 se 20 tak loop. 
Har number ko 7 se multiply karo. 
Sabse bada result store karke end me print karo.
=======================================================
*/
let largestNumber = 0;
for(let i = 1; i <= 20;i++){
    let result = i * 7;
    if(result > largestNumber){
        largestNumber = result;
    }
    
}
console.log("Highest Value",largestNumber);








/*
=====================================================
Q35. Prime Number Finder 
1 se 100 tak saare prime numbers print karo.
=====================================================
*/
for(let i = 2; i <= 100;i++){
    let isPrime = true;
    for(let j = 2; j < i; j++){
        if(i%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    }
}








/*
============================================
Q36. Armstrong Number Check 
Ek number diya hai: 
153 
Check karo Armstrong hai ya nahi.
============================================
*/
let number = 153;
let originalNumber = number;
let sum = 0;

while (number > 0) {
    let digit = number % 10;
    sum = sum + digit ** 3;
    number = Math.floor(number / 10);
}

if (sum === originalNumber) {
    console.log("Armstrong Number");
} else {
    console.log("Not Armstrong Number");
}








/*
==============================================
Q37. Guessing Game Simulation 
Secret number = 68 
Loop 1 se 100 tak. 
Har number ke liye: 
• agar chhota hai → "Too Low"  
• agar bada hai → "Too High"  
• agar equal hai → "Correct" aur stop 
==============================================
*/
let secretNumber = 68;
for(let i = 1; i <= 100; i++){
    if(secretNumber > i){
        console.log("Too low");
    }else if(secretNumber < i){
        console.log("Too High");
    }else{
        console.log("Correct");
        break;
    }
}