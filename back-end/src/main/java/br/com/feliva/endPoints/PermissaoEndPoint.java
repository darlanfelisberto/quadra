package br.com.feliva.endPoints;

import br.com.feliva.dao.PermissaoDAO;
import br.com.feliva.dao.UsuarioDAO;
import br.com.feliva.models.Usuario;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/permissao")
public class PermissaoEndPoint {

    @Inject
    PermissaoDAO permissaoDAO;

    @Path("/listAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAll(){
        return Response.ok(permissaoDAO.listAll()).build();
    }

}
