import {Component, OnInit} from '@angular/core';
import {Product} from "../../interface/product";
import {ProductService} from "../../service/product.service";
import {ShopCartService} from "../../service/shop-cart.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Client} from "../../interface/client";
import {ActivatedRoute} from "@angular/router";
import {ShopCart} from "../../interface/shop-cart";
import {FavoriteItem} from "../../interface/favorite-item";
import {FavoriteItemService} from "../../service/favorite-item.service";

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {

  productList: Product[] = [];
  product!: Product;
  productId!: number;
  shopCart !: ShopCart;
  favoriteItem!: FavoriteItem;
  message !: string;

  constructor(private productService: ProductService,
              private shopCartService: ShopCartService,
              private authentication: AuthenticationService,
              private favoriteItemService: FavoriteItemService) {
  }

  ngOnInit(): void {
    this.showAll();
  }

  showAll() {
    this.productService.getAllProducts().subscribe((data) => {
      this.productList = data;
      console.log('Products from DB' + JSON.stringify(this.productList));
    })
  }

  // @ts-ignore
  checkQuantity(product: Product): string | undefined {
    if (product.quantity > 1) {
      return "In stock!";
    }
    if (product.quantity === 1) {
      return "Last product in stock!";
    }
    if (product.quantity < 1) {
      return "Out of stock";
    }
  }

  addProductToShopCart(id: any) {
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.shopCartService.getShopCartById(clientFromSessionStorage.shopCartDto.id).subscribe((data) => {
        this.shopCart = data;
        this.shopCart.products.push(this.product);
        this.shopCartService.updateShopCart(this.shopCart.id, this.shopCart)
          .subscribe((data) => {
          }, err => console.error(err));
      }, err => console.error(err));
    }, err => console.error(err));
  }

  addProductToFavoriteItem(id: any) {
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.favoriteItemService.getFavoriteItemById(clientFromSessionStorage.favoriteItemDto.id).subscribe((data) => {
        this.favoriteItem = data;
        this.favoriteItem.products.push(this.product);
        this.favoriteItemService.updateFavoriteItem(this.favoriteItem.id, this.favoriteItem)
          .subscribe((data) => {
          }, err => console.error(err));
      }, err => console.error(err));
    }, err => console.error(err));
  }

  // deleteProductFromShopCart(id: any) {
  //   let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
  //   this.productService.getProductById(id).subscribe((data) => {
  //     this.product = data;
  //     this.shopCartService.getShopCartById(clientFromSessionStorage.shopCartDto.id).subscribe((data) => {
  //       this.shopCart = data;
  //       let index = this.shopCart.products.findIndex(item => item.id === this.product.id);
  //       delete this.shopCart.products[index];
  //     },err => console.error(err));
  //   },err => console.error(err));
  // }


}
