//package com.placement.placementsystem.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//public class SecurityConfig {
//
//    @Autowired
//    private JwtFilter jwtFilter;
//
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//
//        http
//            .cors(cors -> cors.configurationSource(request -> {
//                var corsConfig = new org.springframework.web.cors.CorsConfiguration();
//                corsConfig.addAllowedOrigin("http://localhost:3000");
//                corsConfig.addAllowedMethod("*");
//                corsConfig.addAllowedHeader("*");
//                return corsConfig;
//            }))
//            .csrf(csrf -> csrf.disable())
//            .authorizeHttpRequests(auth -> auth
//
//                // Public endpoints
//                .requestMatchers("/student/login", "/student/register", "/admin/login").permitAll()
//
//                // Student protected endpoints
//                .requestMatchers("/apply/my").hasAuthority("STUDENT")
//                .requestMatchers("/company/all").hasAuthority("STUDENT")
//
//                // Admin protected endpoints
//                .requestMatchers("/apply/all").hasAuthority("ADMIN")
//                .requestMatchers("/apply/status/**").hasAuthority("ADMIN")
//
//                .anyRequest().authenticated()
//            )
//            .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);
//
//        return http.build();
//    }
//
//    
//    
//    
//    
//}
