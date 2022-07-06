package com.my.firstSpringBootService;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Car {

    private Integer id;
    private String model;
    private String make;
    private Integer year;
    private String color;
    private Integer doors;

}
