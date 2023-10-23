//WORKBOOK3 1-9
//DEFINE THE FUNCTION ONCE
function displayNameAndAge(name, age) {
    let message = name + " is " + age;
    console.log(message);
}

//DEFINE THE ARGUMENTS
let someName = "Ezra";
let someAge = 17;
//CALL THE FIRST TIME
displayNameAndAge(someName, someAge);

//RE-DEFINE THE ARGUMENTS
someName = "Ian";
someAge = 16;
//CALL A SECOND TIME WITH THE UPDATED
displayNameAndAge(someName, someAge);
