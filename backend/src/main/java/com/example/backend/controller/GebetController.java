package com.example.backend.controller;

import com.example.backend.model.Prayer;
import com.example.backend.service.PrayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/prayers")
public class PrayerController {

    @Autowired
    private PrayerService prayerService;

    @GetMapping("/")
    public List<Prayer> getAllPrayers() {
        return prayerService.getAllPrayers();
    }

    @PostMapping("/mark")
    public Prayer markPrayer(@RequestParam String prayerName) {
        return prayerService.markPrayer(prayerName);
    }
}
