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








/*
==========================================================================
Q21.  
Function banao jo kisi number ke saare odd factors print kare.  
Example:  
oddFactors(45) 
==========================================================================
*/
function oddFactors(oddFactorNumber){
    for(let i = 1;i <= oddFactorNumber;i++){
        if(oddFactorNumber % i === 0 && i % 2 === 1){
            console.log(i);
            
        }
    }
}
oddFactors(45);









/*
==============================================================================
Q22.  
Function banao jo 1 se n tak sabhi odd numbers ka sum return kare.  
==============================================================================
*/
function sumOddNumbers(oddNumberLimit){
    let oddNumber = 0;
    for(let i = 1; i <= oddNumberLimit;i++){
        if(i % 2 === 1){
            oddNumber = oddNumber + i;
        }
    }
    console.log(oddNumber);   
}
sumOddNumbers(10);








/*
==========================================================================
Q23.  
Function banao jo count kare ki 1 se n tak kitne numbers:  
• 3 se divisible hain   
• aur 2 se divisible nahi hain  
==========================================================================
*/
function countNumbers(numberLimit){
    let divisibleCount = 0;
    for(let i = 1;i <= numberLimit;i++){
        if(i % 3 === 0 && !(i % 2 === 0)){
            divisibleCount = divisibleCount + 1;            
        }
    }
    console.log(divisibleCount);
}
countNumbers(20);








/*
=================================================================================
Q24. Power Calculate
Question
Function banao jo kisi number ki power calculate karke print kare.
=================================================================================
*/
function powerNumber(powerBase,powerExponent){
    let totalPower = 1;
    for(let i = 1;i <= powerExponent;i++){
        totalPower = totalPower * powerBase;
    }
    console.log(totalPower);
    
}
powerNumber(2,5);








/*
=========================================================================================================
Q25. Even Number Counter Function
Question:
Function banao jo 1 se n tak ke numbers me se kitne Even Numbers hain, unka count print kare.
=========================================================================================================
*/
function evenCounter(evenNumberList){
    let evenNumber = 0;
    for(let i = 1;i <= evenNumberList;i++){
        if(i % 2 === 0){
            evenNumber = evenNumber + 1;
        }
    }
    console.log(evenNumber);
    
}
evenCounter(10);








/*
=================================================================================
Q26.  
Function banao jo kisi number ka largest factor (khud number ko 
chhodkar) return kare.  
Example:  
largestFactor(20) Output:  
10 
=================================================================================
*/
function largestFactor(numberToFactor){
    let candidateFactor = 0;
    for(let i = 1;i <= numberToFactor;i++){
        if(numberToFactor % i === 0){
            candidateFactor = i; 
        }
    }
    console.log(candidateFactor);
    
}
largestFactor(20);








/*
======================================================================
Q27.  
Function banao jo 1 se n tak sabse bada odd number return kare.  
======================================================================
*/
function largestOddNumber(numberToCheck){
    let currentOddNumber = 0;
    for(let i = 1;i <= numberToCheck;i++){
        if(i % 2 === 1){
            currentOddNumber = i;
        }
    }
    console.log(currentOddNumber);
    
}
largestOddNumber(20);








/*
====================================================================
Q28.  
Function banao jo kisi number ke digits ka product nikale.  
Example:  
234  
Output:  
24 
====================================================================
*/
function digitProduct(numberToMultiply){
    let productResult = 1;
    while(numberToMultiply > 0){
        let currentDigit = numberToMultiply % 10;
        productResult = productResult * currentDigit;
        numberToMultiply = Math.floor(numberToMultiply / 10);
    }
    return productResult;
}
console.log(digitProduct(234));








