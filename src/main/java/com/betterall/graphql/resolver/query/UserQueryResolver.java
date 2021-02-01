package com.betterall.graphql.resolver.query;

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

}
