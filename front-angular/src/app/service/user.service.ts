import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http'
import {Observable, using} from "rxjs";
import {Usuario} from "../model/Usuario";
import {Services} from "./services";

@Injectable({
  providedIn: 'root'
})
export class UserService extends Services<Usuario>{
  
  public override getPath(): string {
    return "/usuario";
  }

  constructor(private  httpClient:HttpClient) {
    super(httpClient);
  }

  // public listAll(){
  //   return this.httpClient.get<Usuario[]>(super.serverUrl);
  // }
  public findByName(name:string,arrow:(value: Usuario[]) => void):void{
    
     super.postForm(new HttpParams().append('nome',name),'/findByName',arrow);
  }

}
