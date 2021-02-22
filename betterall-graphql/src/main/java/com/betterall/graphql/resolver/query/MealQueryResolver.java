package com.betterall.graphql.resolver.query;

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

}
