package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.CategoryDTO.CategoryDTO;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductCompliteDTO {
    private Integer id;
    private String name;
    private String description;
    private CityDTO city;
    private CategoryDTO category;
}
