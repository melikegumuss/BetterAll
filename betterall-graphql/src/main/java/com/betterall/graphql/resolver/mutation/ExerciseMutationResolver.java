package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.ExerciseDto;
import com.betterall.graphql.domain.model.DietType;
import com.betterall.graphql.domain.dto.DietTypeDto;
import com.betterall.graphql.domain.model.Exercise;
import com.betterall.graphql.repository.DietTypeRepository;
import com.betterall.graphql.repository.ExerciseRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class ExerciseMutationResolver implements GraphQLMutationResolver {

    private final ExerciseRepository exerciseRepository;

    public Exercise createExercise(ExerciseDto exerciseDto) {
        return exerciseRepository.save(dtoToEntity(exerciseDto));
    }

    private Exercise dtoToEntity(ExerciseDto exerciseDto) {
        Exercise exercise = new Exercise();
        exercise.setExercise_name(exerciseDto.getExercise_name());
        exercise.setExercise_duration(exerciseDto.getExercise_duration());
        exercise.setExercise_type(exercise.getExercise_type());
        exercise.setExercise_repetition(exercise.getExercise_repetition());
        exercise.setWorkouts(exerciseDto.getWorkouts());
        return exercise;
    }
}
