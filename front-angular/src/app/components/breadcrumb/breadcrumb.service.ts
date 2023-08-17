import {inject, Injectable} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';
import {BreadMenuItem} from './breadcrumb.menuitem';


@Injectable({providedIn:'root'})
export class BreadcrumbService{

  mm:BreadMenuItem[]=[BreadMenuItem.HOME];
  // menuitem:Observable<BreadMenuItem[]> = of(this.mm);
  index:number = 0;

  static GUARD_CAN_ACTIVATE: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    // console.log(route)
    // console.log(state)
    let item:BreadMenuItem = route.data['breadMenuItem'];
    item.url = state.url;
    return inject(BreadcrumbService).addItem(item);
  };

  constructor() {
  }

  addItem(bread:BreadMenuItem):boolean{
    this.mm.push(BreadMenuItem.SEPARATOR);
    this.mm.push(bread);
    return true;
  }

  private getLastRoute(activeRoute:ActivatedRoute):ActivatedRouteSnapshot {
    if (activeRoute.snapshot.children == undefined) {
      return activeRoute.snapshot;
    } else {
      return this.getLastRoute(activeRoute);
    }
  }
}
