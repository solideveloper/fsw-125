// notes.js

// node.js
// local JS runtime enviroment based on the V* chrome engine



// es6 syntacical sugar over module.exports / require
// import WhateverComponent from '../whateverComponent'
// export defualt WhateverComponent


// module.exports/export and require/import



// OOP 
// 4 pillars => abstraction, encapsulation, polymorphism, inheritence
// modularization === abstraction and encapsulation (2 pillars of OOP)
// better or less conflicting naming across large projects
// more easily readable
// easier to debug
// single source of truth

// const arrowFunction = () => {}









// language has 1st class functions if we can treat those functions like any given variable
// return functions from a funciton
// we can store a function as a value
// pass a function in as ana rgument to another function



function callbackExample(num1, num2) {
    return num1 + num2
}

// arguments keyoword when called within a fucntions closure provides you an array of all the arguments passed into that function

// function hofExample(first, whatever, snow) {
    
//     // anythignatall => treated as a local variable within the given block of code

//     console.log(arguments);

//     // const result = cb(add1, add2);
//     // console.log(result)
// }

// // HOF === higher order components take in one component as an argument via props and then return a new component
// hofExample(callbackExample, 4, true , 5, 4,3, 3, 4, 5); // 9

// // console.log(callbackExample);


// scoping, closure, reassignments, hoisting
// var, let, const
// named fx's, annonymous fxs, arrow fx, constructor functions, classes

// ASI

const someVar = true;


let objexample= {

}

// function someFx() {
//     var whatever = false;
//     console.log(someVar); // undefined
// } 

// objexample = 'reasignAgain' //
someVar = 'reasign' // 










const exampleStoring = callbackExample;
// console.log(exampleStoring)

// 3 ways to invoke fx in js
// 
// 
// 




// closure & scoping
// var (globally scoped/function scoped)
// let, const (block scoped)

function closureExample() {
    const exampleVariable = 'exampleVariable'
    // console.log(this)
    
    function anotherFunction() {
        console.log(exampleVariable);
        const anotherVariable = 5
        // console.log(this)
        debugger;
        const thisVar = this;
    }

    anotherFunction()
}

// closureExample()

// console.log(this)
// arrow functions do NOT create closure and therefore have no lexical binding of this and by extension do not create their won scop
const arrowFunction = () => {
    // console.log(this)
}

// console.log(exampleVariable);


// JS call stack (LIFO) data structure 
// single threaded
// supermarket you are checking out in a cashier line


// Node event loop is async non-blocking I/O
// multi-threaded (kernel)
// supermarket you are checking out with the self service kiosks


