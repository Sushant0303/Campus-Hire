package com.placement.placementsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.placement.placementsystem.entity.Student;
import com.placement.placementsystem.repository.StudentRepository;




@Service
public class StudentService {

    @Autowired
    private StudentRepository repo;

    public Student register(Student s) {
        return repo.save(s);
    }

    public Student login(String email, String password) {
        Student s = repo.findByEmail(email);
        if(s != null && s.getPassword().equals(password)) return s;
        return null;
    }

    public List<Student> getAll() {
        return repo.findAll();
    }
}
