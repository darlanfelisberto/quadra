import { Injectable } from '@angular/core';
import { Services } from '../service/services';
import { Permissao } from '../model/Permissao';

@Injectable({
  providedIn: 'root'
})
export class UserService{


  num:number = Math.floor(Math.random() * 2000); 
  
}
