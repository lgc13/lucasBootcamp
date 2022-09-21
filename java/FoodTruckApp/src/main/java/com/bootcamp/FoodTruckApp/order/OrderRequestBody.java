package com.bootcamp.FoodTruckApp.order;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@AllArgsConstructor
@Data
public class OrderRequestBody {
    private Integer customerId;
    private List<Integer> entreeIds;
    private List<Integer> appetizerIds;
}