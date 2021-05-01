// main.js

const fxs = require('./calc'); // JS has first class functions

console.log(fxs) // object itself
console.log(fxs.squaredFx) // the function itself
console.log(fxs.squaredFx(2)) // 4
console.log(fxs.squaredFx2(3)) // someVar 

console.log(fxs.squaredFx(3)) // 9




