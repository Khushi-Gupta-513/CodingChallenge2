// Step 1: Function to calculate the tip using a ternary operator
function calculateTip(bill) {
    // If bill is between 50 and 300, tip is 15%, otherwise it's 20%
    let tipPercentage = (bill >= 50 && bill <= 300) ? 0.15 : 0.2;
    // Calculate the tip amount
    let tip = bill * tipPercentage;
    return tip;
}

// Step 2: Function to calculate the total and split the bill
function splitBill(bill, numberOfPeople) {
    // Get the tip amount
    let tip = calculateTip(bill);
    // Calculate total (bill + tip)
    let total = bill + tip;
    // Divide the total by the number of people
    let perPerson = total / numberOfPeople;
    
    // Display the bill, tip, and total in the correct format
    console.log(`The bill was $${bill}, the tip was $${tip.toFixed(2)}, and the total value is $${total.toFixed(2)}`);
}

// Step 3: Arrays for bills, tips, and totals
let bills = [275, 40, 430, 125, 555, 44];  // Array of bill amounts
let tips = [];  // Empty array to store calculated tips
let totals = [];  // Empty array to store totals (bill + tip)

// Loop through each bill to calculate tips and totals
for (let i = 0; i < bills.length; i++) {
    let tip = calculateTip(bills[i]);  // Get the tip for each bill
    tips.push(tip);  // Add the tip to the tips array
    totals.push(bills[i] + tip);  // Add the total (bill + tip) to the totals array
    
    // Display the result for each bill in the correct format
    console.log(`The bill was $${bills[i]}, the tip was $${tip.toFixed(2)}, and the total value is $${totals[i].toFixed(2)}`);
}




