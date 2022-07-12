package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductAddImagesDTO {
    private Integer productId;
    private List<ImageDTO> listImages;
}
