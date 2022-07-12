package com.example.piG1.Repository;

import com.example.piG1.Model.Entity.Image;
import com.example.piG1.Model.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IImageRepository extends JpaRepository<Image,Integer> {
    List<Image> findByProductId(Integer productId);
}
