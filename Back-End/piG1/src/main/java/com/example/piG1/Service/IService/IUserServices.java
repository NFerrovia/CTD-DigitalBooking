package com.example.piG1.Service.IService;

import com.example.piG1.Model.Entity.Role;
import com.example.piG1.Model.Entity.User;
import com.example.piG1.Service.ICheckId;
import freemarker.template.TemplateException;

import javax.mail.MessagingException;
import java.io.IOException;
import java.util.List;

public interface IUserServices extends ICheckId<User> {
     User saveUser (User user);
     Role saveRole (Role role);
     void addRoleToUser (String username, String roleName);
     User getUser(String username);
     List<User>getUsers();
     User registerUser(User user) throws MessagingException, IOException, TemplateException;

}