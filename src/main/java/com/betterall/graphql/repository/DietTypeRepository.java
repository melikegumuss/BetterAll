package com.betterall.graphql.repository;

import com.betterall.graphql.domain.model.DietType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DietTypeRepository extends JpaRepository<DietType, Long> {

}
