package com.placement.placementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.placement.placementsystem.entity.Application;
import com.placement.placementsystem.service.ApplicationService;

import java.util.List;

@RestController
@RequestMapping("/apply")
@CrossOrigin("*")
public class ApplicationController {

    @Autowired
    private ApplicationService service;

    @PostMapping
    public Application apply(@RequestBody Application a){
        return service.apply(a);
    }

    @GetMapping("/student/{id}")
    public List<Application> getStudentApplications(@PathVariable int id){
        return service.getByStudent(id);
    }

    @PutMapping("/status/{id}")
    public Application updateStatus(@PathVariable int id,
                                    @RequestParam String status){
        return service.updateStatus(id, status);
    }

    @GetMapping("/all")
    public List<Application> getAllApplications(){
        return service.getAll();
    }
}
