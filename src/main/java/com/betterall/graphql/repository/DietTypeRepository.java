package com.betterall.graphql.repository;

import com.betterall.graphql.domain.DietType;
import com.betterall.graphql.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DietTypeRepository extends JpaRepository<DietType, Long> {

}
