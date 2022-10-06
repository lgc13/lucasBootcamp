package com.bootcamp.FoodTruckApp.order;

import com.bootcamp.FoodTruckApp.appetizer.Appetizer;
import com.bootcamp.FoodTruckApp.appetizer.AppetizerOrdered;
import com.bootcamp.FoodTruckApp.appetizer.AppetizerRepository;
import com.bootcamp.FoodTruckApp.entree.Entree;
import com.bootcamp.FoodTruckApp.entree.EntreeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class OrderService {

    private final OrderRepository orderRepository;
    private final AppetizerRepository appetizerRepository;
    private final EntreeRepository entreeRepository;

    public OrderDto createOrder(OrderRequestBody orderRequestBody) {
        Order newOrder = orderRepository.createOrder(orderRequestBody);

        List<Appetizer> appetizers = orderRequestBody.getAppetizerIds().stream().map(appetizerId -> {
            appetizerRepository.createAppetizerOrdered(appetizerId, newOrder.getId());
            return appetizerRepository.findById(appetizerId);
        }).collect(Collectors.toList());

//        List<Entree> entrees = orderRequestBody.getEntreeIds().stream().map(entreeId -> {
//            entreeRepository.createEntreeOrdered(entreeId, newOrder.getId());
//            return entreeRepository.findById(entreeId);
//        }).collect(Collectors.toList());
        // create a receipt with ALL entrees ordered
        entreeRepository.createEntreeOrders(newOrder.getId(), orderRequestBody.getEntreeIds());
        List<Entree> entrees = entreeRepository.findAllByIds(orderRequestBody.getEntreeIds());

        return new OrderDto(
                newOrder.getId(),
                orderRequestBody.getCustomerId(),
                appetizers,
                entrees
        );
    }

    public List<OrderDto> findAllOrder() {
        List<Order> orders = orderRepository.findAllOrders();
        List<AppetizerOrdered> appetizerOrders = appetizerRepository.findAllAppetizerOrders();
        List<Appetizer> allAppetizers = appetizerRepository.findAll();

        List<OrderDto> orderDtos = orders.stream().map(order -> {

            List<AppetizerOrdered> appetizerOrdersForThisOrder = appetizerOrders.stream()
                    .filter(appetizerOrdered -> appetizerOrdered.getOrderId() == order.getId())
                    .toList();

            List<Appetizer> appetizers = appetizerOrdersForThisOrder.stream().map(appetizerOrder -> {
                Optional<Appetizer> appetizerForThisOrder = allAppetizers.stream()
                        .filter(appetizer -> appetizer.getId() == appetizerOrder.getAppetizerId())
                        .findFirst();
                return appetizerForThisOrder.get();
            }).toList();

            return new OrderDto(
                    order.getId(),
                    order.getCustomerId(),
                    appetizers,
                    null
            );
        }).toList();


        return orderDtos;
    }
}
