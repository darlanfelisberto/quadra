import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserBuscaComponent} from "./user-busca.component";
import {BreadcrumbService} from "../components/breadcrumb/breadcrumb.service";
import {UserControlComponent} from "./user.control.component";
import {UserListComponent} from "./user-list.component";
import {BreadMenuItem} from "../components/breadcrumb/breadcrumb.menuitem";
import {UserFormComponent} from "./user-form.component";


export const USER_MENU:BreadMenuItem            = new BreadMenuItem(/*root route*/'user','Usuários',0,-1).createRoute({component:UserControlComponent});
export const USER_MENU_BUSCA:BreadMenuItem      = new BreadMenuItem('buscar','Buscar Usuários',1,0).createRoute({component:UserBuscaComponent,canActivate:[BreadcrumbService.GUARD_CAN_ACTIVATE]})
export const USER_MENU_LISTAR:BreadMenuItem     = new BreadMenuItem('listar/:tipo/:busca','Lista de Usuários',2,1).createRoute({component:UserListComponent,canActivate:[BreadcrumbService.GUARD_CAN_ACTIVATE]})
export const USER_FORM_EDIT:BreadMenuItem       = new BreadMenuItem('editar/:idUsuario','Editar Usuário',3,1).createRoute({component:UserFormComponent,canActivate:[BreadcrumbService.GUARD_CAN_ACTIVATE]})

export const USER_BREAD_ITEM:BreadMenuItem[] = [
  USER_MENU,
  USER_MENU_BUSCA,
  USER_MENU_LISTAR,
  USER_FORM_EDIT
];

USER_MENU.getRoute().children = [
  USER_MENU_BUSCA.getRoute(),
  USER_MENU_LISTAR.getRoute(),
  USER_FORM_EDIT.getRoute()
]

console.log(USER_MENU);

const usersRoutes: Routes = [
 USER_MENU.getRoute()
];

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
  declarations:[]
})
export class UserRoutingModule { }