/*
========================================================================
Q29.  
Function banao jo check kare number Armstrong hai ya nahi.  
Example:  
153  
========================================================================
*/
function isArmstrongNumber(numberValue){
    let originalNumber = numberValue;
    let armstrongSum = 0;
    let digitLength = String(numberValue).length;
    while(numberValue > 0){
        let digitValue = numberValue % 10;
        armstrongSum = armstrongSum + digitValue ** digitLength;
        numberValue = Math.floor(numberValue / 10);
    }
    if(armstrongSum === originalNumber){
        return true;
    }else{
        return false;
    }
}
console.log(isArmstrongNumber(153));








/*
=================================================================================
Q30.
Function banao jo kisi number ka multiplication table print kare aur 
har result ke saath Even/Odd bhi print kare.
=================================================================================
*/
function printTable(multiplicationNumber){
    for(let i = 1;i <= 10;i++){
        if(i % 2 === 0){
            console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i} --> Even`);
        }else{
            console.log(`${multiplicationNumber} * ${i} = ${multiplicationNumber * i} --> Odd`);
        }     
    }
}
printTable(3);








/*
====================================================================
Q31.  
Function banao jo count kare ki 1 se n tak kitne prime numbers 
hain.  
====================================================================
*/
function printPrimeNumbers(n) {
    for (let currentNumber = 2; currentNumber <= n; currentNumber++) {
        let isPrime = true;

        for (let divisor = 2; divisor < currentNumber; divisor++) {
            if (currentNumber % divisor === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(currentNumber);
        }
    }
}
printPrimeNumbers(20);








/*
==================================================================================
Q32 Function banao jo do numbers ke beech un numbers ka sum return kare
jo 4 se divisible hon, lekin 6 se divisible na hon.
==================================================================================
*/
function specialSum(rangeFrom,rangeTo){
    let eligibleTotal = 0;
    for(let currentValue = rangeFrom;currentValue <= rangeTo;currentValue++){
        if(currentValue % 4 === 0 && currentValue % 6 !== 0){
            eligibleTotal = eligibleTotal + currentValue;
        }
        
    }
    return eligibleTotal;
}
console.log(specialSum(10,30));








/*
=============================================================================
Q33.  
Function banao jo 3 numbers me se second largest number return 
kare.  
Example: 10, 
50, 30 
Output: 30 
=============================================================================
*/
function locateRunnerUp(candidateOne, candidateTwo, candidateThree) {
    let middleValue;
    if ((candidateOne > candidateTwo && candidateOne < candidateThree) || (candidateOne < candidateTwo && candidateOne > candidateThree)) {
        middleValue = candidateOne;
    } else if ((candidateTwo > candidateOne && candidateTwo < candidateThree) || (candidateTwo < candidateOne && candidateTwo > candidateThree)) {
        middleValue = candidateTwo;
    } else {
        middleValue = candidateThree;
    }
    return middleValue;

}
console.log(locateRunnerUp(10, 50, 30));









/*
===================================================
Q34.  
Function banao jo 1 se n tak:  
• 3 → Fizz   
• 5 → Buzz   
• 7 → Pop   
Multiple conditions bhi handle kare. 
===================================================
*/
function showFizzBuzzPop(upperLimit){
    for(let sequenceNumber = 1;sequenceNumber <= upperLimit;sequenceNumber++){
        if((sequenceNumber % 3 === 0 && sequenceNumber % 5 === 0 )&&(sequenceNumber % 7 === 0)){
            console.log("FizzBuzzPop");
        }else if(sequenceNumber % 3 === 0 && sequenceNumber % 5 === 0){
            console.log("FizzBuzz");  
        }else if(sequenceNumber % 3 === 0 && sequenceNumber % 7 === 0){
            console.log("FizzPop");
        }else if(sequenceNumber % 5 === 0 && sequenceNumber % 7 === 0){
            console.log("BuzzPop");
        }else if(sequenceNumber % 3 === 0){
            console.log("Fizz");
        }else  if(sequenceNumber % 5 === 0){
            console.log("Buzz");
        }else if(sequenceNumber % 7 === 0){
            console.log("Pop");
        }else{
            console.log(sequenceNumber);
            
        }
        
    }
}
showFizzBuzzPop(20);