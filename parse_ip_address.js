// F5 Debug/Run

//https://medium.com/@anupamroy8/slice-vs-splice-vs-split-in-javascript-344c41cb94a5


let partCode = "abc-123-large"
//ONE SLICE OF BREAD
console.log(partCode.slice(4,7)); //123, accurate but need to find dash position in adv

//WHOLE LOAF OF BREAD GET SLICED
const parts = partCode.split("-") //delimiter (where to cut)
console.log( parts);
console.log(parts[1]); //123 weird but fast


let ip = "67.170.148.138";

let firstDot = ip.indexOf("."); //offset or distance from the first
console.log(firstDot)
let part1 = ip.slice(0, firstDot); //67
console.log(part1);

let secondDot = ip.indexOf(".", firstDot + 1);
console.log(secondDot);
let part2 = ip.slice(firstDot + 1, secondDot); //170
console.log(part2);

let thirdDot = ip.indexOf(".", secondDot + 1);
console.log(thirdDot);
let part3 = ip.slice(secondDot + 1, thirdDot); //148
console.log(part3);

let part4 = ip.slice(thirdDot + 1) // no second parameter means all the way to the end no stopping.
let part4b = ip.slice(thirdDot + 1, ip.length) //stop at length is the same as no second parameter.

console.log(part4);
console.log(part4b);

// NEW SCHOOL
let arrayList = ip.split("."); // COLLECTIONS: ARRAY/LIST/VECTOR
console.log(arrayList[0]);
console.log(arrayList[1]);
console.log(arrayList[2]);
console.log(arrayList[3]);


