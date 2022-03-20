/*
Core concepts:

- creating lists
- getting values by index (numbers[0])


* array methods/functions:
    - .forEach (iterating through lists)
    - .reduce
    - .filter
    - .push (add elements to a list)
    - .map
    - .find ???
    - .sort ??

    - _.max/ _.min (lodash largest/smallest) ***** technically not an array method
    
*/

// collection of things
// in JS are also knows as Lists

const pet1 = "Bucky"
const pet2 = "Rocky"
const pet3 = "Nieve"

const pets = [pet1, pet2, pet3] // list of strings
console.log("pets: ", pets)

const newList = [pet1, pet2, pet3, 9000, true, null, undefined] // index, indexes starting at 0
console.log("newList: ", newList)
console.log("newList index 0: ", newList[0])
console.log("newList index 1: ", newList[1])
 
const someNumbers = [100, 50] // list with numbers
console.log("someNumbers index 0: ", someNumbers[0])
console.log("someNumbers index 1: " + someNumbers[1])

// const newNumber = firstNumber + secondNumber
console.log("adding ", someNumbers[0], " to ", someNumbers[1], "which equals: ", someNumbers[0] + someNumbers[1] )

console.log("adding numbers from someNumbers ", someNumbers[0] + someNumbers[1])
console.log(`adding numbers from ${someNumbers}`, someNumbers[0] + someNumbers[1])
console.log(`adding numbers from ${someNumbers}: which gives me ${someNumbers[0] + someNumbers[1]}`)

// my example
const result = someNumbers[0] + someNumbers[1]
console.log("adding : ", someNumbers, " equals: ", result)
console.log(`adding ${someNumbers} equals ${result}`)
console.log(" ----------------------- ")

const otherNumbers = [100, "50"]
const result2 = otherNumbers[0] + someNumbers[1]
console.log("adding : ", otherNumbers, " equals: ", result2) // 10050


// loop through list, with element + index
someNumbers.forEach(number => {
    console.log("normal looping with number: ", number)
})
someNumbers.forEach((number, index) => {
    console.log("looping with number: ", number, " at index: ", index)
})


// ------- PUSH METHOD --------
console.log(" ------- PUSH METHOD --------")

const numbers = []
// console.log("numbers: ", numbers)
numbers.push(2, 5, 6, 100)
// console.log("numbers after pushing: ", numbers)

numbers.push(0, 9, 8 ,7, 6)
// console.log("numbers after ANOTHER push: ", numbers)

numbers.push("I am a string!", true, "i am another string", false, undefined, 2000, "boooo")
console.log("numbers after FINAL push: ", numbers)

numbers.forEach(element => {
    console.log("element: ", element)
})