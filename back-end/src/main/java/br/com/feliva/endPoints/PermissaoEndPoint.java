package br.com.feliva.endPoints;

import br.com.feliva.dao.PermissaoDAO;
import br.com.feliva.dao.UsuarioDAO;
import br.com.feliva.models.Permissao;
import br.com.feliva.models.Usuario;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.util.List;

@Path("/permissao")
public class PermissaoEndPoint {

    @Inject
    PermissaoDAO permissaoDAO;

    @Path("/listAll")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAll(){
        List<Permissao> l = permissaoDAO.listAll();
        return Response.ok(l).build();
    }

}
