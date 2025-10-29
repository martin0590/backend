// a module is an encapsulated and reusable chunk of code that has its own context
// in nodejs each file is treated as a separate module

// every module in nodejs gets wrapped in an IIFE before being added
// IIFE helps keep top-level variables scoped to the modules rather than the global object.
// the IIFE that wraps every module contains 5 parameters which are pretty important for the functioning of a module

// to load a moudule created in the modules folder into another file, i use the require function

// commonjs is a standard that states how a module should be structured and shared

// types of module
// 1. local modules - modules that we can create in my application
// 2. built-in modules - modules that nodejs ships with out of the box
// 3. third party modules - modules written by other developers that we can use in out application.

const add = require("./modules/add") // the require function loads the add module into this file. I am importing the function from add.js

const sum = add(1,2)

console.log(sum)



// different forms to export modules

const add = (a,b) => {
    return a + b
}

module.exports = add

//////////

module.exports = (a,b) => {
    return a + b
}

//////////

module.exports = {
    add
}

//////////////

module.exports.add = (a,b) => {
    return a + b
}





// ECMASCRIPT MODULES - instead of .js the file is .mjs

export default add 

// import add from './math-esm.mjs'


///////////////////////////

// export default (a,b) => {
//     return a + b
// }

// import add from './math-esm.mjs'

/////////////////////////////

// export default {
//     add
// }

// import math from './math-esm.mjs

// const { add } = math

//////////////////////////////

// named exports

export const adds  = (a,b) => {
    return a + b
}

// import * as math from './math-esm.mjs'

// const { add } = math

// import { add } from './math-esm.mjs'