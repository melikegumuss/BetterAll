package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.ConditionRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;


import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class ConditionQueryResolver implements GraphQLQueryResolver {

    private final ConditionRepository conditionRepository;

    public Optional<Condition> getByConditionId(Long id) {
        return conditionRepository.findById(id);
    }

    public List<User> getUsersByConditionId(Long condition_id){
        Condition condition = conditionRepository.findById(condition_id).orElse(null);
        if (condition != null){
            return condition.getUsers();
        }else{
            return null;
        }
    }
}
