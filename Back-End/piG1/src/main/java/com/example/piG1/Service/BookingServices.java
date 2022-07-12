package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.BookingDTO.BookingCompliteDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingSaveDTO;
import com.example.piG1.Model.Entity.*;
import com.example.piG1.Repository.*;
import com.example.piG1.Service.IService.*;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import java.io.InvalidObjectException;
import java.io.UnsupportedEncodingException;
import java.time.LocalDate;
import java.util.*;

@Service
public class BookingServices implements IBookingServices {
    protected final static Logger logger = Logger.getLogger(BookingServices.class);


    @Autowired
    private IBookingRepository bookingRepository;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ICityRepository cityRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private IUserRepository userRepository;
    @Autowired
    private IImageServices imageServices;
    @Autowired
    private IPolicyServices policyServices;
    @Autowired
    private IFeatureServices featureServices;
    @Autowired
    private IEmailSenderService emailSenderService;
    @Autowired
    private IUserServices userServices;

    @Autowired
    ObjectMapper mapper;

    @Override
    public Booking checkId(Integer id) throws ResourceNotFoundException {
        Optional<Booking> booking = bookingRepository.findById(id);
        if (booking.isEmpty()) {
            throw new ResourceNotFoundException(messageError + id);
        }
        return booking.get();
    }

    @Override
    public BookingDTO save(BookingSaveDTO bookingSaveDTO) throws MessagingException, UnsupportedEncodingException, InvalidObjectException {
        List<Booking> bookings = bookingRepository.findByDatesBetweenAndProductId(bookingSaveDTO.getStartDate(), bookingSaveDTO.getEndDate(), bookingSaveDTO.getProductId());
        if(bookings.size() > 0)
        {
            throw new InvalidObjectException("Esta fecha ya fue tomada");
        }
        Booking booking = mapper.convertValue(bookingSaveDTO, Booking.class);
        booking.setProduct(productRepository.findById(bookingSaveDTO.getProductId()).get());
        booking.setUser(userRepository.findById(bookingSaveDTO.getUserId()).get());
        booking = bookingRepository.save(booking);
        BookingDTO bookingDTO = mapper.convertValue(booking, BookingDTO.class);
        bookingDTO.setProductId(booking.getProduct().getId());
        User user = userRepository.findById(bookingSaveDTO.getUserId()).get();
        Map<String, Object> templateModel = new HashMap<>();
        templateModel.put("recipientName", user.getName());
        emailSenderService.sendBookingConfirmation(user.getUserName(), "New Reservation!", templateModel);
        return bookingDTO;
    }

    @Override
    public BookingDTO findById(Integer id) throws ResourceNotFoundException {
        Booking booking = checkId(id);
        BookingDTO bookingDTO = mapper.convertValue(booking, BookingDTO.class);
        bookingDTO.setProductId(booking.getProduct().getId());
        logger.info("La busqueda fue exitosa: id " + id);
        return bookingDTO;
    }

    @Override
    public List<BookingDTO> findAll() {
        List<BookingDTO> bookingsDTO = new ArrayList<>();
        List<Booking> bookings = bookingRepository.findAll();
        for(Booking booking: bookings){
            BookingDTO bookingDTO = mapper.convertValue(booking, BookingDTO.class);
            bookingDTO.setProductId(booking.getProduct().getId());
            bookingsDTO.add(bookingDTO);
        }
        bookingsDTO .sort(Comparator.comparing(BookingDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ bookings);
        return bookingsDTO;
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        bookingRepository.deleteById(id);
        logger.info("Se elimino la reserva correctamente con el id("+id+")");
    }
    @Override
    public void saveBookings(List<Booking> bookingsList) {
        bookingRepository.saveAll(bookingsList);
    }

    @Override
    public List <BookingDTO> findBetweenTwoDates(LocalDate startDate, LocalDate endDate) throws ResourceNotFoundException {
        List <Booking> bookings = bookingRepository.findByDatesBetween(startDate, endDate);
        List <BookingDTO> bookingDTOList = new ArrayList<>();

        bookings.forEach(booking ->
                bookingDTOList.add(mapper.convertValue(booking, BookingDTO.class)));

        for (BookingDTO bookingDTO : bookingDTOList) {
            Booking booking = checkId(bookingDTO.getId());
            bookingDTO.setProductId(booking.getProduct().getId());
        }

        return bookingDTOList;
    }

    @Override
    public List <BookingDTO> findByProductId(Integer productId) throws ResourceNotFoundException {
        List <Booking> bookings = bookingRepository.findByProductId(productId);
        List <BookingDTO> bookingDTOList = new ArrayList<>();

        bookings.forEach(booking ->
                bookingDTOList.add(mapper.convertValue(booking, BookingDTO.class)));

        for (BookingDTO bookingDTO : bookingDTOList) {
            Booking booking = checkId(bookingDTO.getId());
            bookingDTO.setProductId(booking.getProduct().getId());
        }

        return bookingDTOList;
    }

    @Override
    public List <BookingDTO> findAllByProductId(Integer productId) throws ResourceNotFoundException {
        List <Booking> bookings = bookingRepository.findAllByProductId(productId);
        List <BookingDTO> bookingDTOList = new ArrayList<>();

        bookings.forEach(booking ->
                bookingDTOList.add(mapper.convertValue(booking, BookingDTO.class)));

        for (BookingDTO bookingDTO : bookingDTOList) {
            Booking booking = checkId(bookingDTO.getId());
            bookingDTO.setProductId(booking.getProduct().getId());
        }

        return bookingDTOList;
    }

    @Override
    public List<BookingCompliteDTO> findByUserId(Integer id) throws ResourceNotFoundException {
        List<BookingCompliteDTO> bookingCompliteDTO = new ArrayList<>();
        List<Booking> bookings = bookingRepository.findByUserId(id);
        for(Booking booking: bookings){
            BookingCompliteDTO bookingCompliteDTO1 = mapper.convertValue(booking, BookingCompliteDTO.class);
            bookingCompliteDTO1.getProduct().setImages(imageServices.findByProductId(bookingCompliteDTO1.getProduct().getId()));
            bookingCompliteDTO1.getProduct().setPolicyAndTypeOfPolicyDTOList(policyServices.findByProductId(bookingCompliteDTO1.getProduct().getId()));
            bookingCompliteDTO1.getProduct().setFeatures(featureServices.findByProductId(bookingCompliteDTO1.getProduct().getId()));
//
            bookingCompliteDTO.add(bookingCompliteDTO1);
        }
        bookingCompliteDTO .sort(Comparator.comparing(BookingCompliteDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ bookingCompliteDTO);
        return bookingCompliteDTO;
    }
}
