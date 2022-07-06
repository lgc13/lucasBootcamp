package com.my.firstSpringBootService;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CarRequestBody {

    private String carModel;
    private String carMake;
    private String carColor;
    private Integer carYear;

}
