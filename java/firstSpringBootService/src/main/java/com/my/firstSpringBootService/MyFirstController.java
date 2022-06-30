package com.my.firstSpringBootService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyFirstController {

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
    public void createCookie() {
        System.out.println("I want a cookie!");
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
