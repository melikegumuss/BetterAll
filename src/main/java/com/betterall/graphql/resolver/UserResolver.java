package com.betterall.graphql.resolver;

import com.betterall.graphql.domain.User;
import graphql.kickstart.tools.GraphQLQueryResolver;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Slf4j
@Component
public class UserResolver implements GraphQLQueryResolver {

    public User user(UUID id) {
        log.info("Retrieving user id: {}", id);

        return User.builder().id(id).username("melikearslan").name("Melike").build();
    }
}
