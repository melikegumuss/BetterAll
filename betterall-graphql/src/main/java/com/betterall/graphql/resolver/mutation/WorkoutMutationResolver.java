package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.MealPlanDto;
import com.betterall.graphql.domain.dto.WorkoutDto;
import com.betterall.graphql.domain.model.MealPlan;
import com.betterall.graphql.domain.model.Workout;
import com.betterall.graphql.repository.MealPlanRepository;
import com.betterall.graphql.repository.WorkoutRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class WorkoutMutationResolver implements GraphQLMutationResolver {
    private final WorkoutRepository workoutRepository;

    public Workout createWorkout(WorkoutDto workoutDto) {
        return workoutRepository.save(dtoToEntity(workoutDto));
    }

    private Workout dtoToEntity(WorkoutDto workoutDto) {
        Workout workout = new Workout();
        workout.setWorkout_name(workoutDto.getWorkout_name());
        workout.setWorkout_description(workoutDto.getWorkout_description());
        workout.setWorkout_duration(workoutDto.getWorkout_duration());
        return workout;
    }
}
