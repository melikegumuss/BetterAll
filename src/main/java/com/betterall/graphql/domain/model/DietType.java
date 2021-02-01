package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "diet_type")
@Getter
@Setter
public class DietType implements Serializable {

    @Id
    @SequenceGenerator(name = "seq_diet_type", allocationSize = 1)
    @GeneratedValue(generator = "seq_diet_type", strategy = GenerationType.SEQUENCE)
    private Long diet_type_id;

    @Column(length = 100, name = "diet_name")
    private String diet_name;

    @Column(name = "diet_description")
    private String diet_description;


}
