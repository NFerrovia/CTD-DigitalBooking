package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationDTO;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationGetFindByProduct;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductAddPunctuactionDTO {
    private Integer productId;
    private PunctuationGetFindByProduct puntuation;
}
