let inputs = "San Francisco,Dallas,Atlanta,Hartford";
let array = inputs.split(",");
// The array resembles the following
// position 0 - value "San Francisco"
// position 1 - value "Dallas"
// position 2 - value "Atlanta"
// position 3 - value "Hartford"
for (let i = 0; i < array.length; i++) { // i is for index AKA offset
    console.log(array[i]);
}
console.log("ALL DONE");