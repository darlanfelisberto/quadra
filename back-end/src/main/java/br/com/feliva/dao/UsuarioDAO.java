package br.com.feliva.dao;

import br.com.feliva.models.Usuario;
import jakarta.enterprise.context.RequestScoped;
import jakarta.persistence.NoResultException;

import java.util.List;

@RequestScoped
public class UsuarioDAO extends Dao<Usuario>{

    public Usuario findUsuarioByUsername(String username){
        try {
            return (Usuario) this.em.createQuery("""
                    select u from Usuario u where u.username = :username
                """).setParameter("username",username)
                    .getSingleResult();
        }catch (NoResultException e){}

        return null;
    }
    public List<Usuario> listAll(){
        try {
            return this.em.createQuery("""
                    select u from Usuario u 
                """).getResultList();
        }catch (NoResultException e){}

        return null;
    }
}