import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../service/user.service'
import { Usuario } from 'src/app/model/Usuario';
import { MessageService } from 'primeng/api';

import {OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {NavigationEnd,RouterEvent} from '@angular/router';
import {filter} from 'rxjs/operators';
import { BreadcrumbService } from '../service/breadcrumb.service';
import {BreadMenuItem} from "../user/breadcrumb.menuitem";

@Component({
  selector: 'app-breadcrumb',
  template: `
    <p *ngFor="let item of this.getMenuItens()">
      {{item.label}}>
    </p>
      <p-breadcrumb [model]="this.getMenuItens()" *ngIf="this.getMenuItens()"></p-breadcrumb>
  `,
  styles: [
  ]
})
export class BreadcrumbComponent {//implements OnInit,OnDestroy,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked{
  static readonly ROUTE_DATA_BREADCRUMB = 'breadcrumb';
  readonly home = {icon: 'pi pi-home', url: ''};
  menuItems: MenuItem[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,private breadService:BreadcrumbService) {}

  // ngOnInit(): void {
    // this.breadService.atualiza();
    // this.menuItems = this.breadService.atualiza();
    // console.log("breadcrumb init")
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .subscribe(() => this.menuItems = this.createBreadcrumbs(this.activatedRoute.root));
  // }

  public getMenuItens(){
    this.breadService.menuitem.subscribe(item => this.menuItems = item);
    console.log("getMenuItens")
    return this.menuItems;
  }
  //
  // ngOnDestroy(){
  //   console.log("ngOnDestroy() bread service");
  // }
  // ngAfterViewChecked(){
  //   console.log("ngAfterViewChecked() bread service");
  // }
  // ngDoCheck(){
  //   console.log("ngDoCheck() bread service");
  // }
  // ngOnInit(){
  //   console.log("ngOnInit() bread service");
  // }
  // ngAfterViewInit(){
  //   console.log("ngAfterViewInit() bread service");
  // }
  // ngAfterContentChecked(){
  //   console.log("ngAfterContentChecked() bread service");
  // }
  // ngAfterContentInit(){
  //   console.log("ngAfterContentInit() bread service");
  // }
  // ngOnChanges(){
  //   console.log("ngOnChanges() bread service");
  // }

}
