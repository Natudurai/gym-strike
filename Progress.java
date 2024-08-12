package com.fitness.gym.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Double initialWeight;
    private Double currentWeight;
    private Double initialMeasurements;
    private Double currentMeasurements;
    private Double height;
    private Double bmi;
    private String email;

    // Additional fields like user ID can be added if needed
}

