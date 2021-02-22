package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.model.Meal;
import com.betterall.graphql.domain.model.User;
import lombok.Data;

import java.util.List;

@Data
public class MealPlanDto {
    private String meal_plan_name;
    private float total_calorie;
    private float total_protein;
    private float total_carbohydrate;
    private float total_fat;
    private int meal_count;
    private List<Meal> meals;
}
