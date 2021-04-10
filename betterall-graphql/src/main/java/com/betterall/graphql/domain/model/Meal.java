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

    //TODO: If fetch type eager is a must divide into two queries??? or use Set<MealPlan> instead
    @ManyToMany(mappedBy = "meals", fetch=FetchType.LAZY)
    private List<MealPlan> meal_plans;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
            name = "meal_ingredients",
            joinColumns = @JoinColumn(name = "meal_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private List<Ingredient> ingredients;

}
