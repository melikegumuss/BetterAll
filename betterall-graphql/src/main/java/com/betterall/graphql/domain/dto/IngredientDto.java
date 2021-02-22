package com.betterall.graphql.domain.dto;

import lombok.Data;

import java.util.List;

@Data
public class IngredientDto {
    private String ingredient_name;
    private float calorie;
    private float protein;
    private float carbohydrate;
    private float fat;
}
