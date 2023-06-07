import { Component } from '@angular/core';

@Component({
  selector: 'app-user-busca',
  templateUrl: './user-busca.component.html',
  styleUrls: ['./user-busca.component.scss']
})
export class UserBuscaComponent {
  tipoBusca?:number=0;
  busca?:string;
  date?:Date;


  change():void{
    console.log(this.tipoBusca)
  }
}
