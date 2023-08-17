package br.com.feliva.models;


import jakarta.xml.bind.annotation.XmlTransient;

public abstract class Model {

    protected boolean nova;

    public Model() {
        this.nova = true;
    }

    @XmlTransient
    public abstract Integer getId();

    @XmlTransient
    public int hashCode() {
        if(getId() == null){
            return super.hashCode();
        }
        return getId().hashCode();
    }
    @XmlTransient
    public boolean equals(Model model) {
        if(model == null){
            return false;
        }
        if(!this.getClass().equals(model.getClass())){
            return false;
        }

        return this.getId().equals(model.getId());
    }
}