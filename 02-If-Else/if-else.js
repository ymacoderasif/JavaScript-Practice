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








/*
======================================================================
Q5. Electricity Bill System 
Question 
Ek Electricity Bill System banao. 
• Customer ka naam store karo.  
• Total Units store karo.  
• Per Unit Price store karo.  
• Bill Amount calculate karo.  
• Agar customer kisi special category me aata hai to bill me 
chhoot do.  
• Final Bill Amount dikhana hai. 
======================================================================
*/
let consumerName = "Mohd Asif";
let unitsConsumed = 520;
let unitRate = 8;
let totalBill = unitsConsumed * unitRate;
let discountAmount = 0;
let payableBill = 0;
let discountRate = 0;
if(unitsConsumed >= 300){
    discountRate = 10;
}
discountAmount = (totalBill * discountRate) / 100;
payableBill = totalBill - discountAmount;
console.log(`Consumer Name: ${consumerName}`);
console.log(`Unit Consumed: ${unitsConsumed}`);
console.log(`Unit Rate: ${unitRate}`);
console.log(`Total Bill: ${totalBill}`);
console.log(`Discount Rate: ${discountRate}%`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Payable Bill: ${payableBill}`);








/*
=========================================================================
 Q6. Bank Account Verification 
Question 
Ek Bank Verification System banao. 
• Customer ka naam store karo.  
• Account Status store karo.  
• Minimum Balance store karo.  
• Current Balance store karo.  
• Agar account active hai aur balance rule follow ho raha hai to 
account valid maana jayega.  
• Warna proper message dikhana hai.  
=========================================================================
*/
let holderName = "Mohd Asif";
let accountStatus = false;
let minimumBalance = 1000;
let currentBalance = 500;
if(accountStatus === true  && currentBalance >= minimumBalance){
    console.log(`Dear ${holderName}, Account valid.`);
}else if(accountStatus === false){
    console.log(`Dear ${holderName}, Account Invalid.`);
    console.log(`Reason: Account is Inactive.`);
}else{
    console.log(`Dear ${holderName}, Account Invalid.`);
    console.log(`Reason: Insufficient Balance`);
}








/*
============================================================================
 Q7. Driving Licence Eligibility 
Question 
Ek Driving Licence System banao. 
• Applicant ka naam store karo.  
• Age store karo.  
• Identity Verification Status store karo.  
• Agar applicant licence ke liye eligible hai to approval dikhana 
hai.  
• Warna rejection dikhana hai.  
============================================================================
*/
let applicantName = "Mohd Asif";
let applicantAge = 20;
let identityVerified = true;
let licenceStatus = "";
if(applicantAge >= 18 && identityVerified){
    licenceStatus = "Approved";
}else{
    licenceStatus = "Rejected";
}
console.log(`Applicant Name: ${applicantName}`);
console.log(`Licence Status: ${licenceStatus}`);








/*
=============================================================================
Q8. Food Delivery Offer 
Question 
Ek Food Delivery App banao. 
• Customer ka naam store karo.  
• Order Amount store karo.  
• Delivery Charge store karo.  
• Agar customer offer ke liye eligible hai to delivery charge 
update karo.  
• Final bill dikhana hai. 
=============================================================================
*/
let customerFullName = "Mohd Asif";
let orderAmount = 550;
let deliveryCharge = 0;
let finalBill = 0;
if(orderAmount >= 500){
    deliveryCharge = 0;
}else{
    deliveryCharge = 50;
}
finalBill = orderAmount + deliveryCharge;
console.log(`Customer Name: ${customerFullName}`);
console.log(`Order Amount: ${orderAmount}`);
console.log(`Delivery Charges: ${deliveryCharge}`);
console.log(`Final Amount: ${finalBill}`);








/*
==========================================================================
Q9. Mobile Recharge System 
Question 
Ek Mobile Recharge System banao. 
• Customer ka naam store karo.  
• Recharge Amount store karo.  
• Bonus Benefit store karo.  
• Agar recharge kisi offer ke liye eligible hai to bonus add karo.  
• Final recharge details dikhana hai.  
===========================================================================
*/
let mobileUser = "Mohd Asif";
let rechargeAmount = 650;
let bonusBenefit = 0;
let finalRecharge = 0;
if(rechargeAmount >= 500){
    bonusBenefit = 100;
}
finalRecharge = rechargeAmount + bonusBenefit;
console.log(`Customer Name: ${mobileUser}`);
console.log(`Recharge Amount: ${rechargeAmount}`);
console.log(`Bonus Benefit: ${bonusBenefit}`);
console.log(`Final Recharge: ${finalRecharge}`);    








/*
=======================================================================
Q10. Hospital Registration 
          Question 
Ek Hospital Registration System banao. 
• Patient ka naam store karo.  
• Age store karo.  
• Registration Fee store karo.  
• Agar patient kisi special category me aata hai to fee me 
chhoot do.  
• Final registration details dikhana hai. 
=======================================================================
*/
let patientName = "Mohd Asif";
let patientAge = 62;
let registrationFee = 5000;
let discountAmount = 0;
let finalFee = 0;
if(patientAge >= 60){
    discountAmount = 50;
}
discountAmount = (registrationFee * discountAmount) / 100;
finalFee = registrationFee - discountAmount;
console.log(`Patient Name: ${patientName}`);
console.log(`Patient Age: ${patientAge}`);
console.log(`Registration Fee: ${registrationFee}`);
console.log(`Discount Amount: ${discountAmount}`);
console.log(`Final Amount: ${finalFee}`);








/*
==========================================================================
Q11. Flight Ticket Booking 
Question 
Ek Flight Ticket Booking System banao. 
• Passenger ka naam store karo.  
• Passenger ki age store karo.  
• Ticket ka base price store karo.  
• Agar passenger kisi special category me aata hai to ticket 
price me chhoot do.  
• Final ticket amount aur booking details dikhani hain. 
===========================================================================
*/
let passengerName = "Mohd Asif";
let passengerAge = 65;
let ticketPrice = 1500;
let ticketDiscount = 0;
let finalTicketAmount = 0;
if(passengerAge >= 60){
    ticketDiscount = 30;
}
ticketDiscount = (ticketPrice * ticketDiscount) / 100;
finalTicketAmount = ticketPrice - ticketDiscount;
console.log(`Passenger Name: ${passengerName}`);
console.log(`Passenger Age: ${passengerAge}`);
console.log(`Ticket Price: ${ticketPrice}`);
console.log(`Discount Amount: ${ticketDiscount}`);
console.log(`Payable Amount: ${finalTicketAmount}`);
