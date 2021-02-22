package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealRepository extends JpaRepository<Meal, Long> {
}
