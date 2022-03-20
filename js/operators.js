/*
Core concepts

arithmetics (+, 0, *, /, %)
equality ===
logical AND operator &&
logical OR operator || (pipe)
*/

// ----- logical AND operator
const number = 15


if (number % 3 === 0 && number % 5 === 0) {
    console.log("number is divisble by both 3 and 5")
}

if (number % 4 === 0 && number % 5 === 0) {
    console.log("number is divisble by 4 and 5!!!")
} else {
    console.log("not divisble!!!")
}


// logical OR operator  

// if number is divisible by 3, OR if number is divisibl by 5
if (number % 4 === 0 || number % 5 === 0) {
    console.log("number is divisble!!!")
} else {
    console.log("not divisble!!!")
}