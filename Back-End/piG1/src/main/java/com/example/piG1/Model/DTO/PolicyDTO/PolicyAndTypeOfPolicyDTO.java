package com.example.piG1.Model.DTO.PolicyDTO;

import com.example.piG1.Model.DTO.CategoryDTO.CategoryDTO;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PolicyAndTypeOfPolicyDTO {
    private TypeOfPolicyDTO typeOfPolicy;
    private Integer id;
    private String description;
}
