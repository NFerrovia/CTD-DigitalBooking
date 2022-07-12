package com.example.piG1.Model.DTO.ProductDTO;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductFindByCategoryCityDTO {
    private Integer cityId;
    private Integer categoryId;
}
