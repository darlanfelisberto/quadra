package br.com.feliva.endPoints;

import br.com.feliva.dao.UsuarioDAO;
import br.com.feliva.models.Usuario;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/usuario")
public class UsuarioEndPoint {

    @Inject
    UsuarioDAO usuarioDAO;

    @Path("/list")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response teste(){
        return Response.ok(usuarioDAO.listAll()).build();
    }
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response post(Usuario user){
        usuarioDAO.merge(user);
        return Response.ok(user).build();
    }
}
