package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "ingredient")
@Getter
@Setter
public class Ingredient {

    @Id
    @SequenceGenerator(name = "seq_ingredient", allocationSize = 1)
    @GeneratedValue(generator = "seq_ingredient", strategy = GenerationType.SEQUENCE)
    private Long ingredient_id;

    @Column(name = "ingredient_name")
    private String ingredient_name;

    @Column(name = "calorie")
    private float calorie;

    @Column(name = "protein")
    private float protein;

    @Column(name = "carbohydrate")
    private float carbohydrate;

    @Column(name = "fat")
    private float fat;

    @ManyToMany(mappedBy = "ingredients", fetch=FetchType.EAGER)
    private List<Meal> meals;
}
