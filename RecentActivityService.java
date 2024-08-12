package com.fitness.gym.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.gym.model.RecentActivity;
import com.fitness.gym.repository.RecentActivityRepository;

@Service
public class RecentActivityService {
    @Autowired
    private RecentActivityRepository recentActivityRepository;

    public List<RecentActivity> getAllRecentActivities() {
        return recentActivityRepository.findAll();
    }

    public RecentActivity saveRecentActivity(RecentActivity recentActivity) {
        return recentActivityRepository.save(recentActivity);
    }

    public void deleteRecentActivity(Long id) {
        recentActivityRepository.deleteById(id);
    }
}
