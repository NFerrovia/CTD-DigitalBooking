package com.example.piG1.Security;

import com.example.piG1.Filter.CustomAuthenticationFilter;
import com.example.piG1.Filter.CustomAuthorizationFilter;
import com.example.piG1.Service.UserServices;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    @Autowired
    UserServices userServices;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
       auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManagerBean());
        customAuthenticationFilter.setFilterProcessesUrl("/api/login");
        customAuthenticationFilter.setUserServices(userServices);
        http.cors();
        http.csrf().disable();
        http.sessionManagement().sessionCreationPolicy(STATELESS);
        http.authorizeRequests().antMatchers("/swagger-ui/**", "/swagger", "/api-docs/**", "/v3/api-docs/**", "/v2/api-docs/**",
                "/configuration/ui",
                "/swagger-resources/**",
                "/configuration/security",
                "/swagger-ui.html",
                "/webjars/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/products/add/**",
                "/products/saveProducts").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/punctuation/saveScore").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET,"/punctuation/findByProduct/{id}" ).permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/products/{id}",
                "/products",
                "/products/{id}",
                "/products/allData",
                "/products/allCity/{id}",
                "/products/allCategory/{id}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.PUT, "/products/update").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.DELETE, "/products/deleteProduct/{id}").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/products/allCategoryAndCity",
                "/products/allAvailableDates",
                "/products/allAvailableDates/**").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/typeOfPolicies/add/policies",
                "/typeOfPolicies").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/typeOfPolicies/{id}",
                "/typeOfPolicies").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/policies").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/policies",
                "/policies/{id}",
                "/policies/product/{id}").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/images").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/images","images/{id}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/cities").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/cities","cities/{id}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/categories").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/categories","categories/{id}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/bookings","/bookings/{id}", "/bookings/findByProductId/{id}", "/bookings/findAllByProductId/{productId}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/bookings","/bookings/{id}", "/bookings/findByProductId/{id}","/bookings/findByUserId/{userId}").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "bookings/findBetweenDates").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/bookings").hasAnyAuthority("ADMIN", "CLIENT");
        http.authorizeRequests().antMatchers("/api/login/**", "/api/token/refresh").permitAll();
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/api/users").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/rol/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().antMatchers(HttpMethod.POST, "/api/user/save").permitAll();
        http.authorizeRequests().antMatchers("/s3/**").hasAnyAuthority("ADMIN");
        http.authorizeRequests().anyRequest().authenticated();
        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new CustomAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }


    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception{
        return  super.authenticationManagerBean();
    }
}
