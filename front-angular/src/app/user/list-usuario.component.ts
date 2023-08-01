import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/model/Usuario';
import {BreadcrumbService} from "../service/breadcrumb.service";

@Component({
  selector: 'app-list-usuarios',
  template: `

    <p-panel header="Lista de Usuários">
      <p-table [value]="this.listUsuarios">
        <ng-template pTemplate="caption">
          Lista de Usuários
        </ng-template>
        <ng-template pTemplate="header">
          <tr>
            <th>Nome</th>
            <th>Username</th>
            <th>E-mail</th>
          </tr>
        </ng-template>
        <ng-template pTemplate="body" let-usuario>
          <tr>
            <td>{{usuario.nome}}</td>
            <td>{{usuario.username}}</td>
            <td>{{usuario.email}}</td>
            <td>
              <a  routerLink="../edit/1" (click)="onEditUsuario(usuario)">teste</a>
            </td>
          </tr>
      </ng-template>
      </p-table>
    </p-panel>

  `,
  styles: [
  ],
  providers: [MessageService]
})
export class ListUsuarioComponent implements OnInit{

  @Input() listUsuarios:Usuario[] = [];

  constructor(private breadCrumService:BreadcrumbService) {
  }

  ngOnInit(): void {
    this.breadCrumService.add();
    console.log("init lis")
    console.log(this.breadCrumService.mm)
  }

  onEditUsuario(usuario:Usuario){
    console.log(usuario);
  }
}
