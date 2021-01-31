package com.betterall.graphql.resolver;

import com.betterall.graphql.domain.User;
import com.betterall.graphql.dto.UserDto;
import com.betterall.graphql.repository.UserRepository;
import com.coxautodev.graphql.tools.GraphQLMutationResolver;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class UserMutationResolver implements GraphQLMutationResolver {

    private final UserRepository userRepository;

    public User createUser(UserDto userDto) {
        return userRepository.save(dtoToEntity(userDto));
    }

    private User dtoToEntity(UserDto userDto) {
        User user = new User();
        user.setUsername(userDto.getUsername());
        user.setName(userDto.getName());
        return user;
    }
}
