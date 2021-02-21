package com.betterall.graphql.domain.model;

import com.betterall.graphql.domain.enums.UserGoal;
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

    @Column(length = 100, name = "username")
    private String username;

    @Column(length = 100, name = "name")
    private String name;

    @Column(name = "age")
    private int age;

    @Column(length = 100, name = "email")
    private String email;

    @Column(name = "height")
    private float height;

    @Column(name = "gender")
    private boolean gender;

    @Column(name = "body_fat")
    private float body_fat;

    @Column(name = "bmi")
    private float bmi;

    @Enumerated(EnumType.STRING)
    @Column(name = "user_goal")
    private UserGoal user_goal;

    @ManyToOne
    @JoinColumn(name = "diet_type_id")
    private DietType diet_type;

    @ManyToMany
    @JoinTable(
        name = "user_condition",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "condition_id")
    )
    private List<Condition> conditions;

}
