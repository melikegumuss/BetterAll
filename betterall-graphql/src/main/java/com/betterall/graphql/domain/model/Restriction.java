package com.betterall.graphql.domain.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "restriction")
@Getter
@Setter
public class Restriction {

    @Id
    @SequenceGenerator(name = "seq_restriction", allocationSize = 1)
    @GeneratedValue(generator = "seq_restriction", strategy = GenerationType.SEQUENCE)
    private Long restriction_id;

    @Column(length = 100, name = "third_party_restriction_id")
    private String third_party_restriction_id;

    @Column(length = 100, name = "restriction_name")
    private String restriction_name;

    @ManyToMany(mappedBy = "restrictions", fetch=FetchType.EAGER)
    private List<User> users;
}
