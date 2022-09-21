package com.bootcamp.FoodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/orders")
    public void createOrder(@RequestBody OrderRequestBody orderRequestBody) {
        log.info("Creating an order with requestBody: " + orderRequestBody);
        orderService.createOrder(orderRequestBody);
    }

}
