package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.CategoryDTO.CategoryDTO;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyAndTypeOfPolicyDTO;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class GetProductsAllDTO {
        private Integer id;
        private String name;
        private String description;
        private CityDTO city;
        private CategoryDTO category;
        private String imageUrl;
        private List<PolicyAndTypeOfPolicyDTO> policies;
        private String latitude;
        private String longitude;
        private String reference;
}
