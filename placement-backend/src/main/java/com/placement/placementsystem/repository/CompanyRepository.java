package com.placement.placementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.placement.placementsystem.entity.Company;

public interface CompanyRepository extends JpaRepository<Company, Integer> {
}
