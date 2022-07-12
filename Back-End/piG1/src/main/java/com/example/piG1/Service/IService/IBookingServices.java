package com.example.piG1.Service.IService;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.BookingDTO.BookingCompliteDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingSaveDTO;
import com.example.piG1.Model.Entity.Booking;
import com.example.piG1.Service.ICheckId;

import javax.mail.MessagingException;
import java.io.InvalidObjectException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.List;

public interface IBookingServices extends  ICheckId<Booking> {
    public void saveBookings(List<Booking> bookingsList);
    BookingDTO save(BookingSaveDTO bookingSaveDTO) throws MessagingException, UnsupportedEncodingException, InvalidObjectException;
    BookingDTO findById(Integer id) throws ResourceNotFoundException;
    List<BookingDTO> findAll();
    void delete(Integer id) throws ResourceNotFoundException;
    List <BookingDTO> findBetweenTwoDates(LocalDate startDate, LocalDate endDate) throws ResourceNotFoundException;
    List <BookingDTO> findByProductId(Integer productId) throws ResourceNotFoundException;
    List<BookingCompliteDTO> findByUserId(Integer id) throws ResourceNotFoundException;
    List <BookingDTO> findAllByProductId(Integer productId) throws ResourceNotFoundException;
}
