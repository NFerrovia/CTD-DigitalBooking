package com.example.piG1.Repository;
import com.example.piG1.Model.Entity.Image;
import com.example.piG1.Model.Entity.Policy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPolicyRepository extends JpaRepository<Policy,Integer> {
    List<Policy>findByProductId(Integer productId);
}
