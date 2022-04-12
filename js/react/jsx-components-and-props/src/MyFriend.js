import React from "react";

// Components should be able to be reused
// Often time they should be generic*
const MyFriend = (props) => {
    console.log("props: ", props)

    const name = props.name
    const age = props.age
    const color = props.color
    const friendNumber = props.friendNumber

    return (
        <div>
            <p>my {friendNumber} friend's name: {name}</p>
            <p>my {friendNumber} friend's age: {age}</p>
            <p>my {friendNumber} friend's favoriteColor: {color}</p>
        </div>
    )
}

export default MyFriend