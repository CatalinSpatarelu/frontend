import {Product} from "./product";

 export interface ShopCart {
  id:number;
  discount:number;
  products:Product[];
}
