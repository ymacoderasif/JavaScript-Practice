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
if (userAge >= 18 && userBudget >= ticketPrice) {
    console.log(`Dear ${userName}, Your Booking is Successful.`);
    console.log(`Ticket Price: ${ticketPrice}`);
} else {
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
if (accountBalance >= withdrawAmount) {
    console.log(`Dear ${accountHolder}, Your Transaction is Successful`);
    console.log(`Updated Balance: ₹${updatedBalance}`);
} else {
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
if (studentTotalMarks >= passingMarks) {
    console.log(`Congratulations ${studentName}! You Have Passed. Marks: ${studentTotalMarks}`);
} else {
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
if (shoppingAmount >= 5000) {
    discount = 20;
} else if (shoppingAmount >= 3000) {
    discount = 10;
} else if (shoppingAmount >= 1000) {
    discount = 5;
} else {
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
if (unitsConsumed >= 300) {
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
if (accountStatus === true && currentBalance >= minimumBalance) {
    console.log(`Dear ${holderName}, Account valid.`);
} else if (accountStatus === false) {
    console.log(`Dear ${holderName}, Account Invalid.`);
    console.log(`Reason: Account is Inactive.`);
} else {
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
if (applicantAge >= 18 && identityVerified) {
    licenceStatus = "Approved";
} else {
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
if (orderAmount >= 500) {
    deliveryCharge = 0;
} else {
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
if (rechargeAmount >= 500) {
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
if (patientAge >= 60) {
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
if (passengerAge >= 60) {
    ticketDiscount = 30;
}
ticketDiscount = (ticketPrice * ticketDiscount) / 100;
finalTicketAmount = ticketPrice - ticketDiscount;
console.log(`Passenger Name: ${passengerName}`);
console.log(`Passenger Age: ${passengerAge}`);
console.log(`Ticket Price: ${ticketPrice}`);
console.log(`Discount Amount: ${ticketDiscount}`);
console.log(`Payable Amount: ${finalTicketAmount}`);








/*
==============================================================================
Q12. Hotel Room Booking 
Question 
Ek Hotel Booking System banao. 
• Customer ka naam store karo.  
• Room ka rent store karo.  
• Total nights store karo.  
• Agar customer kisi offer ke liye qualify karta hai to final bill 
me chhoot do.  
• Final bill aur booking details dikhani hain. 
===============================================================================
*/
let hotelGuest = "Mohd Asif";
let roomRent = 3500;
let stayNights = 6;
let totalBill = 0;
let bookingDiscount = 0;
let hotelBill = 0;
if (stayNights >= 5) {
    bookingDiscount = 20;
}
totalBill = roomRent * stayNights;
bookingDiscount = (totalBill * bookingDiscount) / 100;
hotelBill = totalBill - bookingDiscount;
console.log(`Hotel Guest: ${hotelGuest}`);
console.log(`Room Rent: ${roomRent}`);
console.log(`Stay Nights: ${stayNights}`);
console.log(`Total Bill: ${totalBill}`);
console.log(`Booking Discount: ${bookingDiscount}`);
console.log(`Hotel Bill: ${hotelBill}`);








/*
==========================================================================
Q13. Library Membership 
Question 
Ek Library Membership System banao. 
• Member ka naam store karo.  
• Membership Fee store karo.  
• Student status store karo.  
• Agar member ko fee me chhoot milti hai to final fee update 
karo.  
• Final membership details dikhani hain.
==========================================================================
*/
let memberName = "Mohd Asif";
let membershipFee = 6500;
let isStudent = true;
let studentDiscount = 0;
let finalMembershipFee = 0;
if (isStudent === true) {
    studentDiscount = 50;
}
studentDiscount = (membershipFee * studentDiscount) / 100;
finalMembershipFee = membershipFee - studentDiscount;
console.log(`Member Name: ${memberName}`);
console.log(`Membership Fee: ${membershipFee}`);
console.log(`Student Status: ${isStudent}`);
console.log(`Student Discount: ${studentDiscount}`);
console.log(`Final Membership Fee: ${finalMembershipFee}`);








/*
=============================================================================
Q14. Employee Salary System 
Question 
Ek Employee Salary System banao. 
• Employee ka naam store karo.  
• Basic Salary store karo.  
• Bonus Amount store karo.  
• Agar employee bonus ke liye qualify karta hai to final salary 
update karo.  
• Final salary aur employee details dikhani hain. 
=============================================================================
*/
let employeeName = "Mohd Asif";
let basicSalary = 29000;
let performanceBonus = 0;
let finalSalary = 0;
if (basicSalary >= 30000) {
    performanceBonus = 20;
}
performanceBonus = (basicSalary * performanceBonus) / 100;
finalSalary = basicSalary + performanceBonus;
console.log(`Employee Name: ${employeeName}`);
console.log(`Basic Salary: ${basicSalary}`);
console.log(`Performance Bonus: ${performanceBonus}`);
console.log(`Final Salary: ${finalSalary}`);








/*
=============================================================================
Q15. Cab Fare System 
Question 
Ek Cab Booking System banao. 
• Customer ka naam store karo.  
• Total distance store karo.  
• Per kilometer fare store karo.  
• Agar customer kisi offer ke liye qualify karta hai to final fare 
update karo.  
• Final fare aur booking details dikhani hain.  
==============================================================================
*/
let cabCustomer = "Mohd Asif";
let travelDistance = 25;
let farePerKm = 8;
let tripFare = travelDistance * farePerKm;
let fareDiscount = 0;
let finalCabFare = 0;
if (travelDistance >= 20) {
    fareDiscount = 15;
}
fareDiscount = (tripFare * fareDiscount) / 100;
finalCabFare = tripFare - fareDiscount;
console.log(`Customer Name: ${cabCustomer}`);
console.log(`Distance: ${travelDistance}Km`);
console.log(`Per KM Fare: ${farePerKm}Rs`);
console.log(`Trip Fare: ${tripFare}`);
console.log(`Fare Discount: ${fareDiscount}`);
console.log(`Final Cab Fare: ${finalCabFare}`);







/*
============================================================================
Q16. Online Course Purchase 
Question 
Ek Online Course Purchase System banao. 
• Student ka naam store karo.  
• Course Fee store karo.  
• Scholarship status store karo.  
• Agar student ko scholarship milti hai to final fee update karo.  
• Final payment details dikhani hain.  
============================================================================
*/
let studentFullName = "Mohd Asif";
let courseFee = 3000;
let hasScholarship = true;
let scholarshipDiscount = 0;
let finalPayment = 0;
if (hasScholarship === true) {
    scholarshipDiscount = 40;
}
scholarshipDiscount = (courseFee * scholarshipDiscount) / 100;
finalPayment = courseFee - scholarshipDiscount;
console.log(`Student Name: ${studentFullName}`);
console.log(`Course Fee: ${courseFee}`);
console.log(`Scholarship Status: ${hasScholarship}`);
console.log(`Scholarship Discount: ${scholarshipDiscount}`);
console.log(`Final Payment: ${finalPayment}`);








/*
=============================================================================
Q17. Gym Membership 
Question 
Ek Gym Membership System banao. 
• Member ka naam store karo.  
• Membership Fee store karo.  
• Membership Duration store karo.  
• Agar member kisi special offer ke liye qualify karta hai to 
final fee update karo.  
• Final membership details dikhani hain. 
==============================================================================
*/
let gymMember = "Mohd Asif";
let membershipCost = 8000;
let membershipDuration = 22;
let offerDiscount = 0;
let finalMembershipCost = 0;
if (membershipDuration >= 12) {
    offerDiscount = 25;
}
offerDiscount = (membershipCost * offerDiscount) / 100;
finalMembershipCost = membershipCost - offerDiscount;
console.log(`Gym Member: ${gymMember}`);
console.log(`Membership Fee: ${membershipCost}`);
console.log(`Membership Duration: ${membershipDuration}months`);
console.log(`Offer Discount: ${offerDiscount}`);
console.log(`Final Membership Cost: ${finalMembershipCost}`);








/*
=======================================================================
Q18. Electricity Recharge 
Question 
Ek Electricity Recharge System banao. 
• Customer ka naam store karo.  
• Recharge Amount store karo.  
• Cashback Amount store karo.  
• Agar customer cashback ke liye qualify karta hai to final 
payable amount update karo.  
• Recharge details dikhani hain. 
========================================================================
*/
let electricityUser = "Mohd Asif";
let rechargeValue = 1350;
let cashbackReward = 0;
let finalPayableAmount = 0;
if (rechargeValue >= 1000) {
    cashbackReward = 10;
}
cashbackReward = (rechargeValue * cashbackReward) / 100;
finalPayableAmount = rechargeValue + cashbackReward;
console.log(`Customer Name: ${electricityUser}`);
console.log(`Recharge Amount: ${rechargeValue}`);
console.log(`Cashback Amount: ${cashbackReward}`);
console.log(`Final Payable Amount: ${finalPayableAmount}`);








/*
===============================================================================
Q19. Bike Rental System 
Question 
Ek Bike Rental System banao. 
• Customer ka naam store karo.  
• Total rental hours store karo.  
• Per hour charge store karo.  
• Agar customer kisi offer ke liye qualify karta hai to final bill 
update karo.  
• Final rental details dikhani hain. 
===============================================================================
*/
let riderName = "Mohd Asif";
let rentalHours = 6;
let hourlyCharge = 100;
let totalRent = rentalHours * hourlyCharge;
let rentalDiscount = 0;
let finalRentalBill = 0;
if (rentalHours >= 10) {
    rentalDiscount = 20;
}
rentalDiscount = (totalRent * rentalDiscount) / 100;
finalRentalBill = totalRent - rentalDiscount;
console.log(`Customer Name: ${riderName}`);
console.log(`Rental Hours: ${rentalHours}`);
console.log(`Per Hour Charge: ${hourlyCharge}Rs/Hour`);
console.log(`Total Rent: ${totalRent}`);
console.log(`Rental Discount: ${rentalDiscount}`);
console.log(`Final Rental Bill: ${finalRentalBill}`);








/*
=============================================================================
Q20. Festival Gift Voucher 
Question 
Ek Festival Offer System banao. 
• Customer ka naam store karo.  
• Shopping Amount store karo.  
• Gift Voucher Amount store karo.  
• Agar customer gift voucher ke liye qualify karta hai to final 
payable amount update karo.  
• Customer ki purchase details dikhani hain.
=============================================================================
*/
let festivalCustomer = "Mohd Asif";
let purchaseAmount = 15000;
let giftVoucher = 0;
let finalPurchaseAmount = 0;
if (purchaseAmount >= 5000) {
    giftVoucher = 500;
}
finalPurchaseAmount = purchaseAmount + giftVoucher;
console.log(`Customer Name: ${festivalCustomer}`);
console.log(`Shopping Amount: ${purchaseAmount}`);
console.log(`Gift Voucher: ₹${giftVoucher}`);
console.log(`Final Purchase Amount: ${finalPurchaseAmount}`);








/*
================================================================================
Q21. Shopping Discount System 
Question 
Ek Shopping Billing System banao. 
• Customer ka naam store karo.  
• Shopping Amount store karo.  
• Agar shopping amount ₹5000 ya usse zyada hai to 20% 
discount do.  
• Warna koi discount mat do.  
• Final payable amount aur customer ki details dikhani hain. 
=================================================================================
*/
let billingCustomer = "Mohd Asif";
let purchaseTotal = 6000;
let discountValue = 0;
let payableAmount = 0;
if (purchaseTotal >= 5000) {
    discountValue = 20;
}
discountValue = (purchaseTotal * discountValue) / 100;
payableAmount = purchaseTotal - discountValue;
console.log(`Customer Name: ${billingCustomer}`);
console.log(`Shopping Amount: ${purchaseTotal}`);
console.log(`Discount: ${discountValue}`);
console.log(`Final Payable Amount: ${payableAmount}`);








/*
=========================================================================
Q22.ATM Minimum Balance 
Question 
Ek ATM System banao. 
• Customer ka naam store karo.  
• Account Balance store karo.  
• Withdraw Amount store karo.  
• Transaction tabhi allow hogi jab withdrawal ke baad account 
me ₹1000 ya usse zyada balance bache.  
• Warna transaction reject kar do.  
• Final balance ya error message dikhana hai.  
==========================================================================
*/
let bankCustomer = "Mohd Asif";
let currentAmount = 6000;
let cashRequest = Number(prompt("Enter your Amount for Withdraw:"));
let remainingBalance = currentAmount;
let transactionStatus = "";
if ((currentAmount - cashRequest) >= 1000) {
    remainingBalance = currentAmount - cashRequest;
    transactionStatus = "Approved";
} else {
    transactionStatus = "Rejected";
}
console.log(`Customer Name: ${bankCustomer}`);
console.log(`Account Balance: ${currentAmount}`);
console.log(`Withdraw Amount: ${cashRequest}`);
console.log(`Remaining Balance: ${remainingBalance}`);
console.log(`Transaction Status: ${transactionStatus}`);








/*
=========================================================================
Q23. Employee Bonus 
Question 
Ek Employee Salary System banao. 
• Employee ka naam store karo.  
• Basic Salary store karo.  
• Agar salary ₹50,000 ya usse zyada hai to 10% bonus add karo.  
• Warna bonus mat do.  
• Final salary dikhani hai. 
==========================================================================
*/
let staffMember = "Mohd Asif";
let monthlySalary = 55000;
let bonusAmount = 0;
let updatedSalary = 0;
if (monthlySalary >= 50000) {
    bonusAmount = 10;
}
bonusAmount = (monthlySalary * bonusAmount) / 100;
updatedSalary = monthlySalary + bonusAmount;
console.log(`Employee Name: ${staffMember}`);
console.log(`Basic Salary: ${monthlySalary}`);
console.log(`Bonus Amount: ${bonusAmount}`);
console.log(`Final Salary: ${updatedSalary}`);








/*
==========================================================================
Q24. Mobile Recharge Cashback 
Question 
Ek Mobile Recharge System banao. 
• Customer ka naam store karo.  
• Recharge Amount store karo.  
• Agar recharge ₹399 ya usse zyada hai to ₹50 cashback do.  
• Warna cashback mat do.  
• Final payment details dikhani hain.  
===========================================================================
*/
let mobileSubscriber = "Mohd Asif";
let rechargeCost = 299;
let cashbackValue = 0;
let totalRechargeValue = 0;
if (rechargeCost >= 399) {
    cashbackValue = 50;
}
totalRechargeValue = rechargeCost + cashbackValue;
console.log(`Customer Name: ${mobileSubscriber}`);
console.log(`Recharge Amount: ${rechargeCost}`);
console.log(`Cashback: ₹${cashbackValue}`);
console.log(`Final Recharge Value: ${totalRechargeValue}`);








/*
=============================================================================
Q25. Electricity Bill 
Question 
Ek Electricity Bill System banao. 
• Customer ka naam store karo.  
• Total Units store karo.  
• Per Unit Price store karo.  
• Agar total units 300 se zyada hain to bill par 8% surcharge 
lagao.  
• Warna normal bill dikhana hai.
=============================================================================
*/
let powerConsumer = "Mohd Asif";
let electricityUnits = 400;
let pricePerUnit = 8;
let electricityBill = electricityUnits * pricePerUnit;
let surchargeAmount = 0;
let finalBillAmount = 0;
if (electricityUnits > 300) {
    surchargeAmount = 8;
}
surchargeAmount = (electricityBill * surchargeAmount) / 100;
finalBillAmount = electricityBill + surchargeAmount;
console.log(`Customer Name: ${powerConsumer}`);
console.log(`Total Units: ${electricityUnits}`);
console.log(`Per Unit Price: ₹${pricePerUnit}`);
console.log(`Electricity Bill: ${electricityBill}`);
console.log(`Surcharge: ${surchargeAmount}`);
console.log(`Final Bill: ${finalBillAmount}`);








/*
==========================================================================================
Q.26 Water Tank Filling System
Question
Ek Water Tank Filling System banao.
• Tank Capacity (Liters) store karo.
• Current Water (Liters) store karo.
• Per Liter Water Cost store karo.
• Agar tank 80% ya usse zyada bhar gaya hai to ₹300 Maintenance Charge add karo.
Warna koi maintenance charge nahi.
• Final water filling cost dikhani hai.
===========================================================================================
*/
let tankCapacity = 1000;
let currentWater = 850;
let perLiterCost = 5;
let waterNeeded = tankCapacity - currentWater;
let waterFillingCost = waterNeeded * perLiterCost;
let maintenanceCharge = 0;
let finalWaterCost = 0
if(currentWater >= ((tankCapacity * 80) / 100 ) ){
    maintenanceCharge = 300;
}
finalWaterCost = waterFillingCost + maintenanceCharge;
console.log(`Tank Capacity: ${tankCapacity}Liters`);
console.log(`Current Water: ${currentWater}Liters`);
console.log(`Per Liter Cost: ₹${perLiterCost}`);
console.log(`Water Needed: ${waterNeeded}Liters`);
console.log(`Water Filling Cost: ₹${waterFillingCost}`);
console.log(`Maintenance Charge: ₹${maintenanceCharge}`);
console.log(`Final Water Cost: ₹${finalWaterCost}`);








/*
================================================================================
Q27. Hotel Booking 
Question 
Ek Hotel Booking System banao. 
• Customer ka naam store karo.  
• Total Nights store karo.  
• Per Night Rent store karo.  
• Agar booking 5 ya usse zyada nights ki hai to 1 night free kar 
do.  
• Final bill dikhana hai. 
================================================================================
*/
let guestName = "Mohd Asif";
let stayDays = 6;
let nightCharge = 500;
let bookingAmount = stayDays * nightCharge;
let complimentaryNightAmount = 0;
let payableAmount = 0;
if(stayDays >= 5){
    complimentaryNightAmount = nightCharge;
}
payableAmount = bookingAmount - complimentaryNightAmount;
console.log(`Guest Name: ${guestName}`);
console.log(`Stay Days: ${stayDays}`);
console.log(`Night Charge: ${nightCharge}`);
console.log(`Booking Amount: ${bookingAmount}`);
console.log(`Complimentary Night Amount: ${complimentaryNightAmount}`);
console.log(`Payable Amount: ${payableAmount}`);








/*
========================================================================
Q28. Online Course 
Question 
Ek Online Course System banao. 
• Student ka naam store karo.  
• Course Fee store karo.  
• Agar student ke marks 90 ya usse zyada hain to 30% 
scholarship do.  
• Warna normal fee dikhani hai.  
• Final payment details dikhani hain.  
========================================================================
*/
let learnerName = "Mohd Asif";
let coursePrice = 5000;
let examScore = 91;
let scholarshipAmount = 0;
let payableFee = 0;
if (examScore >= 90) {
    scholarshipAmount = (coursePrice * 30) / 100;
}
payableFee = coursePrice - scholarshipAmount;
console.log(`Learner Name: ${learnerName}`);
console.log(`Course Price: ${coursePrice}`);
console.log(`Exam Score: ${examScore}`);
console.log(`Scholarship Amount: ${scholarshipAmount}`);
console.log(`Payable Fee: ${payableFee}`);








/*
========================================================================
Q29. Gym Membership 
Question 
Ek Gym Membership System banao. 
• Member ka naam store karo.  
• Membership Fee store karo.  
• Agar member 12 months ki membership leta hai to 2 months 
free do.  
• Warna normal membership rakho.  
• Final membership details dikhani hain. 
=========================================================================
*/
let memberFullName = "Mohd Asif";
let monthlyCharge = 1000;
let planMonths = 12;
let freeMembershipValue = 0;
let totalmemberShip = monthlyCharge * planMonths;
let totalMembershipFee = 0;
if(planMonths === 12){
    freeMembershipValue = monthlyCharge * 2;
}
totalMembershipFee = totalmemberShip - freeMembershipValue;
console.log(`Member Full Name: ${memberFullName}`);
console.log(`Membership Cost: ${monthlyCharge}`);
console.log(`Membership Duration: ${planMonths}`);
console.log(`Membership Total Amount: ${totalmemberShip}`);
console.log(`Free Membership Value: ${freeMembershipValue}`);
console.log(`Total Membership Cost: ${totalMembershipFee}`);








/*
==============================================================================
Q30. Food Delivery 
Question 
Ek Food Delivery System banao. 
• Customer ka naam store karo.  
• Order Amount store karo.  
• Delivery Charge store karo.  
• Agar order amount ₹799 ya usse zyada hai to delivery charge 
hata do.  
• Warna normal delivery charge rakho.  
• Final bill dikhana hai.  
===============================================================================
*/
let buyerName = "Mohd Asif";
let cartValue = 1550;
let shippingFee = 80;
let invoiceAmount = 0;
let payableBill = 0;
if(cartValue >= 799){
    shippingFee = 0;
}
invoiceAmount = cartValue + shippingFee;
payableBill = invoiceAmount;
console.log(`Buyer Name: ${buyerName}`);
console.log(`Cart Value: ₹${cartValue}`);
console.log(`Shipping Fee: ₹${shippingFee}`);
console.log(`Invoice Amount: ₹${invoiceAmount}`);
console.log(`Payable Bill: ₹${payableBill}`);








/*
==============================================================================
Q31. Online Shopping Premium Offer 
Question 
Ek Shopping Website ka Billing System banao. 
• Customer ka naam store karo.  
• Shopping Amount store karo.  
• Customer Type store karo (Normal ya Premium).  
• Agar shopping amount ₹5000 ya usse zyada hai to 20% 
discount do.  
• Agar customer Premium hai to extra 5% discount do.  
• Final payable amount aur customer details dikhani hain.  
==============================================================================
*/
let shopperName = "Mohd Asif";
let purchaseValue = 7000;
let membershipTier = "Premium";
let baseDiscount = 0;
let premiumDiscount = 0;
let remainingAmount = 0;
let netPayable = 0;
if(purchaseValue >= 5000){
    baseDiscount = 20;
}if(membershipTier === "Premium"){
    premiumDiscount = 5;
}
baseDiscount = (purchaseValue * baseDiscount) / 100;
remainingAmount = purchaseValue - baseDiscount;
premiumDiscount = (remainingAmount * premiumDiscount) / 100;
netPayable = remainingAmount - premiumDiscount;
console.log(`Shopper Name: ${shopperName}`);
console.log(`Purchase Value: ₹${purchaseValue}`);
console.log(`Membership Tier: ${membershipTier}`);
console.log(`Base Discount: ₹${baseDiscount}`);
console.log(`Premium Discount: ₹${premiumDiscount}`);
console.log(`Net Payable: ₹${netPayable}`);








/*
===========================================================================
Q32. ATM Daily Limit 
Question 
Ek ATM System banao. 
• Customer ka naam store karo.  
• Account Balance store karo.  
• Withdraw Amount store karo.  
• Daily Withdrawal Limit store karo.  
• Transaction tabhi allow hogi jab:  
o Withdrawal amount daily limit ke andar ho.  
o Withdrawal ke baad account me ₹1000 ya usse zyada 
balance bache.  
• Warna transaction reject kar do.  
===========================================================================
*/
let accountOwner = "Mohd Asif";
let availableFunds = 7000;
let requestedCash = Number(prompt("Enter your Amount for Withdraw:"));
let dailyLimit = 10000;
let remainingFunds = 0;
let transactionStatus = "";
if(requestedCash <= dailyLimit && (availableFunds - requestedCash) >= 1000){
    remainingFunds = availableFunds - requestedCash;
    transactionStatus = "Approved";
}else{
    transactionStatus = "Rejected";
}
console.log(`Account Owner: ${accountOwner}`);
console.log(`Available Funds: ₹${availableFunds}`);
console.log(`Requested Cash: ₹${requestedCash}`);
console.log(`Daily Limit: ₹${dailyLimit}`);
console.log(`Remaining Funds: ₹${remainingFunds}`);
console.log(`Transaction Status: ${transactionStatus}`);








/*
==========================================================================
Q33. Student Scholarship 
Question 
Ek Scholarship System banao. 
• Student ka naam store karo.  
• Marks store karo.  
• Family Income store karo.  
• Agar marks 90 ya usse zyada hain aur family income 
₹3,00,000 se kam hai to 100% scholarship do.  
• Warna scholarship mat do.  
• Final result dikhana hai. 
==========================================================================
*/
let candidateName = "Mohd Asif";
let scorePercentage = 96;
let householdIncome = 350000;
let scholarshipStatus = "";
let scholarshipRate = 0;
if(scorePercentage >= 90 && householdIncome < 300000){
    scholarshipRate = 100;
    scholarshipStatus = "Approved";
}else{
    scholarshipStatus = "Not Approved";
}
console.log(`Candidate Name: ${candidateName}`);
console.log(`Score Percentage: ${scorePercentage}`);
console.log(`Household Income: ₹${householdIncome}`);
console.log(`Scholarship Status: ${scholarshipStatus}`);
console.log(`Scholarship Rate: ${scholarshipRate}%`);








/*
=============================================================================================================
Q34.Water Park Entry System
Question
Ek Water Park Entry System banao.
• Visitor ka naam store karo.
• Total Tickets store karo.
• Per Ticket Price store karo.
• Weekend Visit hai ya nahi store karo (Yes ya No).
Agar Total Tickets 5 ya usse zyada hain to 1 Ticket ka Price free kar do.
Agar Weekend Visit = Yes hai to final amount par 12% extra entertainment charge add karo.
Final payable amount aur visitor ki details dikhani hain.
==============================================================================================================
*/
let visitorName = "Mohd Asif";
let ticketCount = 5;
let ticketPrice = 500;
let weekendVisit = true;
let grossTotal = ticketCount * ticketPrice;
let complimentaryTicketValue = 0;
let entertainmentCharge = 0;
let amountAfterFreeTicket = 0;
let finalPayable = 0;
if(ticketCount >= 5){
    complimentaryTicketValue = ticketPrice;
}if(weekendVisit === true){
    entertainmentCharge = 12;
}
amountAfterFreeTicket = grossTotal - complimentaryTicketValue;
entertainmentCharge = (amountAfterFreeTicket * entertainmentCharge) / 100;
finalPayable = entertainmentCharge + amountAfterFreeTicket;
console.log(`Visitor Name: ${visitorName}`);
console.log(`Ticket Count: ${ticketCount}`);
console.log(`Ticket Price: ₹${ticketPrice}`);
console.log(`Weekend Visit: ${weekendVisit ? "Yes" : "No"}`);
console.log(`Gross Total: ₹${grossTotal}`);
console.log(`Complimentary Ticket Value: ₹${complimentaryTicketValue}`);
console.log(`Amount After Free Ticket: ₹${amountAfterFreeTicket}`);
console.log(`Entertainment Charge: ₹${entertainmentCharge}`);
console.log(`Final Payable: ₹${finalPayable}`);








/*
====================================================================================================================
Q35. Cab Fare Calculation (Advanced)
Question
• Ek Cab Booking System banao.
• Customer ka naam store karo.
• Distance (KM) store karo.
• Per Kilometer Fare store karo.
• Night Time booking hai ya nahi store karo (true / false).
• Premium Customer hai ya nahi store karo (true / false).

Business Rules
• Sabse pehle total fare calculate karo.
• Agar distance 20 KM se zyada hai to 15% discount do.
• Agar Night Time booking hai to ₹150 Night Charge add karo.
• Agar Premium Customer hai to discount ke baad wale amount par 5% extra discount do.
• Agar final fare ₹3000 se zyada ho jaye to ₹200 Service Charge add karo.
Final fare aur booking details dikhani hain.
=====================================================================================================================
*/
let traveler = "Mohd Asif";
let rideLength = 30;
let fareRate = 120;
let midnightRide = "Yes";
let vipCustomer = "Yes";
let baseFare = rideLength * fareRate;
let travelDiscount = 0;
let amountAfterDiscount = 0;
let midnightFee = 0;
let eliteBenefit = 0;
let convenienceFee = 0;
let payableRideAmount = 0;
if(rideLength > 20){
    travelDiscount = 15;
}
travelDiscount = (baseFare * travelDiscount) / 100;
amountAfterDiscount = baseFare - travelDiscount;
if(midnightRide === "Yes"){
    midnightFee = 150;
}
if(vipCustomer === "Yes"){
    eliteBenefit = ((amountAfterDiscount + midnightFee) * 5) / 100;
}
payableRideAmount = (amountAfterDiscount + midnightFee) - eliteBenefit;
if(payableRideAmount > 3000){
    convenienceFee = 200;
}
payableRideAmount = payableRideAmount + convenienceFee;
console.log(`Traveler: ${traveler}`);
console.log(`Ride Length: ${rideLength}KM`);
console.log(`Fare Rate: ₹${fareRate}`);
console.log(`Midnight Ride: ${midnightRide}`);
console.log(`VIP Customer: ${vipCustomer}`);
console.log(`Ride Total: ₹${baseFare}`);
console.log(`Travel Discount: ₹${travelDiscount}`);
console.log(`Amount After Discount: ₹${amountAfterDiscount}`);
console.log(`Midnight Fee: ₹${midnightFee}`);
console.log(`Elite Benefit  : ₹${eliteBenefit}`);
console.log(`Convenience Fee: ₹${convenienceFee}`);
console.log(`Payable Ride Amount: ₹${payableRideAmount}`);








/*
=============================================================================
Q36. Employee Salary System 
Question 
Ek Employee Salary System banao. 
• Employee ka naam store karo.  
• Basic Salary store karo.  
• Experience store karo.  
• Agar experience 5 saal ya usse zyada hai to 10% bonus do.  
• Agar salary ₹70,000 ya usse zyada hai to Professional Tax bhi 
kaatna hai.  
• Final salary dikhani hai. 
==============================================================================
*/
let staffName = "Mohd Asif";
let basePay = 80000;
let yearsWorked = 6;
let serviceBonus = 0;
let salaryAfterBonus = 0;
let professionalTax = 0;
let netSalary = 0;
if(yearsWorked >= 5){
    serviceBonus = 10;
}
serviceBonus = (basePay * serviceBonus) / 100;
salaryAfterBonus = basePay + serviceBonus;
if(salaryAfterBonus >= 70000){
    professionalTax = 500;
}
netSalary = salaryAfterBonus - professionalTax;
console.log(`Staff Name: ${staffName}`);
console.log(`Base Pay: ₹${basePay}`);
console.log(`Years Worked : ${yearsWorked}`);
console.log(`Bonus Amount: ₹${serviceBonus}`);
console.log(`Salary After Bonus: ₹${salaryAfterBonus}`);
console.log(`Professional Tax: ₹${professionalTax}`);
console.log(`Net Salary: ₹${netSalary}`);








/*
=========================================================================
Q37. Mobile Recharge System 
Question 
Ek Mobile Recharge System banao. 
• Customer ka naam store karo.  
• Recharge Amount store karo.  
• Customer Type store karo.  
• Agar recharge ₹499 ya usse zyada hai to 2GB extra data do.  
• Agar customer Premium hai to 100 reward points bhi do. 
=========================================================================
*/
let subscriber = "Mohd Asif";
let topupValue = 599;
let planCategory = "Premium";
let extraDataGB = 0;
let rewardCredits = 0;
if(topupValue >= 499){
    extraDataGB = 2;
}
if(planCategory === "Premium"){
    rewardCredits = 100;
}
console.log(`Subscriber: ${subscriber}`);
console.log(`Topup Value: ${topupValue}`);
console.log(`Plan Category: ${planCategory  }`);
console.log(`Extra Data: ${extraDataGB}GB`);
console.log(`Reward Credits: ${rewardCredits}`);








/*
=========================================================================
Q38. Bike Rental System 
Question 
Ek Bike Rental System banao. 
• Customer ka naam store karo.  
• Total Hours store karo.  
• Per Hour Charge store karo.  
• Helmet liya hai ya nahi, ye bhi store karo.  
• Agar rental 10 hours se zyada hai to 10% discount do.  
• Agar helmet nahi liya hai to ₹200 penalty add karo. 
==========================================================================
*/
let renter = "Mohd Asif";
let usageTime = 12;
let hourlyRate = 100;
let helmetTaken = false;
let rentalAmount = usageTime * hourlyRate;
let longRentalDiscount = 0;
let penaltyCharge = 0;
let finalRentalCost = 0;
if(usageTime > 10){
    longRentalDiscount = 10;
}
longRentalDiscount = (rentalAmount * longRentalDiscount) / 100;
rentalAmount = rentalAmount - longRentalDiscount;
if(helmetTaken === false){
    penaltyCharge = 200;
}
finalRentalCost = penaltyCharge + rentalAmount;
console.log(`Renter: ${renter}`);
console.log(`Rental Hours: ${usageTime}`);
console.log(`Hourly Rate: ₹${hourlyRate}`);
console.log(`Helmet Taken: ${helmetTaken}`);
console.log(`Rental Amount: ₹${rentalAmount}`);
console.log(`Long Rental Discount: ₹${longRentalDiscount}`);
console.log(`Penalty Charge: ₹${penaltyCharge}`);
console.log(`Final Rental Cost : ₹${finalRentalCost}`);








/*
=====================================================================================================================
Q39. Electricity Bill System (Advanced)
Question
Ek Electricity Bill System banao.
• Customer ka naam store karo.
• Total Units store karo.
• Per Unit Price store karo.
• Senior Citizen hai ya nahi store karo (true / false).
• Green Energy Subscriber hai ya nahi store karo (true / false).
Business Rules
• Sabse pehle total electricity bill calculate karo.
• Agar Total Units 300 se zyada hain to 8% Surcharge add karo.
• Agar Total Units 500 se zyada hain to ₹300 Extra Maintenance Charge add karo.
• Agar Green Energy Subscriber = true hai to Surcharge ke baad wale amount par 3% Green Discount do.
• Agar Senior Citizen = true hai to Green Discount ke baad wale amount par 5% Senior Citizen Discount do.
• Agar Final Bill ₹10,000 se zyada ho jaye to ₹250 Digital Service Charge add karo.
• Final electricity bill aur customer details dikhani hain.
=======================================================================================================================
*/
let clientName = "Mohd Asif";
let powerUnits = 550;
let ratePerUnit = 20;
let seniorCitizen = true;
let greenSubscriber = true;
let electricityCharge = powerUnits * ratePerUnit;
let extraSurcharge = 0;
let maintenanceFee = 0;
let amountAfterSurcharge = 0;
let greenDiscount = 0;
let amountAfterGreenDiscount = 0;
let seniorDiscount = 0;
let digitalServiceFee = 0;
let totalBillPayable = 0;
if(powerUnits > 300){
    extraSurcharge = 8;
}
extraSurcharge = (electricityCharge * extraSurcharge) / 100;
if(powerUnits > 500){
    maintenanceFee = 300;
}
amountAfterSurcharge = electricityCharge + extraSurcharge + maintenanceFee;
if(greenSubscriber === true){
    greenDiscount = 3;
}

greenDiscount = (amountAfterSurcharge * greenDiscount) / 100;
amountAfterGreenDiscount = amountAfterSurcharge - greenDiscount;
if(seniorCitizen === true){
    seniorDiscount = 5;
}
seniorDiscount = (amountAfterGreenDiscount * seniorDiscount) / 100;
totalBillPayable = amountAfterGreenDiscount - seniorDiscount;
if(totalBillPayable > 10000){
    digitalServiceFee = 250;
}
totalBillPayable = digitalServiceFee + totalBillPayable;
console.log(`Consumer Name: ${clientName}`);
console.log(`Power Units: ${powerUnits}`);
console.log(`Senior Citizen: ${seniorCitizen}`);
console.log(`Green Subscriber: ${greenSubscriber}`);
console.log(`Bill Amount: ₹${electricityCharge}`);
console.log(`Surcharge Amount: ₹${extraSurcharge}`);
console.log(`Maintenance Fee: ₹${maintenanceFee}`);
console.log(`Amount After Surcharge: ₹${amountAfterSurcharge}`);
console.log(`Green Discount: ₹${greenDiscount}`);
console.log(`Amount After Green Discount: ₹${amountAfterGreenDiscount}`);
console.log(`Senior Discount: ₹${seniorDiscount}`);
console.log(`Digital Service Fee: ₹${digitalServiceFee}`);
console.log(`Total Bill Payable: ₹${totalBillPayable}`);








/*
================================================================================
Q40. Hospital Registration 
Question 
Ek Hospital Registration System banao. 
• Patient ka naam store karo.  
• Age store karo.  
• Registration Fee store karo.  
• Agar patient Senior Citizen hai to 50% fee kam karo.  
• Agar patient Emergency me aaya hai to ₹1000 emergency 
charge add karo.  
• Final bill aur registration details dikhani hain.  
=================================================================================
*/
let visitorFullName = "Mohd Asif";
let ageYears = 65;
let entryFee = 8000;
let emergencyCase = true;
let citizenRelief = 0;
let feeAfterRelief = 0;
let urgentCareCharge = 0;
let medicalServiceCharge = 0;
let hospitalBillTotal = 0;
if(ageYears >= 60){
    citizenRelief = 50;
}
citizenRelief = (entryFee * citizenRelief) / 100;
feeAfterRelief = entryFee - citizenRelief;
if(emergencyCase === true){
    urgentCareCharge = 1000;
}
hospitalBillTotal = feeAfterRelief + urgentCareCharge;
if(hospitalBillTotal > 5000){
    medicalServiceCharge = 200;
}
hospitalBillTotal = hospitalBillTotal + medicalServiceCharge;
console.log(`Patient Name: ${visitorFullName}`);
console.log(`Patient Age: ${ageYears}`);
console.log(`Registration Charge: ${entryFee}`);
console.log(`Emergency Case: ${emergencyCase}`);
console.log(`Senior Discount: ₹${citizenRelief}`);
console.log(`Fee After Discount: ₹${feeAfterRelief}`);
console.log(`Emergency Charge: ₹${urgentCareCharge}`);
console.log(`Medical Service Charge: ₹${medicalServiceCharge}`);
console.log(`Final Hospital Bill: ₹${hospitalBillTotal}`);








/*
=====================================================================
Q41. Student Grade System 
Question 
Ek Student Grade System banao. 
• Student ka naam store karo.  
• Total Marks store karo.  
• Agar marks 90 ya usse zyada hain to Grade A do.  
• Agar marks 75 ya usse zyada hain to Grade B do.  
• Agar marks 60 ya usse zyada hain to Grade C do.  
• Agar marks 33 ya usse zyaada hain to Grade D do.  
• Warna Fail dikhana hai.  
• Student ka naam aur final grade dikhana hai.  
=====================================================================
*/
let learnerFullName = "Mohd Asif";
let obtainedMarks = 66;
let finalGrade = "";
if(obtainedMarks >= 90){
    finalGrade = "A";
}else if(obtainedMarks >= 75){
    finalGrade = "B";
}else if(obtainedMarks >= 60){
    finalGrade = "C";
}else if(obtainedMarks >= 33){
    finalGrade = "D";
}else{
    finalGrade = "Fail";
}
console.log(`Learner Full Name: ${learnerFullName}`);
console.log(`Exam Score: ${obtainedMarks}`);
console.log(`Final Grade: ${finalGrade}`);








/*
===================================================================================
Q42. Income Tax System 
Question 
Ek Income Tax System banao. 
• Employee ka naam store karo.  
• Annual Income store karo.  
• Agar income ₹4,00,000 tak hai to No Tax.  
• Agar income ₹4,00,001 - ₹8,00,000 ke beech hai to 10% Tax.  
• Agar income ₹8,00,001 - ₹12,00,000 ke beech hai to 20% Tax.  
• Agar income ₹12,00,000 se zyada hai to 30% Tax.  
• Final tax aur remaining income dikhani hai.  
====================================================================================
*/
let employeeLabel = "Mohd Asif";
let yearlyIncome = 900000;
let taxRate = 0;
let taxAmount = 0;
let incomeAfterTax = 0;
if(yearlyIncome <= 400000){
    taxRate = 0;
}else if(yearlyIncome <= 800000){
    taxRate = 10;
}else if(yearlyIncome <= 1200000){
    taxRate = 20;
}else{
    taxRate = 30;
}
taxAmount = (yearlyIncome * taxRate) / 100;
incomeAfterTax = yearlyIncome - taxAmount;
console.log(`Staff Member: ${employeeLabel}`);
console.log(`Yearly Income: ₹${yearlyIncome}`);
console.log(`Tax Rate: ${taxRate}%`);
console.log(`Tax Amount: ₹${taxAmount}`);
console.log(`Income After Tax: ₹${incomeAfterTax}`);








/*
==============================================================================
Q43. Electricity Bill Slab 
Question 
Ek Electricity Bill System banao. 
• Customer ka naam store karo.  
• Total Units store karo.  
• Agar units 100 tak hain to pehla rate lagao.  
• Agar units 101–300 ke beech hain to doosra rate lagao.  
• Agar units 301–500 ke beech hain to teesra rate lagao.  
• Agar units 500 se zyada hain to chautha rate lagao.  
• Final bill dikhana hai. 
===============================================================================
*/
let customerLabel = "Mohd Asif";
let totalUnits = 350;
let unitPrice = 0;
let billPayable = 0;
if(totalUnits <= 100){
    unitPrice = 5;
}else if(totalUnits <= 300){
    unitPrice = 7;
}else if(totalUnits <= 500){
    unitPrice = 9;
}else{
    unitPrice = 12;
}
billPayable = (totalUnits * unitPrice);
console.log(`Customer Label: ${customerLabel}`);
console.log(`Total Units: ${totalUnits}`);
console.log(`Unit Price: ₹${unitPrice}`);
console.log(`Electricity Bill: ₹${billPayable}`);








/*
============================================================================
Q44. Movie Ticket Price 
Question 
Ek Movie Ticket Booking System banao. 
• Customer ka naam store karo.  
• Age store karo.  
• Agar age 12 se kam hai to Child Ticket Price lagao.  
• Agar age 12–59 ke beech hai to Normal Ticket Price lagao.  
• Agar age 60 ya usse zyada hai to Senior Citizen Ticket Price 
lagao.  
• Final ticket details dikhani hain. 
=============================================================================
*/
let viewerName = "Mohd Asif";
let ageValue = 25;
let admissionFee = 0;
if(ageValue < 12){
    admissionFee = 150;
}else if(ageValue <= 59){
    admissionFee = 300;
}else{
    admissionFee = 200;
}
console.log(`Viewer Name: ${viewerName}`);
console.log(`Age Value: ${ageValue}`);
console.log(`Ticket Price: ${admissionFee}`);








/*
=============================================================================
Q45. Courier Charge System 
Question 
Ek Courier Service System banao. 
• Customer ka naam store karo.  
• Parcel Weight store karo.  
• Agar weight 1 KG tak hai to pehla charge lagao.  
• Agar weight 1–5 KG ke beech hai to doosra charge lagao.  
• Agar weight 5–10 KG ke beech hai to teesra charge lagao.  
• Agar weight 10 KG se zyada hai to chautha charge lagao.  
• Final courier charge dikhana hai. 
==============================================================================
*/
let senderName = "Mohd Asif";
let parcelMass = 6;
let deliveryCharge = 0;
if(parcelMass <= 1){
    deliveryCharge = 80;
}else if(parcelMass <= 5){
    deliveryCharge = 150;
}else if(parcelMass <= 10){
    deliveryCharge = 250;
}else{
    deliveryCharge = 400;
}
console.log(`Sender Name: ${senderName}`);
console.log(`Parcel Mass: ${parcelMass}KG`);
console.log(`Delivery Charge: ₹${deliveryCharge}`);








/*
====================================================================
Q46. Mobile Recharge Plans 
Question 
Ek Mobile Recharge System banao. 
• Customer ka naam store karo.  
• Recharge Amount store karo.  
• Agar recharge ₹199 hai to Plan A activate karo.  
• Agar recharge ₹299 hai to Plan B activate karo.  
• Agar recharge ₹399 hai to Plan C activate karo.  
• Agar recharge ₹599 ya usse zyada hai to Premium Plan 
activate karo.  
• Final plan details dikhani hain. 
=====================================================================
*/
let subscriberName = "Mohd Asif";
let rechargeAmount = 700;
let activatedPlan = "";
if(rechargeAmount === 199){
    activatedPlan = "A";
}else if(rechargeAmount === 299){
    activatedPlan = "B";
}else if(rechargeAmount === 399){
    activatedPlan = "C";
}else if(rechargeAmount >= 599){
    activatedPlan = "Premium Plan";
}else{
    activatedPlan = "No Valid Plan";
}
console.log(`User Name: ${subscriberName}`);
console.log(`Recharge Value: ₹${rechargeAmount}`);
console.log(`Activated Plan: ${activatedPlan}`);








/*
==================================================================================
Q47. Employee Performance Rating 
          Question 
Ek Employee Performance System banao. 
• Employee ka naam store karo.  
• Performance Score store karo.  
• Score ke hisaab se Excellent, Good, Average, Needs 
Improvement ya Poor rating do.  
• Employee ka naam aur rating dikhani hai. 
===================================================================================
*/
let employeeTag = "Mohd Asif";
let performancePoints = 95;
let performanceRating = "";
if( performancePoints >= 90){
    performanceRating = "Excellent";
}else if(performancePoints >= 75){
    performanceRating = "Good";
}else if(performancePoints >= 60){
    performanceRating = "Average";
}else if(performancePoints >= 40){
    performanceRating = "Needs Improvement";
}else{
    performanceRating = "Poor";
}
console.log(`Employee Tag: ${employeeTag}`);
console.log(`Performance Points: ${performancePoints}`);
console.log(`Performance Rating: ${performanceRating}`);








/*
===========================================================================
Q48. Hotel Room Selection 
Question 
Ek Hotel Booking System banao. 
• Customer ka naam store karo.  
• Budget store karo.  
• Budget ke hisaab se Standard, Deluxe, Super Deluxe ya Suite 
room suggest karo.  
• Final booking details dikhani hain. 
============================================================================
*/
let guestLabel = "Mohd Asif";
let budgetAmount = 7500;
let roomSuggestion = "";
if(budgetAmount <= 3000){
    roomSuggestion = "Standard Room";
}else if(budgetAmount <= 6000){
    roomSuggestion = "Deluxe Room";
}else if(budgetAmount <= 10000){
    roomSuggestion = "Super Deluxe Room";
}else{
    roomSuggestion = "Suite Room";
}
console.log(`Guest Label: ${guestLabel}`);
console.log(`Budget Amount: ${budgetAmount}`);
console.log(`Room Suggestion: ${roomSuggestion}`);









/*
=======================================================================
 Q49. Internet Speed Plans 
          Question 
Ek Internet Provider System banao. 
• Customer ka naam store karo.  
• Monthly Budget store karo.  
• Budget ke hisaab se Basic, Standard, Premium ya Ultra plan 
suggest karo.  
• Final plan details dikhani hain. 
=======================================================================
*/
let clientLabel = "Mohd Asif";
let monthlyBudget = 1500;
let planSuggestion = "";
if(monthlyBudget <= 500){
    planSuggestion = "Basic Plan";
}else if(monthlyBudget <= 1000){
    planSuggestion = "Standard Plan";
}else if(monthlyBudget <= 2000){
    planSuggestion = "Premium Plan";
}else{
    planSuggestion = "Ultra Plan";
}
console.log(`Client Label: ${clientLabel}`);
console.log(`Monthly Budget: ₹${monthlyBudget}`);
console.log(`Plan Suggestion: ${planSuggestion}`);








/*
==========================================================================
Q50. Banking Reward System 
          Question 
Ek Banking Reward System banao. 
• Customer ka naam store karo.  
• Total Yearly Spending store karo.  
• Spending ke hisaab se Bronze, Silver, Gold ya Platinum 
reward level do.  
• Final reward details dikhani hain.  
===========================================================================
*/
let rewardCustomer = "Mohd Asif";
let annualSpending = 450000;
let rewardLevel = "";
if(annualSpending <= 100000){
    rewardLevel = "Bronze";
}else if(annualSpending <= 300000){
    rewardLevel = "Silver";
}else if(annualSpending <= 700000){
    rewardLevel = "Gold";
}else{
    rewardLevel = "Platinum";
}
console.log(`Account Holder: ${rewardCustomer}`);
console.log(`Annual Spending:  ₹${annualSpending}`);
console.log(`Reward Level: ${rewardLevel}`);








/*
=====================================================================================
Q51. Employee Salary & Bonus Management System 
Question 
Ek Company ka Salary Management System banao. 
• Employee ka naam store karo.  
• Basic Salary store karo.  
• Experience store karo.  
• Attendance Percentage store karo.  
• Performance Rating store karo.  
• Overtime Hours store karo.  
Business Rules 
• Agar attendance 75% se kam hai to koi bonus nahi milega.  
• Agar experience 5 saal ya usse zyada hai to basic salary ka 
10% bonus milega.  
• Agar experience 10 saal ya usse zyada hai to basic salary ka 
20% bonus milega.  
• Agar performance rating 5 hai to ₹15,000 incentive milega.  
• Agar performance rating 4 hai to ₹8,000 incentive milega.  
• Agar overtime 20 hours se zyada hai to ₹5,000 extra add karo.  
• Agar final salary ₹1,00,000 se zyada ho jaye to ₹4,000 
Professional Tax kaat do.  
• Final Salary aur Employee Details dikhani hain. 
====================================================================================
*/
let workerName = "Mohd Asif";
let baseSalary = 90000;
let experienceYears = 12;
let attendanceRate = 92;
let performanceScore = 5;
let extraHours = 25;
let bonusValue = 0;
let incentiveValue = 0;
let overtimeAmount = 0;
let taxDeduction = 0;
let salaryBeforeTax = 0;
let finalSalaryAmount = 0;
if(attendanceRate < 75){
    bonusValue = 0;
}else if(experienceYears >= 10){
    bonusValue = (baseSalary * 20) / 100;
}else if(experienceYears >= 5){
    bonusValue = (baseSalary * 10) / 100; 
}if(performanceScore === 5){
    incentiveValue = 15000;
}else if(performanceScore === 4){
    incentiveValue = 8000;
}if(extraHours > 20){
    overtimeAmount = 5000;
}
salaryBeforeTax = baseSalary + bonusValue + incentiveValue + overtimeAmount;
if(salaryBeforeTax > 100000){
    taxDeduction = 4000;
}
finalSalaryAmount = salaryBeforeTax - taxDeduction;
console.log(`Worker Name: ${workerName}`);
console.log(`Base Salary: ₹${baseSalary}`);
console.log(`Experience Years: ${experienceYears}`);
console.log(`Attendance Rate: ${attendanceRate}%`);
console.log(`Performance Score: ${performanceScore}`);
console.log(`Extra Hours : ${extraHours}`);
console.log(`Bonus Value: ₹${bonusValue}`);
console.log(`Incentive Value: ₹${incentiveValue}`);
console.log(`Overtime Amount: ₹${overtimeAmount}`);
console.log(`Salary Before Tax: ₹${salaryBeforeTax}`);
console.log(`Professional Tax: ₹${taxDeduction}`);
console.log(`Net Salary: ₹${finalSalaryAmount}`);








/*
======================================================================
Q52. Bank Loan Eligibility System 
Question 
Ek Bank Loan Approval System banao. 
• Customer ka naam store karo.  
• Age store karo.  
• Monthly Income store karo.  
• Credit Score store karo.  
• Existing Loan Amount store karo.  
• Employment Status store karo.  
Business Rules 
• Age 21 se kam ho to loan reject.  
• Monthly income ₹30,000 se kam ho to loan reject.  
• Credit Score 750 ya usse zyada ho to best interest rate.  
• Credit Score 650–749 ho to normal interest rate.  
• Credit Score 650 se kam ho to loan reject.  
• Existing loan ₹5,00,000 se zyada ho to loan reject.  
• Employment permanent ho to hi approval milega.  
• Final decision aur reason dikhana hai. 
======================================================================
*/
let loanApplicant = "Mohd Asif";
let ageNumber = 30;
let monthlyEarnings = 60000;
let creditRating = 780;
let outstandingLoan = 200000;
let employmentType = "Permanent";
let loanDecision = "";
let interestCategory = "";
let rejectionReason = "";
if(ageNumber < 21){
    loanDecision = "Reject";
    rejectionReason = "Age below 21";
}else if(monthlyEarnings < 30000){
    loanDecision = "Reject";
    rejectionReason = "Monthly income below ₹30,000";
}else if(creditRating < 650){
    loanDecision = "Reject";
    rejectionReason = "Credit score below 650";
}else if(outstandingLoan > 500000){
    loanDecision = "Reject";
    rejectionReason = "Existing loan above ₹5,00,000";
}else if(employmentType !== "Permanent"){
    loanDecision = "Reject";
    rejectionReason = "Employment is not permanent";
}else if(creditRating >= 750){
    loanDecision = "Approve";
    interestCategory = "Best";
    rejectionReason = "None"
}else{
    loanDecision = "Approve";
    interestCategory = "Normal";
    rejectionReason = "None";
}
console.log(`Applicant Name: ${loanApplicant}`);
console.log(`Age Number: ${ageNumber}`);
console.log(`Monthly Earnings: ₹${monthlyEarnings}`);
console.log(`Credit Rating: ${creditRating}`);
console.log(`Outstanding Loan: ₹${outstandingLoan}`);
console.log(`Employment Type: ${employmentType}`);
console.log(`Loan Decision: ${loanDecision}`);
console.log(`Interest Category: ${interestCategory}`);
console.log(`Rejection Reason: ${rejectionReason}`);








/*
===================================================================================
Q53. Hospital Billing System 
Question 
Ek Hospital Billing System banao. 
• Patient ka naam store karo.  
• Age store karo.  
• Room Charges store karo.  
• Medicine Charges store karo.  
• Test Charges store karo.  
• Insurance Status store karo.  
Business Rules 
• Pehle total bill nikalo.  
• Insurance hai to bill ka 80% insurance cover karega.  
• Senior Citizen ko 10% discount milega.  
• Agar total bill ₹1,00,000 se zyada hai to 5% additional service 
charge add karo.  
• Emergency patient ho to ₹2,500 emergency charge add karo.  
• Final payable amount dikhana hai.  
===================================================================================
*/
let patientLabel = "Mohd Asif";
let ageGroup = 65;
let roomCost = 70000;
let medicineCost = 20000;
let testCost = 15000;
let insuranceActive = true;
let emergencyStatus = true;
let grossBill = roomCost + medicineCost + testCost;
let insuranceCoverage = 0;
let amountAfterInsurance = 0;
let seniorCitizenDiscount = 0;
let serviceCharge = 0;
let emergencyCharge = 0;
let payableHospitalBill = 0;
if(insuranceActive === true){
    insuranceCoverage = (grossBill * 80) / 100;
}
amountAfterInsurance = grossBill - insuranceCoverage;
if(ageGroup >= 60){
    seniorCitizenDiscount = (amountAfterInsurance * 10) / 100;
}
if(grossBill > 100000){
    serviceCharge = (amountAfterInsurance * 5) / 100;
}
if(emergencyStatus === true){
    emergencyCharge = 2500;
}
payableHospitalBill = (serviceCharge + emergencyCharge + amountAfterInsurance) - seniorCitizenDiscount;
console.log(`Patient Label: ${patientLabel}`);
console.log(`Age Years: ${ageGroup}`);
console.log(`Room Rent: ₹${roomCost}`);
console.log(`Medicine Cost: ₹${medicineCost}`);
console.log(`Test Cost: ₹${testCost}`);
console.log(`Insurance Active: ${insuranceActive}`);
console.log(`Emergency Case: ${emergencyStatus}`);
console.log(`Total Bill: ₹${grossBill}`);
console.log(`Insurance Coverage: ₹${insuranceCoverage}`);
console.log(`Amount After Insurance: ₹${amountAfterInsurance}`);
console.log(`Senior Citizen Discount: ₹${seniorCitizenDiscount}`);
console.log(`Service Charge: ₹${serviceCharge}`);
console.log(`Emergency Charge: ₹${emergencyCharge}`);
console.log(`Final Payable Amount: ₹${payableHospitalBill}`);








/*
==================================================================================
Q54. University Admission System 
          Question 
Ek University Admission System banao. 
• Student ka naam store karo.  
• Percentage store karo.  
• Entrance Exam Marks store karo.  
• Category store karo.  
• Annual Family Income store karo.  
Business Rules 
• Percentage 60% se kam ho to admission reject.  
• Entrance marks 50 se kam ho to admission reject.  
• Percentage 90% ya usse zyada ho to Merit Admission.  
• Family income ₹3,00,000 se kam ho to scholarship do.  
• Reserved category ke students ko admission priority do.  
• Final admission status aur scholarship details dikhani hain. 
==================================================================================
*/
let studentApplicant = "Mohd Asif";
let academicPercentage = 92;
let entranceScore = 78;
let studentCategory = "Reserved";
let familyIncome = 250000;
let admissionStatus = "";
let scholarshipResult = "Not Approved";
let admissionPriority = "";
if(academicPercentage < 60){
    admissionStatus = "Rejected";
}else if(entranceScore < 50){
    admissionStatus = "Rejected";
}else if(academicPercentage >= 90){
    admissionStatus = "Merit Admission";
}else{
    admissionStatus = "Approved";
}if(familyIncome < 300000){
    scholarshipResult = "Approved";
}if(studentCategory === "Reserved"){
    admissionPriority = "Yes";
}else{
    admissionPriority = "No";
}
console.log(`Candidate Name: ${studentApplicant}`);
console.log(`Academic Percentage: ${academicPercentage}`);
console.log(`Entrance Score: ${entranceScore}`);
console.log(`Student Category: ${studentCategory}`);
console.log(`Family Income: ₹${familyIncome}`);
console.log(`Admission Status: ${admissionStatus}`);
console.log(`Scholarship Status: ${scholarshipResult}`);
console.log(`Admission Priority: ${admissionPriority}`);








/*
============================================================================================
Q55. Airline Ticket Billing System 
Question 
Ek Airline Booking System banao. 
• Passenger ka naam store karo.  
• Age store karo.  
• Ticket Price store karo.  
• Baggage Weight store karo.  
• Seat Type store karo.  
• Meal Required store karo.  
Business Rules 
• Senior Citizen ko 15% discount do.  
• Business Seat ho to ₹8,000 extra add karo.  
• Baggage 20 KG se zyada ho to har extra KG par ₹500 charge 
add karo.  
• Meal liya ho to ₹750 add karo.  
• Final ticket amount aur booking details dikhani hain.  
==============================================================================================
*/
let travelerName = "Mohd Asif";
let travelerAge = 65;
let baseTicketFare = 20000;
let luggageWeight = 25;
let seatCategory = "Business";
let mealRequired = true;
let ageDiscount = 0;
let seatUpgradeCharge = 0;
let extraBaggageCharge = 0;
let mealCharge = 0;
let payableTicketAmount = 0;
if(travelerAge >= 60){
    ageDiscount = 15;
}
ageDiscount = (baseTicketFare * ageDiscount) / 100;
if(seatCategory === "Business"){
    seatUpgradeCharge = 8000;
}
if(luggageWeight > 20){
    extraBaggageCharge = (luggageWeight - 20)*500;
}
if(mealRequired === true){
    mealCharge = 750;
}
payableTicketAmount = (baseTicketFare - ageDiscount) + seatUpgradeCharge + extraBaggageCharge + mealCharge;
console.log(`Traveler Name: ${travelerName}`);
console.log(`Traveler Age: ${travelerAge}`);
console.log(`Base Ticket Fare: ₹${baseTicketFare}`);
console.log(`Luggage Weight: ${luggageWeight}`);
console.log(`Seat Category: ${seatCategory}`);
console.log(`Meal Required: ${mealRequired}`);
console.log(`Senior Discount: ₹${ageDiscount}`);
console.log(`Seat Upgrade Charge: ₹${seatUpgradeCharge}`);
console.log(`Extra Baggage Charge: ₹${extraBaggageCharge}`);
console.log(`Meal Charge: ₹${mealCharge}`);
console.log(`Payable Ticket Amount: ₹${payableTicketAmount}`);








/*
============================================================================================
Q56. Insurance Claim Verification System 
Question 
Ek Insurance Company ka Claim Verification System banao. 
• Customer ka naam store karo.  
• Policy Status store karo.  
• Policy Duration (Years) store karo.  
• Claim Amount store karo.  
• Accident Type store karo.  
• Police Report Available hai ya nahi, ye store karo.  
Business Rules 
• Agar policy inactive hai to claim reject.  
• Agar policy duration 1 saal se kam hai to claim reject.  
• Agar claim amount ₹5,00,000 se zyada hai to manager 
approval zaroori hai.  
• Agar accident major hai to police report hona zaroori hai.  
• Agar police report nahi hai to claim reject.  
• Agar claim approve hota hai to final approved amount 
dikhana hai.  
• Final status aur reason bhi dikhana hai. 
===========================================================================================
*/
let claimCustomer = "Mohd Asif";
let policyStatus = "Active";
let policyYears = 3;
let claimValue = 650000;
let accidentCategory = "Major";
let policeReportAvailable = true;
let claimStatus = "";
let managerApproval = "No";
let approvedAmount = 0;
let claimRemark = "";
if(policyStatus !== "Active"){
    claimStatus = "Rejected";
    claimRemark = "Policy inactive";
}else if(policyYears < 1){
    claimStatus = "Rejected";
    claimRemark = "Policy duration less than 1 year";
}else if(accidentCategory === "Major" && policeReportAvailable !== true ){
    claimStatus = "Rejected";
    claimRemark = "Police report required for major accident";
}else{
    claimStatus = "Approved";
    claimRemark = "None";
}if(claimValue > 500000){
    managerApproval = "Yes";
}if(claimStatus === "Approved"){
    approvedAmount = claimValue;
}
console.log(`Claim Customer: ${claimCustomer}`);
console.log(`Policy Status: ${policyStatus}`);
console.log(`Policy Years: ${policyYears}`);
console.log(`Claim Value: ₹${claimValue}`);
console.log(`Accident Category: ${accidentCategory}`);
console.log(`Police Report Available: ${policeReportAvailable}`);
console.log(`Claim Status: ${claimStatus}`);
console.log(`Manager Approval: ${managerApproval}`);
console.log(`Approved Amount: ₹${approvedAmount}`);
console.log(`Rejection Reason: ${claimRemark}`);








/*
=================================================================================
Q57. Amazon Order Processing System 
Question 
Ek E-Commerce Order Processing System banao. 
• Customer ka naam store karo.  
• Order Amount store karo.  
• Prime Membership store karo.  
• Payment Status store karo.  
• Stock Available hai ya nahi, ye store karo.  
• Delivery Distance store karo.  
Business Rules 
• Payment successful hona chahiye.  
• Product stock me hona chahiye.  
• Prime customer ko free delivery milegi.  
• Non-Prime customer ko free delivery tab milegi jab order 
₹999 ya usse zyada ho.  
• Delivery distance 50 KM se zyada ho to ₹150 extra delivery 
charge lagao.  
• Final bill aur order status dikhana hai.  
=================================================================================
*/
let shopperName = "Mohd Asif";
let orderValue = 1200;
let primeMember = false;
let paymentStatus = "Successful";
let stockAvailable = true;
let deliveryRange = 60;
let orderStatus = "";
let shippingCharge = 0;
let extraDeliveryCharge = 0;
let totalOrderBill = 0;
if(paymentStatus !== "Successful"){
    orderStatus = "Cancelled";
}else if(stockAvailable === false){
    orderStatus = "Cancelled";
}else{
    orderStatus = "Confirmed";
}if(primeMember === true){
    shippingCharge = 0;
}else if(orderValue >= 999){
    shippingCharge = 0;
}else{
    shippingCharge = 100;
}if(deliveryRange > 50){
    extraDeliveryCharge = 150;
}
totalOrderBill = orderValue + shippingCharge +extraDeliveryCharge;
console.log(`Buyer Name: ${shopperName}`);
console.log(`Order Value: ₹${orderValue}`);
console.log(`Prime Member: ${primeMember}`);
console.log(`Payment Status: ${paymentStatus}`);
console.log(`Stock Available: ${stockAvailable}`);
console.log(`Delivery Range: ${deliveryRange}KM`);
console.log(`Order Status: ${orderStatus}`);
console.log(`Delivery Charge: ₹${shippingCharge}`);
console.log(`Extra Delivery Charge: ₹${extraDeliveryCharge}`);
console.log(`Total Order Bill: ₹${totalOrderBill}`);








/*
===================================================================================
Q58. Railway Reservation System 
Question 
Ek Railway Reservation System banao. 
• Passenger ka naam store karo.  
• Age store karo.  
• Seat Available hai ya nahi, ye store karo.  
• Ticket Type store karo.  
• Journey Distance store karo.  
• Base Fare store karo.  
Business Rules 
• Seat available nahi hai to Waiting List dikhani hai.  
• Senior Citizen ko 40% discount dena hai.  
• Tatkal Ticket par 30% extra charge lagana hai.  
• Journey 1000 KM se zyada ho to ₹250 Superfast Charge add 
karna hai.  
• Final ticket amount aur booking status dikhana hai. 
====================================================================================
*/
let railPassenger = "Mohd Asif";
let passengerYears = 65;
let seatAvailable = "Yes";
let ticketCategory = "Tatkal";
let journeyDistance = 1200;
let ticketFare = 2000;
let seniorRelief = 0;
let tatkalCharge = 0;
let superfastCharge = 0;
let bookingStatus = "";
let finalRailFare = 0;
if(seatAvailable === "No"){
    bookingStatus = "Waiting List";
}else{
    bookingStatus = "Confirmed";
}if(passengerYears >= 60){
    seniorRelief = 40;
}
seniorRelief = (ticketFare * seniorRelief) / 100;
if(ticketCategory === "Tatkal"){
    tatkalCharge = 30;
}
tatkalCharge = (ticketFare * tatkalCharge) / 100;
if(journeyDistance > 1000){
    superfastCharge = 250;
}
finalRailFare = (ticketFare + tatkalCharge + superfastCharge) - seniorRelief;
console.log(`Rail Passenger: ${railPassenger}`);
console.log(`Traveler Age: ${passengerYears}`);
console.log(`Seat Available: ${seatAvailable}`);
console.log(`Ticket Category: ${ticketCategory}`);
console.log(`Journey Distance: ${journeyDistance}KM`);
console.log(`Base Fare: ₹${ticketFare}`);
console.log(`Booking Status: ${bookingStatus}`);
console.log(`Age Discount: ₹${seniorRelief}`);
console.log(`Tatkal Charge : ₹${tatkalCharge}`);
console.log(`Superfast Charge: ₹${superfastCharge}`);
console.log(`Final Rail Fare: ₹${finalRailFare}`);








/*
=======================================================================================
Q59. Credit Card Eligibility System 
Question 
Ek Credit Card Approval System banao. 
• Applicant ka naam store karo.  
• Age store karo.  
• Monthly Income store karo.  
• Credit Score store karo.  
• Existing EMI Amount store karo.  
• Employment Type store karo.  
Business Rules 
• Age 21 se kam ho to reject.  
• Monthly income ₹40,000 se kam ho to reject.  
• Credit score 750 ya usse zyada ho to Platinum Card.  
• Credit score 700–749 ho to Gold Card.  
• Credit score 650–699 ho to Silver Card.  
• Credit score 650 se kam ho to reject.  
• Existing EMI monthly income ke 50% se zyada ho to reject.  
• Permanent employee ko hi approval milega.  
• Final card category ya rejection reason dikhana hai. 
========================================================================================
*/
let cardApplicant = "Mohd Asif";
let applicantYears = 30;
let monthlyIncome = 80000;
let creditScore = 760;
let currentEMI = 20000;
let jobStatus = "Permanent";
let applicationStatus = "";
let cardCategory = "";
let applicationRemark = "None";
if(applicantYears < 21){
    applicationStatus = "Rejected";
    applicationRemark = "Age below 21";
}else if(monthlyIncome < 40000){
    applicationStatus = "Rejected";
    applicationRemark = "Monthly income below ₹40,000";
}else if(creditScore < 650){
    applicationStatus = "Rejected";
    applicationRemark = "Credit score below 650";
}else if(currentEMI > ((monthlyIncome * 50) / 100)){
    applicationStatus = "Rejected";
    applicationRemark = "EMI exceeds 50% of monthly income";
}else if(jobStatus !== "Permanent"){
    applicationStatus = "Rejected";
    applicationRemark = "Employment is not permanent";
}else if(creditScore >= 750){
    applicationStatus = "Approved";
    cardCategory = "Platinum";
    applicationRemark = "Eligible for Platinum Card";
}else if(creditScore >= 700){
    applicationStatus = "Approved"
    cardCategory = "Gold";
    applicationRemark = "Eligible for Gold Card";
}else{
    applicationStatus = "Approved";
    cardCategory = "Silver";
    applicationRemark = "Eligible for Silver Card";
}
console.log(`Card Applicant: ${cardApplicant}`);
console.log(`Applicant Years: ${applicantYears}`);
console.log(`Monthly Income:  ₹${monthlyIncome}`);
console.log(`Credit Score: ${creditScore}`);
console.log(`Current EMI: ₹${currentEMI}`);
console.log(`Employment Type: ${jobStatus}`);
console.log(`Application Status: ${applicationStatus}`);
console.log(`Card Category: ${cardCategory}`);
console.log(`Application Remark: ${applicationRemark}`);








/*
================================================================================
Q60. University Semester Result System 
Question 
Ek University Result System banao. 
• Student ka naam store karo.  
• Theory Marks store karo.  
• Practical Marks store karo.  
• Attendance Percentage store karo.  
• Internal Marks store karo.  
Business Rules 
• Attendance 75% se kam ho to result rok do.  
• Theory me minimum passing marks hone chahiye.  
• Practical me minimum passing marks hone chahiye.  
• Internal marks minimum hone chahiye.  
• Sab conditions complete hone ke baad total percentage 
nikalo.  
• Percentage ke hisaab se Grade do.  
• Final result aur grade dikhana hai. 
=================================================================================
*/
let learnerName = "Mohd Asif";
let theoryMarks = 85;
let practicalMarks = 80;
let attendancePercent = 90;
let internalMarks = 25;
let resultStatus = "";
let totalMarks = 0;
let overallPercentage = 0;
let finalGrade = "";
if (attendancePercent < 75) {
    resultStatus = "Withheld";
} else if (theoryMarks < 33) {
    resultStatus = "Failed";
} else if (practicalMarks < 33) {
    resultStatus = "Failed";
} else if (internalMarks < 20) {
    resultStatus = "Failed";
} else {
    resultStatus = "Passed";
}
if (resultStatus === "Passed") {
    totalMarks = theoryMarks + practicalMarks + internalMarks;
    overallPercentage = ((totalMarks / 230) * 100).toFixed(2);
    if (overallPercentage >= 90) {
        finalGrade = "A";
    } else if (overallPercentage >= 75) {
        finalGrade = "B";
    } else if (overallPercentage >= 60) {
        finalGrade = "C";
    } else if (overallPercentage >= 50) {
        finalGrade = "D";
    } else {
        finalGrade = "Fail";
    }
}
console.log(`Student Name: ${learnerName}`);
console.log(`Theory Marks: ${theoryMarks}`);
console.log(`Practical Marks: ${practicalMarks}`);
console.log(`Attendance Rate: ${attendancePercent}%`);
console.log(`Internal Marks: ${internalMarks}`);
console.log(`Result Status: ${resultStatus}`);
console.log(`Percentage: ${overallPercentage}%`);
console.log(`Grade: ${finalGrade}`);








/*
=======================================================================================
Q61. Airport Check-in & Boarding System 
Question 
Ek Airport Check-in System banao. 
• Passenger ka naam store karo.  
• Age store karo.  
• Ticket Type store karo.  
• Passport Valid hai ya nahi store karo.  
• Visa Valid hai ya nahi store karo.  
• Check-in Time store karo.  
• Flight Departure Time store karo.  
• Baggage Weight store karo.  
• Cabin Baggage Weight store karo.  
• Dangerous Item hai ya nahi store karo.  
Business Rules 
• Passport valid hona chahiye.  
• International flight ke liye visa valid hona chahiye.  
• Check-in departure se 45 minutes pehle complete hona 
chahiye.  
• Cabin baggage 7 KG se zyada nahi hona chahiye.  
• Check-in baggage 20 KG se zyada ho to har extra KG par ₹800 
charge lagega.  
• Dangerous item hone par boarding reject.  
• Senior Citizen ko priority boarding milegi.  
• Business Class ko lounge access milega.  
• Final ticket amount aur boarding status dikhana hai. 
========================================================================================
*/
let airPassenger = "Mohd Asif";
let travelerYears = 65;
let flightType = "Business";
let passportValid = true;
let visaValid = true;
let checkInMinutesBeforeDeparture = 60;
let checkInBaggage = 25;
let cabinBaggage = 6;
let dangerousItem = false;
let ticketBaseAmount = 20000;
let boardingStatus  = "";
let baggageFee = 0;
let priorityBoarding = "";
let loungeAccess = "";
let payableFare = 0;
if(passportValid !== true){
    boardingStatus = "Rejected";
}else if(flightType === "International" && visaValid !== true){
    boardingStatus = "Rejected";
}else if(checkInMinutesBeforeDeparture < 45){
    boardingStatus  = "Rejected";
}else if(cabinBaggage > 7){
    boardingStatus  = "Rejected";
}else if(dangerousItem === true){
    boardingStatus  = "Rejected";
}else{
    boardingStatus  = "Approved";
}if(checkInBaggage > 20){
    baggageFee = (checkInBaggage - 20)*800;
}if(travelerYears >= 60){
    priorityBoarding = "Yes";
}else{
    priorityBoarding = "No";
}if(flightType === "Business"){
    loungeAccess = "Yes";
}else{
    loungeAccess = "No";
}
payableFare = ticketBaseAmount + baggageFee;
console.log(`Air Passenger: ${airPassenger}`);
console.log(`Traveler Years: ${travelerYears}`);
console.log(`Flight Type: ${flightType}`);
console.log(`Passport Valid: ${passportValid}`);
console.log(`Visa Valid: ${visaValid}`);
console.log(`Check-in Minutes Before Departure: ${checkInMinutesBeforeDeparture}`);
console.log(`Check-in Baggage: ${checkInBaggage}KG`);
console.log(`Cabin Baggage: ${cabinBaggage}KG`);
console.log(`Dangerous Item: ${dangerousItem}`);
console.log(`Boarding Status: ${boardingStatus }`);
console.log(`Extra Baggage Charge: ₹${baggageFee}`);
console.log(`Priority Boarding: ${priorityBoarding}`);
console.log(`Lounge Access: ${loungeAccess}`);
console.log(`Final Ticket Amount: ₹${payableFare}`);








/*
=========================================================================
Q62. Netflix Subscription System 
          Question 
Ek OTT Subscription System banao. 
• User ka naam store karo.  
• Current Plan store karo.  
• Devices Count store karo.  
• Payment Status store karo.  
• Subscription Days Left store karo.  
• Coupon Available hai ya nahi store karo.  
• Student Status store karo.  
Business Rules 
• Payment pending ho to account suspend.  
• Trial khatam ho chuka ho to renewal zaroori hai.  
• Student ko 20% discount milega.  
• Coupon valid ho to 10% extra discount milega.  
• Basic Plan me 1 device allowed.  
• Standard Plan me 2 devices allowed.  
• Premium Plan me 4 devices allowed.  
• Device limit cross hone par login block.  
• Final payable amount aur account status dikhana hai. 
=======================================================================
*/
let streamUser = "Mohd Asif";
let subscriptionPlan = "Premium";
let deviceCount = 3;
let billingState = "Paid";
let daysRemaining = 25;
let couponAvailable = true;
let studentUser = true;
let planAmount = 799;
let educationDiscount = 0;
let couponDiscount = 0;
let finalSubscriptionAmount = 0;
let subscriptionState = "";
let loginStatus = "";
if(billingState !== "Paid"){
    subscriptionState = "Suspended";
}else if(daysRemaining <= 0){
    subscriptionState = "Renewal Required";
}else{
    subscriptionState = "Active";
}if(studentUser === true){
    educationDiscount = 20;
}
educationDiscount = (planAmount * educationDiscount) / 100;
if(couponAvailable === true){
    couponDiscount = (planAmount * 10) / 100;
}
finalSubscriptionAmount = (planAmount - educationDiscount - couponDiscount).toFixed(2);
if(subscriptionPlan === "Basic" && deviceCount > 1){
    loginStatus = "Blocked";
}else if(subscriptionPlan === "Standard" && deviceCount > 2){
    loginStatus = "Blocked";
}else if(subscriptionPlan === "Premium" && deviceCount > 4){
    loginStatus = "Blocked";
}else{
    loginStatus = "Allowed";
}
console.log(`Subscriber Name: ${streamUser}`);
console.log(`Subscription Plan: ${subscriptionPlan}`);
console.log(`Device Count: ${deviceCount}`);
console.log(`Payment Status: ${billingState}`);
console.log(`Days Remaining: ${daysRemaining}`);
console.log(`Coupon Available: ${couponAvailable}`);
console.log(`Student User: ${studentUser}`);
console.log(`Plan Amount: ₹${planAmount}`);
console.log(`Student Discount: ₹${educationDiscount}`);
console.log(`Coupon Discount: ₹${couponDiscount}`);
console.log(`Payable Amount: ₹${finalSubscriptionAmount}`);
console.log(`Account Status: ${subscriptionState}`);
console.log(`Login Status: ${loginStatus}`);









/*
===========================================================================
Q63. Swiggy Delivery Partner Earnings 
Question 
Ek Delivery Partner Earnings System banao. 
• Partner ka naam store karo.  
• Total Deliveries store karo.  
• Total Distance store karo.  
• Customer Rating store karo.  
• Rain Status store karo.  
• Peak Hour store karo.  
Business Rules 
• Har delivery ka base payment add karo.  
• Distance ke hisaab se payment add karo.  
• Rating 4.8 ya usse zyada ho to incentive do.  
• Peak hour me extra incentive do.  
• Rain mode me extra payment do.  
• Deliveries 100 se zyada ho to monthly bonus do.  
• Final earnings dikhani hain. 
===========================================================================
*/
let deliveryPartner = "Mohd Asif";
let completedOrders = 120;
let coveredDistance = 850;
let partnerRating = 4.9;
let isRaining = true;
let isPeakTime = true;
let basePayment = 0;
let distancePayment = 0;
let ratingBonus = 0;
let peakHourBonus = 0;
let rainBonus = 0;
let monthlyBonus = 0;
let finalEarnings = 0;
basePayment = completedOrders * 40;
distancePayment = coveredDistance * 8;
if(partnerRating >= 4.8){
    ratingBonus = 1000;
}if(isPeakTime === true){
    peakHourBonus = 500;
}if(isRaining === true){
    rainBonus = 700;
}if(completedOrders > 100){
    monthlyBonus = 2000;
}
finalEarnings = basePayment + distancePayment + rainBonus + peakHourBonus + ratingBonus + monthlyBonus;
console.log(`Partner Name: ${deliveryPartner}`);
console.log(`Total Deliveries: ${completedOrders}`);
console.log(`Total Distance: ${coveredDistance} KM`);
console.log(`Customer Rating: ${partnerRating}`);
console.log(`Rain Status: ${isRaining}`);
console.log(`Peak Hour: ${isPeakTime}`);
console.log(`Base Payment: ₹${basePayment}`);
console.log(`Distance Payment: ₹${distancePayment}`);
console.log(`Rating Bonus: ₹${ratingBonus}`);
console.log(`Peak Hour Bonus: ₹${peakHourBonus}`);
console.log(`Rain Bonus: ₹${rainBonus}`);
console.log(`Monthly Bonus: ₹${monthlyBonus}`);
console.log(`Final Earnings: ₹${finalEarnings}`);
