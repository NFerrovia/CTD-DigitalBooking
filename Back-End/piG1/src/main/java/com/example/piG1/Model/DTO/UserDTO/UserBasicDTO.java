package com.example.piG1.Model.DTO.UserDTO;

import com.example.piG1.Model.DTO.RoleDTO.RoleBasicDTO;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString

public class UserBasicDTO {
    private Integer id;
    private String userName;
    private String lastName;
    private String mail;
    private String password;
    private RoleBasicDTO roleBasicDTO;
}
