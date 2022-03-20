/*
    Objects!!!!!
*/

const pet = {
    // need KEY: VALUE pairs
    name: "Nieve",
    age: 3,
    isFat: true,
    color: null,
    furTexture: undefined,
    personality: "0/10",
    toys: ["ball", "hedgehog", "mouse"]
}

console.log("pet: ", pet)

// Access values by their key
const nieveAge1 = pet.age
console.log("nieveAge1: ", nieveAge1)

const nieveAge2 = pet['age']
console.log("nieveAge2: ", nieveAge2)

const nieveToys = pet.toys
console.log("nieveToys: ", nieveToys)

const firstToy = nieveToys[0]
console.log("firstToy: ", firstToy)

console.log("pet after reading... ", pet)

console.log("-----------Change an object's fields")
pet.age = 4
console.log("pet after changing age: ", pet)

pet.isFat = false
console.log("pet after changing isFat: ", pet)


console.log("----------- create NEW objects from other objects")
const pet2 = pet
console.log("pet2: ", pet2)

pet2.name = 'Bucky'
console.log("pet after changing pet2 name: ", pet)
console.log("pet2 after changing pet2 name: ", pet2)

const pet3 = {
    ...pet // spreading
}
console.log("pet3: ", pet3)

pet3.name = "Rocky"
console.log("pet3 after changing pet3 name: ", pet3)
console.log("pet after changing pet3 name: ", pet)

pet3.name = "Hank"
pet3.age = 6
pet3.color = "blue"
pet3.furTexture = "extremelly hairy"
console.log("pet3 after many changes: ", pet3)

console.log("-------------- overwritting fields ----------")
const pet4 = {
    stinkLevel: 100,
    age: 10,  // this age will get over written by pet3 when spread below
    ...pet3,
    height: 80,
    name: "Bob" // you can only overwrite fields that ALREADY existed
}
console.log("pet4: ", pet4)