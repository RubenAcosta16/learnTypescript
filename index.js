"use strict";
// you can separate to make more readible
let sales = 123456789;
let course = "TypeScript";
let isPublished = true;
// type any, is same like normal variable in js
let level;
function render(document) {
    console.log(document);
}
// arrays
let numbers = [1, 2, 3];
let numbers2 = [1, 2, "3"];
// tuples
let user = [1, "Ruben"];
// enums
// const small=1
// const medium=2
// const large=3
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
let mySize = Size.Medium;
console.log(mySize);
