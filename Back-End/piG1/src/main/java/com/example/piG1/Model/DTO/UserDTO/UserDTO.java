package com.example.piG1.Model.DTO.UserDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class UserDTO {
    private Integer id;
    private String userName;
    private String lastName;
    private String mail;
    private String password;
    private Integer roleId;
}
