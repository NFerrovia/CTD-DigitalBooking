package com.example.piG1.Model.DTO.PunctuationDTO;
import com.example.piG1.Model.DTO.ProductDTO.ProductDTO;
import com.example.piG1.Model.DTO.UserDTO.UserPunctuationDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PunctuationDTO {
    private Integer id;
    private Integer score;
    private Integer productId;
    private Integer userId;
}
