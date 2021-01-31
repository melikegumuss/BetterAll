package com.betterall.graphql.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="user")
@Getter
@Setter
public class User implements Serializable {

    @Id
    @SequenceGenerator(name="seq_user", allocationSize=1)
    @GeneratedValue(generator = "seq_user", strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(length=100, name="username")
    private String username;

    @Column(length=100, name="name")
    private String name;
}
