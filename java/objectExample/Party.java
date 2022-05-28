import java.util.List;

class Party {
    
    public static void main(String[] args) {
        System.out.println("throwing a party!!!!");

        // create a guest object
        // console log the guest information
        // type Guest = {
        //     firstName: string,
        //     lastName: string,
        //     age: number
        // }

        // const guest: Guest = {
        //     firstName: "Daniel",
        //     lastName: "dwadawd",
        //     age: 16
        // }

        // console.log("Guest's first name: ", guest.firstName)
        // console.log("Guest's last name: ", guest.lastName)
        // console.log("Guest's age: ", guest.age)

        // You must INSTANCIATE the class, to get an INSTANCE (object) of it
        System.out.println("----- DEFAULT CONSTRUCTOR ----");
        Guest guest1 = new Guest();
        guest1.firstName = "Lucas";
        guest1.lastName = "Costa";
        guest1.age = 28;

        System.out.println("guest1: " + guest1);
        System.out.println("guest1 firstName: " + guest1.firstName);
        System.out.println("guest1 lastName: " + guest1.lastName);
        System.out.println("guest1 age: " + guest1.age);
        guest1.eat("hamburger");

        System.out.println("----- DEFAULT CONSTRUCTOR (again) ----");
        Guest guest2 = new Guest();
        guest2.firstName = "Sasha";
        guest2.lastName = "Larson";

        System.out.println("guest2: " + guest2);
        System.out.println("guest2 firstName: " + guest2.firstName);
        System.out.println("guest2 lastName: " + guest2.lastName);
        System.out.println("guest2 age: " + guest2.age);
        guest2.eat("Acai");

        System.out.println("----- ALL ARGS CONSTRUCTOR ----");
        Guest guest3 = new Guest("Victoria", "Portela", 26);

        System.out.println("guest3: " + guest3);
        System.out.println("guest3 firstName: " + guest3.firstName);
        System.out.println("guest3 lastName: " + guest3.lastName);
        System.out.println("guest3 age: " + guest3.age);
        guest3.eat("nothing... because she has HW to do");

        System.out.println("------ LIST OF GUESTS ------- ");
        List<Guest> guests = List.of(guest1, guest2, guest3);
        guests.forEach(guest -> {
            System.out.println(
                "The following guest has just walked in... " 
                + guest.firstName + " " + guest.lastName
            );
        });

    }

}
