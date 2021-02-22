package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.MealPlanDto;
import com.betterall.graphql.domain.model.Meal;
import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.repository.MealPlanRepository;
import com.betterall.graphql.repository.MealRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class MealPlanMutationResolver implements GraphQLMutationResolver {

    private final MealPlanRepository mealPlanRepository;
    private final MealRepository mealRepository;

    public MealPlan createMealPlan(MealPlanDto mealPlanDto) {
        return mealPlanRepository.save(dtoToEntity(mealPlanDto));
    }

    public MealPlan addMealToMealPlan(Long meal_plan_id, Long meal_id){
        Meal meal = mealRepository.findById(meal_id).orElse(null);
        MealPlan mealPlan = mealPlanRepository.findById(meal_plan_id).orElse(null);
        if (meal != null && mealPlan != null){
            List<Meal> newList = mealPlan.getMeals();
            newList.add(meal);
            mealPlan.setMeals(newList);
            return mealPlanRepository.save(mealPlan);
        }
        else{
            return null;
        }
    }

    private MealPlan dtoToEntity(MealPlanDto mealPlanDto) {
        MealPlan mealPlan = new MealPlan();
        mealPlan.setMeal_plan_name(mealPlanDto.getMeal_plan_name());
        mealPlan.setMeal_count(mealPlanDto.getMeal_count());
        mealPlan.setTotal_calorie(mealPlanDto.getTotal_calorie());
        mealPlan.setTotal_carbohydrate(mealPlanDto.getTotal_carbohydrate());
        mealPlan.setTotal_fat(mealPlanDto.getTotal_fat());
        mealPlan.setTotal_protein(mealPlanDto.getTotal_protein());
        mealPlan.setMeals(mealPlanDto.getMeals());
        return mealPlan;
    }
}
