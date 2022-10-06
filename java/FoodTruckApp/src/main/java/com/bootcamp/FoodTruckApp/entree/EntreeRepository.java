package com.bootcamp.FoodTruckApp.entree;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class EntreeRepository {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public EntreeOrdered createEntreeOrdered(Integer entreeId, Integer orderId) {
        log.info("Created a entree_ordered row with entreeId: " + entreeId + ", and orderId: " + orderId);
        String appSql = "INSERT INTO entree_ordered (entree_id, order_id) VALUES (?, ?) RETURNING *";

        return jdbcTemplate.queryForObject(appSql, new BeanPropertyRowMapper<>(EntreeOrdered.class), entreeId, orderId);
    }

    public void createEntreeOrders(Integer orderId, List<Integer> entreeIds) {
        log.info("Creating entree orders with orderId: " + orderId + ", and entreeIds: " + entreeIds);
        String insertSql = "INSERT INTO entree_ordered (entree_id, order_id) VALUES (?, ?)";

        jdbcTemplate.batchUpdate(
                insertSql,
                new BatchPreparedStatementSetter() {

                    @Override
                    public void setValues(PreparedStatement ps, int i) throws SQLException {
                        ps.setInt(1, entreeIds.get(i));
                        ps.setInt(2, orderId);
                    }

                    @Override
                    public int getBatchSize() {
                        return entreeIds.size();
                    }
                }
        );

    }

    public Entree findById(Integer entreeId) {
        log.info("Finding entree with id: " + entreeId);
        String sql = "SELECT * FROM entree WHERE id = ?";

        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(Entree.class), entreeId);
    }

    public List<Entree> findAllByIds(List<Integer> entreeIds) {
        if (entreeIds.isEmpty()) {
            return List.of();
        }

        log.info("Finding ALL entrees by ids: " + entreeIds);
        String sql = "SELECT * FROM entree WHERE id in (:ids)";

        MapSqlParameterSource parameters = new MapSqlParameterSource();
        parameters.addValue("ids", entreeIds);

        List<Entree> entrees = namedParameterJdbcTemplate.query(sql, parameters, new BeanPropertyRowMapper<>(Entree.class));
        log.info("Found all the following entrees: " + entrees);

        return entrees;
    }

    public List<EntreeAndOrderId> findAllByOrderIds(List<Integer> orderIds) {
        log.info("Finding ALL entrees by orderIds: " + orderIds);
        String sql = "SELECT entree.*, entree_ordered.order_id " +
                "FROM entree_ordered " +
                "JOIN entree on entree.id = entree_ordered.entree_id " +
                "WHERE order_id IN (:orderIds) ";

        MapSqlParameterSource parameters = new MapSqlParameterSource();
        parameters.addValue("orderIds", orderIds);

        List<EntreeAndOrderId> entreeAndOrderIds = namedParameterJdbcTemplate.query(
                sql,
                parameters,
                new BeanPropertyRowMapper<>(EntreeAndOrderId.class)
        );
        log.info("Found all of the following entrees with order ids: " + entreeAndOrderIds);
        return entreeAndOrderIds;
    }
}
