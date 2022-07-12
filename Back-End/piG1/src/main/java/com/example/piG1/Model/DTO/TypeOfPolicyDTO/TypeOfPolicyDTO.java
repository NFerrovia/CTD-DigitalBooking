package com.example.piG1.Model.DTO.TypeOfPolicyDTO;

import com.example.piG1.Model.Entity.Policy;
import com.example.piG1.Model.Entity.TypeOfPolicy;
import lombok.*;

import javax.persistence.Column;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TypeOfPolicyDTO {
    private Integer id;
    private String title;
    private String description;
}
