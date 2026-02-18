package com.placement.placementsystem.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.placement.placementsystem.entity.Company;
import com.placement.placementsystem.service.CompanyService;

@RestController
@RequestMapping("/company")
@CrossOrigin("*")
public class CompanyController {

    @Autowired
    private CompanyService service;

    @PostMapping("/add")
    public Company add(@RequestBody Company c) {
        return service.addCompany(c);
    }

    @GetMapping("/all")
    public List<Company> all() {
        return service.getAll();
    }
}
