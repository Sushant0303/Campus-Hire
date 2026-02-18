package com.placement.placementsystem.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.placement.placementsystem.entity.Company;
import com.placement.placementsystem.repository.CompanyRepository;

@Service
public class CompanyService {

    @Autowired
    private CompanyRepository repo;

    public Company addCompany(Company c) {
        return repo.save(c);
    }

    public List<Company> getAll() {
        return repo.findAll();
    }
}
