package com.example.piG1.Model.DTO.ProductDTO;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyAddPoliciesDTO;
import com.example.piG1.Model.Entity.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductDTO {
    private Integer id;
    private String name;
    private String description;
    private List<ImageDTO> images;
    private List<TypeOfPolicyAddPoliciesDTO> typeOfPolicyAddPoliciesDTOList;
    private Integer city_id;
    private Integer category_id;
    private List<FeatureDTO> features;
    private String latitude;
    private String longitude;
    private String address;
}
