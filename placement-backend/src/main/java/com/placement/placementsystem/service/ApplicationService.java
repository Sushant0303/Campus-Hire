package com.placement.placementsystem.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.placement.placementsystem.entity.Application;
import com.placement.placementsystem.repository.ApplicationRepository;

import java.util.List;

@Service
public class ApplicationService {

    @Autowired
    private ApplicationRepository repo;

    // Student applies
    public Application apply(Application a) {
        a.setStatus("APPLIED");
        return repo.save(a);
    }

    // Get applications by student ID
    public List<Application> getByStudent(int studentId){
        return repo.findByStudentId(studentId);
    }

    // Admin updates status
    public Application updateStatus(int id, String status){
        Application app = repo.findById(id).orElse(null);
        if(app != null){
            app.setStatus(status);
            return repo.save(app);
        }
        return null;
    }

    // Admin gets all applications
    public List<Application> getAll(){
        return repo.findAll();
    }
}
