import { Component } from '@angular/core';
import {Router, ActivatedRoute,RouterOutlet} from '@angular/router';
import { UserBuscaComponent } from './user-busca.component';
import { UserService} from './user.service';
import { Usuario } from '../model/Usuario';
import { BreadcrumbService } from '../service/breadcrumb.service';
import { BreadcrumbComponent } from '../shared/breadcrumb.component';

@Component({
  selector: 'app-user.control',
  template: `

    <p>
      usuario.control works!
      {{getRandom()}}-{{this.service.num}}
    </p>


    <app-breadcrumb></app-breadcrumb>
    <router-outlet

    ></router-outlet>`,

// (activate)='onActivate($event)'
// (deactivate)='onDeactivate($event)'
// (attach)='onAttach($event)' (detach)="onDetach($event)"
  styles: [
  ]
})
export class UserControlComponent {
  numbero: number = Math.floor(Math.random() * 2000);

  constructor(public service:UserService, public breadService:BreadcrumbService){
    console.log("root");
    var bread = breadService.activatedRoute;
    console.log(breadService.activatedRoute.root);

  }

  getRandom():number{
    let teste = Math.floor(Math.random() * 2000);
    console.log(teste);
    return teste;
  }

  onActivate($event:any){
    let u:UserBuscaComponent = $event;
    u.listUsuarios = [new Usuario()]
    console.log('onActivate');
    console.log($event);
  }

  onDeactivate($event:any){
    console.log('onDeactivate');
    console.log($event);
  }
  onAttach($event:any){
    console.log('onAttach');
    console.log($event);
  }
  onDetach($event:any){
    console.log('onDetach');
    console.log($event);
  }

}
