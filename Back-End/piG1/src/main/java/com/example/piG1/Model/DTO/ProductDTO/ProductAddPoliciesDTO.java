package com.example.piG1.Model.DTO.ProductDTO;

import com.example.piG1.Model.DTO.PolicyDTO.PolicyDTO;
import lombok.*;

import java.util.List;
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ProductAddPoliciesDTO {
    private Integer productId;
    private List<PolicyDTO> listPolicies;
}
