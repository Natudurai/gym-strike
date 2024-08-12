package com.fitness.gym.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fitness.gym.model.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {
}



