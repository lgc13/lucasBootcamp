import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

// everything must be inside a class!
class DataTypes {

    // understand to the best of capabilities what all these words in the method mean
    public static void main(String[] args) {
        System.out.println("Hello world!!!!!!!!");

        // how to create an sysout all the main data types we learned in TS
        // string, number, boolean, null, undefined, array, object

        System.out.println("----------- STRING -------------");
        String dogName = "Bucky"; // STRING
        // dataType variableName = yourThing

        // const dogName: string = "Bucky"
        // const variableName: dataType = yourThing
        System.out.println("dogName: %s".formatted(dogName));

        System.out.println("----------- NUMBERS -------------");
        Integer number = 25;
        System.out.println("number: %s".formatted(number));

        Double myDoubleNumber = 88.8888;
        System.out.println("myDoubleNumber: %s".formatted(myDoubleNumber));

        Number number2 = 23.1;
        System.out.println("number2: %s".formatted(number2));

        BigDecimal myBigDecimal = new BigDecimal(10.1231231028310248124);
        System.out.println("myBigDecimal: %s".formatted(myBigDecimal));

        Float myFloatNumber = 99.99f;
        System.out.println("myFloatNumber: %s".formatted(myFloatNumber));

        System.out.println("----------- BOOLEAN -------------");
        Boolean isHappy = true;
        System.out.println("isHappy: %s".formatted(isHappy));

        System.out.println("----------- NULL -------------");
        String myNullString = null; // anything* in java is nullable
        System.out.println("myNullString: %s".formatted(myNullString));
        Boolean myNullBoolean = null;
        System.out.println("myNullBoolean: %s".formatted(myNullBoolean));

        System.out.println("----------- ARRAYS AND LISTS -------------");
        ArrayList<String> myArrayList = new ArrayList<>(); // an array without a specific size
        myArrayList.add("Some string");
        myArrayList.add("Another string");
        Collections.addAll(myArrayList, "third thing", "forth thing");

        System.out.println("myArrayList: %s".formatted(myArrayList));

        List<String> myList = List.of("first thing in my list", "2nd", "3rd", "4th");
        System.out.println("myList: %s".formatted(myList));

        System.out.println("----------- OBJECTS -------------");

        System.out.println("----------- STATIC FUNCTION -------------");
        tellMeAJoke();

        Integer result1 = addNumbers(1, 2);
        System.out.println("result1: %s".formatted(result1));

        Integer result2 = addNumbers(500, 27);
         System.out.println("result2: %s".formatted(result2));
    }

    // STATIC FUNCTION
    public static void tellMeAJoke() {        
        System.out.println("Emre likes sniffing feet?");
    }

    public static Integer addNumbers(Integer firstNumber, Integer secondNumber) {
        Integer result = firstNumber + secondNumber;
        return result;
    }

}