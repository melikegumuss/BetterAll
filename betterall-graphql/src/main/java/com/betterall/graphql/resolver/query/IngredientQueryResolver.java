package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Ingredient;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.IngredientRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class IngredientQueryResolver implements GraphQLQueryResolver {

    private final IngredientRepository ingredientRepository;

    public Optional<Ingredient> getByIngredientsId(Long id) {
        return ingredientRepository.findById(id);
    }
}
