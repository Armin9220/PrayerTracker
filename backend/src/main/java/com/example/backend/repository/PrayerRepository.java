package com.example.backend.repository;

import com.example.backend.model.Prayer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PrayerRepository extends JpaRepository<Prayer, String> {
}
