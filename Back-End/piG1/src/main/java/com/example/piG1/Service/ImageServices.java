package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Service.IService.IImageServices;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.Entity.Image;
import com.example.piG1.Repository.IImageRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
@Service
public class ImageServices implements IImageServices {
    protected final static Logger logger = Logger.getLogger(ImageServices.class);

    @Autowired
    public IImageRepository imageRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public ImageDTO save(ImageDTO imageDTO) {
        Image image = mapper.convertValue(imageDTO, Image.class);
        image = imageRepository.save(image);
        return mapper.convertValue(image, ImageDTO.class);
    }

    @Override
    public ImageDTO findById(Integer id) throws ResourceNotFoundException {
        Image image = checkId(id);
        ImageDTO imageDTO = mapper.convertValue(image, ImageDTO.class);
        logger.info("La busqueda fue exitosa: id " + id);
        return imageDTO;
    }


    @Override
    public List<ImageDTO> findAll() {
        List<ImageDTO> imagesDTO = new ArrayList<>();
        List<Image> images = imageRepository.findAll();
        for(Image image: images){
            imagesDTO.add(mapper.convertValue(image, ImageDTO.class));
        }
        imagesDTO .sort(Comparator.comparing(ImageDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ imagesDTO);
        return imagesDTO;
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        imageRepository.deleteById(id);
        logger.info("Se elimino la imagen correctamente con el id("+id+")");
    }

    @Override
    public Image checkId(Integer id) throws ResourceNotFoundException {
        Optional<Image> image = imageRepository.findById(id);
        if (image.isEmpty()) {
            throw new ResourceNotFoundException(ICheckId.messageError + id);
        }
        return image.get();
    }

    @Override
    public void saveImages(List<Image> imageList) {
        imageRepository.saveAll(imageList);
    }

    @Override
    public List<ImageDTO> findByProductId(Integer id) throws ResourceNotFoundException {
        List<ImageDTO> imagesDTO = new ArrayList<>();
        List<Image> images = imageRepository.findByProductId(id);
        for(Image image: images){
            imagesDTO.add(mapper.convertValue(image, ImageDTO.class));
        }
        imagesDTO .sort(Comparator.comparing(ImageDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ imagesDTO);
        return imagesDTO;
    }
}
