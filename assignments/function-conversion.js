// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();
let myFunction = () => { console.log("Function was invoked!"); }
myFunction();
// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");
let anotherFunction = (param1) => (param1);
console.log(anotherFunction("test"));
// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);
let add = (param1, param2) => (param1 + param2);
console.log(add(3, 1));
// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);
let subtract = (param1, param2) => (param1 - param2);
console.log(subtract(9, 1));
// Stretch
const exampleArray = [1, 2, 3, 4];
const tripple = (exampleArray) => (exampleArray.map(function(num) { return num * 3; }));
console.log(tripple);
// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);