import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {UserService} from '../service/user.service'
import { Usuario } from 'src/app/model/Usuario';


@Component({
  selector: 'app-us-busca',
  template: `
      <p-panel header="Busca de Usuários">
      <form></form>
      <div class="formgrid grid">
        <div class="field col-12 md:col-12">
          <div class="flex flex-wrap gap-3">
            <div class="flex align-items-center">
              <p-radioButton  value="0" [(ngModel)]="this.tipoBusca"></p-radioButton>
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
export class UsBuscaComponent {
  tipoBusca:number = 0;
  busca:string='';

  rendTelaBusca = true;
  rendTelaLista = false;

  listUsuarios:Usuario[] = [];

  constructor(private userService:UserService,private router: Router,private activatedRoute: ActivatedRoute ){
    // this.activatedRoute.
    // this.telaBusca();
    // this.inicializaTeste();
  }

  public inicializaTeste(){
    this.busca = "darlan";
    this.buscar();
  }

  public buscar():void{
    if(this.tipoBusca == 0){
      console.log(this.busca)
      this.userService.findByName(this.busca,((resp)=> this.listUsuarios = resp));
      console.log(this.listUsuarios);
    }

    if(this.listUsuarios != null && this.listUsuarios.length > 0){
      // this.telaLista();
      // this.router.navigate([`usuarios/list/${this.busca}`]);
      this.router.navigate(['../list',this.busca], { relativeTo: this.activatedRoute });
    }else{
      
    }
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
