package com.example.piG1.Controller;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationDTO;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationGetFindByProduct;
import com.example.piG1.Service.IService.IPunctuationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/punctuation")
public class PunctuationController {
    @Autowired
    IPunctuationService iPunctuactionService;

    @GetMapping("/getAll")
    public ResponseEntity<List<PunctuationDTO>> findAll(){
        return ResponseEntity.ok(iPunctuactionService.findAll());
    }

    @PostMapping("/saveScore")
    public ResponseEntity<PunctuationGetFindByProduct> save(@RequestBody PunctuationDTO punctuationDTO){
        return ResponseEntity.status(HttpStatus.CREATED).body(iPunctuactionService.save(punctuationDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        iPunctuactionService.delete(id);
        return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<PunctuationDTO> findById(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iPunctuactionService.findById(id));
    }

    @GetMapping("/findByProduct/{id}")
    public List <PunctuationGetFindByProduct> findPunctuationsByProductId(@PathVariable Integer id){
        return iPunctuactionService.findPunctuationsByProductId(id);
    }
}
