////package com.placement.placementsystem.security;
////
////import io.jsonwebtoken.*;
////import io.jsonwebtoken.security.Keys;
////import java.security.Key;
////import java.util.Date;
////import org.springframework.stereotype.Component;
////
////@Component
////public class JwtUtil {
////
////    private final Key key = Keys.secretKeyFor(SignatureAlgorithm.HS256);
////
////    public String generateToken(String email, String role){
////        return Jwts.builder()
////                .setSubject(email)
////                .claim("role", role)
////                .setIssuedAt(new Date())
////                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
////                .signWith(key)
////                .compact();
////    }
////
////    public Claims extractClaims(String token){
////        return Jwts.parserBuilder()
////                .setSigningKey(key)
////                .build()
////                .parseClaimsJws(token)
////                .getBody();
////    }
////}
//
//package com.placement.placementsystem.security;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import java.security.Key;
//import java.util.Date;
//import org.springframework.stereotype.Component;
//
//@Component
//public class JwtUtil {
//
//    private final String SECRET = "mysecuresecretkeymysecuresecretkey12345";
//    private final Key key = Keys.hmacShaKeyFor(SECRET.getBytes());
//
//    public String generateToken(String email, String role){
//        return Jwts.builder()
//                .setSubject(email)
//                .claim("role", role)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
//                .signWith(key)
//                .compact();
//    }
//
//    public Claims extractClaims(String token){
//        return Jwts.parserBuilder()
//                .setSigningKey(key)
//                .build()
//                .parseClaimsJws(token)
//                .getBody();
//    }
//    
//    public String extractEmail(String token){
//        return extractClaims(token).getSubject();
//    }
//
//}
//
