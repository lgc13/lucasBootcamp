import React from 'react'
import MyFriend from './MyFriend'
import MyFriend2 from './MyFriend2'
import MyFriend3 from './MyFriend3'

// Create an array of objects
// 1: render a component multiple times with props being passed in for each field
// 2. render a component 'a single time' using .map() with the same objects
const App = () => {
  // valid JS code goes here, before the `return`

  const friends = [
    {
      id: 1,
      name: "Victoria",
      age: 100,
      favoriteColor: 'blue'
    },
    {
      id: 2,
      name: "Emre",
      age: 200,
      favoriteColor: 'black'
    },
    {
      id: 3,
      name: "Daniel",
      age: 5,
      favoriteColor: 'orange'
    }
  ]


  // return MUST return 1 single JSX element, and NO JS code is allowed here*
  return (
    <>
      <h1>My friends</h1>

      <h2>Array of objects...</h2>
      <p>my first friend's name: {friends[0].name}</p>
      <p>my first friend's age: {friends[0].age}</p>
      <p>my first friend's favorite color: {friends[0].favoriteColor}</p>

      <hr/>

      <p>my second friend's name: {friends[1].name}</p>
      <p>my second friend's age: {friends[1].age}</p>
      <p>my second friend's favoriteColor: {friends[1].favoriteColor}</p>
     
      <hr/>

      <p>my third friend's name: {friends[2].name}</p>
      <p>my third friend's age: {friends[2].age}</p>
      <p>my third friend's favoriteColor: {friends[2].favoriteColor}</p>

      <h2>Using MyFriend component</h2>
      
      <MyFriend 
        friendNumber={"first"}
        name={friends[0].name}
        age={friends[0].age}
        color={friends[0].favoriteColor}
      />
      <hr/>
      <MyFriend 
        friendNumber={"second"}
        name={friends[1].name}
        age={friends[1].age}
        color={friends[1].favoriteColor}
      />
      <hr/>
      <MyFriend 
        friendNumber={"third"}
        name={friends[2].name}
        age={friends[2].age}
        color={friends[2].favoriteColor}
      />
      <hr />

      <h2>Using MyFriend2</h2>
      <MyFriend2 
        friendNumber={"first"}
        friend={friends[0]}
      />
      <hr/>
      <MyFriend2 
        friendNumber={"second"}
        friend={friends[1]}
      />
      <hr/>
      <MyFriend2 
        friendNumber={"third"}
        friend={friends[2]}
      />


    <h2>Using MyFriend3</h2>
    {friends.map(friend => {
      return (
        <MyFriend3 
          key={friend.id}
          friend={friend}
          anotherProp="hello"
          yetAnotherProp={['red', 'black', 'blue']}
        />
      )
    })}
    </>
  )
}

export default App;
