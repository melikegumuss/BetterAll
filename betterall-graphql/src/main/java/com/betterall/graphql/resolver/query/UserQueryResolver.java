package com.betterall.graphql.resolver.query;

import com.betterall.graphql.domain.model.Condition;
import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLQueryResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class UserQueryResolver implements GraphQLQueryResolver {

    private final UserRepository userRepository;

    public List<User> getUsersByName(String name) {
        return userRepository.getByName(name);
    }

    public Optional<User> getByUserId(Long id) {
        return userRepository.findById(id);
    }

    public List<Condition> getConditionsByUserId(Long user_id){
        User user = userRepository.findById(user_id).orElse(null);
        if (user != null){
            return user.getConditions();
        }else{
            return null;
        }
    }
}
