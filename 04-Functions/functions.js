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