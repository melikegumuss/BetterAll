package com.betterall.graphql.domain;

import lombok.Builder;
import lombok.Value;

import java.util.UUID;

@Builder
@Value
public class User {
    UUID id;
    String username;
    String name;
}
