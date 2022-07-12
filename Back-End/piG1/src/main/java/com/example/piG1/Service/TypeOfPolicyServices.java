package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Service.IService.IPolicyServices;
import com.example.piG1.Service.IService.ITypeOfPolicyServices;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyAddPoliciesDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyDTO;
import com.example.piG1.Model.Entity.Policy;
import com.example.piG1.Model.Entity.Product;
import com.example.piG1.Model.Entity.TypeOfPolicy;
import com.example.piG1.Repository.IProductRepository;
import com.example.piG1.Repository.ITypeOfPolicyRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
@Service
public class TypeOfPolicyServices implements ITypeOfPolicyServices {
    protected final static Logger logger = Logger.getLogger(TypeOfPolicyServices.class);

    @Autowired
    private ITypeOfPolicyRepository typeOfPolicyRepository;
    @Autowired
    private IPolicyServices policyServices;
    @Autowired
    private IProductRepository productRepository;

    @Autowired
    ObjectMapper mapper;

    @Override
    public TypeOfPolicy checkId(Integer id) throws ResourceNotFoundException {
        Optional<TypeOfPolicy> typeOfPolicy = typeOfPolicyRepository.findById(id);
        if (typeOfPolicy.isEmpty()) {
            throw new ResourceNotFoundException(messageError + id);
        }
        return typeOfPolicy.get();
    }

    @Override
    public TypeOfPolicyDTO addPolicies(TypeOfPolicyAddPoliciesDTO typeOfPolicyAddPoliciesDTO) {
        Optional<TypeOfPolicy> typeOfPolicy = typeOfPolicyRepository.findById(typeOfPolicyAddPoliciesDTO.getTypeOfPolicyId());
        Optional<Product> product = productRepository.findById(typeOfPolicyAddPoliciesDTO.getProductId());
        List<Policy> policyList = new ArrayList<>();
        for (PolicyDTO policyDTO : typeOfPolicyAddPoliciesDTO.getListPolicies()) {
            Policy policy = mapper.convertValue(policyDTO, Policy.class);
            policy.setProduct(product.get());
            policy.setTypeOfPolicy(typeOfPolicy.get());
            policyList.add(policy);
        }
        policyServices.savePolicies(policyList);
        typeOfPolicy = typeOfPolicyRepository.findById(typeOfPolicyAddPoliciesDTO.getTypeOfPolicyId());
        return mapper.convertValue(typeOfPolicy, TypeOfPolicyDTO.class);
    }

    @Override
    public TypeOfPolicyDTO save(TypeOfPolicyDTO typeOfPolicyDTO) {
        TypeOfPolicy typeOfPolicy = mapper.convertValue(typeOfPolicyDTO, TypeOfPolicy.class);
        typeOfPolicy = typeOfPolicyRepository.save(typeOfPolicy);
        return mapper.convertValue(typeOfPolicy, TypeOfPolicyDTO.class);
    }

    @Override
    public TypeOfPolicyDTO findById(Integer id) throws ResourceNotFoundException {
        TypeOfPolicy typeOfPolicy = checkId(id);
        TypeOfPolicyDTO typeOfPolicyDTO = mapper.convertValue(typeOfPolicy, TypeOfPolicyDTO.class);
        logger.info("La busqueda fue exitosa: id " + id);
        return typeOfPolicyDTO;
    }

    @Override
    public List<TypeOfPolicyDTO> findAll() {
        List<TypeOfPolicyDTO> typeOfPoliciesDTO = new ArrayList<>();
        List<TypeOfPolicy> typeOfPolicies = typeOfPolicyRepository.findAll();
        for (TypeOfPolicy typeOfPolicy : typeOfPolicies) {
            typeOfPoliciesDTO.add(mapper.convertValue(typeOfPolicy, TypeOfPolicyDTO.class));
        }
        typeOfPoliciesDTO.sort(Comparator.comparing(TypeOfPolicyDTO::getId)); //
        logger.info("La busqueda fue exitosa: " + typeOfPoliciesDTO);
        return typeOfPoliciesDTO;
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        typeOfPolicyRepository.deleteById(id);
        logger.info("Se elimino la politica correctamente con el id(" + id + ")");
    }
}
