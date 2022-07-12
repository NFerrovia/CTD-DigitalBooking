package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.DTO.BookingDTO.BookingDTO;
import com.example.piG1.Model.DTO.FeatureDTO.FeatureDTO;
import com.example.piG1.Model.DTO.ImageDTO.ImageDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyAndTypeOfPolicyDTO;
import com.example.piG1.Model.DTO.PolicyDTO.PolicyDTO;
import com.example.piG1.Model.DTO.ProductDTO.*;
import com.example.piG1.Model.DTO.TypeOfPolicyDTO.TypeOfPolicyAddPoliciesDTO;
import com.example.piG1.Model.Entity.*;
import com.example.piG1.Repository.ICategoryRepository;
import com.example.piG1.Repository.ICityRepository;
import com.example.piG1.Repository.IProductRepository;
import com.example.piG1.Service.IService.*;
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
public class ProductServices implements IProductServices {
    protected final static Logger logger = Logger.getLogger(ProductServices.class);

    @Autowired
    private IProductRepository productRepository;
    @Autowired
    private ICityRepository cityRepository;
    @Autowired
    private ICategoryRepository categoryRepository;
    @Autowired
    private IImageServices imageServices;
    @Autowired
    private IBookingServices bookingServices;
    @Autowired
    private IPolicyServices policyServices;
    @Autowired
    private IFeatureServices featureServices;
    @Autowired
    private ICityServices cityServices;
    @Autowired
    private ITypeOfPolicyServices typeOfPolicyServices;

    @Autowired
    ObjectMapper mapper;

