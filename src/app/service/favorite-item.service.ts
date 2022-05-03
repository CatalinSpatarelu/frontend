import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ShopCart} from "../interface/shop-cart";
import {FavoriteItem} from "../interface/favorite-item";

@Injectable({
  providedIn: 'root'
})
export class FavoriteItemService {

  private url = "/server/favoriteItem"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getFavoriteItemById(id:any):Observable<FavoriteItem>{
    return this.httpClient.get<FavoriteItem>(this.url+"/"+id);
  }

  updateFavoriteItem(id:any,favoriteItem:any):Observable<FavoriteItem>{
    return this.httpClient.put<FavoriteItem>(this.url+"/"+id,JSON.stringify(favoriteItem),this.httpOptions);
  }
}
