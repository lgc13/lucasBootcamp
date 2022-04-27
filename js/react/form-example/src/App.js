import React, { useState } from 'react'
import './App.css';

const App = () => {

  const initialPerson = {
    firstName: "Lucas",
    lastName: "Costa",
    age: 28,
    favoriteColor: "red",
    country: "USA",
    song: "Otherside",
    aboutMe: "ehhhh I dont wanna tell you anything",
    favoriteIceCream: "Chocolate"
  }
  const [person, setPerson] = useState(initialPerson)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("im being submited!!!!!!! with event: ", e)

    const typedFirstName = e.target.elements.thisIsTheNameICreated.value
    const typedLastName = e.target.elements.secondNameOhYeah.value

    setPerson({
      firstName: typedFirstName,
      lastName: typedLastName,
      age: e.target.elements.age.value,
      favoriteColor: e.target.elements.favoriteColor.value,
      country: e.target.elements.country.value,
      song: e.target.elements.song.value,
      aboutMe: e.target.elements.aboutMe.value,
      favoriteIceCream: e.target.elements.favoriteIceCream.value,
      isHungry: e.target.elements.isHungry.checked,
      gender: e.target.elements.gender.value
    })
  }

  return (
    <div className="App">
      <h1>This is my form!</h1>

      <form onSubmit={handleSubmit}>
        <p>First name</p>
        <input type="text" name="thisIsTheNameICreated" />

        <p>Last name</p>
        <input type={"text"} name="secondNameOhYeah" />

        <p>Age</p>
        <input type={"text"} name="age" />

        <p>Favorite Color</p>
        <input type={"text"} name="favoriteColor" />

        <p>Country</p>
        <input type={"text"} name="country" />

        <p>Song</p>
        <input type={"text"} name="song" />

        <p>About me</p>
        <textarea name="aboutMe"></textarea>

        <p>Favorite ice cream</p>
        <select name="favoriteIceCream">
          <option value="Mint">Misdfsdfssdfsdfnt</option>
          <option value="Banana">Banasdfsdfsdfna</option>
          <option value="Strawberry">Strawbsdfsdferry</option>
          <option value="Pistaccio">Pistacsdfsdfsdfcio</option>
        </select>

        <p>Are you hungry? <input type={"checkbox"} name="isHungry" /></p>
        <p>Are you thirsty? <input type={"checkbox"} name="isThirsty" /></p>

        <div>
          <p>Choose your gender</p>
          <input type="radio" value="Male" name="gender" /> Male
          <input type="radio" value="Female" name="gender" /> Female
          <input type="radio" value="Other" name="gender" /> Other
        </div>
        
        <div>
          <button>Click me!</button>
        </div>
      </form>

      <hr/>

      <div>
        <p>My name is: {person.firstName} {person.lastName} with age: {person.age}</p>
        <p>My favorite color is: {person.favoriteColor}</p>

        <p>I come from the land of {person.country} where we listen to {person.song}</p>

        <h2>About me....</h2>
        <p>{person.aboutMe}</p>

        <h3>Favorite Ice cream</h3>
        <p>{person.favoriteIceCream}</p>

        <h2>Hunger status: {person.isHungry ? "YES" : "no"}</h2>

        <h2>Chosen gender: {person.gender}</h2>
      </div>

    </div>
  );
}

export default App;