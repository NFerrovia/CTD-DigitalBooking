package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.Entity.Feature;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface IFeatureServices extends ICheckId<Feature> {
    List<FeatureDTO> findByProductId(Integer id) throws ResourceNotFoundException;
    void saveFeatures(List<Feature> featureList);
    FeatureDTO save(FeatureDTO featureDTO);
    FeatureDTO findById(Integer id) throws ResourceNotFoundException;
    List<FeatureDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
