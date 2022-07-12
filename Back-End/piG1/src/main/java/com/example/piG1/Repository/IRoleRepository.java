package com.example.piG1.Repository;
import com.example.piG1.Model.Entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleRepository extends JpaRepository<Role,Integer> {
    Role findByName(String roleName);
}
