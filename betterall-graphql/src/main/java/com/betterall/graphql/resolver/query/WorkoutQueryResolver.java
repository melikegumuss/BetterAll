package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.domain.model.Workout;
import com.betterall.graphql.repository.MealPlanRepository;
import com.betterall.graphql.repository.WorkoutRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class WorkoutQueryResolver implements GraphQLQueryResolver {

    private final WorkoutRepository workoutRepository;

    public Optional<Workout> getByWorkoutId(Long id) {
        return workoutRepository.findById(id);
    }

}
