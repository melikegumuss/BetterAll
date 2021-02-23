package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Ingredient;
import com.betterall.graphql.domain.model.Meal;
import com.betterall.graphql.repository.MealRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MealQueryResolver implements GraphQLQueryResolver {

    private final MealRepository mealRepository;

    public Optional<Meal> getByMealId(Long id) {
        return mealRepository.findById(id);
    }

    public List<Ingredient> getIngredientsByMealId(Long meal_id){
        Meal meal = mealRepository.findById(meal_id).orElse(null);
        if (meal != null){
            return meal.getIngredients();
        }
        else{
            return null;
        }
    }

}
