package com.fitness.gym.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int age;
    private int height;
    private String gender;
    private String trainingType;
    private String membershipPack;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
