// OVERVIEW
// CONDITIONAL STATMENT IS IF/ELSE/ELSE_IF
// THey use a BOOLEAN Expression
// A Boolean is anything that boils down to TRUE or FALSE
// We use LOGICAL OPERATORS to create a boolean expression

// Common LOGICAL OPERATORS include:
//  == EQUALS
// >= GREATER THAN OR EQUAL TO
// <= LESS THAN OR EQUAL TO
// != NOT EQUAL

//EXAMPLE EXPRESSIONS
// (123 >= 12) -> TRUE
// (123 <= 12) -> FALSE

console.log( 123 >= 12) //true
console.log( 123 <= 12) //false

const LIMIT = 18 //A TRUE CONSTANT
let age = 25 //VARRIES PERSON TO PERSON

if(age >= LIMIT){
    console.log("GOOD TO GO")
}else{
     console.log("SORRY, NO WAY")
}

if(age >= 45){
    console.log("SCOTCH")
}else if (age >= 21){
    console.log("MARTINI")
}else if (age >= 13){
    console.log("SODA POP")
}else{
    console.log("MILK")
}

function isOfAge(age){
    if(age >= 21){
        return true
    }else{
        return false
    }
}

function isOfAge2(age){
    return age >= 21
}

eggs = false
flour = true
milk = true

// && AND

if(eggs && flour && milk){ //MUST BE ALL THREE
    console.log("CAN BAKE")
}else{
    console.log("NO BAKING")
}

// || OR

cookies = false
candy = false
fruit = true
if(cookies || candy || fruit){ //CAN BE ANY OF THE THREE
    console.log("CAN SNACK")
}else{
    console.log("GO HUNGRY =-(")
}
