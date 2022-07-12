package com.example.piG1.Model.DTO.TypeOfPolicyDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyDTO;
import lombok.*;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TypeOfPolicyAddPoliciesDTO {
    private Integer typeOfPolicyId;
    private Integer productId;
    private List<PolicyDTO> listPolicies;
}
