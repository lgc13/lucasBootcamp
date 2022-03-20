/*
 - Functions Requirements
   1. call every function at least 3 times
   2. Print out the RESULT (returned value) // OUTSIDE THE FUNCTION

1. Do standard math arithmetics (+, -, *, /)

Inputs:         2 numbers
Output:         1 number
*/

// This is an acceptable answer for part of #1
function addNumbers(number1, number2) {
  console.log("variables I recevied are number1: ", number1, " and number2: ", number2)

  const total = number1 + number2
  return total
}

const firstAddition = addNumbers(1, 2)
console.log("firstAddition: ", firstAddition)

const secondAddition = addNumbers(-1, -100)
console.log("secondAddition: ", secondAddition)

const thirdAddition = addNumbers(-3, 7)
console.log("thirdAddition: ", thirdAddition)



/*
2. Check if number is even/odd

Input:   1 number
Output: "Even" or "Odd"

Example: calling function with (1) should print out "Odd"

3. Find the smallest in the array

Input: 1 array of size 100
Output: 1 number

Example: calling with functions from 1- 100 prints out 1


4. Find the largest number in the array

Input: 1 array of size 100
Output: 1 number

Example: calling with functions from 1- 100 prints out 100


5. Give letter grade depending on number score (from an array) using a switch statement

Input: 1 number
Output: 1 letter

Example: 
calling with functions with 30 prints out F
calling with functions with 75 prints out C
calling with functions with 99 prints out A
*/

/*
6. Given an array of numbers, give me the sum of all of them together

Input: 1 array
Output: 1 number

Example: 

given [1, 2, 3, 4]
should output: 10


7. Given an array of numbers, find the subtraction of all numbers together

Input: 1 array
Output: 1 number

Example: 

given [1, 2, 3, 4]
should output: -8

8. Food menu! Given an entree, drink, and dessert, figure out the total cost of a bill after a 7% tax

Input: 3 numbers (entree, drink, and desser prices)
Output: 1 number

Example:

given 10, 5, 3 (entree cost 10, drink 5, and dessert 3)
should output: 19.26

9. Discounts! when buying an item with a coupon, figure out the final price after a X% discount, adding a flat 7% tax afterwards 
(the tax is applied on the amount AFTER being discounted, not before)

Input: 2 numbers (item cost and coupon amount)
Output: 1 number

Example:

Given 1000, 20 ($1000 item, 20% discount)
Should output: $786

*/
