"use strict";
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
exports.__esModule = true;
var myName = "Lucas";
var myFavoriteNumber = 2;
var isHungry = true;
var nullVariable = null;
var undefinedVariable = undefined;
var favoriteColors = ["red", "black", "blue"];
var myFavoriteNumbers = [1, 123123, 523423423];
var person = {
    name: 'Lucas',
    age: 28,
    isHappy: true
};
var myFunction = function (someParameter) {
    console.log("myFunction- someParameter: ", someParameter);
};
var myFunction2 = function (event) {
    console.log("myFunction2- event: ", event);
};
myFunction("i am a string!");
var myEventObject = {
    target: {
        value: 'I am a string value'
    }
};
myFunction2(myEventObject);
var Hobby;
(function (Hobby) {
    Hobby[Hobby["GAMING"] = 0] = "GAMING";
    Hobby[Hobby["TEACHING"] = 1] = "TEACHING";
    Hobby[Hobby["CRYING"] = 2] = "CRYING";
    Hobby[Hobby["LAUGHING"] = 3] = "LAUGHING";
})(Hobby || (Hobby = {}));
var person2 = {
    firstName: "Lucas",
    lastName: "Costa",
    age: 28,
    favoriteColor: "yellow",
    isHungry: true,
    favoriteHobby: Hobby.GAMING,
    hobbies: [Hobby.CRYING, Hobby.LAUGHING]
};
console.log("my name is: ", myName);
console.log("my myFavoriteNumber: ", myFavoriteNumber);
console.log("isHungry: ", isHungry);
console.log("nullVariable: ", nullVariable);
console.log("undefinedVariable: ", undefinedVariable);
console.log("favoriteColors: ", favoriteColors);
console.log("myFavoriteNumbers: ", myFavoriteNumbers);
console.log("person: ", person);
console.log("person2: ", person2);
