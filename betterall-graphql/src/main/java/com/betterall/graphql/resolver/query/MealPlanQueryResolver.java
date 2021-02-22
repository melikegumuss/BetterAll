package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.repository.MealPlanRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class MealPlanQueryResolver implements GraphQLQueryResolver {

    private final MealPlanRepository mealPlanRepository;

    public Optional<MealPlan> getByMealPlanId(Long id) {
        return mealPlanRepository.findById(id);
    }

}
