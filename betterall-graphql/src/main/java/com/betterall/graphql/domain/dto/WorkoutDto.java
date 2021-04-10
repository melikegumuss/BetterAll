package com.betterall.graphql.domain.dto;

import lombok.Data;

@Data
public class WorkoutDto {
    private String workout_name;
    private String workout_description;
    private float workout_duration;
}
