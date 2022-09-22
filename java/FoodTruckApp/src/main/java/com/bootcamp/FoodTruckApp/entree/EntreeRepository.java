package com.bootcamp.FoodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
@Slf4j
public class EntreeRepository {

    private final JdbcTemplate jdbcTemplate;

    public EntreeOrdered createEntreeOrdered(Integer entreeId, Integer orderId) {
        log.info("Created a entree_ordered row with entreeId: " + entreeId + ", and orderId: " + orderId);
        String appSql = "INSERT INTO entree_ordered (entree_id, order_id) VALUES (?, ?) RETURNING *";

        return jdbcTemplate.queryForObject(appSql, new BeanPropertyRowMapper<>(EntreeOrdered.class), entreeId, orderId);
    }

    public Entree findById(Integer entreeId) {
        log.info("Finding entree with id: " + entreeId);
        String sql = "SELECT * FROM entree WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Entree.class), entreeId);
    }
}
