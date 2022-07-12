package com.example.piG1.Service;

import com.example.piG1.Exceptions.ResourceNotFoundException;
import com.example.piG1.Model.Entity.Role;
import com.example.piG1.Model.Entity.User;
import com.example.piG1.Repository.IRoleRepository;
import com.example.piG1.Repository.IUserRepository;
import com.example.piG1.Service.IService.IUserServices;
import freemarker.template.TemplateException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.mail.MessagingException;
import javax.transaction.Transactional;
import java.io.IOException;
import java.util.*;

@RequiredArgsConstructor
@Transactional
@Slf4j
@Service
public class UserServices implements IUserServices, UserDetailsService {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IRoleRepository roleRepository;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    private EmailSenderService emailSenderService;

    @Override
    public User saveUser(User user) {
        log.info("Saving new user to the database");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    @Override
    public User registerUser(User user) throws MessagingException, IOException, TemplateException {
        log.info("Saving new user to the database");
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        User user1 = userRepository.save(user);

        Map<String, Object> templateModel = new HashMap<>();
        templateModel.put("recipientName", user.getName());
        emailSenderService.sendWelcomeTemplate(user.getUserName(), "Welcome to DBooking!", templateModel);

        if (user1.getRoles().isEmpty()){
            Collection<Role> roles = new ArrayList<>();
            Role role = roleRepository.findByName("CLIENT");
            roles.add(role);
            user.setRoles(roles);
        }

        return user1;
    }

    @Override
    public Role saveRole(Role role) {
        log.info("Saving new role  to the database");
        return roleRepository.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        log.info("Adding role  to user " );
        User user = userRepository.findByUserName(username);
        Role role = roleRepository.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String username) {
        //username
        log.info("Fetching user ");
        return userRepository.findByUserName(username);
    }

    @Override
    public List<User> getUsers() {
        log.info("Fetching all users");
        return userRepository.findAll();
    }

    @Override
    public User checkId(Integer a) throws ResourceNotFoundException {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user =  userRepository.findByUserName(username);
        if(user ==  null){
            log.error("User not found in the database");
            throw new UsernameNotFoundException("User no found in the database");
        }else {
            //username
            log.info("User found in the database: ");
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> {authorities.add(new SimpleGrantedAuthority(role.getName()));
        });
        return new org.springframework.security.core.userdetails.User(user.getUserName(), user.getPassword(), authorities);
    }
}

