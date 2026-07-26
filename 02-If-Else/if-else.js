/*                                              ============== All The Best ===================                                                  /*



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


