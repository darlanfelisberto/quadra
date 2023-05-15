import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http'
import {Observable, using} from "rxjs";
import {Usuario} from "../user/Usuario";
import {Services} from "./services";

@Injectable({
  providedIn: 'root'
})
export class UserService extends Services{

  constructor(private  httpClient:HttpClient) {
    super();
  }

  public listAll(){
    return this.httpClient.get<Usuario[]>(super.serverUrl);
  }

  public save(user: Usuario): void{
    const headers = { 'content-type': 'application/json'}
    console.log(JSON.stringify(user));
    this.httpClient.post(this.serverUrl + '/usuario',JSON.stringify(user),{'headers':headers}).subscribe(result => console.log(result));
  }
}
