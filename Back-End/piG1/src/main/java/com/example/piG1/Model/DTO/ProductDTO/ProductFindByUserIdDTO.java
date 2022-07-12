package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.CategoryDTO.CategoryDTO;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyAndTypeOfPolicyDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyAddPoliciesDTO;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductFindByUserIdDTO {
    private Integer id;
    private String name;
    private String description;
    private List<ImageDTO> images;
    private List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTOList;
    private CityDTO city;
    private CategoryDTO category;
    private List<FeatureDTO> features;
    private String latitude;
    private String longitude;
    private String address;
}
