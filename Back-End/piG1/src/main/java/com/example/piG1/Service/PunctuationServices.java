package com.example.piG1.Service;
import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationDTO;
import com.example.piG1.Model.DTO.PunctuationDTO.PunctuationGetFindByProduct;
import com.example.piG1.Model.Entity.*;
import com.example.piG1.Repository.IProductRepository;
import com.example.piG1.Repository.IPunctuationRepository;
import com.example.piG1.Repository.IUserRepository;
import com.example.piG1.Service.IService.IPunctuationService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.log4j.Log4j;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Log4j
@Service
public class PunctuationServices implements IPunctuationService {
    protected final static Logger logger = Logger.getLogger(TypeOfPolicyServices.class);

    @Autowired
    private IPunctuationRepository punctuactionRepository;
    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    ObjectMapper mapper;


    @Override
    public PunctuationGetFindByProduct save(PunctuationDTO punctuationDTO) {
        Punctuation punctuation = mapper.convertValue(punctuationDTO, Punctuation.class);
        Optional <Product> product = productRepository.findById(punctuationDTO.getProductId());
        Optional <User> user = userRepository.findById(punctuationDTO.getUserId());
        punctuation.setProduct(product.get());
        punctuation.setUser(user.get());
        punctuactionRepository.save(punctuation);
        if (punctuationDTO.getId() == null){
            punctuationDTO.setId(punctuation.getId());
            logger.info("Puntuacion registrado correctamente: "+ punctuationDTO);
        }else{
            logger.info("Puntuacion actualizado correctamente: "+ punctuationDTO);
        }
        return mapper.convertValue(punctuation, PunctuationGetFindByProduct.class);
    }

    @Override
    public PunctuationDTO findById(Integer id) throws ResourceNotFoundException {
        Punctuation punctuation = checkId(id);
        PunctuationDTO ratingDto = mapper.convertValue(punctuation, PunctuationDTO.class);
        logger.info("La búsqueda fue exitosa: id("+id+")");
        return ratingDto;
    }

    @Override
    public List<PunctuationDTO> findAll() {
        List<PunctuationDTO> punctuationDTOSList = new ArrayList<>();
        List<Punctuation> punctuations = punctuactionRepository.findAll();
        for (Punctuation punctuation : punctuations) {
            punctuationDTOSList.add(mapper.convertValue(punctuation, PunctuationDTO.class));
        }
        punctuationDTOSList.sort(Comparator.comparing(PunctuationDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ punctuationDTOSList);
        return punctuationDTOSList;
    }

    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        punctuactionRepository.deleteById(id);
        logger.info("Se elimino la puntuacion correctamente con el id("+id+")");
    }

    @Override
    public List<PunctuationGetFindByProduct> findPunctuationsByProductId(Integer id) {
        List<Punctuation> punctuations = punctuactionRepository.findPunctuationsByProductId(id);
        List<PunctuationGetFindByProduct> punctuationDTOList =new ArrayList<>();
        for (Punctuation punctuation: punctuations) {
            punctuationDTOList.add(mapper.convertValue(punctuation,PunctuationGetFindByProduct.class));
        }
        punctuationDTOList.sort(Comparator.comparing(PunctuationGetFindByProduct::getId)); //
        logger.info("La busqueda fue exitosa: "+ punctuationDTOList);
        return punctuationDTOList;
    }


    @Override
    public Punctuation checkId(Integer id) throws ResourceNotFoundException {
        Optional<Punctuation> punctuation = punctuactionRepository.findById(id);
        if (punctuation.isEmpty()) {
            throw new ResourceNotFoundException(messageError + id);
        }
        return punctuation.get();
    }
}
