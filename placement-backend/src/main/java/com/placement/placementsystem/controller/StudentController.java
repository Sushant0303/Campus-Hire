package com.placement.placementsystem.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.placement.placementsystem.dto.LoginRequest;
import com.placement.placementsystem.entity.Student;
import com.placement.placementsystem.service.StudentService;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin("*")
public class StudentController {

    @Autowired
    private StudentService service;

    @PostMapping("/register")
    public Student register(@RequestBody Student s) {
        return service.register(s);
    }

    @PostMapping("/login")
    public Student login(@RequestBody LoginRequest req) {
        return service.login(req.getEmail(), req.getPassword());
    }

    @GetMapping("/all")
    public List<Student> allStudents() {
        return service.getAll();
    }
}
