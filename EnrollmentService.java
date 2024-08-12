package com.fitness.gym.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fitness.gym.model.Enrollment;
import com.fitness.gym.repository.EnrollmentRepository;

import java.util.List;
import java.util.Optional;

@Service
public class EnrollmentService {

    @Autowired
    private EnrollmentRepository enrollmentRepository;

    public Enrollment saveEnrollment(Enrollment enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    public List<Enrollment> getAllEnrollments() {
        return enrollmentRepository.findAll();
    }

    public Enrollment getEnrollmentById(Long id) {
        return enrollmentRepository.findById(id).orElse(null);
    }

    public Enrollment updateEnrollment(Long id, Enrollment enrollmentDetails) {
        Optional<Enrollment> optionalEnrollment = enrollmentRepository.findById(id);
        if (optionalEnrollment.isPresent()) {
            Enrollment enrollment = optionalEnrollment.get();
            enrollment.setName(enrollmentDetails.getName());
            enrollment.setAge(enrollmentDetails.getAge());
            enrollment.setGender(enrollmentDetails.getGender());
            enrollment.setHeight(enrollmentDetails.getHeight());
            enrollment.setTrainingType(enrollmentDetails.getTrainingType());
            enrollment.setDuration(enrollmentDetails.getDuration());
            // Update other fields if necessary
            return enrollmentRepository.save(enrollment);
        } else {
            return null;
        }
    }

    public boolean deleteEnrollment(Long id) {
        if (enrollmentRepository.existsById(id)) {
            enrollmentRepository.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
}
