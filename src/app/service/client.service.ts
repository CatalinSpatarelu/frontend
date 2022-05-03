import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Client} from "../interface/client";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = "/server/clients";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private httpClient:HttpClient) { }

  getAllClients():Observable<Client[]>{
    return this.httpClient.get<Client[]>(this.url);
  }
  getClientByEmail(email:string,password:string):Observable<Client>{
    let httpOptionsWithPassword = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'password':password,
        'email':email,
        'Authorization':'Basic ' + 'dGVzdDp0ZXN0'
      })
    }
    return this.httpClient.get<Client>(this.url+"/email",httpOptionsWithPassword);
  }
  addClient(client:any,password:any):Observable<Client>{
    let httpOptionsWithPassword = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'password':password,
        'Authorization':'Basic ' + 'dGVzdDp0ZXN0'
      })
    }
    return this.httpClient.post<Client>(this.url,JSON.stringify(client), httpOptionsWithPassword);
  }
  deleteClient(id:any):Observable<Client>{
    return this.httpClient.delete<Client>(this.url+"/"+id,this.httpOptions)
  }

}
