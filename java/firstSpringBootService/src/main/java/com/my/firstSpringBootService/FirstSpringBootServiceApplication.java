package com.my.firstSpringBootService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FirstSpringBootServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstSpringBootServiceApplication.class, args);

		System.out.println("This is a test");
		sayHello();
	}

	private static void sayHello() {
		System.out.println("Saying hello from my sayHello");
	}

}
