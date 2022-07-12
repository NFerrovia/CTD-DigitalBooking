package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.ProductDTO.*;
import com.example.piG1.Model.Entity.Product;
import com.example.piG1.Service.ICheckId;

import java.util.List;

public interface IProductServices extends ICheckId<Product> {
    ProductCompliteDTO saveComplite(ProductDTO productDTO);
    ProductCompliteDTO addImages(ProductAddImagesDTO productAddImagesDTO);
    ProductCompliteDTO addPolicies(ProductAddPoliciesDTO productAddPoliciesDTO);
    ProductCompliteDTO addFeatures(ProductAddFeaturesDTO productAddFeaturesDTO);
    ProductCompliteDTO addPuntuation (ProductAddPunctuactionDTO productAddPunctuactionDTO);
    ProductDTO save(ProductDTO ProductDTO);
    ProductFullDTO findById(Integer id) throws ResourceNotFoundException;
    ProductCompliteDTO findByIdComplite(Integer id) throws ResourceNotFoundException;
    List<GetAllProductsDTO> findAll() throws ResourceNotFoundException;
    void delete(Integer id) throws ResourceNotFoundException;
    List<ProductFindByFilterDTO> findByCityId(Integer cityId) throws ResourceNotFoundException;
    List<ProductFindByFilterDTO> findByCategoryId(Integer categoryId) throws ResourceNotFoundException;
    List<ProductFindByFilterDTO> findByCityIdAndCategoryId(ProductFindByCategoryCityDTO productFindByCategoryCityDTO) throws ResourceNotFoundException;
    List <ProductFindByFilterDTO> findBetweenTwoDates(ProductBetweenTwoDatesDTO productBetweenTwoDatesDTO) throws ResourceNotFoundException;
    List <ProductFindByFilterDTO> findBetweenTwoDatesAndCity(ProductBetweenDatesAndCityDTO productBetweenDatesAndCityDTO) throws ResourceNotFoundException;
    List <ProductFindByFilterDTO> findBetweenTwoDatesAndCityAndCategory(ProductByDatesCityCategoryDTO  productByDatesCityCategoryDTO) throws ResourceNotFoundException;
   ProductCompliteDTO updateProduct(ProductDTO productDTO) throws ResourceNotFoundException;
}
