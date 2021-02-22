package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "meal_plan")
@Getter
@Setter
public class MealPlan {

    @Id
    @SequenceGenerator(name = "seq_meal_plan", allocationSize = 1)
    @GeneratedValue(generator = "seq_meal_plan", strategy = GenerationType.SEQUENCE)
    private Long meal_plan_id;

    @Column(name = "meal_plan_name")
    private String meal_plan_name;

    @Column(name = "total_calorie")
    private float total_calorie;

    @Column(name = "total_protein")
    private float total_protein;

    @Column(name = "total_carbohydrate")
    private float total_carbohydrate;

    @Column(name = "total_fat")
    private float total_fat;

    @Column(name = "meal_count")
    private int meal_count;

}
