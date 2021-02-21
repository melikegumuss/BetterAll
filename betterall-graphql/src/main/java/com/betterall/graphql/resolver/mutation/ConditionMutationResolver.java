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
