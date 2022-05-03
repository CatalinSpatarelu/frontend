import {ShopCart} from "./shop-cart";
import {FavoriteItem} from "./favorite-item";
 export interface Client {
   id: number;
  name:string;
  email:string;
  address:string;
  role:string;
  password:string;
  shopCartDto:ShopCart;
  favoriteItemDto:FavoriteItem;


 }
