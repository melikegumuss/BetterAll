package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.model.User;
import lombok.Data;

import java.util.List;

@Data
public class ConditionDto {
    private String condition_type;
    private String condition_name;
    private String condition_description;
    private float duration;
    private List<User> users;
}
