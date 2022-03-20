/*
Core concepts:

if/else if/else
forEach
switch statement
*/



// const stringComparison = "lucas" === "lucas"
// console.log("stringComparison: ", stringComparison)

// const numberComparison = 100 === "100"
// console.log("numberComparison ", numberComparison)

// const bolleanComparison = true === false
// console.log("bolleanComparison ", bolleanComparison)

// const nullComparison = null === undefined
// console.log("nullComparison ", nullComparison)

// const randomComparison = undefined === false
// console.log("randomComparison ", randomComparison)

// console.log(" --------------- ")

// if statement
if ("lucas" === "victoria") {
    console.log("this is true!")
} else {
  console.log("this is NOT true!!!")  
}

console.log(" --------------- ")

if (undefined) { 
    console.log("this is truthy") // truthy
} else { 
    console.log("this is falsey!!!")  
}

// for loops
// allows you to iterate through things
// particularly useful with lists
const colors = ["red", "yellow", "blue", "orange", "pink", "purple"]
console.log("colors: ", colors)
 
// the ask: print out every value in the list
// console.log("colors[0]: ", colors[0])
// console.log("colors[1]: ", colors[1])
// console.log("colors[2]: ", colors[2])
// console.log("colors[3]: ", colors[3])

function someCallBackFunction(element) {
    console.log("FROM someCallBackFunction: color: ", element)
}

colors.forEach(color => console.log("color: ", color)) // this is what you're striving for
colors.forEach(color => {
    console.log("for each with curlys: color: ", color)
})
colors.forEach(someCallBackFunction) 
for (let index = 0; index < colors.length; index++) {
    console.log('traditional for loop.... color: ', colors[index])
}


function doSomething(name4) { // declared a function/ created the function/ we did not CALL the function
    // here
    const name1 = "lucas"
    const name2 = "victoria"
    const name3 = name1 + name2 + name4

    console.log("name3: ", name3)
}
 
doSomething("I CAN PUT LITERALLT ANYTHING HERE, and doSomething will call it as name4...Emre")

// create a list with at least 10 numbers
// iterate through all values in the list, and add + 10 to each value
// expected output: `adding 10 to value: {currentValue}, which gives me: {newNumber}`
// 1, 5, 20
// `adding 10 to value: 1, which gives me: 11`
// `11 is odd`
// `adding 10 to value: 5, which gives me: 15`
// `15 is odd`
// `adding 10 to value: 20, which gives me: 30`
// `30 is even`


const result = 300 % 2 // give me the remainder of 300 / 2
if (result === 0) {
    console.log("this is even")
}

// 3.5 % 2 = // 3.5 / 2 = 1
// 3.5 - 2 = 1.5
// 3.5 % 2 = 1.5

console.log("----------- if else ----------------")

const favoriteIceCream = "oreos"

if (favoriteIceCream === "chocolate") {
    console.log("your favorite is chocolate!")
} else if (favoriteIceCream === "vanilla") {
    console.log("your favorite is vanilla!")
} else if (favoriteIceCream === "mint") {
    console.log("your fave is mint!")
} 

if (favoriteIceCream === "mint") {
    console.log("HAHA IT IS DEFEINITELY MINT!")
} else {
    console.log("Idk what your fave is....")
}

console.log("----------- switch ---------------")

switch(favoriteIceCream) {
    case "chocolate": {
        console.log("your favorite is chocolate!")
        break
    }
    case "vanilla": {
        console.log("your favorite is vanilla!")
        break
    }
    case "mint": {
        console.log("your fave is mint!")
        break
    }
    default: {
        console.log("Idk what your fave is....")
    }
}


const grades = [[100, "A"], [80, "B"], [70, "C"]]

grades.forEach(gradeArray => {
    switch (gradeArray[1]) {
        case "A": {
            console.log("YOU GOT AN A!!")
            break
        }
        case "B": {
            console.log("You got a B...")
            break
        }
    }
})