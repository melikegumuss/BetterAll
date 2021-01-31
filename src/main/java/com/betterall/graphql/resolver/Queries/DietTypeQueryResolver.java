package com.betterall.graphql.resolver.Queries;

import com.betterall.graphql.domain.DietType;
import com.betterall.graphql.repository.DietTypeRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class DietTypeQueryResolver implements GraphQLQueryResolver {

    private final DietTypeRepository dietTypeRepository;

    public Optional<DietType> getByDietTypeId(Long id) {
        return dietTypeRepository.findById(id);
    }

}
