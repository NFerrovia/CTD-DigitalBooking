package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.Entity.Category;
import com.example.piG1.Model.DTO.CategoryDTO.CategoryDTO;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface ICategoryServices extends  ICheckId<Category> {
    CategoryDTO save(CategoryDTO categoryDTO);
    CategoryDTO findById(Integer id) throws ResourceNotFoundException;
    List<CategoryDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
