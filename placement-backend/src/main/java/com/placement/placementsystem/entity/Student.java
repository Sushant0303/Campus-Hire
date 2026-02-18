package com.placement.placementsystem.entity;

import jakarta.persistence.*;
import lombok.Data;
// import lombok.Getter;

@Entity
@Data

public class Student {
	
	private String role = "STUDENT";


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private String password;
    private String branch;
    private double cgpa;
    private String resume;
    
    public String getPassword() {
        return password;
    }

    
    
    
}


