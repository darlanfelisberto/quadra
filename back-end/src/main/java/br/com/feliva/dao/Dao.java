package br.com.feliva.dao;

import jakarta.inject.Inject;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;

public class Dao<T> {

    @Inject
    protected EntityManager em;

    @Transactional
    public void persist(T entity){
        this.em.persist(entity);
    }

    @Transactional
    public void merge(T entity){
        this.em.merge(entity);
    }
}