package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.ConditionDto;
import com.betterall.graphql.domain.dto.RestrictionDto;
import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.Restriction;
import com.betterall.graphql.repository.ConditionRepository;
import com.betterall.graphql.repository.RestrictionRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class RestrictionMutationResolver implements GraphQLMutationResolver{

    private final RestrictionRepository restrictionRepository;

    public Restriction createRestriction(RestrictionDto restrictionDto) {
        return restrictionRepository.save(dtoToEntity(restrictionDto));
    }

    public Restriction updateRestriction(Restriction restriction) {
        Restriction found_restriction = restrictionRepository.findById(restriction.getRestriction_id()).orElse(null);
        if (found_restriction != null) {
            if (!restriction.getRestriction_name().isEmpty()){
                found_restriction.setRestriction_name(restriction.getRestriction_name());
            }
            if (!restriction.getThird_party_restriction_id().isEmpty()){
                found_restriction.setThird_party_restriction_id(restriction.getThird_party_restriction_id());
            }
            if (!restriction.getUsers().isEmpty()){
                found_restriction.setUsers(restriction.getUsers());
            }
            return restrictionRepository.save(found_restriction);
        }
        else
            return null;
    }


    private Restriction dtoToEntity(RestrictionDto restrictionDto) {
        Restriction restriction = new Restriction();
        restriction.setThird_party_restriction_id(restriction.getThird_party_restriction_id());
        restriction.setRestriction_name(restriction.getRestriction_name());
        restriction.setUsers(restriction.getUsers());
        return restriction;
    }
}