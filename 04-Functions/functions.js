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








/*
==========================================================
Q10.  
Ek function banao jo factorial nikale.  
Example:  
factorial(5); 

Output:  
120 
==========================================================
*/
function factorial(factorialNumber){
    let factorialResult = 1;
    for(let i = 1; i <= factorialNumber;i++){
        factorialResult = factorialResult * i;
    }
    console.log(factorialResult);
    
}
factorial(5);








/*
=================================================================
Q11.  
Ek function banao jo check kare leap year hai ya nahi.  
Example:  
checkLeapYear(2000); 

Output:  
Leap Year 
=================================================================
*/
function checkLeapYear(leapYear){
    if(leapYear % 400 === 0){
        console.log("Leap year");
    }else if(leapYear % 100 === 0){
        console.log("Not Leap Year");
    }else if(leapYear % 4 === 0){
        console.log("Leap year");
    }else{
        console.log("Not Leap Year");

    }
}
checkLeapYear(2000)








/*
=================================================================
Q12.  
Ek function banao jo FizzBuzz print kare 1 se n tak.  
Example: fizzBuzz(20); 
=================================================================
*/
function fizzBuzz(fizzBuzzLimit){
    for(let i = 1;i <= fizzBuzzLimit;i++){
        if(i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
            
        }

    }
}
fizzBuzz(20)








/*
====================================================================
Q13.  
Ek function banao jo kisi number ke saare factors print kare.  
Example: factors(12); 
Output:  
1 2 3 4 6 12 
====================================================================
*/
function factors(factorNumber){
    for(let i = 1; i <= factorNumber;i++){
        if(factorNumber % i === 0){
            console.log(i);   
        }
    }
}
factors(12);








/*
==========================================================
Q14.  
Ek function banao jo number reverse kare.  
Example:  
reverseNumber(1234); Output:  
4321  
==========================================================
*/
function reverseNumber(reverseValue){
    let reverseResult = 0;
    while(reverseValue > 0){
        let lastDigit = reverseValue % 10;
        reverseResult = reverseResult * 10 + lastDigit;
        reverseValue = Math.floor(reverseValue / 10);
    }
    console.log(reverseResult);
}
reverseNumber(1234);








/*
===========================================================================
Q15.  
Ek function banao jo check kare number palindrome hai ya nahi.  
Example:  
isPalindrome(121); Output:  
Palindrome 
===========================================================================
*/
function isPalindrome(palindromeNumber){
    let palindromeReverse = 0;
    let originalPalindrome = palindromeNumber;
    while(palindromeNumber > 0){
        let palindromeDigit = palindromeNumber % 10;
        palindromeReverse = palindromeReverse * 10 + palindromeDigit;
        palindromeNumber = Math.floor(palindromeNumber / 10);
    }
    if(palindromeReverse === originalPalindrome){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }
  
    
}
isPalindrome(121);








/*
======================================================================
Q16.  
Function banao jo kisi number ke digits ka sum nikale.  
Example:  
digitSum(1234) Output:  
10 
======================================================================
*/
function digitSum(digitNumber){
    let sumDigits = 0;
    while(digitNumber > 0){
        let digit = digitNumber % 10;
        sumDigits = sumDigits + digit;
        digitNumber = Math.floor(digitNumber / 10);
    }
    console.log(sumDigits);
    
}
digitSum(1234);








/*
======================================================================
Q17.  
Function banao jo kisi number me total digits count kare.  
Example:  
countDigits(98765) 
Output:  
5 
======================================================================
*/
function countDigits(digitCountNumber){
    let totalDigits = 0;
    while(digitCountNumber > 0){
        totalDigits = totalDigits + 1;
        digitCountNumber = Math.floor(digitCountNumber / 10);
    }
    console.log(totalDigits);
    
}
countDigits(123456);








/*
====================================================================
Q18.  
Function banao jo 2 numbers ke beech ka sum return kare.  
Example:  
sumRange(5, 10) 
Output:  
45  
====================================================================
*/
function sumRange(rangeStart,rangeEnd){
    let rangeSum = 0;
    for(let i = rangeStart;i <= rangeEnd; i++){
        rangeSum = rangeSum + i;
    }
    return rangeSum;
}
sumRange(5,10);








/*
===========================================================================
Q19.  
Function banao jo kisi number ke saare multiples print kare jo 100 
se chhote hon.  
Example: multiples(7)  
===========================================================================
*/
function multiples(multipleNumber){
    for(let i = 1;multipleNumber * i < 100;i++){
        console.log(`${multipleNumber * i}`);   
    }
}
multiples(6);








/*
============================================================
Q20.  
Function banao jo check kare:  
• even hai   
• aur 5 se divisible hai  To print:  
Special Number Otherwise:  
Normal Number 
============================================================
*/
function checkSpecialNumber(specialNumber){
    if(specialNumber % 2 === 0 && specialNumber % 5 === 0){
        console.log("Special Number");
    }else{
        console.log("Normal Number");
    }
}
checkSpecialNumber(10);