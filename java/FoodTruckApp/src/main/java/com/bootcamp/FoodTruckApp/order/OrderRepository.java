package com.bootcamp.FoodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Slf4j
@RequiredArgsConstructor
public class OrderRepository {

    private final JdbcTemplate jdbcTemplate;

    public Order createOrder(OrderRequestBody orderRequestBody) {
        String sql = "INSERT INTO \"order\" (customer_id) VALUES (?) RETURNING *";
        Order newOrder = jdbcTemplate.queryForObject(
                sql,
                new BeanPropertyRowMapper<>(Order.class),
                orderRequestBody.getCustomerId()
        );
        log.info("Successfully created order: " + newOrder);

        return newOrder;
    }

    public List<Order> findAllOrders() {
        String sql = "SELECT * FROM \"order\"";

        List<Order> orders = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Order.class));
        System.out.println("orders: " + orders);
        return orders;
    }
}
