package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
