package com.betterall.graphql.domain.model;

import com.betterall.graphql.domain.enums.ActivityLevel;
import com.betterall.graphql.domain.enums.WeeklyWeightGoal;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name = "registered_user")
@Getter
@Setter
public class User implements Serializable {

    @Id
    @SequenceGenerator(name = "seq_user", allocationSize = 1)
    @GeneratedValue(generator = "seq_user", strategy = GenerationType.SEQUENCE)
    private Long user_id;

    @Column(length = 100, name = "third_party_id")
    private String third_party_id;

    @Column(length = 100, name = "program_id")
    private String program_id;

    @Column(length = 100, name = "program_name")
    private String program_name;

    @Column(length = 100, name = "username")
    private String username;

    @Column(length = 100, name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(length = 100, name = "email")
    private String email;

    @Column(name = "starting_weight")
    private float starting_weight;

    @Column(name = "target_weight")
    private int target_weight;

    @Column(name = "height")
    private float height;

    @Column(name = "gender")
    private boolean gender;

    @Column(name = "body_fat")
    private float body_fat;

    @Column(name = "bmi")
    private float bmi;

    @Column(name = "daily_calorie_intake")
    private int daily_calorie_intake;

    @Column(name = "calorie_deficit")
    private int calorie_deficit;

    @Column(name = "total_daily_energy_expenditure")
    private int total_daily_energy_expenditure;

    @Column(name = "basal_metabolic_rate")
    private int basal_metabolic_rate;

    @Enumerated(EnumType.STRING)
    @Column(name = "weekly_weight_goal")
    private WeeklyWeightGoal weekly_weight_goal;

    @Enumerated(EnumType.STRING)
    @Column(name = "activity_level")
    private ActivityLevel activity_level;

    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(
        name = "user_condition",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "condition_id")
    )
    private List<Condition> conditions;

    @Column(name = "imperial")
    private boolean imperial;

    @Column(length = 100, name = "timezone")
    private String timezone;

    @ManyToMany(fetch=FetchType.LAZY)
    @JoinTable(
            name = "user_restriction",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "restriction_id")
    )
    private List<Restriction> restrictions;

    @Column(name = "hba1c")
    private float hba1c;

    @Column(name = "total_cholesterol")
    private int total_cholesterol;

    @Column(name = "cholesterol_ldl")
    private int cholesterol_ldl;

    @Column(name = "vitamin_d")
    private int vitamin_d;

    @Column(name = "vitamin_b12")
    private int vitamin_b12;

    @Column(name = "cortisol")
    private int cortisol;

    @Column(name = "ferritin")
    private int ferritin;


}
