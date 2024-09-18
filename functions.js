/* Functions */

// functions are REPEATABLE blocks of code!
// Kind of like math functions 

// f(x) = x * 2

// f(-2) => -4
// f(-1) => -2
// f(0) => 0
// f(1) => 2
// f(2) => 4
// f(f(3)) => 12

// We can condense this following code...

const movie1 = 'Saving Private Ryan'
const year1 = 1998
console.log(`${movie1} was released in ${year1}`)

const movie2 = 'Interstellar'
const year2 = 2014
console.log(`${movie2} was released in ${year2}`)

const movie3 = 'Jason Bourne'
const year3 = 2016
console.log(`${movie3} was released in ${year3}`)

// ... With this function!
function showMovie (movie, year) {
    console.log(`${movie} was released in ${year}`)
}
  
showMovie('Saving Private Ryan', 1998) // Saving Private Ryan was released in 1998
showMovie('Interstellar', 2014) // Interstellar was released in 2014
showMovie('Jason Bourne', 2016) // Jason Bourne was released in 2016


// Here's a simple function though
function sayHello() {
    console.log("Hello")
}

// Call it like this
sayHello()

// Be sure to name your functions properly

// This keeps our code DRY, repeat yourself as little as possible

// Place parameters in the parenthesis, it is a variable
function sayHelloName(name) {
    console.log(`Hello ${name}`)
}

sayHelloName('Jack') // "Hello Jack"
sayHelloName('Jill') // "Hello Jill"

function sayHelloNameDay(name, day) {
    console.log(`Hello ${name}, have a nice ${day}`)
}

sayHelloNameDay('Martin', 'Thursday') // Hello Martin, have a nice Thursday

// In code block, parameters and variables don't need to be used in same order,
// But they MUST be passed into function in same order

sayHelloNameDay('Thursday', 'Martin') // Hello Thursday, have a nice Martin

// This is especially important when working with different datatypes
