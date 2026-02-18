package com.placement.placementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.placement.placementsystem.entity.Admin;
import com.placement.placementsystem.repository.AdminRepository;

@Service
public class AdminService {

    @Autowired
    private AdminRepository repo;

//    public Admin login(String email, String password){
//        Admin admin = repo.findByEmail(email);
//        if(admin != null && admin.getPassword().equals(password)){
//            return admin;
//        }
//        return null;
//    }
    
    public Admin login(String email, String password){
        Admin admin = repo.findByEmail(email);
        System.out.println("Admin found: " + admin);

        if(admin != null && admin.getPassword().equals(password)){
            return admin;
        }
        return null;
    }

}
