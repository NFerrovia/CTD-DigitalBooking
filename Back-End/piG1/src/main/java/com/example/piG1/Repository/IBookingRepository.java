package com.example.piG1.Repository;

import com.example.piG1.Model.Entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IBookingRepository extends JpaRepository<Booking,Integer> {
    @Query("select b from Booking b where " +
            "(start_date between :startDate AND :endDate) " +
            "OR (end_date between :startDate AND :endDate) " +
            "OR ((:endDate between start_date AND end_date) AND (:startDate between start_date AND end_date))")
    List<Booking> findByDatesBetween(
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate);

    List<Booking> findByProductId(Integer productId);

    @Query("select b from Booking b where " +
            "((start_date between :startDate AND :endDate) " +
            "OR (end_date between :startDate AND :endDate) " +
            "OR ((:endDate between start_date AND end_date) AND (:startDate between start_date AND end_date)) "+
            ") AND product_id = :productId")
    List<Booking> findByDatesBetweenAndProductId(
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate,
            @Param("productId") Integer productId);

    List<Booking> findAllByProductId(Integer productId);
    List<Booking> findByUserId(Integer id);
    @Query (value = "select product_id from bookings where user_id = :userId", nativeQuery = true)
    List<Integer> findByUserIdProduct(@Param("userId") Integer userId);
}
