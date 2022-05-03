import {Component, OnInit} from '@angular/core';
import {ShopCartService} from "../../service/shop-cart.service";
import {ShopCart} from "../../interface/shop-cart";
import {AuthenticationService} from "../../service/authentication.service";
import {Client} from "../../interface/client";
import {Product} from "../../interface/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-shop-cart',
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css']
})
export class ShopCartComponent implements OnInit {

  shopCart!: ShopCart;
  clientProductList: Product[] = [];
  product!: Product;

  constructor(private shopCartService: ShopCartService,
              private authentication: AuthenticationService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.showProductsFromShopCart();
  }

  showProductsFromShopCart() {
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.shopCartService.getShopCartById(clientFromSessionStorage.shopCartDto.id).subscribe((data) => {
      this.shopCart = data;
      console.log(data);
      this.shopCart.products.forEach(product => this.clientProductList.push(product));
      console.log("Lista mea: " + this.clientProductList);
    }, err => console.error(err));
  }

  deleteProductFromShopCart(id: any) {
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.shopCartService.getShopCartById(clientFromSessionStorage.shopCartDto.id).subscribe((data) => {
        this.shopCart = data;
        let index = this.shopCart.products.findIndex(item => item.id === this.product.id);
        this.shopCart.products.splice(index,1);
        this.shopCartService.updateShopCart(this.shopCart.id, this.shopCart).subscribe((data) => {
          window.location.reload();
        }, err => console.error(err));
      }, err => console.error(err));
    }, err => console.error(err));
  }

}
