package com.bootcamp.FoodTruckApp.order;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;

    public void createOrder(OrderRequestBody orderRequestBody) {
        orderRepository.createOrder(orderRequestBody);
    }

}
