import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
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
          </tr>
      </ng-template>
      </p-table>
    </p-panel>

  `,
  styles: [
  ]
})
export class ListComponent {

}
