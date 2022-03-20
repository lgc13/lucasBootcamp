/*
create a list of 10 numbers
give me the sum of all 10 numbers
give me the total of all 10 numbers subtracted by one another
give me the total of all 10 numbers multiplied by one another
give me the total of all 10 numbers divided by one another

ex: list 1, 2, 3
expect: 
sum: 6
subtraction: 2
multiplication: 6
division: 0.1666666667

*/
console.log("/ -- arithmetics with list items --/")
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const firstNumber = numbers[0]

let sum = 0
let subtraction = 0
let multiplication = 0
let division = 0

numbers.forEach(number => {
    sum = sum + number

    if (firstNumber === number) {
        console.log("first number!!!")
        subtraction = number
        multiplication = number
        division = number
    } else {
        subtraction = subtraction - number
        multiplication = multiplication * number
        division = division / number
    }
 
})

console.log("sum: ", sum)
console.log("subtraction: ", subtraction)
console.log("multiplication: ", multiplication)
console.log("division: ", division)

console.log(" ---- better way -- ")
let betterSum = 0
let betterSubtraction = numbers[0]
let betterMultiplication = numbers[0]
let betterDivision = numbers[0]

numbers.forEach((number, index) => {
    betterSum = betterSum + number

    if (index !== 0) {
        betterSubtraction = betterSubtraction - number
        betterMultiplication = betterMultiplication * number
        betterDivision = betterDivision / number
    }
})
console.log("betterSum: ", betterSum)
console.log("betterSubtraction: ", betterSubtraction)
console.log("betterMultiplication: ", betterMultiplication)
console.log("betterDivision: ", betterDivision)

console.log(" ---- bestish way -- ")
const newSum = numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
);
const newSubtraction = numbers.reduce(
    (previousValue, currentValue) => previousValue - currentValue
);
const newMultiplication = numbers.reduce(
    (previousValue, currentValue) => previousValue * currentValue
);
const newDivision = numbers.reduce((previousValue, currentValue) => {
    return previousValue / currentValue
})

console.log("newSum: ", newSum)
console.log("newSubtraction: ", newSubtraction)
console.log("newMultiplication: ", newMultiplication)
console.log("newDivision: ", newDivision)
