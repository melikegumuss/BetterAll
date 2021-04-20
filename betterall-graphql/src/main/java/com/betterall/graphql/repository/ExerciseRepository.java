package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {
}
