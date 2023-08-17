package com.feliva.quadra.models;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.io.Serializable;

@Entity
@Table(name = "quadra")
public class QuadraModel implements Serializable {
    
    @Id
    @Column(name = "quadra_id")
    private Integer quadraId;

    private String nome;

    public Integer getQuadraId() {
        return quadraId;
    }

    public void setQuadraId(Integer quadraId) {
        this.quadraId = quadraId;
    }
        
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }
    
}
