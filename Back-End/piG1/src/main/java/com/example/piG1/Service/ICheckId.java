package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;

public interface ICheckId<T>{
    String messageError = "No se encontraron resultados con id: ";

    T checkId(Integer a) throws ResourceNotFoundException;
}
