package com.placement.placementsystem.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.placement.placementsystem.entity.Application;
import com.placement.placementsystem.entity.Student;

public interface ApplicationRepository extends JpaRepository<Application, Integer> {

	List<Application> findByStudentId(int studentId);

}
