package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "exercise")
@Getter
@Setter
public class Exercise {
    @Id
    @SequenceGenerator(name = "seq_exercise", allocationSize = 1)
    @GeneratedValue(generator = "seq_exercise", strategy = GenerationType.SEQUENCE)
    private Long exercise_id;

    @Column(name = "exercise_type")
    private String exercise_type;

    @Column(name = "exercise_name")
    private String exercise_name;

    @Column(name = "exercise_duration")
    private float exercise_duration;

    @Column(name = "exercise_repetition")
    private int exercise_repetition;

    @ManyToMany( mappedBy = "exercises", fetch = FetchType.LAZY)
    private List<Workout> workouts;
}
