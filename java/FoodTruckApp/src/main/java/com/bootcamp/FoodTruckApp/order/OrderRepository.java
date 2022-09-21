package com.bootcamp.FoodTruckApp.order;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

@Repository
@Slf4j
public class OrderRepository {

    public void createOrder() {
        log.info("IN REPO CREATING ORDER");
    }

}
