package com.placement.placementsystem.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Admin {
	
	private String role = "ADMIN";


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String email;
    private String password;
}
