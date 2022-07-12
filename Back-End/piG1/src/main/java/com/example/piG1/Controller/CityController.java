package com.example.piG1.Controller;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import com.example.piG1.Service.IService.ICityServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/cities")
public class CityController {

    @Autowired
    ICityServices iCityServices;

    @GetMapping
    public ResponseEntity<List<CityDTO>> findAll(){
        return ResponseEntity.ok(iCityServices.findAll());
    }

    @PostMapping
    public ResponseEntity<CityDTO> save(@RequestBody CityDTO cityDTO){
            return ResponseEntity.status(HttpStatus.CREATED).body(iCityServices.save(cityDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        iCityServices.delete(id);
        return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<CityDTO> findById(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iCityServices.findById(id));
    }
}
