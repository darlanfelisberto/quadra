package br.com.feliva.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlTransient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "permissao")
public class Permissao extends  Model{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_permissao")
    private Integer idPrmissao;
    private String nome;

    @JsonbTransient
    @ManyToMany(mappedBy = "listPermissoes")
    private Set<Usuario> listUsuarios;

    public Integer getId() {
        return this.idPrmissao;
   }

    public Integer getIdPrmissao() {
        return idPrmissao;
    }

    public void setIdPrmissao(Integer idPrmissao) {
        this.idPrmissao = idPrmissao;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Set<Usuario> getListUsuarios() {
        return listUsuarios;
    }
    public void setListUsuarios(Set<Usuario> listUsuarios) {
        this.listUsuarios = listUsuarios;
    }
}
