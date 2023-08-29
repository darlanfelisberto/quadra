import {Route} from "@angular/router";

export class BreadMenuItem{
  index?:number;
  before?:number;
  path?:string;//é o path do router
  url?:string;//é a url de acesso ao comente, preenchido na visualização
  label?:string;
  separator:boolean = false;
  styleClass:string = '';
  icon:string = '';
  route?:Route;

  static readonly HOME:BreadMenuItem = this.createHOME();
  static readonly SEPARATOR:BreadMenuItem = this.createSeparator();

  constructor(path:string,label:string,index:number,before:number) {
    this.path = path;
    this.label = label;
    this.index = index;
    this.before = before;
  }

  createRoute(route:Route){
    this.route = route;
    this.route.data = {'breadMenuItem':this};
    this.route.path = this.path;
    return this;
  }

  getRoute(){
    if(this.route == undefined){
      throw Error("Rota nao definida!");
    }
    return this.route;
  }

  static createSeparator():BreadMenuItem{
    let bread = new BreadMenuItem('#','>',-2,-2);
    bread.styleClass = 'p-menuitem-separator';
    bread.separator = true;
    return bread;
  }

  static createHOME():BreadMenuItem{
    let bread = new BreadMenuItem('#','',-2,-2);
    bread.icon = 'pi pi-home';
    return bread;
  }

  static inicializaBreadcrumbList() :BreadMenuItem[]{
    return [BreadMenuItem.HOME];
  }
}

