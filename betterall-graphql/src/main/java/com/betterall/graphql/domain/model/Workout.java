package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "workout")
@Getter
@Setter
public class Workout {
    @Id
    @SequenceGenerator(name = "seq_workout", allocationSize = 1)
    @GeneratedValue(generator = "seq_workout", strategy = GenerationType.SEQUENCE)
    private Long workout_id;

    @Column(name = "workout_name")
    private String workout_name;

    @Column(name = "workout_description")
    private String workout_description;

    @Column(name = "workout_duration")
    private float workout_duration;

    @ManyToMany(fetch=FetchType.EAGER)
    @JoinTable(
            name = "workout_exercise",
            joinColumns = @JoinColumn(name = "workout_id"),
            inverseJoinColumns = @JoinColumn(name = "exercise_id")
    )
    private List<Exercise> exercises;
}
