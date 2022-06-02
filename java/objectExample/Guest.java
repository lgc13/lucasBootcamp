import java.util.List;

// MODEL
class Guest {
    
    // attributes/properties
    // information about your object
    // descriptions
    private String firstName;
    private String lastName;
    private Integer age;
    private String favoriteColor;
    private List<Owner> owners;

    // constructor = creates an INSTANCE of the Guest class
    // default constructor OR no args constructor
    public Guest() { // takes 0 arguments
        // returns nothing, its just an empty object
    }

    // all args constructor
    public Guest(String firstName, String lastName, Integer age, String favoriteColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favoriteColor = favoriteColor;
        // this.owners = owners;
    }
    
    /* GETTERS */
    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public Integer getAge() {
        return this.age;
    }

    public String getFavoriteColor() {
        return this.favoriteColor;
    }

    /* SETTERS */
    public void setFirstName(String newFirstName) {
        this.firstName = newFirstName;
    }

    public void setLastName(String newLastName) {
        this.lastName = newLastName;
    }

    public void setAge(Integer newAge) {
        this.age = newAge;
    }

    public void setFavoriteColor(String newFavoriteColor) {
        this.favoriteColor = newFavoriteColor;
    }


    // METHODS
    public void eat(String food) {
        System.out.println(this.firstName + " is eating: " + food);
    }

    // method overwriting = OOP concept
    public String toString() {
        return "Guest {" +
            "firstName: " + firstName +
            ", lastName: " + lastName +
            ", age: " + age +
            ", favoriteColor: " + favoriteColor +
        "}";
    }

}
