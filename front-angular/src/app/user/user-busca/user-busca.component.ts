import { Component } from '@angular/core';
import {UserService} from '../../service/user.service'
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-user-busca',
  templateUrl: './user-busca.component.html',
  styleUrls: ['./user-busca.component.scss']
})
export class UserBuscaComponent {
  tipoBusca:number=0;
  busca:string='';

  rendTelaBusca = true;
  rendTelaLista = false;

  listUsuarios?:Usuario[];

  constructor(private userService:UserService ){
    this.telaBusca();
  }

  public buscar():void{
    if(this.tipoBusca == 0){
      console.log(this.busca)
      this.userService.findByName(this.busca,((resp)=> this.listUsuarios = resp));
      console.log(this.listUsuarios);
    }

    if(this.listUsuarios != null && this.listUsuarios.length > 0){
      this.telaLista();
    }else{
      
    }
  }

  public telaBusca(){
    this.rendTelaBusca = true;
    this.rendTelaLista = false;
  }


  public telaLista():void{
    this.rendTelaBusca = false;
    this.rendTelaLista = true;
  }
}
