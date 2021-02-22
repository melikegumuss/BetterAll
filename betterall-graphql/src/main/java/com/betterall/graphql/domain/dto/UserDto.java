package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.enums.UserGoal;
import com.betterall.graphql.domain.model.DietType;
import com.betterall.graphql.domain.model.MealPlan;
import lombok.Data;

@Data
public class UserDto {
    private String username;
    private String name;
    private String email;
    private int age;
    private float height;
    private boolean gender;
    private float body_fat;
    private float bmi;
    private UserGoal user_goal;
    private DietType diet_type;
    private MealPlan mealPlan;
}
