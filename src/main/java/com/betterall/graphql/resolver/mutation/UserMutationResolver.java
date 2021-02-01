package com.betterall.graphql.resolver.mutation;

import com.betterall.graphql.domain.model.User;
import com.betterall.graphql.domain.dto.UserDto;
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
        user.setAge(userDto.getAge());
        user.setEmail(userDto.getEmail());
        user.setHeight(userDto.getHeight());
        user.setGender(userDto.isGender());
        user.setBody_fat(userDto.getBody_fat());
        user.setBmi(userDto.getBmi());
        user.setUser_goal(userDto.getUser_goal());
        return user;
    }
}
