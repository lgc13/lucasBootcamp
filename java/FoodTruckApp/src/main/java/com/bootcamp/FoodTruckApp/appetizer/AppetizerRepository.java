package com.bootcamp.FoodTruckApp.appetizer;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class AppetizerRepository {

    private final JdbcTemplate jdbcTemplate;

    public AppetizerOrdered createAppetizerOrdered(Integer appetizerId, Integer orderId) {
        log.info("Created a appetizer_ordered row with appetizerId: " + appetizerId + ", and orderId: " + orderId);
        String appSql = "INSERT INTO appetizer_ordered (appetizer_id, order_id) VALUES (?, ?) RETURNING *";

        return jdbcTemplate.queryForObject(appSql, new BeanPropertyRowMapper<>(AppetizerOrdered.class), appetizerId, orderId);
    }

    public Appetizer findById(Integer appetizerId) {
        log.info("Finding appetizer with id: " + appetizerId);
        String sql = "SELECT * FROM appetizer WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Appetizer.class), appetizerId);
    }

    public List<Appetizer> findAll() {
        String sql = "SELECT * FROM appetizer";

        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(Appetizer.class));
    }

    public List<AppetizerOrdered> findAllAppetizerOrders() {
        String sql = "SELECT * FROM appetizer_ordered";

        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(AppetizerOrdered.class));
    }

    public void deleteAllByOrderId(Integer orderId) {
        String sql = "DELETE FROM appetizer_ordered WHERE order_id = ?";

        jdbcTemplate.update(sql, orderId);
    }
}
