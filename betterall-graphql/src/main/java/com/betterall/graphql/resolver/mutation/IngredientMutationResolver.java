package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.ConditionDto;
import com.betterall.graphql.domain.dto.IngredientDto;
import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Ingredient;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.IngredientRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class IngredientMutationResolver implements GraphQLMutationResolver {

    private final IngredientRepository ingredientRepository;

    public Ingredient createIngredient(IngredientDto ingredientDto) {
        return ingredientRepository.save(dtoToEntity(ingredientDto));
    }


    private Ingredient dtoToEntity(IngredientDto ingredientDto) {
        Ingredient ingredient = new Ingredient();
        ingredient.setIngredient_name(ingredientDto.getIngredient_name());
        ingredient.setCalorie(ingredientDto.getCalorie());
        ingredient.setCarbohydrate(ingredientDto.getCarbohydrate());
        ingredient.setProtein(ingredientDto.getProtein());
        ingredient.setFat(ingredientDto.getFat());
        return ingredient;
    }
}
