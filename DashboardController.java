package com.fitness.gym.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.fitness.gym.model.Member;
import com.fitness.gym.model.RecentActivity;
import com.fitness.gym.service.MemberService;
import com.fitness.gym.service.RecentActivityService;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DashboardController {
    @Autowired
    private MemberService memberService;

    @Autowired
    private RecentActivityService recentActivityService;

    @GetMapping("/members")
    public List<Member> getAllMembers() {
        return memberService.getAllMembers();
    }

    @PostMapping("/members")
    public Member saveMember(@RequestBody Member member) {
        return memberService.saveMember(member);
    }

    @DeleteMapping("/members/{id}")
    public void deleteMember(@PathVariable Long id) {
        memberService.deleteMember(id);
    }

    @GetMapping("/recent-activities")
    public List<RecentActivity> getAllRecentActivities() {
        return recentActivityService.getAllRecentActivities();
    }

    @PostMapping("/recent-activities")
    public RecentActivity saveRecentActivity(@RequestBody RecentActivity recentActivity) {
        return recentActivityService.saveRecentActivity(recentActivity);
    }

    @DeleteMapping("/recent-activities/{id}")
    public void deleteRecentActivity(@PathVariable Long id) {
        recentActivityService.deleteRecentActivity(id);
    }
}

