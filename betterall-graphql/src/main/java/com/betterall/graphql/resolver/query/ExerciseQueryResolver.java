package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Exercise;
import com.betterall.graphql.repository.ExerciseRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ExerciseQueryResolver implements GraphQLQueryResolver {

    private final ExerciseRepository exerciseRepository;

    public Optional<Exercise> getByExerciseId(Long id) {
        return exerciseRepository.findById(id);
    }
}
