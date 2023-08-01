import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  DoCheck,
  Injectable,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import {BreadMenuItem, HOME, USER_BREAD_ITEM, USER_MENU_LISTAR} from '../user/breadcrumb.menuitem';
import { Observable, of } from 'rxjs';
import {BreadcrumbComponent} from "../shared/breadcrumb.component";

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{

  mm:MenuItem[]=[HOME];
  menuitem:Observable<MenuItem[]> = of(this.mm);
  index:number = 0;

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

  public add(){
    this.mm.push(USER_MENU_LISTAR);
  }

  // public atualiza():MenuItem[]{
  //   console.log('atualiza')
  //   this.menuitem.
  //   this.index = 0;
  //   USER_BREAD_ITEM.forEach((element,index) => {
  //     if(this.router.url == element.getUrl()){
  //       this.menuitem = element;
  //     }
  //   });
  //
  //   console.log(this.menuitem);
  //   if(this.menuitem == null){
  //     return [];
  //   }
  //   let menuItemArray:MenuItem[] = []
  //   try {
  //     let item:BreadMenuItem = this.menuitem;
  //     menuItemArray.push(item);
  //     for (let index = item.before; index >= 0;index = item.before) {
  //       item = USER_BREAD_ITEM[item.before];
  //       menuItemArray.push(item);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   menuItemArray.reverse()
  //   return menuItemArray;
  // }
  // isNullOrUndefined(object: any):boolean{
  //   return (object == undefined?true:false);
  // }
  // createBreadcrumbs(route: ActivatedRoute, url: string = '#', breadcrumbs: MenuItem[] = []): any {
  //   console.log("breadcrumb create")
  //   const children: ActivatedRoute[] = route.children;
  //
  //   if (children.length === 0) {
  //     return breadcrumbs;
  //   }
  //
  //   for (const child of children) {
  //     const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
  //     if (routeURL !== '') {
  //       url += `/${routeURL}`;
  //     }
  //
  //     const label = child.snapshot.data[BreadcrumbComponent.ROUTE_DATA_BREADCRUMB];
  //     if (!this.isNullOrUndefined(label)) {
  //       breadcrumbs.push({label, url});
  //     }
  //
  //     return this.createBreadcrumbs(child, url, breadcrumbs);
  //   }
  // }

  ngOnDestroy(){
    console.log("ngOnDestroy() bread service");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked() bread service");
  }
  ngDoCheck(){
    console.log("ngDoCheck() bread service");
  }
  ngOnInit(){
    console.log("ngOnInit() bread service");
  }
  ngAfterViewInit(){
    console.log("ngAfterViewInit() bread service");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked() bread service");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit() bread service");
  }
  ngOnChanges(){
    console.log("ngOnChanges() bread service");
  }

}

