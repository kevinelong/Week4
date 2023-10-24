

let text = "Nina's dog."

let teacher = 'kevin says "JUMP"!!!'

// \ "literal" - backslash is the ESCAPE character
let text2 = 'Nina\'s dog.'

let teacher2 = "kevin says,\n\t \"JUMP\"!!!"

//MODERN with back ticks - template string ${expr}
let text3 = `Nina's dog.`

let teacher3 = `kevin says "JUMP"!!!`

console.log(`\\`); //literal backslash

let partCode = "275656543-large";
let partNum, size;
let dashPos = partCode.indexOf("-");
partNum = partCode.substring(0, dashPos);
size = partCode.substring(dashPos + 1);

console.log(partNum)
console.log(size)