    @Override
    public ProductCompliteDTO saveComplite(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        Optional <City> city = cityRepository.findById(productDTO.getCity_id());
        Optional <Category> category = categoryRepository.findById(productDTO.getCategory_id());
        product.setCategory(category.get());
        product.setCity(city.get());
        Product productN = productRepository.saveAndFlush(product);
        List<TypeOfPolicyAddPoliciesDTO> typeOfPolicyAddPoliciesDTOList= productDTO.getTypeOfPolicyAddPoliciesDTOList();
        for (TypeOfPolicyAddPoliciesDTO item : typeOfPolicyAddPoliciesDTOList) {
            item.setProductId(productN.getId());
            typeOfPolicyServices.addPolicies(item);
        }
        ProductAddImagesDTO productAddImagesDTO = new ProductAddImagesDTO(product.getId(), productDTO.getImages());
        addImages(productAddImagesDTO);
        ProductAddFeaturesDTO productAddFeaturesDTO = new ProductAddFeaturesDTO(product.getId(), productDTO.getFeatures());
        addFeatures(productAddFeaturesDTO);
        System.out.println(product);
        return mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public ProductCompliteDTO addImages(ProductAddImagesDTO productAddImagesDTO) {
        Optional <Product> product = productRepository.findById(productAddImagesDTO.getProductId());
        List <Image> listImage = new ArrayList<>();
        for (ImageDTO imageDTO: productAddImagesDTO.getListImages()){
            Image  image = mapper.convertValue(imageDTO, Image.class);
            image.setProduct(product.get());
            listImage.add(image);
        }
        imageServices.saveImages(listImage);
        product = productRepository.findById(productAddImagesDTO.getProductId());
        return  mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public ProductCompliteDTO addPuntuation (ProductAddPunctuactionDTO productAddPunctuactionDTO){
        Optional <Product> product = productRepository.findById(productAddPunctuactionDTO.getProductId());
            Punctuation  punctuation = mapper.convertValue(productAddPunctuactionDTO, Punctuation.class);
            punctuation.setProduct(product.get());
        product = productRepository.findById(productAddPunctuactionDTO.getProductId());
        return  mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public ProductCompliteDTO addPolicies(ProductAddPoliciesDTO productAddPoliciesDTO) {
        Optional <Product> product = productRepository.findById(productAddPoliciesDTO.getProductId());
        List <Policy> policiesList = new ArrayList<>();
        for (PolicyDTO policyDTO: productAddPoliciesDTO.getListPolicies()){
            Policy  policy = mapper.convertValue(policyDTO, Policy.class);
            policy.setProduct(product.get());
            policiesList.add(policy);
        }
        policyServices.savePolicies(policiesList);
        product = productRepository.findById(productAddPoliciesDTO.getProductId());
        return  mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public ProductCompliteDTO addFeatures (ProductAddFeaturesDTO productAddFeaturesDTO) {
        Optional <Product> product = productRepository.findById(productAddFeaturesDTO.getProductId());
        List <Feature> featureList = new ArrayList<>();
        for (FeatureDTO featureDTO: productAddFeaturesDTO.getListFeatures()){
            Feature  feature = mapper.convertValue(featureDTO, Feature.class);
            feature.setProduct(product.get());
            featureList.add(feature);
        }
        featureServices.saveFeatures(featureList);
        product = productRepository.findById(productAddFeaturesDTO.getProductId());
        return  mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public ProductDTO save(ProductDTO productDTO) {
        Product product = mapper.convertValue(productDTO, Product.class);
        product = productRepository.save(product);
        return mapper.convertValue(product, ProductDTO.class);
    }

    @Override
    public ProductFullDTO findById(Integer id) throws ResourceNotFoundException {
        Product product = checkId(id);
        System.out.println(product);
        ProductFullDTO productFullDTO = mapper.convertValue(product, ProductFullDTO.class);
        List<ImageDTO> imagesList = imageServices.findByProductId(id);
        productFullDTO.setImages(imagesList);

        List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(id);
        productFullDTO.setPolicies(policyAndTypeOfPolicyDTO);

        List<FeatureDTO> featuresDTO = featureServices.findByProductId(id);
        productFullDTO.setFeatures(featuresDTO);

        List<BookingDTO> bookingDTOList = bookingServices.findByProductId(id);
        productFullDTO.setBookings(bookingDTOList);
        return productFullDTO;
    }

    @Override
    public ProductCompliteDTO findByIdComplite(Integer id) throws ResourceNotFoundException {
        Product product = checkId(id);
        logger.info("La busqueda fue exitosa: id " + id);
        return mapper.convertValue(product, ProductCompliteDTO.class);
    }

    @Override
    public List<GetAllProductsDTO> findAll() throws ResourceNotFoundException {
        List<GetAllProductsDTO>  getProductsAllDTO= new ArrayList<>();
        List<Product> products = productRepository.findAll();
        for(Product product: products){
            GetAllProductsDTO getProductsAllDTO1 = mapper.convertValue(product, GetAllProductsDTO.class);
            List<FeatureDTO> features = featureServices.findByProductId(product.getId());
            getProductsAllDTO1.setFeatures(features);
            List<PolicyAndTypeOfPolicyDTO> policies = policyServices.findByProductId(product.getId());
            getProductsAllDTO1.setPolicies(policies);
            System.out.println(getProductsAllDTO1);
            List<ImageDTO> imagesList = imageServices.findByProductId(product.getId());
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            getProductsAllDTO1.setImageUrl(url_image);
            getProductsAllDTO.add(getProductsAllDTO1);
        }
        getProductsAllDTO .sort(Comparator.comparing(GetAllProductsDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ getProductsAllDTO);
        return getProductsAllDTO;
    }
    @Override
    public void delete(Integer id) throws ResourceNotFoundException {
        checkId(id);
        productRepository.deleteById(id);
        logger.info("Se elimino el producto correctamente con el id("+id+")");
    }

    @Override
    public Product checkId(Integer id) throws ResourceNotFoundException {
        Optional<Product> product = productRepository.findById(id);
        if (product.isEmpty()) {
            throw new ResourceNotFoundException(messageError + id);
        }
        return product.get();
    }

    @Override
    public List<ProductFindByFilterDTO> findByCityId(Integer cityId) throws ResourceNotFoundException {
        List<ProductFindByFilterDTO> productsFindByFilterDTO = new ArrayList<>();
        List<Product> products = productRepository.findByCityId(cityId);
        for(Product product: products){
            ProductFindByFilterDTO productFindByFilterDTO = mapper.convertValue(product, ProductFindByFilterDTO.class);
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            productFindByFilterDTO.setImageUrl(url_image);
            productsFindByFilterDTO.add(productFindByFilterDTO);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(productId);
            productFindByFilterDTO.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featuresDTO = featureServices.findByProductId(productId);
            productFindByFilterDTO.setFeatures(featuresDTO);
        }

        productsFindByFilterDTO .sort(Comparator.comparing(ProductFindByFilterDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ productsFindByFilterDTO);
        return productsFindByFilterDTO;
    }

    @Override
    public List<ProductFindByFilterDTO> findByCategoryId(Integer categoryId) throws ResourceNotFoundException {
        List<ProductFindByFilterDTO> productsFindByFilterDTO = new ArrayList<>();
        List<Product> products = productRepository.findByCategoryId(categoryId);
        for(Product product: products){
            ProductFindByFilterDTO productFindByFilterDTO = mapper.convertValue(product, ProductFindByFilterDTO.class);
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            productFindByFilterDTO.setImageUrl(url_image);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(productId);
            productFindByFilterDTO.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featureDTOS = featureServices.findByProductId(productId);
            productFindByFilterDTO.setFeatures(featureDTOS);
            productsFindByFilterDTO.add(productFindByFilterDTO);
        }
        productsFindByFilterDTO .sort(Comparator.comparing(ProductFindByFilterDTO::getId)); //
        logger.info("La busqueda fue exitosa: "+ productsFindByFilterDTO);
        return productsFindByFilterDTO;
    }

    @Override
    public List<ProductFindByFilterDTO> findByCityIdAndCategoryId(ProductFindByCategoryCityDTO productFindByCategoryCityDTO) throws ResourceNotFoundException {
        List<ProductFindByFilterDTO> productsFiltered = new ArrayList<>();
        List<Product> products = productRepository.findByCategoryIdAndCityId(productFindByCategoryCityDTO.getCategoryId(), productFindByCategoryCityDTO.getCityId());

        products.forEach(product ->
                productsFiltered.add(mapper.convertValue(product, ProductFindByFilterDTO.class)));

        for(ProductFindByFilterDTO product: productsFiltered){
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            product.setImageUrl(url_image);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(product.getId());
            product.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featureDTOS = featureServices.findByProductId(product.getId());
            product.setFeatures(featureDTOS);
        }

        productsFiltered .sort(Comparator.comparing(ProductFindByFilterDTO::getId));
        return productsFiltered;
    }

    @Override
    public List <ProductFindByFilterDTO> findBetweenTwoDates(ProductBetweenTwoDatesDTO productBetweenTwoDatesDTO) throws ResourceNotFoundException {
        List <BookingDTO> bookingDTOList = bookingServices.findBetweenTwoDates(productBetweenTwoDatesDTO.getStartDate(), productBetweenTwoDatesDTO.getEndDate());
        List<Product> products = productRepository.findAll();
        List<ProductFindByFilterDTO> productsFiltered = new ArrayList<>();

        for (BookingDTO bookingDTO: bookingDTOList) {
            Product product = checkId(bookingDTO.getProductId());
            products.remove(product);
        }

        products.forEach(product ->
                productsFiltered.add(mapper.convertValue(product, ProductFindByFilterDTO.class)));

        for(ProductFindByFilterDTO product: productsFiltered){
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            product.setImageUrl(url_image);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(product.getId());
            product.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featureDTOS = featureServices.findByProductId(product.getId());
            product.setFeatures(featureDTOS);
        }

        return productsFiltered;
    }

    @Override
    public List <ProductFindByFilterDTO> findBetweenTwoDatesAndCity(ProductBetweenDatesAndCityDTO productBetweenDatesAndCityDTO) throws ResourceNotFoundException {
        List <BookingDTO> bookingDTOList = bookingServices.findBetweenTwoDates(productBetweenDatesAndCityDTO.getStartDate(), productBetweenDatesAndCityDTO.getEndDate());
        List<Product> products = productRepository.findByCityId(productBetweenDatesAndCityDTO.getCityId());
        List<ProductFindByFilterDTO> productsFiltered = new ArrayList<>();

        for (BookingDTO bookingDTO: bookingDTOList) {
            Product product = checkId(bookingDTO.getProductId());
            products.remove(product);
        }

        products.forEach(product ->
                productsFiltered.add(mapper.convertValue(product, ProductFindByFilterDTO.class)));

        for(ProductFindByFilterDTO product: productsFiltered){
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }

            product.setImageUrl(url_image);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(product.getId());
            product.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featureDTOS = featureServices.findByProductId(product.getId());
            product.setFeatures(featureDTOS);
        }

        return productsFiltered;
    }

    @Override
    public List <ProductFindByFilterDTO> findBetweenTwoDatesAndCityAndCategory(ProductByDatesCityCategoryDTO  productByDatesCityCategoryDTO) throws ResourceNotFoundException {
        List <BookingDTO> bookingDTOList = bookingServices.findBetweenTwoDates(productByDatesCityCategoryDTO.getStartDate(),
                productByDatesCityCategoryDTO.getEndDate());
        List<Product> products = productRepository.findByCategoryIdAndCityId(productByDatesCityCategoryDTO.getCategoryId(),productByDatesCityCategoryDTO.getCityId());
        List<ProductFindByFilterDTO> productsFiltered = new ArrayList<>();

        for (BookingDTO bookingDTO: bookingDTOList) {
            Product product = checkId(bookingDTO.getProductId());
            products.remove(product);
        }

        products.forEach(product ->
                productsFiltered.add(mapper.convertValue(product, ProductFindByFilterDTO.class)));

        for(ProductFindByFilterDTO product: productsFiltered){
            Integer productId = product.getId();
            List<ImageDTO> imagesList = imageServices.findByProductId(productId);
            String url_image = "";
            if (imagesList.size() > 0){
                url_image = imagesList.get(0).getUrl();
            }
            product.setImageUrl(url_image);

            List<PolicyAndTypeOfPolicyDTO> policyAndTypeOfPolicyDTO = policyServices.findByProductId(product.getId());
            product.setPolicies(policyAndTypeOfPolicyDTO);

            List<FeatureDTO> featureDTOS = featureServices.findByProductId(product.getId());
            product.setFeatures(featureDTOS);
        }

        return productsFiltered;
    }

    @Override
    public ProductCompliteDTO updateProduct(ProductDTO productDTO) throws ResourceNotFoundException {
        if(findById(productDTO.getId()) == null)
            throw  new ResourceNotFoundException("No se puede actualizar el producto con  ID: " + productDTO.getId());
        return saveComplite(productDTO);
    }
}
