import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Usuario } from 'src/app/model/Usuario';

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
              <p-button (click)="onEditUsuario(usuario)">teste</p-button>            
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
  
  ngOnInit(): void {
  
  }

  onEditUsuario(usuario:Usuario){
    console.log(usuario);
  }
}
