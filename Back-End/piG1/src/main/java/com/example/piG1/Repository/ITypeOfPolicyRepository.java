package com.example.piG1.Repository;

import com.example.piG1.Model.Entity.TypeOfPolicy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITypeOfPolicyRepository extends JpaRepository<TypeOfPolicy,Integer> {
}
