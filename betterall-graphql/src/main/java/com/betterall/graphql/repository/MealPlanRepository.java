package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.MealPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MealPlanRepository extends JpaRepository<MealPlan, Long> {
}
