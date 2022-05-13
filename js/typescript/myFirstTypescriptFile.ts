/**
 * Primitive Data types:
 * 
 * string
 * number
 * boolean
 * null
 * undefined
 * lists/arrays = []  or Array
 * objects
 * function
 * 
 */

const myName: string = "Lucas"
const myFavoriteNumber: number = 2
const isHungry: boolean = true
const nullVariable: null = null
const undefinedVariable: undefined = undefined
const favoriteColors: string[] = ["red", "black", "blue"]
const myFavoriteNumbers: number[] = [1, 123123, 523423423]
const person: { name: string, age: number, isHappy: boolean } = {
    name: 'Lucas',
    age: 28,
    isHappy: true,
}
const myFunction = (someParameter: string) => {
    console.log("myFunction- someParameter: ", someParameter)
}
myFunction("i am a string!")

/* Creating a function `myFunction2` that receives an object type `MyEvent` as a parameter  */
type MyEvent = {
    target: {
        value: string
    }
}
const myFunction2 = (event: MyEvent) => {
    console.log("myFunction2- event: ", event)
}
const myEventObject: MyEvent = { 
    target: { 
        value: 'I am a string value' 
    } 
}
myFunction2(myEventObject)

/* Harder stuff  */
type Color = "red" | "blue" | "black" | "yellow" // not an ENUM
enum Hobby {
    GAMING, TEACHING, CRYING, LAUGHING
}
type Person = {
    firstName: string,
    lastName: string,
    age: number,
    favoriteColor: Color,
    isHungry: boolean,
    favoriteHobby: Hobby
    hobbies: Hobby[]
}

const person2: Person = {
    firstName: "Lucas",
    lastName: "Costa",
    age: 28,
    favoriteColor: "yellow",
    isHungry: true,
    favoriteHobby: Hobby.GAMING,
    hobbies: [Hobby.CRYING, Hobby.LAUGHING]
}

console.log("my name is: ", myName)
console.log("my myFavoriteNumber: ", myFavoriteNumber)
console.log("isHungry: ", isHungry)
console.log("nullVariable: ", nullVariable)
console.log("undefinedVariable: ", undefinedVariable)
console.log("favoriteColors: ", favoriteColors)
console.log("myFavoriteNumbers: ", myFavoriteNumbers)
console.log("person: ", person)
console.log("person2: ", person2)

export {}