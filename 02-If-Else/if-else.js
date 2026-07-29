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
