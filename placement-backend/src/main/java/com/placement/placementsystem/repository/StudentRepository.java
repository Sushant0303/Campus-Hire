package com.placement.placementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.placement.placementsystem.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {
    Student findByEmail(String email);
}
