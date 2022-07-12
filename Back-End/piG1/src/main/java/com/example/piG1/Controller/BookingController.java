package com.example.piG1.Controller;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.BookingDTO.BookingCompliteDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingFindBetweenDatesDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingSaveDTO;
import com.example.piG1.Service.IService.IBookingServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.mail.MessagingException;
import java.io.InvalidObjectException;
import java.io.UnsupportedEncodingException;
import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {
    @Autowired
    IBookingServices iBookingServices;

    @GetMapping
    public ResponseEntity<List<BookingDTO>> findAll(){
        return ResponseEntity.ok(iBookingServices.findAll());
    }

    @PostMapping
    public ResponseEntity<BookingDTO> save(@RequestBody BookingSaveDTO bookingSaveDTO) throws ResourceNotFoundException, MessagingException, UnsupportedEncodingException, InvalidObjectException {
         if(bookingSaveDTO.getId() == null)
            return ResponseEntity.status(HttpStatus.CREATED).body(iBookingServices.save(bookingSaveDTO));
        else
            return ResponseEntity.ok(iBookingServices.save(bookingSaveDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) throws ResourceNotFoundException {
        iBookingServices.delete(id);
        return  ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> findById(@PathVariable Integer id) throws ResourceNotFoundException {
        return ResponseEntity.ok(iBookingServices.findById(id));
    }

   @PostMapping("/findBetweenDates")
   public ResponseEntity<List<BookingDTO>> findByDate(@RequestBody BookingFindBetweenDatesDTO bookingFindBetweenDatesDTO) throws ResourceNotFoundException {
       return ResponseEntity.ok(iBookingServices.findBetweenTwoDates(bookingFindBetweenDatesDTO.getStartDate(), bookingFindBetweenDatesDTO.getEndDate()));
   }

    @GetMapping("/findByProductId/{productId}")
    public ResponseEntity<List<BookingDTO>> findByProductId(@PathVariable Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(iBookingServices.findByProductId(productId));
    }

    @GetMapping("/findAllByProductId/{productId}")
    public ResponseEntity<List<BookingDTO>> findAllByProductId(@PathVariable Integer productId) throws ResourceNotFoundException {
        return ResponseEntity.ok(iBookingServices.findAllByProductId(productId));
    }

    @GetMapping("/findByUserId/{userId}")
    public ResponseEntity<List<BookingCompliteDTO>>findByUserId(@PathVariable Integer userId) throws ResourceNotFoundException {
        return ResponseEntity.ok(iBookingServices.findByUserId(userId));
    }

}
