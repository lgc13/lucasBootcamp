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
        guest1.setFirstName("Lucas");
        guest1.setLastName("Costa");
        guest1.setAge(28);
        guest1.setFavoriteColor("red");

        System.out.println("guest1: " + guest1);
        System.out.println("guest1 firstName: " + guest1.getFirstName());
        System.out.println("guest1 lastName: " + guest1.getLastName());
        System.out.println("guest1 age: " + guest1.getAge());
        guest1.eat("hamburger");

        System.out.println("----- DEFAULT CONSTRUCTOR (again) ----");
        Guest guest2 = new Guest("Sasha", "Larson", null, null);
        guest2.eat("Acai");

        System.out.println("----- ALL ARGS CONSTRUCTOR ----");
        Guest guest3 = new Guest("Victoria", "Portela", 26, "Purple");

        System.out.println("guest3: " + guest3);
        guest3.eat("nothing... because she has HW to do");

        System.out.println("------ LIST OF GUESTS ------- ");
        List<Guest> guests = List.of(guest1, guest2, guest3);
        System.out.println("guests: " + guests);

    }

}
