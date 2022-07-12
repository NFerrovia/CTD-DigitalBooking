package com.example.piG1.Service;

import com.example.piG1.Model.Entity.Role;
import com.example.piG1.Repository.IRoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleServices {

    @Autowired
    IRoleRepository roleRepository;

    public Role findRoleByName(String name) {
        return roleRepository.findByName(name);
    }
}
