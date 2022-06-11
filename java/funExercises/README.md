## Requirements:
- Each exercise should be done on its own folder/class
- Feel free to add as many classes as you want per exercise
- All code/work should be done in at least 1 additional private method, called from the main function
- sysout the description of each exercise

### Basic string exercises

1. StringSize.java

    - Description: find the number of characters in a string

    - Ask for user input
    > sysout how many characters there are in that word


2. WordCasingConverter.java

    - Description: Create a program that allows the user to change the case of a word they put in

    - Ask user for a word input
        > sysout the word entirely lower cased

        > sysout the word entirely upper cased

        > sysout the word with ONLY the first letter upper cased 

3. ReversingString.java

    - Description: create a program that reverses a string

    - Ask for user input of 1 word
        > sysout the word in reverse
    - Requirement: do NOT use .reverse(), StringBuffer or StringBuilder,


### Basic numbers and array exercises


4. TernaryOperator.java

    - Description: finding the biggest number of 2 using a ternary

    - Ask the user for 2 number inputs
    - use a ternary to find the biggest of the 2 (not an if statement)
        > sysout the result

5. InterestRateCalculator.java

    - Description: Create a program that will figure out the total interest on a $ principal amount

    - FYI: interest calculator: (total interest = principalinterest rate percentageyears)
    - Ask user for 3 inputs:
        - Loan principal amount
        - Interest rate percentage
            - this should accept decimal numbers. So user could hypothetically put in 99.9999999999999 if desired
        - Years for the loan
        > sysout the total interest 


6. SumOfEvenAndOddNumbers.java

    - Description: show the sum of all even and odd numbers in an array

    - Create an array/list with numbers from 1 to 100
        > sysout the sum of all even numbers in the array
        > sysout the sum of all odd numbers in the array


7. SwitchCases.java

    - Description: create a program that lets user perform actions depending on input

    - Ask user for input (1, 2, or 3)
    - Create a switch statement that performs different actions depending on the chosen input:
    - case 1: square root.
        - ask user for a number
        > sysout the square root of the number given
    - case 2: today's date
        > sysout today's date 
    - case 3: tell a joke
        - create a list of at least 10 jokes (strings)
        > sysout a random joke from the list
    - when the user is done, ask for input again:
        - A: select another program
            > this should restart the program all over, giving them the initial 3 options once again
            - theoretically the user should be able to never stop
        - B: stop the program
            > fully stop


### Small string and number algorithms

8. PrimeNumbers.java

    - Description: show all the prime numbers, and NON prime numbers in an array

    - Create an array/list with numbers from 1 to 100
        > sysout the array
        > sysout all of the Prime numbers in this array
    - remove the prime numbers from the initial array
        > sysout the remaining numbers in the array

9. Palindromes.java

    - Description: show all the words that are and are NOT palindromes in an array

    - Create an array/list that has all of the following strings:
    "karan", "madam", "tom", "civic", "radar", "sexes", "jimmy", "kayak", "john", "refer", "billy","billy", "did"

    - Find all of the words that are palindromes in this previous list
        - put them in another list
        > sysout the new palindrome list

    - Find all of the words that are NOT palindromes
        - put them in another list
        > sysout the new NOT palindrome list

10. Factorial.java

    - Description: Create a program that computes the factorial value of an inputed number

    - Ask user for a number input
        > sysout the factorial of the number

    ```
    ex: 
    user inputs 1. Factorial = 1
    user inputs 2. Factorial = 2
    user inputs 3. Factorial = 6
    user inputs 4. Factorial = 24
    ```


11. Fibonacci.java

    - Description: create a program that shows the first 25 Fibonacci numbers

    - Fibonacci numbers can be found by adding the 2 numbers before the new one. 

    ```
    For example: 0, 1
    Next number will be 1, as 0 + 1 = 1
    Next number will be 2, as 1 + 1 = 2
    Next number will be 3, as 1 + 2 = 3
    Next number will be 5, as 2 + 3 = 5
    ```
 
    - create an arrayList that has 2 intergers: 0 and 1
    - write a program that adds the next 23 fibonacci numbers to this arrayList
        > sysout the updated list size (should be 25)
        
        > sysout the updated list

   
### Fun stuff

12. BubbleSorting.java

    - Description: create a program that will sort this list in numerical order, by using a Bubble Sort Algorithm

    - Start with list of unsorted numbers: `List unsortedNumbers = List.of(1,0,5,6,3,2,3,7,9,8,4)`
        > sysout the sorted list

13. SortEmployees.java

    - Description: sort objects by different fields

    - Create an Employee model with the following fields:
        
        ```java
        private String name;
        private Integer age;
        private OffsetDateTime birthday;
        ```

    - create a list of at least 10 employees
        > sysout a list of employees sorted by their name (alphabetically)

        > sysout a list of employees sorted by their age (numerically)

        > sysout a list of employees sorted by their birthday (oldest to youngest)

14. CalculatorService.java

    - Description: Create a program that allows a user to perform multiple arithmetics on numbers they put in

    - Ask user what type of arithmetic they'd like to do (add, subtract, multiply or divide)
    - Ask user to input 2 different numbers
        >  sysout the result
    - Requirement: you should add a Calculator.java model that has 4 methods, 1 for each arithmetic option
        - you should be instantiating this Calculator model and using their models from the CalculatorService.java file
        - you should NOT be using static classes here


15. FileReader.java

    - Description: create a program that reads in a file and outputs its data

    - Create a `User.java` model with 4 fields: firstName, lastName, age, state
    - Read in the `MyDataFile`
    - Create an object instance per line
        > sysout the objects you imported from this file


16. Triangle.java

    - Description: display a triangle of 0s and 1s

    > sysout a tringle on the console using any type of loop
    - do NOT use a simple group of print statements to accomplish this

    ```
    "0" 
    "1 0" 
    "1 0 1" 
    "0 1 0 1"
    ```