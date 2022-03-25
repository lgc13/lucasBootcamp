/*
Core concepts

arithmetics (+, 0, *, /, %)
equality ===
logical AND operator &&
logical OR operator || (pipe)
ternary operator - basicaly and if/else
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

console.log("---- TERNARY -----")
const age = 21

let isOldEnoughToDrink

if (age >= 21) {
    isOldEnoughToDrink = true
} else {
    isOldEnoughToDrink = false
}

console.log("isOldEnoughToDrink: ", isOldEnoughToDrink)

const isOldEnoughToDrink2 = age >= 21 ? true : false
console.log("isOldEnoughToDrink2: ", isOldEnoughToDrink2)

const candyType = "Twixasdasdasdasda"

const bestieName = candyType === "Twix" ? "Victoria" : "Emre"
console.log("bestieName: ", bestieName)

const guest1 = {
    name: "lucas",
    isComing: true
}
const guest2 = {
    name: "Emre",
    isComing: null,
}
const guest3 = {
    name: "Victoria",
    isComing: undefined,
}
const guest4 = {
    name: "Sasha",
    isComing: "maybe"
}

const guests = [guest1, guest2, guest3, guest4]
const finalizedGuestList = []

guests.forEach(guest => {
    if (guest.isComing === true) {
        finalizedGuestList.push(guest)
    } else {
        guest.isComing = false
        finalizedGuestList.push(guest)
    }
})
console.log("finalizedGuestList: ", finalizedGuestList)

const finalizedGuestListWithMap = guests.map(guest => {
    if (guest.isComing === true) {
        return guest
    } else {
        guest.isComing = false
        return guest
    }
})
console.log("finalizedGuestListWithMap: ", finalizedGuestListWithMap)

const finalizedGuestListWithMapAndTernary = guests.map(guest => {
    return guest.isComing === true ? guest : {...guest, isComing: false}
})
console.log("finalizedGuestListWithMapAndTernary: ", finalizedGuestListWithMapAndTernary)
