//CODE RE-USE, AKA STRUCTURED, AKA MODULAR
// DRY Principle - Don't Repeat Yourself.

// DEFINE THE FUNCTION
function greet(name, kind){
    return `${kind}, ${name}.`; //Use back-tick js template strings and expressions
    // return kind + " " + name;
}

//CALL THE FUNCTION AND PASSING THE RESULT TO LOG
console.log(greet("Kevin", "Howdy"));
console.log(greet("Class", "Good morning"));

const friend = false
if(friend){
    console.log(greet("Dude", "Yo"));
}else{
    console.log(greet("Gentle person", "Good day"));
}