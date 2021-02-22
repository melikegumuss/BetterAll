package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "meal")
@Getter
@Setter
public class Meal {

    @Id
    @SequenceGenerator(name = "seq_meal", allocationSize = 1)
    @GeneratedValue(generator = "seq_meal", strategy = GenerationType.SEQUENCE)
    private Long meal_id;

    @Column(name = "meal_name")
    private String meal_name;

    @Column(name = "calorie")
    private float calorie;

    @Column(name = "protein")
    private float protein;

    @Column(name = "carbohydrate")
    private float carbohydrate;

    @Column(name = "total_fat")
    private float fat;

    @ManyToMany(mappedBy = "meals", fetch=FetchType.EAGER)
    private List<MealPlan> meal_plans;
}
