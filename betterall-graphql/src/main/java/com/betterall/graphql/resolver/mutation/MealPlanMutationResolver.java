package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.MealPlanDto;
import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.repository.MealPlanRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class MealPlanMutationResolver implements GraphQLMutationResolver {

    private final MealPlanRepository mealPlanRepository;

    public MealPlan createMealPlan(MealPlanDto mealPlanDto) {
        return mealPlanRepository.save(dtoToEntity(mealPlanDto));
    }


    private MealPlan dtoToEntity(MealPlanDto mealPlanDto) {
        MealPlan mealPlan = new MealPlan();
        mealPlan.setMeal_plan_name(mealPlanDto.getMeal_plan_name());
        mealPlan.setMeal_count(mealPlanDto.getMeal_count());
        mealPlan.setTotal_calorie(mealPlanDto.getTotal_calorie());
        mealPlan.setTotal_carbohydrate(mealPlanDto.getTotal_carbohydrate());
        mealPlan.setTotal_fat(mealPlanDto.getTotal_fat());
        mealPlan.setTotal_protein(mealPlanDto.getTotal_protein());
        mealPlan.setUser(mealPlanDto.getUser());
        return mealPlan;
    }
}
