package com.bootcamp.FoodTruckApp.order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order { // entity
    private Integer id;
    private Integer customerId;
}
