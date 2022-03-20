/*
Take in a list of grades (0 - 100)

1: tell me the letter grade for each score [in an array]
2: Give the student (grade) a motivational sentence depending on their LETTER grade
 2.a: use if/else if/else statements
 2.b: use a switch statement


Ex:
numbers = [0, 100]

expected output: 

1. [[0, "F"], [1, "F"], [2, "F"], ..., [70, "D"], ... [80, "B"], ..., [95, "A"]]

2.
    A -> 'WOW YOURE AMAZINZ'
    B -> "...."
    C -> "...."
    D -> "something else...."
    F -> "YOU SUCK...."
   
*/

const numbers = []
for (let number = 0; number <= 100; number++) {
    numbers.push(number)
}
console.log('numbers: ', numbers)

const grades = []

numbers.forEach(number => {
    if (number < 60) {
        grades.push([number, "F"])
    } else if (number >=60 && number < 70) {
        grades.push([number, "D"])
    }
})

console.log("grades: ", grades)

const newGrades = numbers.map(number => {
    if (number < 60) {
        return [number, "F"]
    } else if (number >=60 && number < 70) {
        return [number, "D"]
    } else {
        return [number, "not a F or D"]
    }
})
console.log("newGrades: ", newGrades)