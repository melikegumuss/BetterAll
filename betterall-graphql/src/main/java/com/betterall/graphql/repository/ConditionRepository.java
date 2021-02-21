package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Condition;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConditionRepository extends JpaRepository<Condition, Long> {
}
