import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../service/user.service'
import { Usuario } from 'src/app/model/Usuario';
import { MessageService } from 'primeng/api';
import {BreadcrumbService} from "../service/breadcrumb.service";


@Component({
  selector: 'app-user-busca',
  template: `

      <p-panel header="Busca de Usuários">
      <form></form>
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
              <p-radioButton  value="0" [(ngModel)]="this.tipoBusca" required minlength="4"></p-radioButton>
              <label class="ml-2">Nome</label>
            </div>

            <div class="flex align-items-center">
              <p-radioButton  value="1" [(ngModel)]="this.tipoBusca"></p-radioButton>
              <label class="ml-2">CPF</label>
            </div>
          </div>
        </div>
          <div class="field col-12 md:col-6">

              <p-inputMask mask="999.999.999-99" name="sdas" [(ngModel)]="this.busca"   placeholder="999.999.999-99" *ngIf="this.tipoBusca == 1" class="w-full" ></p-inputMask>
              <input type="text" pInputText [(ngModel)]="this.busca" *ngIf="this.tipoBusca == 0" placeholder="Nome" class="w-full"/>

          </div>
      </div>
      <div>
        <p-button label="Buscar" (click)="this.buscar()" icon="pi pi-search" class="pr-3"></p-button>
        <p-button label="Novo" (click)="this.buscar()" icon="pi pi-plus"></p-button>
      </div>
    </p-panel>
  `,
  styles: [`
    input[type=radio] {
    border: 0px;
    width: 1.5em;
    height: 2em;
    }
  `]
})
export class UserBuscaComponent {
  public static readonly BUSCA_NOME = 0;
  public static readonly BUSCA_CPF = 1;

  tipoBusca:number=0;
  busca:string='';


  rendTelaBusca = true;
  rendTelaLista = false;

  listUsuarios:Usuario[] = [];

  constructor(private userService:UserService,private router: Router,private activatedRoute: ActivatedRoute,private messageService:MessageService, private breadservice:BreadcrumbService ){
    // this.activatedRoute.
    // this.telaBusca();
    // this.inicializaTeste();
  }

  public inicializaTeste(){
    this.busca = "darlan";
    this.buscar();
  }

  public buscar():void{
    switch(this.tipoBusca){
      case UserBuscaComponent.BUSCA_NOME:
        if(this.busca == null || this.busca.length <3){
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Informe pelo menos 3 caracteres.' });
          return;
        }
        this.userService.findByName(this.busca,((resp)=> this.listUsuarios = resp));

        break
    }

    this.router.navigate(['../listar'], { relativeTo: this.activatedRoute });
    this.breadservice.add();

    // if(this.listUsuarios != null && this.listUsuarios.length > 0){
    //   // this.telaLista();
    //   // this.router.navigate([`usuarios/list/${this.busca}`]);
    //   this.router.navigate(['./list'], { relativeTo: this.activatedRoute });
    // }else{

    // }
  }

  // public telaBusca(){
  //   this.rendTelaBusca = true;
  //   this.rendTelaLista = false;
  // }

  // public telaLista():void{
  //   this.rendTelaBusca = false;
  //   this.rendTelaLista = true;
  // }
}
