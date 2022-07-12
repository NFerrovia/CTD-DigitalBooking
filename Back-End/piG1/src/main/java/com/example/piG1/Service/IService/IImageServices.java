package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.Entity.Image;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface IImageServices extends  ICheckId<Image> {
    void saveImages(List<Image> imageList);
    List<ImageDTO> findByProductId(Integer id) throws ResourceNotFoundException;
    ImageDTO save(ImageDTO imageDTO);
    ImageDTO findById(Integer id) throws ResourceNotFoundException;
    List<ImageDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
}
