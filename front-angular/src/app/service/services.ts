import { HttpClient } from "@angular/common/http";
import { Usuario } from "../model/Usuario";
import { Type } from "@angular/core";
import { Observable } from "rxjs";

export abstract class Services<T>{
  
  serverUrl:string = 'http://localhost:8081';
  http!:HttpClient;

  constructor( http:HttpClient){
    this.http = http;
  }
 
  public abstract getPath():string;


  public listAll(): Observable<T[]>{
    return this.http.get<T[]>(this.serverUrl + this.getPath() + "/listAll");
  }

  public listAlla(arrow:(value: T[]) => void):void{
    this.http.get<T[]>(this.serverUrl + this.getPath() + "/listAll").subscribe(arrow);
  }

  public save(obj:T): void{
    const headers = { 'content-type': 'application/json'}

    this.http.post(this.serverUrl + this.getPath(),JSON.stringify(obj),{'headers':headers}).subscribe(result => console.log(result));
  }

}
