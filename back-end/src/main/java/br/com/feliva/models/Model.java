package br.com.feliva.models;


public abstract class Model {

    protected boolean nova;

    public Model() {
        this.nova = true;
    }

    abstract Integer getId();

    public int hashCode() {
        if(getId() == null){
            return super.hashCode();
        }
        return getId().hashCode();
    }

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