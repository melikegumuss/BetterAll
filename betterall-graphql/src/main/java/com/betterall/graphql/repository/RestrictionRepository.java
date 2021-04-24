package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.Restriction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RestrictionRepository extends JpaRepository<Restriction, Long>  {
}
