package com.example.piG1.Repository;
import com.example.piG1.Model.Entity.Product;
import com.example.piG1.Model.Entity.Punctuation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IPunctuationRepository extends JpaRepository<Punctuation,Integer> {
    List<Punctuation> findPunctuationsByProductId(Integer id);
}
