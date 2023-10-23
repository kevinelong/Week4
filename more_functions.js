//Functionsmore_functions.js
// displayMailingLabel()
//nameaddresscitystatezipconsole.log()
// addNumbers()num1num2
// someNumber + someNumber = someNumber displayReceipt()totalDueamountPaid
// Total Due: $someNumber
// Amount Paid: $someNumber
// Change Due: $someNumber
//  displayMailingLabel()
//  addNumbers()
//  displayReceipt()

// 1st
function displayMailingLabel(name, address, city, state, zip){
    console.log(name);
    console.log(address);
    console.log(city + ", " + state + " " + zip); // + concatenate - chained together
    // console.log(`${city}, ${state} ${zip}`); //back-tic template strings and ${expressions}
}
displayMailingLabel("Kevin", "1750 6th", "Columbia City", "OR", "97018");
displayMailingLabel("Nina", "1750 6th", "Columbia City", "OR", "97018");

//2nd
function addNumbers(num1, num2){
    return num1 + num2;
}

r1 = addNumbers(6,7)
r2 = addNumbers(11,22)
console.log(r1, r2)

//3rd

function displayReceipt(totalDue, amountPaid){
    const changeAmount = amountPaid - totalDue;
    console.log(`
        Total Due: $${totalDue}
        Amount Paid: $${amountPaid}
        Change Due: $${changeAmount}
    `); //end console.log
}
displayReceipt(5.00, 20.00) // expect 15.00 in change
displayReceipt(60.00, 100.00) // expect  40.00 in change
displayReceipt(25, 50.00) // expect 25.00 in change




//GIGO LAW - Garbage in -> Garbage Out
