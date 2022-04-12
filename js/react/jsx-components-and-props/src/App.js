import React from 'react'
import MyFriend from './MyFriend'

// Create an array of objects
// 1: render a component multiple times with props being passed in for each field
// 2. render a component 'a single time' using .map() with the same objects
const App = () => {
  // valid JS code goes here, before the `return`
  const myFriends = ["Victoria", "Emre", "Daniel"]
  console.log("myFriends: ", myFriends)

  const myFriends2 = [
    {
      name: "Victoria",
      age: 100
    },
    {
      name: "Emre",
      age: 200
    },
    {
      name: "Daniel",
      age: 5
    }
  ]
  console.log("myFriends2.name: ", myFriends2[0].name)
  const myFirstFiend = myFriends2[0].name

  const mySecondFriend = myFriends2[1].name
  console.log("mySecondFriend: ", mySecondFriend)


  // return MUST return 1 single JSX element, and NO JS code is allowed here*
  return (
    <>
      <h1>My friends</h1>
      <h2>Array</h2>
      <p>my first friend: {myFriends[0]}</p>
      <p>my second friend {myFriends[1]}</p>
      <p>my third friend: {myFriends[2]}</p>

      <h2>Array of objects...</h2>
      <p>my first friend: {myFirstFiend}</p> 
      <p>my second friend: {mySecondFriend}</p>
      <p>my third friend: {myFriends2[2].name}</p>

      <MyFriend iCanNameThisWhateverIWant={myFriends2[0].name} />
      <MyFriend iCanNameThisWhateverIWant={"SuperMan"} />
      <MyFriend iCanNameThisWhateverIWant={"Catwoman"} />
    </>
  )
}

export default App;
