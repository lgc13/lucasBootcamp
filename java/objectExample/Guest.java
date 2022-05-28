class Guest {
    
    // attributes/properties
    // information about your object
    // descriptions
    String firstName;
    String lastName;
    Integer age;

    // constructor = creates an INSTANCE of the Guest class
    // default constructor OR no args constructor
    public Guest() { // takes 0 arguments
        // returns nothing, its just an empty object
    }

    // all args constructor
    public Guest(String firstName, String lastName, Integer age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // methods = actions
    public void eat(String food) {
        System.out.println(this.firstName + " is eating: " + food);
    }
    
}
