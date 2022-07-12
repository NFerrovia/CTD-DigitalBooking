package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationDTO;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationGetFindByProduct;
import com.example.piG1.Model.Entity.Punctuation;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface IPunctuationService extends ICheckId<Punctuation> {
    PunctuationGetFindByProduct save(PunctuationDTO punctuationDTO);
    PunctuationDTO findById(Integer id) throws ResourceNotFoundException;
    List<PunctuationDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
    List<PunctuationGetFindByProduct> findPunctuationsByProductId(Integer id);
}
