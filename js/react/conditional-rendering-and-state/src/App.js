import React, { useState } from 'react'
import './App.css';

// functional component
const App = () => {

  // let myName = "Lucas2"

  const people = [
    {
      name: "Daniel"
    },
    {
      name: "Victoria"
    },
    {
      name: "Emre"
    }
  ]

  const [myName, setMyName] = useState("Lucas") // Hook
  const [myPeople, setMyPeople] = useState(people)

  const handleButtonClick = () => {
    console.log(" I WAS CLICKED!!!!")
    // myName = "Another name"
    if (myName === "Lucas") {
      setMyName("Another name")
    } else {
      setMyName("Lucas")
    }
   
  }
  console.log("my name: ", myName)

  return (
    <div>
      {/* <h1>Hello there</h1>
      {myName === "Lucas" && (
        <div>
          <p>This person's name is Lucas!!!</p>
          <p>asdasdasd</p>
        </div>
      )}

      {myName.length === 5 ? (
        <div>
          <p>This name has a length of 5</p>
        </div>
      ) : (
        <div>
          <p>The length of this name is NOT 5</p>
        </div>
      )} */}
      <p>My name is: {myName}</p>
      <p>My people are: {myPeople.map(person => (
        <div>Person's name: {person.name} </div>
      ))}</p>

      <p>Here's daniel....{myPeople.find(person => person.name === "Daniel").name}</p>
      <button onClick={handleButtonClick}>Click me!</button>
    </div>
  )

}

export default App;