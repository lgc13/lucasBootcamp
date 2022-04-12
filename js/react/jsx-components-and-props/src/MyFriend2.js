import React from "react";

const MyFriend2 = (props) => {

    console.log("MyFriend2 props: ", props)
    const friend = props.friend
    const friendNumber = props.friendNumber

    return (
        <div>
            <p>my {friendNumber} friend's name: {friend.name}</p>
            <p>my {friendNumber} friend's age: {friend.age}</p>
            <p>my {friendNumber} friend's favorit color: {friend.favoriteColor}</p>
        </div>
    )
}

export default MyFriend2
