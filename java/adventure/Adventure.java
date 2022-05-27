import java.util.Scanner;

/**
 * Create your own adventure game!
 * 
 * Requirements:
 * 1. User must pick (at some point) all of the following data types:
 * - string
 * - number
 * - boolean
 * 
 * 2. Your program must additionally use at least 1 list/array at some point.
 * (example: combine all the numbers the user inputted? combine the user strings?)
 * 
 * 3. Your program should have at least 10 stages
 * 
 * 4. You need to have AT LEAST:
 * - 1 private static method
 * - 2 public static methods FROM ANOTHER CLASS
 * 
 * 5. Have at least 2 ways the user can stop the pgoram earlier than intended
 */
public class Adventure {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // instanciante a Scanner object

        System.out.print("What is your name? ");
        String userInput = scanner.nextLine(); // asks for the user input
        System.out.println("Hello, " + userInput);

        System.out.print("Please pick either 1, 2 or 3: ");
        Integer userNumberPick = scanner.nextInt();
        System.out.println("User picked number: " + userNumberPick);
        if (userNumberPick == 3) {
            System.out.println(">>> haha you died");
            System.exit(1); // stops the program
        }

        System.out.print("Are you hungry? ");
        Boolean isHungry = scanner.nextBoolean();
        System.out.println("User hunger status: " + isHungry);
    }

    private static void doSomething() {

    }

}
