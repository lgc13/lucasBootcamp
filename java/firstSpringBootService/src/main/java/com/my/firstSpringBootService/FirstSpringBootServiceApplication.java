package com.my.firstSpringBootService;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FirstSpringBootServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(FirstSpringBootServiceApplication.class, args);

		System.out.println("This is a test");
		sayHello();

		Car myCar2 = new Car();
		System.out.println("myCar2: " + myCar2);

		Car myCar = new Car(5, "Elantra", "Hyundai", 2013, "Black", 4);
		System.out.println("myCar: " + myCar);

		String myCarMake = myCar.getMake();
		System.out.println("myCarMake: " + myCarMake);

		myCar.setColor("Spicy Red");
		System.out.println("myCar color: " + myCar.getColor());

	}

	private static void sayHello() {
		System.out.println("Saying hello from my sayHello");
	}

}
