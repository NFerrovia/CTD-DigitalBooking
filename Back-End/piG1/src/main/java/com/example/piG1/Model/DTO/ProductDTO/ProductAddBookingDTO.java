package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.BookingDTO.BookingSaveDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductAddBookingDTO {
    private Integer productId;
    private BookingSaveDTO booking;
}
