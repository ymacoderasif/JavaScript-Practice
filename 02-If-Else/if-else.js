/*                                                                              ============== All The Best ===================                                                  /*



/*
=========================================================================
Q1. Movie Ticket Booking System 
Question 
Ek Movie Ticket Booking System banao. 
• User ka naam store karo.  
• User ki age store karo.  
• Ticket ka price store karo.  
• Agar user ticket book karne ke liye eligible hai to booking 
successful honi chahiye.  
• Warna booking reject ho jani chahiye.  
• Agar booking successful ho to user ka naam aur ticket price 
bhi dikhana hai. 
=========================================================================
*/

let userName = prompt("Enter a Name:");
let userAge = Number(prompt("Enter Your Age:"));
let userBudget = Number(prompt("Enter a ticket Budget :"));
let ticketPrice = 350;
if(userAge >= 18 && userBudget >= ticketPrice){
    console.log(`Dear ${userName}, Your Booking is Successful.`);
    console.log(`Ticket Price: ${ticketPrice}`);
}else{
    console.log(`Dear ${userName} Your Booking is rejected.`);
}







/*
=========================================================================
Q2. ATM Cash Withdrawal 
Question 
Ek ATM System banao. 
• Account Holder ka naam store karo.  
• Account Balance store karo.  
• Withdraw Amount store karo.  
• Agar withdrawal possible hai to transaction complete karo.  
• Transaction ke baad updated balance bhi dikhana hai.  
• Agar withdrawal possible nahi hai to proper message dikhana 
hai.  
=========================================================================
*/

let accountHolder = "Mohd Asif";
let accountBalance = 50000;
let withdrawAmount = Number(prompt("Enter a Withdrawal Amount:"));
let updatedBalance = accountBalance - withdrawAmount;
if(accountBalance >= withdrawAmount){
    console.log(`Dear ${accountHolder}, Your Transaction is Successful`);
    console.log(`Updated Balance: ₹${updatedBalance}`);
}else{
    console.log("❌ Transaction Failed");
    console.log("Reason: Insufficient Balance");
}








/*
=============================================================
Q3. Student Result System 
Question 
Ek Student Result System banao. 
• Student ka naam store karo.  
• Total Marks store karo.  
• Passing Marks store karo.  
• Agar student pass hota hai to result dikhana hai.  
• Warna fail dikhana hai.  
• Student ka naam aur result bhi dikhana hai.  
=============================================================
*/

let studentName = "Rahul";
let studentTotalMarks = 65;
let passingMarks = 33;
if(studentTotalMarks >= passingMarks){
    console.log(`Congratulations ${studentName}! You Have Passed. Marks: ${studentTotalMarks}`);
}else{
    console.log(`Dear ${studentName}, You Have Failed. Marks: ${studentTotalMarks}`);   
}







/*
===================================================================
Q4. Shopping Discount System 
Question 
Ek Shopping Billing System banao. 
• Customer ka naam store karo.  
• Shopping Amount store karo.  
• Discount Amount store karo.  
• Agar customer discount ke liye eligible hai to discount 
calculate karo.  
• Final payable amount nikalo.  
• Customer ka naam, discount aur final amount dikhana hai. 
===================================================================
*/
let customerName = "Mohd Asif";
let shoppingAmount = 7500;
let discount = 0;
let discountAmount = 0;
let finalAmount = 0;
if(shoppingAmount >= 5000){
    discount = 20;
}else if(shoppingAmount >= 3000){
    discount = 10;
}else if(shoppingAmount >= 1000){
    discount = 5;
}else{
    discount = 0;
}
discountAmount = (shoppingAmount * discount) / 100;
finalAmount = shoppingAmount - discountAmount;
console.log(`Customer Name: ${customerName}`);
console.log(`Shopping Name: ${shoppingAmount}`);
console.log(`Discount: ${discount}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Final Amount: ${finalAmount}`);
