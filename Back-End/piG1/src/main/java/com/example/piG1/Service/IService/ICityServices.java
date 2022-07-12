package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.Entity.City;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface ICityServices  extends ICheckId<City> {
    CityDTO save(CityDTO t);
    CityDTO findById(Integer id) throws ResourceNotFoundException;
    List<CityDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
