package com.placement.placementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.placement.placementsystem.entity.Admin;
import com.placement.placementsystem.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin("*")
public class AdminController {

    @Autowired
    private AdminService service;

    @PostMapping("/login")
    public Admin login(@RequestBody Admin admin){
        return service.login(admin.getEmail(), admin.getPassword());
    }
}
