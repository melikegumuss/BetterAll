package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.MealDto;
import com.betterall.graphql.domain.model.Meal;
import com.betterall.graphql.repository.MealRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class MealMutationResolver implements GraphQLMutationResolver {

    private final MealRepository mealRepository;

    public Meal createMeal(MealDto mealDto) {
        return mealRepository.save(dtoToEntity(mealDto));
    }


    private Meal dtoToEntity(MealDto mealDto) {
        Meal meal = new Meal();
        meal.setMeal_name(mealDto.getMeal_name());
        meal.setCalorie(mealDto.getCalorie());
        meal.setCarbohydrate(mealDto.getCarbohydrate());
        meal.setProtein(mealDto.getProtein());
        meal.setFat(mealDto.getFat());
        meal.setMeal_plans(mealDto.getMeal_plans());
        meal.setIngredients(mealDto.getIngredients());
        return meal;
    }
}
