package com.betterall.graphql.domain.dto;

import com.betterall.graphql.domain.model.User;
import lombok.Data;
import java.util.List;

@Data
public class RestrictionDto {

    private String third_party_restriction_id;
    private String restriction_name;
    private List<User> users;
}
