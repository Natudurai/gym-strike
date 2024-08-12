package com.fitness.gym.service;

import com.fitness.gym.model.Progress;
import com.fitness.gym.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProgressService {

    @Autowired
    private ProgressRepository progressRepository;

    public Progress saveProgress(Progress progress) {
        return progressRepository.save(progress);
    }
}
