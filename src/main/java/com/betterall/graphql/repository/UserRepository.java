package com.betterall.graphql.repository;

import com.betterall.graphql.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> getByName(String name);
}
