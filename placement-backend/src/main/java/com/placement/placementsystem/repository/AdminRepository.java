package com.placement.placementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.placement.placementsystem.entity.Admin;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    Admin findByEmail(String email);
}
