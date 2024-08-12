package com.fitness.gym.controller;

import com.fitness.gym.model.Progress;
import com.fitness.gym.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/progress")
public class ProgressController {

    @Autowired
    private ProgressService progressService;

    @PostMapping
    public ResponseEntity<Progress> saveProgress(@RequestBody Progress progress) {
        Progress savedProgress = progressService.saveProgress(progress);
        return ResponseEntity.ok(savedProgress);
    }
}
