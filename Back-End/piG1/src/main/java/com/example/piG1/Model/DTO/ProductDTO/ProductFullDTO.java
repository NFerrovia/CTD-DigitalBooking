package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyAndTypeOfPolicyDTO;
import com.example.piG1.Model.Entity.Category;
import com.example.piG1.Model.Entity.City;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductFullDTO {
    private Integer id;
    private String name;
    private String description;
    private List<ImageDTO> images;
    private List<PolicyAndTypeOfPolicyDTO> policies;
    private City city;
    private Category category;
    private List<FeatureDTO> features;
    private List<BookingDTO> bookings;
    private String latitude;
    private String longitude;
    private String reference;
    private String address;
}
