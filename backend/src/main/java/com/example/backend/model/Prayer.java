package com.example.backend.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.time.LocalDateTime;

@Entity
public class Prayer {

    @Id
    private String name;
    private boolean isCompleted;
    private LocalDateTime timestamp;

    // Getter und Setter
}
