package br.com.feliva.models;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.util.Set;

@Entity
@Table(name = "usuario")
@Data
@AllArgsConstructor
@RequiredArgsConstructor
public class Usuario extends  Model{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    Integer idUsuario;
    String username;
    String password;
    String salt;
    String nome;
    String email;

    @ManyToMany(mappedBy = "listUsuarios")
    Set<Permissao> listPermissoes;
    Integer getId() {
        return this.idUsuario;
   }
}
