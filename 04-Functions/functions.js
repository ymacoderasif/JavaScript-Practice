/*                                                                              ============== All The Best ===================                                                  */








/*
========================================================
Q1.  
Ek function banao jo console me print kare:  
Hello JavaScript  
Function ko call bhi karo. 
========================================================
*/
function print(){
    console.log("Hello JavaScript ");   
}
print();








/*
====================================================
Q2.  
Ek function banao jo kisi naam ko print kare.  
Example:  
greet("Asif");

Output:  
Hello Asif  
====================================================
*/
let personName = prompt("Enter your Name");
function namePrint(){
    console.log("Hello",personName);
}
namePrint();









/*
===================================================================
Q3.  
Ek function banao jo 2 numbers ka sum print kare.  
Example: add(10, 
20); Output:  
30 
===================================================================
*/
function sumNumber(firstNumber,secondNumber){
    console.log("Two Number Of Sum :-",firstNumber + secondNumber);
}
sumNumber(10,20);








/*
===================================================================
Q4.  
Ek function banao jo check kare number even hai ya odd.  
Example:  
checkEvenOdd(7);  
Output:  
Odd 
===================================================================
*/
function checkEvenOdd(checkNumber){
    if(checkNumber % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
        
    }
}
checkEvenOdd(9);








/*
=================================================================
Q5.  
Ek function banao jo kisi number ka square print kare.  
Example: square(5); 
Output: 25
=================================================================
*/
function square(squareNumber){
    console.log(squareNumber * squareNumber);
}
square(5);








/*
==========================================================================
Q6.  
Ek function banao jo 3 numbers me se largest number print kare.  
Example:  
largest(10, 25, 18); 
Output:  
25 
==========================================================================
*/
function largest(largestFirst,largestSecond,largestThird){
    if(largestFirst > largestSecond && largestFirst > largestThird){
        console.log(largestFirst);
    }else if(largestSecond > largestFirst && largestSecond > largestThird){
        console.log(largestSecond);
    }else{
        console.log(largestThird);
        
    }
}
largest(10,25,20);








/*
======================================================================================
Q7.  
Ek function banao jo kisi number ka multiplication table print kare.  
Example: table(7); 
Output:  
7 x 1 = 7  
...  
7 x 10 = 70 
======================================================================================
*/
function table(tableNumber){
    for(let i = 1;i <= 10;i++){
        console.log(`${tableNumber} * ${i} = ${tableNumber * i}`);
    }
}
table(10)








/*
================================================================
Q8.  
Ek function banao jo 1 se n tak ka sum nikale.  
Example: sumTillN(5); 
Output:  
15  
Kyuki:  
1 + 2 + 3 + 4 + 5 = 15 
================================================================
*/
function sumTillN(sumLimit){
    let total = 0;
    for(let i = 1;i <= sumLimit;i++){
        total = total + i;
    }
    console.log(total);
}
sumTillN(5)








/*
============================================================================
Q9.  
Ek function banao jo count kare ki 1 se n tak kitne even numbers 
hain.  
Example:  
countEven(10); 

Output:  
5 
============================================================================
*/
function countEven(evenLimit){
    let evenCount = 0;
    for(let i = 1;i <= evenLimit;i++){
        if(i % 2 === 0){
            evenCount = evenCount + 1;
        }
    }
    console.log(evenCount);
    
}
countEven(50);