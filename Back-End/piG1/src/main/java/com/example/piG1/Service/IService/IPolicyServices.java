package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyAndTypeOfPolicyDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyDTO;
import com.example.piG1.Model.Entity.Policy;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface IPolicyServices extends  ICheckId<Policy> {
    List<PolicyAndTypeOfPolicyDTO> findByProductId(Integer id) throws ResourceNotFoundException;
    void savePolicies(List<Policy> policiesList);
    PolicyDTO save(PolicyDTO policyDTO);
    PolicyDTO findById(Integer id) throws ResourceNotFoundException;
    List<PolicyAndTypeOfPolicyDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
