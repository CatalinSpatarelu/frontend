import {ProductCategory} from "./product-category";

export interface Product {
  id:number;
  name:string;
  price:number;
  quantity:number;
  productCategory:string;
}
