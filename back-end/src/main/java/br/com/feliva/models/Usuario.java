package br.com.feliva.models;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
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
    public Integer idUsuario;
    public String username;
    public String password;
    public String salt;
    public String nome;
    public String email;

    @ManyToMany(fetch = FetchType.LAZY)
//    @NotEmpty(message = "Informe uma permissão.")
    @JoinTable(
            name = "usaurio_permissoes",
            joinColumns =  @JoinColumn(name= "id_usuario"),
            inverseJoinColumns = @JoinColumn(name = "id_permissao")
    )
    public Set<Permissao> listPermissoes;
    public Integer getId() {
        return this.idUsuario;
   }
}
