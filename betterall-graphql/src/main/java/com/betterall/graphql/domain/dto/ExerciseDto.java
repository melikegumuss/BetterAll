package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.model.Workout;
import lombok.Data;

import java.util.List;

@Data
public class ExerciseDto {
    private String exercise_type;
    private String exercise_name;
    private float exercise_duration;
    private int exercise_repetition;
    private List<Workout> workouts;
}
