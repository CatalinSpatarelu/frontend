import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";
import {Client} from "../interface/client";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = "/server/products";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url);
  }
  getProductById(id:any):Observable<Product>{
    return this.httpClient.get<Product>(this.url+"/"+id);
  }

  addProduct(product: any): Observable<Product> {
    return this.httpClient.post<Product>(this.url, JSON.stringify(product), this.httpOptions);
  }

  updateProduct(id:any,product:any):Observable<Product>{
    return this.httpClient.put<Product>(this.url+"/"+id,JSON.stringify(product),this.httpOptions);
  }

  deleteProduct(id:any):Observable<Product>{
    return this.httpClient.delete<Product>(this.url+"/"+id,this.httpOptions)
  }


}
