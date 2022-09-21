package com.bootcamp.FoodTruckApp.order;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@Slf4j
@RequiredArgsConstructor
public class OrderRepository {

    private final JdbcTemplate jdbcTemplate;

    public void createOrder(OrderRequestBody orderRequestBody) {
        String sql = "INSERT INTO \"order\" (customer_id) VALUES (?) RETURNING *";
        Order newOrder = jdbcTemplate.queryForObject(
                sql,
                new BeanPropertyRowMapper<>(Order.class),
                orderRequestBody.getCustomerId()
        );
        log.info("Successfully created order: " + newOrder);
    }

}
