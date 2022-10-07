package com.bootcamp.FoodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/orders")
    public OrderDto createOrder(@RequestBody OrderRequestBody orderRequestBody) {
        log.info("Creating an order with requestBody: " + orderRequestBody);
        return orderService.createOrder(orderRequestBody);
    }

    @GetMapping("/orders")
    public List<OrderDto> findAllOrders() {
        log.info("Finding all orders");
        return orderService.findAllOrder();
    }

    @DeleteMapping("/orders/{id}")
    public void deleteOrderById(@PathVariable Integer id) {
        orderService.deleteOrderById(id);
    }

}
