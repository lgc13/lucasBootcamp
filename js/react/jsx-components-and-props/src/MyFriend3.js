import React from 'react'

const MyFriend3 = ({ friend, anotherProp, yetAnotherProp }) => {
    return (
        <div>
            <p>my friend's name: {friend.name}</p>
            <p>my friend's age: {friend.age}</p>
            <p>my friend's favorit color: {friend.favoriteColor}</p>
            <p>anotherProp: {anotherProp}</p>
            <div>
                <p>yetAnotherProp: </p>
                {yetAnotherProp.map(color => (
                    <p key={color}>color: {color}</p>
                ))}
            </div>
            <hr />
        </div>
    ) 
}
export default MyFriend3

// DESTRUCTURING
const person = {
    name: "Victoria",
    age: 100,
    favoriteColor: 'blue'
}

const name2 = person.name
const age2 = person.age
const favoriteColor2 = person.favoriteColor
console.log("name2: ", name2)
console.log("age2: ", age2)
console.log("favoriteColor2: ", favoriteColor2)

const { name, age, favoriteColor } = person
console.log("DESTRUCTURING... name: ", name)

const newName = name + name2
console.log("newName: ", newName)
console.log("DESTRUCTURING... name: ", name)
console.log("DESTRUCTURING... name: ", name)
console.log("DESTRUCTURING... name: ", name)
console.log("DESTRUCTURING... age: ", age)
console.log("DESTRUCTURING... favoriteColor: ", favoriteColor)
