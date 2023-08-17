package br.com.feliva.dao;

import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import org.hibernate.Session;

public class Dao<T> {

    @Inject
    protected EntityManager em;

    @Inject
    Session session;

    @Transactional
    public void persist(T entity){
        this.session.persist(entity);
    }

    @Transactional
    public void merge(T entity){
        this.session.merge(entity);
    }
}