package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "condition")
@Getter
@Setter
public class Condition {

    @Id
    @SequenceGenerator(name = "seq_condition", allocationSize = 1)
    @GeneratedValue(generator = "seq_condition", strategy = GenerationType.SEQUENCE)
    private Long condition_id;

    // TODO: condition type enum olmalı mı?
    @Column(name = "condition_type")
    private String condition_type;

    @Column(name = "condition_name")
    private String condition_name;

    @Column(name = "condition_description")
    private String condition_description;

    // TODO: duration ne kadar gerekli?
    @Column(name = "duration")
    private float duration;

    @ManyToMany(mappedBy = "conditions", fetch=FetchType.EAGER)
    private List<User> users;


}
