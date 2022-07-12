package com.example.piG1.Controller;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.ProductDTO.*;
import com.example.piG1.Repository.IProductRepository;
import com.example.piG1.Service.IService.IProductServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products")
public class ProductController {
    @Autowired
    IProductServices iProductServices;

    @Autowired
    IProductRepository iProductRepository;

    @GetMapping
    public ResponseEntity<List<GetAllProductsDTO>> findAll() throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findAll());
    }

    @PostMapping("/saveProduct")
    public ResponseEntity<ProductCompliteDTO> saveComplite (@RequestBody ProductDTO productDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(iProductServices.saveComplite(productDTO));
    }


    @DeleteMapping("/deleteProduct/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        iProductServices.delete(id);
        return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductFullDTO>findById(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findById(id));
    }

    @GetMapping("/allData/{id}")
    public ResponseEntity<ProductCompliteDTO>findByIdComplite(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findByIdComplite(id));
    }

    @GetMapping("/allCity/{id}")
    public ResponseEntity<List<ProductFindByFilterDTO>>findByCityId(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findByCityId(id));
    }

    @GetMapping("/allCategory/{id}")
    public ResponseEntity<List<ProductFindByFilterDTO>>findByCategoryId(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findByCategoryId(id));
    }

    @PostMapping("/allCategoryAndCity")
    public ResponseEntity<List<ProductFindByFilterDTO>>findProductsByData(@RequestBody ProductFindByCategoryCityDTO productFindByCategoryCityDTO) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findByCityIdAndCategoryId(productFindByCategoryCityDTO));
    }

    @PostMapping("/allAvailableDates")
    public ResponseEntity<List<ProductFindByFilterDTO>> findByDate(@RequestBody ProductBetweenTwoDatesDTO productBetweenTwoDatesDTO) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findBetweenTwoDates(productBetweenTwoDatesDTO));
    }

    @PostMapping("/allAvailableDates/city")
    public ResponseEntity<List<ProductFindByFilterDTO>> findByDateAndCity(@RequestBody ProductBetweenDatesAndCityDTO productBetweenDatesAndCityDTO) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findBetweenTwoDatesAndCity(productBetweenDatesAndCityDTO));
    }

    @PostMapping("/allAvailableDates/city/category")
    public ResponseEntity<List<ProductFindByFilterDTO>> findByDateAndCityAndCategory(@RequestBody ProductByDatesCityCategoryDTO productByDatesCityCategoryDTO) throws ResourceNotFoundException {
        return ResponseEntity.ok(iProductServices.findBetweenTwoDatesAndCityAndCategory(productByDatesCityCategoryDTO));
    }

    @PostMapping("/add/policies")
    public ResponseEntity<ProductCompliteDTO> addPolicies(@RequestBody ProductAddPoliciesDTO productAddPoliciesDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(iProductServices.addPolicies(productAddPoliciesDTO));
    }

    @PostMapping("/add/images")
    public ResponseEntity<ProductCompliteDTO> addImages(@RequestBody ProductAddImagesDTO productAddImagesDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(iProductServices.addImages(productAddImagesDTO));
    }

    @PostMapping("/add/punctuation")
    public ResponseEntity<ProductCompliteDTO> addPunctuation(@RequestBody ProductAddPunctuactionDTO productAddPunctuactionDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(iProductServices.addPuntuation(productAddPunctuactionDTO));
    }

    @PostMapping("/add/features")
    public ResponseEntity<ProductCompliteDTO> addFeatures(@RequestBody ProductAddFeaturesDTO productAddFeaturesDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(iProductServices.addFeatures(productAddFeaturesDTO));
    }

    @PutMapping ("/update")
    public ResponseEntity<ProductCompliteDTO> updateProduct(@RequestBody ProductDTO productDTO) throws ResourceNotFoundException{
        return ResponseEntity.ok(iProductServices.updateProduct(productDTO));
    }
}
