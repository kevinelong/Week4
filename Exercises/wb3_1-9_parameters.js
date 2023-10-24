//WORKBOOK3 1-9




//DEFINE THE FUNCTION ONCE
function displayNameAndAge(name, age) {
    let message = name + " is " + age;
    console.log(message);
}

//DEFINE THE VARIABLES
let someName = "Ezra";
let someAge = 17;
//CALL THE FIRST TIME
displayNameAndAge(someName, someAge);

//RE-DEFINE THE VARIABLES
someName = "Ian";
someAge = 16;
//CALL A SECOND TIME WITH THE UPDATED
displayNameAndAge(someName, someAge);

let x = 150;
let y = 200;
let z = Math.abs(x - y); //convert -50 to +50 is what abs() does.
console.log(z)
