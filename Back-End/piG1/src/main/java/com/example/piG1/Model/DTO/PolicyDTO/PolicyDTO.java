package com.example.piG1.Model.DTO.PolicyDTO;
import com.example.piG1.Model.Entity.TypeOfPolicy;
import lombok.*;

import javax.persistence.Column;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PolicyDTO {
    private Integer id;
    private String description;
}
