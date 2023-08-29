import {inject, Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from '@angular/router';
import {BreadMenuItem} from './BreadcrumbMenuItem.class';


@Injectable({providedIn:'root'})
export class BreadcrumbService{

  mm:BreadMenuItem[] = BreadMenuItem.inicializaBreadcrumbList();

  static GUARD_CAN_ACTIVATE: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // console.log(route)
    // console.log(state)
    let item:BreadMenuItem = route.data['breadMenuItem'];
    item.url = state.url;
    return inject(BreadcrumbService).addItem(item);
  };

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute) {
  }

  addItem(bread:BreadMenuItem):boolean{
    if(bread.index == undefined){
      throw Error("Item do breadcrumd devem ter o seu index preenchidos.");
    }

    if(bread.index <= 1 ){//se for os primeiros componente, reinicia dos bradcrumbs
      this.mm = BreadMenuItem.inicializaBreadcrumbList();
    }

    this.mm.push(BreadMenuItem.SEPARATOR);
    this.mm.push(bread);
    return true;
  }

  public navigate(item:BreadMenuItem){
    let sub:BreadMenuItem[] = [];
    for (let element of this.mm) {
      if(element.url != item.url){
        sub.push(element);
      }else{
        break;
      }
    }
    sub.pop();//retira o ultimo separador
    this.mm = sub;
    this.router.navigate([item.url], { relativeTo: this.activatedRoute });
  }

  private getLastRoute(activeRoute:ActivatedRoute):ActivatedRouteSnapshot {
    if (activeRoute.snapshot.children == undefined) {
      return activeRoute.snapshot;
    } else {
      return this.getLastRoute(activeRoute);
    }
  }
}
