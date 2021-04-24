package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.dto.ConditionDto;
import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.ConditionRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class ConditionMutationResolver implements GraphQLMutationResolver {

    private final ConditionRepository conditionRepository;

    public Condition createCondition(ConditionDto conditionDto) {
        return conditionRepository.save(dtoToEntity(conditionDto));
    }

    public Condition updateCondition(Condition condition) {
        Condition found_condition = conditionRepository.findById(condition.getCondition_id()).orElse(null);
        if (found_condition != null) {
            if (!condition.getCondition_name().isEmpty()){
                found_condition.setCondition_name(condition.getCondition_name());
            }
            if (!condition.getCondition_type().isEmpty()){
                found_condition.setCondition_type(condition.getCondition_type());
            }
            if (condition.getCondition_description().isEmpty()){
                found_condition.setCondition_description(condition.getCondition_description());
            }
            if (!condition.getUsers().isEmpty()){
                found_condition.setUsers(condition.getUsers());
            }
            if (condition.getDuration() != 0){
                found_condition.setDuration(condition.getDuration());
            }
            return conditionRepository.save(found_condition);
        }
        else
            return null;
    }


    private Condition dtoToEntity(ConditionDto conditionDto) {
        Condition condition = new Condition();
        condition.setCondition_name(conditionDto.getCondition_name());
        condition.setCondition_type(conditionDto.getCondition_type());
        condition.setCondition_description(conditionDto.getCondition_description());
        condition.setDuration(conditionDto.getDuration());
        condition.setUsers(conditionDto.getUsers());
        return condition;
    }
}
