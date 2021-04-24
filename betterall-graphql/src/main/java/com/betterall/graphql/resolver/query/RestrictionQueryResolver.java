package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Restriction;
import com.betterall.graphql.domain.model.User;

import com.betterall.graphql.repository.RestrictionRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class RestrictionQueryResolver implements GraphQLQueryResolver{

    private final RestrictionRepository restrictionRepository;

    public Optional<Restriction> getByRestrictionId(Long id) {
        return restrictionRepository.findById(id);
    }

    public List<User> getUsersByRestrictionId(Long restriction_id){
        Restriction restriction = restrictionRepository.findById(restriction_id).orElse(null);
        if (restriction != null){
            return restriction.getUsers();
        }else{
            return null;
        }
    }
}
