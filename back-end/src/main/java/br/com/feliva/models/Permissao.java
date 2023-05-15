package br.com.feliva.models;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "permissao")
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Permissao extends  Model{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_permissao")
    Integer idPrmissao;
    String nome;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "usaurio_permissoes",
            joinColumns =  @JoinColumn(name= "id_permissao"),
            inverseJoinColumns = @JoinColumn(name = "id_usuario")
    )
    Set<Usuario> listUsuarios;

    Integer getId() {
        return this.idPrmissao;
   }
}
