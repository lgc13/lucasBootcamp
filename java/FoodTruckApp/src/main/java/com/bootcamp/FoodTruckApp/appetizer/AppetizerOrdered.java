package com.bootcamp.FoodTruckApp.appetizer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class AppetizerOrdered {
    private Integer appetizerId;
    private Integer orderId;
}
