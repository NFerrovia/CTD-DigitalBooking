package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Service.IService.ICityServices;
import com.example.piG1.Model.DTO.CityDTO.CityDTO;
import com.example.piG1.Model.Entity.City;
import com.example.piG1.Repository.ICityRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
@Service
public class CityServices implements ICityServices {
    protected final static Logger logger = Logger.getLogger(CityServices.class);
    @Autowired
    public ICityRepository cityRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public CityDTO save(CityDTO cityDTO) {
        City city = mapper.convertValue(cityDTO, City.class);
        city = cityRepository.save(city);
        return mapper.convertValue(city, CityDTO.class);
    }

    @Override
    public CityDTO findById(Integer id) throws ResourceNotFoundException {
        City city = checkId(id);
        CityDTO cityDTO = mapper.convertValue(city, CityDTO.class);
        logger.info("La busqueda fue exitosa: id " + id);
        return cityDTO;
    }

    @Override
    public List<CityDTO> findAll() {
        List<CityDTO> citiesDTO = new ArrayList<>();
        List<City> cities = cityRepository.findAll();
        for(City city: cities){
            citiesDTO.add(mapper.convertValue(city, CityDTO.class));
        }
        citiesDTO .sort(Comparator.comparing(CityDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ citiesDTO);
        return citiesDTO;
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        cityRepository.deleteById(id);
        logger.info("Se elimino la ciudad correctamente con el id("+id+")");
    }

    @Override
    public City checkId(Integer id) throws ResourceNotFoundException {
        Optional<City> city = cityRepository.findById(id);
        if (city.isEmpty()) {
            throw new ResourceNotFoundException(messageError + id);
        }
        return city.get();
    }
}
