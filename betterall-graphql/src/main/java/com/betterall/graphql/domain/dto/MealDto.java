package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.model.Ingredient;
import com.betterall.graphql.domain.model.MealPlan;
import lombok.Data;

import java.util.List;

@Data
public class MealDto {
    private String meal_name;
    private float calorie;
    private float protein;
    private float carbohydrate;
    private float fat;
    private List<MealPlan> meal_plans;
    private List<Ingredient> ingredients;
}
