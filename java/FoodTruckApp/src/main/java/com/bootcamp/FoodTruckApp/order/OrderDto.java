package com.bootcamp.FoodTruckApp.order;

import com.bootcamp.FoodTruckApp.appetizer.Appetizer;
import com.bootcamp.FoodTruckApp.entree.Entree;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderDto {
    private Integer id;
    private Integer customerId;
    private List<Appetizer> appetizers;
    private List<Entree> entrees;
}
