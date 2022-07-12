package com.example.piG1.Controller;

import com.example.piG1.Service.S3Service;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/s3")
public class S3Controller {

    protected final static Logger logger = Logger.getLogger(S3Controller.class);

    @Autowired
    private S3Service s3Service;

    @PostMapping(value = "upload")
    public ResponseEntity<List<String>> uploadFile(@RequestPart(value = "files") MultipartFile[] files) {

        List<String> response = new ArrayList<>();

        for (MultipartFile file: files) {
            String key = s3Service.uploadFile(file);

            response.add(s3Service.getObjectUrl(key));
        }

        return new ResponseEntity<List<String>>(response, HttpStatus.OK);
    }

    @GetMapping(value = "/list")
    public ResponseEntity<List<String>> listFiles() {
        return new ResponseEntity<List<String>>(s3Service.getObjectFromS3(), HttpStatus.OK);
    }

    @GetMapping(value = "/delete", params = "key")
    public void deleteObject(@RequestParam String key) {
        s3Service.deleteObject(key);
    }
}
