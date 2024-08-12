package com.fitness.gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitness.gym.model.RecentActivity;


public interface RecentActivityRepository extends JpaRepository<RecentActivity, Long> {
}

