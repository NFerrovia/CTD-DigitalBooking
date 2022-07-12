package com.example.piG1.Repository;

import com.example.piG1.Model.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductRepository extends JpaRepository<Product,Integer> {

    List<Product> findByCityId(Integer cityId);
    List<Product> findByCityName(String cityName);
    List<Product> findByCategoryId(Integer categoryId);
    List<Product> findByCategoryTitle(String categoryTitle);
    List<Product> findByCategoryIdAndCityId(Integer categoryId, Integer cityId);
    Product findFirstByOrderByIdDesc();
}
