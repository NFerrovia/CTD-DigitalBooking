package com.example.piG1.Model.DTO.CategoryDTO;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CategoryDTO {
    private Integer id;
    private String title;
    private String description;
    private String urlImage;
}
