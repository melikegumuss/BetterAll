package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.enums.ActivityLevel;
import com.betterall.graphql.domain.enums.WeeklyWeightGoal;
import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Restriction;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import java.util.List;

@Data
public class UserDto {
    private String third_party_id;
    private String program_id;
    private String program_name;
    private String username;
    private String name;
    private String email;
    private int age;
    private float starting_weight;
    private int target_weight;
    private float height;
    private boolean gender;
    private float body_fat;
    private float bmi;
    private int daily_calorie_intake;
    private int calorie_deficit;
    private int total_daily_energy_expenditure;
    private int basal_metabolic_rate;
    private WeeklyWeightGoal weekly_weight_goal;
    private ActivityLevel activity_level;
    private List<Condition> conditions;
    private boolean imperial;
    private String timezone;
    private List<Restriction> restrictions;
    private float hba1c;
    private int total_cholesterol;
    private int cholesterol_ldl;
    private int vitamin_d;
    private int vitamin_b12;
    private int cortisol;
    private int ferritin;
}
