package com.example.piG1.Service.IService;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IS3Service {

    String uploadFile(MultipartFile file);
    List<String> getObjectFromS3();
    String getObjectUrl(String key);
    void deleteObject(String key);
}
