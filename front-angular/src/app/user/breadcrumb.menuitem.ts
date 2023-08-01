import { MenuItem } from "primeng/api"
import { Usuario } from "../model/Usuario";
import { Route } from "@angular/router";

const ROOT_URL = '/user/';

export const HOME:MenuItem = {
  icon:'pi pi-home'
}
export class BreadMenuItem  implements MenuItem{
    // public path?:string;
    // public label?:string;
    // public index:number = 0;

  // public before:number = 0;

    constructor( public path:string,
        public label:string,
        public index:number = 0,
        public before:number = 0){}

    public getUrl():string{
        return ROOT_URL + this.path;
    }
}


export const USER_MENU:BreadMenuItem            = new BreadMenuItem('','Usuários',0,-1);
export const USER_MENU_BUSCA:BreadMenuItem      = new BreadMenuItem('buscar','Buscar Usuários',1,0);
export const USER_MENU_LISTAR:BreadMenuItem     = new BreadMenuItem('listar','Lista de Usuários',2,1);
export const USER_BREAD_ITEM:BreadMenuItem[] = [
    USER_MENU,
    USER_MENU_BUSCA,
    USER_MENU_LISTAR
];
