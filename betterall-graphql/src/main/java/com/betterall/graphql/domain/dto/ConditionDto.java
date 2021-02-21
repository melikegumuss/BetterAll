package com.betterall.graphql.domain.dto;

import lombok.Data;

@Data
public class ConditionDto {
    private String condition_type;
    private String condition_name;
    private String condition_description;
    private float duration;
}
