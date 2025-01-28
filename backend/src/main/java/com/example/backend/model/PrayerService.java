package com.example.backend.service;

import com.example.backend.model.Prayer;
import com.example.backend.repository.PrayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class PrayerService {

    @Autowired
    private PrayerRepository prayerRepository;

    public List<Prayer> getAllPrayers() {
        return prayerRepository.findAll();
    }

    public Prayer markPrayer(String name) {
        Prayer prayer = prayerRepository.findById(name).orElseThrow(() -> new RuntimeException("Prayer not found"));
        prayer.setCompleted(true);
        prayer.setTimestamp(LocalDateTime.now());
        return prayerRepository.save(prayer);
    }
}
