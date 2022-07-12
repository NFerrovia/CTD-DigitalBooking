package com.example.piG1.Repository;

import com.example.piG1.Model.Entity.Category;
import com.example.piG1.Model.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface ICategoryRepository extends JpaRepository<Category,Integer> {
    List<Category> findByTitleIn(Set<String> categoryTitle);
}
