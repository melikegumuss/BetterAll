package com.betterall.graphql.resolver.Mutators;

import com.betterall.graphql.domain.DietType;
import com.betterall.graphql.dto.DietTypeDto;
import com.betterall.graphql.repository.DietTypeRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DietTypeMutationResolver implements GraphQLMutationResolver {

    private final DietTypeRepository dietTypeRepository;

    public DietType createDietType(DietTypeDto dietTypeDto) {
        return dietTypeRepository.save(dtoToEntity(dietTypeDto));
    }

    private DietType dtoToEntity(DietTypeDto dietTypeDto) {
        DietType dietType = new DietType();
        dietType.setDiet_name(dietTypeDto.getDiet_name());
        dietType.setDiet_description(dietTypeDto.getDiet_description());
        return dietType;
    }
}
