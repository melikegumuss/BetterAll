package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.ConditionDto;
import com.betterall.graphql.domain.dto.IngredientDto;
import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Ingredient;
import com.betterall.graphql.domain.model.Meal;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.IngredientRepository;
import com.betterall.graphql.repository.MealRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class IngredientMutationResolver implements GraphQLMutationResolver {

    private final IngredientRepository ingredientRepository;
    private final MealRepository mealRepository;

    public Ingredient createIngredient(IngredientDto ingredientDto) {
        return ingredientRepository.save(dtoToEntity(ingredientDto));
    }

    public Ingredient addIngredientToMeal(Long meal_id, Long ingredient_id){
        Meal meal = mealRepository.findById(meal_id).orElse(null);
        Ingredient ingredient = ingredientRepository.findById(ingredient_id).orElse(null);
        if (meal != null && ingredient != null) {
            List<Meal> newMeals = ingredient.getMeals();
            List<Ingredient> newIngredients = meal.getIngredients();
            newMeals.add(meal);
            ingredient.setMeals(newMeals);
            newIngredients.add(ingredient);
            meal.setIngredients(newIngredients);
            mealRepository.save(meal);
            return ingredientRepository.save(ingredient);
        }
        else {
            return null;
        }

    }

    private Ingredient dtoToEntity(IngredientDto ingredientDto) {
        Ingredient ingredient = new Ingredient();
        ingredient.setIngredient_name(ingredientDto.getIngredient_name());
        ingredient.setCalorie(ingredientDto.getCalorie());
        ingredient.setCarbohydrate(ingredientDto.getCarbohydrate());
        ingredient.setProtein(ingredientDto.getProtein());
        ingredient.setFat(ingredientDto.getFat());
        ingredient.setMeals(ingredientDto.getMeals());
        return ingredient;
    }
}
