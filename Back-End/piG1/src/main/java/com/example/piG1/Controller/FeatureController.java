package com.example.piG1.Controller;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Service.IService.IFeatureServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/features")
public class FeatureController {
    @Autowired
    IFeatureServices iFeatureServices;

    @GetMapping
    public ResponseEntity<List<FeatureDTO>> findAll(){
        return ResponseEntity.ok(iFeatureServices.findAll());
    }

    @PostMapping
    public ResponseEntity<FeatureDTO> save(@RequestBody FeatureDTO featureDTO){
        if(featureDTO.getId() == null)
            return ResponseEntity.status(HttpStatus.CREATED).body(iFeatureServices.save(featureDTO));
        else
            return ResponseEntity.ok(iFeatureServices.save(featureDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        iFeatureServices.delete(id);
        return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<FeatureDTO> findById(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iFeatureServices.findById(id));
    }
}
