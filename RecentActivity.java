package com.fitness.gym.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "Recent")
public class RecentActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String activity;
    private String date;
    private String status;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;
}
