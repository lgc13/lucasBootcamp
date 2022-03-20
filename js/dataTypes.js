// This is a comment
// This is another comment
// This is a third comment

/* 

This is a multi line comment
I can type as many lines here as I want
The compiler will ignore everything here

*/


/*

Data types:
- String
- Number
- Boolean
- Null
- Undefined
- List(array)
- Function
- Objects

Operators:
+, -, *, /, <, >, <=, >=, ===

Functions
- console.log

Statements:
- if

*/

const country = "USA";
const sentence = "Yesterday was a really good day at work, I got to do some fun stuff, and played bloodborne afterwards";
const flower = 'Roses';

console.log(country)
console.log(sentence)
console.log(flower)

const myFirstNumber = 5
const secondNumber = 10

const sumTotal = myFirstNumber + secondNumber
const subtractionTotal = myFirstNumber - secondNumber
const multiplicationTotal = myFirstNumber * secondNumber
const divisionTotal = myFirstNumber / secondNumber

console.log("sumTotal: ", sumTotal)
console.log("subtractionTotal: ", subtractionTotal)
console.log("multiplicationTotal: ", multiplicationTotal)
console.log("divisionTotal: ", divisionTotal)

const nullVariable = null
const undefinedVariable = undefined

console.log("nullVariable: ", nullVariable)
console.log("undefinedVariable: ", undefinedVariable)

console.log("------------- if statements -----------------")
const isHappy = true
const isSad = false

console.log("isHappy: ", isHappy)
console.log("isSad: ", isSad)

if (isSad) {
    console.log("Yes, I am sad..... :(")
}

if (isHappy) {
    console.log("YES, I am happy!")
}

const number1 = 5
const number2 = 11
const number3 = 11

if (number1 <= number2) {
    console.log("number1 is less than number2")
}

if (number1 >= number2) {
    console.log("number1 is greater than number2")
}

if (number2 >= number3) {
    console.log("number2 is greater than or equal to number3")
}

if (number2 === number3) {
    console.log("number2: ", number2, " is equal to number3: ", number3)
}

