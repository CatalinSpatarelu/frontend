import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";
import {ShopCart} from "../interface/shop-cart";

@Injectable({
  providedIn: 'root'
})
export class ShopCartService {

  private url = "/server/shopCarts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient ) { }

  getShopCartById(id:any):Observable<ShopCart>{
    return this.httpClient.get<ShopCart>(this.url+"/"+id);
  }

  updateShopCart(id:any,shopCart:any):Observable<ShopCart>{
    return this.httpClient.put<ShopCart>(this.url+"/"+id,JSON.stringify(shopCart),this.httpOptions);
  }
}
