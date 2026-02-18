//package com.placement.placementsystem.security;
//
//import java.io.IOException;
//import java.util.Collections;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.stereotype.Component;
//
//import io.jsonwebtoken.Claims;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//
//import org.springframework.web.filter.OncePerRequestFilter;
//
//@Component
//public class JwtFilter extends OncePerRequestFilter {
//
//    @Autowired
//    private JwtUtil jwtUtil;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//
//        String path = request.getServletPath();
//
//        // Skip login and register endpoints
//        if (path.equals("/student/login") ||
//            path.equals("/student/register") ||
//            path.equals("/admin/login")) {
//
//            filterChain.doFilter(request, response);
//            return;
//        }
//
//        String authHeader = request.getHeader("Authorization");
//
//        if(authHeader != null && authHeader.startsWith("Bearer ")){
//
//            String token = authHeader.substring(7);
//
//            try{
//                Claims claims = jwtUtil.extractClaims(token);
//
//                String role = claims.get("role").toString();
//
//                UsernamePasswordAuthenticationToken auth =
//                        new UsernamePasswordAuthenticationToken(
//                                claims.getSubject(),
//                                null,
//                                Collections.singletonList(new SimpleGrantedAuthority(role))
//                        );
//
//                SecurityContextHolder.getContext().setAuthentication(auth);
//
//            }
//            catch(Exception e){
//                response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
//                return;
//            }
//        }
//
//        filterChain.doFilter(request, response);
//    }
//
//}
