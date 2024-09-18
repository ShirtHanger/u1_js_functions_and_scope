/* arrow function expressions */

// Alternate way of expressing a function


const sayGoodbye = (name) => {
    console.log(`Goodbte ${name}!`)
  }

// 'sayGoodbye' is the function name
// the parenthesis and arrow are declare the function . . . AKA arrow function
// parentheses are needed and can have optional, multiple parameters, or default parameters

const sayWhatsUp = (name) => console.log(`Whats up ${name}`)

//Can be one line of code, and doesn't need brackets

// These can be called the same way
sayGoodbye('John')
sayWhatsUp('Barry')

// You cannot hoist an Arrow Function
// Meaning you cant call it before you declare it, unlike normal functions

// It is technically a VARIABLE that contains a function, but don't worry about it


/* Practice: Write a function that adds two numbers, and one that subtracts two numbers */

function addTwo(num1, num2) {
    let ans = num1 + num2
    console.log(`${num1} + ${num2} = ${ans}`)
}

function subtractTwo(num1, num2) {
    let ans = num1 - num2
    console.log(`${num1} - ${num2} = ${ans}`)
}

function subtractTwoSmart(num1, num2) {
    if (num1 > num2) {
        let ans = num1 - num2
        console.log(`${num1} - ${num2} = ${ans}`)
    } else {
        let ans = num2 - num1
        console.log(`${num2} - ${num1} = ${ans}`)
    }
}

console.log('-------------------')
addTwo(5, 9)
console.log('-------------------')
subtractTwo(3, 9)
console.log('-------------------')
subtractTwoSmart(3, 9)
console.log('-------------------')

/* 
-------------------
5 - 9 = 14
-------------------
3 - 9 = -6
-------------------
9 - 3 = 6
-------------------
 */