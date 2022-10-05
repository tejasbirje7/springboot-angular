package com.crud.demo.config;

import com.crud.demo.security.AuthEntryPointJwt;
import com.crud.demo.security.AuthTokenFilter;
import com.crud.demo.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import javax.sql.DataSource;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Configuration
@EnableAspectJAutoProxy
@EnableWebSecurity
//@EnableGlobalMethodSecurity - Based on role user can access API
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class DemoSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    UserServiceImpl userService;

    @Autowired
    private AuthEntryPointJwt unauthorizedHandler;

    // add a reference to our security data source
    @Autowired
    @Qualifier("securityDataSource")
    private DataSource securityDataSource;

    @Bean
    public AuthTokenFilter authenticationJwtTokenFilter() {
        return new AuthTokenFilter();
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // JDBC AUTHENTICATION
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        /**
        use auth.jdbcAuthentication() instead of manually writing authentication logic.
        With the help of AuthenticationManagerBuilder we can authenticate the user
         */
        // auth.jdbcAuthentication().dataSource(securityDataSource);

        // Custom implementation for user authentication
        auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
    }

    // AUTHORIZATION
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS).and()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler).and()
                .authorizeRequests()
                .antMatchers("/api/auth/**").permitAll()
                .antMatchers("/api/test/**").permitAll()
                .and().csrf().disable().cors().configurationSource(
                        request -> getCorsConfig()
                );
        http.addFilterBefore(authenticationJwtTokenFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    private CorsConfiguration getCorsConfig() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedHeaders(Stream.of("Authorization", "Cache-Control", "Content-Type").collect(Collectors.toList()));
        corsConfiguration.setAllowedOrigins(Stream.of("*").collect(Collectors.toList()));
        corsConfiguration.setAllowedMethods(Stream.of("GET", "POST", "PUT", "DELETE", "PUT", "OPTIONS", "PATCH", "DELETE").collect(Collectors.toList()));
        //corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setExposedHeaders(Stream.of("Authorization").collect(Collectors.toList()));
        return corsConfiguration;
    }

}



