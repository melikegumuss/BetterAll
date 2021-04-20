package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Long> {
}
