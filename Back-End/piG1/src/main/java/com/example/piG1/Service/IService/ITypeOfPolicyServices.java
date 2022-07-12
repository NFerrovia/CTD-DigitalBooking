package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyAddPoliciesDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyDTO;
import com.example.piG1.Model.Entity.TypeOfPolicy;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface ITypeOfPolicyServices extends  ICheckId<TypeOfPolicy> {
    TypeOfPolicyDTO addPolicies(TypeOfPolicyAddPoliciesDTO typeOfPolicyAddPoliciesDTO);
    TypeOfPolicyDTO save(TypeOfPolicyDTO t);
    TypeOfPolicyDTO findById(Integer id) throws ResourceNotFoundException;
    List<TypeOfPolicyDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
