
// function greeting(name, phrase){
//     return `${phrase} ${name}!!!`;
// }

// const greeting = (name, phrase) => {
//     return `${phrase} ${name}!!!`;
// }

const greeting = (name, phrase) => `${phrase} ${name}!!!`;

console.log( greeting("class", "Goodday") );
console.log( greeting("Kevin", "Howdy") );

// const goodbye = (who) => `Goodbye ${who}.`;
const goodbye = who => `Goodbye ${who}.`;

console.log( goodbye("Kevin") );

const withTax = amount => amount * 1.08;
console.log( withTax(10.00))

const toSeconds = ms => ms / 1000;
console.log( toSeconds(13500) )

//IIFE Immediatly Invoked (called) Function Expression

console.log( (who => `So long ${who}.`)("Class") );

//CREATING AN ANOUNMOUS IIFE, CREATS ITS OWN SCOPE
console.log(window.document);
(()=>{

    //no let or const
    var document = "ABC"
    console.log(document)

})();
console.log(window.document);