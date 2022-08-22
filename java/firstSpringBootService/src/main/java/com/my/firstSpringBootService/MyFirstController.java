package com.my.firstSpringBootService;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RestController
@Slf4j
public class MyFirstController {

    private final Car car1 = new Car(1, "Elantra", "Hyundai", 2013, "Black", 4);
    private final Car car2 = new Car(2, "Prius C", "Toyota", 2016, "Blue", 4);
    ArrayList<Car> cars = new ArrayList<>(Arrays.asList(car1, car2));

    // endpoint/API
    @GetMapping("/")
    public void sayHelloWorld() {
        System.out.println("Hello world from my first controller!!!");
    }

    @GetMapping("/hello")
    public String getHelloWorld() {
        System.out.println("This is the /hello API");
        return "Hello World from getHelloWorld()";
    }

    @GetMapping("/this-is-my-awesome/url/that-i/made-up/in-2022")
    public Integer crazyAPI() {
        System.out.println("The crazy API was called");
        return 100;
    }

    @PostMapping("/cookie")
    @ResponseStatus(HttpStatus.CREATED)
    public void createCookie() {
        System.out.println("I want a cookie!");
    }

    @GetMapping("/cars")
    public List<Car> getCars() {
        System.out.println("Getting the following cars: " + cars);
        return cars;
    }

    @PostMapping("/cars")
    public Car createCar(@RequestBody CarRequestBody carRequestBody) {
        System.out.println("Creating a car with requestBody: " + carRequestBody);
        Integer id = cars.get(cars.size() - 1).getId() + 1;

        Car car = new Car(
                id,
                carRequestBody.getCarModel(),
                carRequestBody.getCarMake(),
                carRequestBody.getCarYear(),
                carRequestBody.getCarColor(),
                4
        );
        cars.add(car);

        return car;
    }

    @GetMapping("/cars/{id}")
    public Car getCarById(@PathVariable Integer id) {
        System.out.println("Getting car by id: " + id);

        Optional<Car> carById = cars.stream().filter(car -> car.getId().equals(id)).findFirst();

        return carById.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
//        if (carById.isPresent()) {
//            return carById.get();
//        }
//        throw new ResponseStatusException(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/customers")
    public void createCustomer() {
        // this is where I do a lot of work to create a customer
        log.info("hurray this is working");
    }


    // Install Postman
    // Create 10 GET APIs
    // Create 10 POST APIs
    // play around with returning different data from all of them
        // string
        // Integer
        // boolean
        // Object (Car) (GET request)
        // List Object (List of Cars) - GET request
    // figure out how to pass VARIABLES in the API URL (ex: /hello/{this should be a variable somehow} ) @PathVariable
        // returning the string/number that you passed in
        // ex: /hello/123
            // expect the return to be 123
        // /hello/my-name-is-lucas
            // expect the return to be my-name-is-lucas
    // figure out how to PASS data to the API through the BODY (use this only with POST requests) @RequestBody
        // ex: POST /hello
            // body: "hello there"
            // return "hello there"
        // try the same as above with other data types (integer, object, list)

}
