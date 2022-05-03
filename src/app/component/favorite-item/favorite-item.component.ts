import {Component, OnInit} from '@angular/core';
import {Product} from "../../interface/product";
import {FavoriteItem} from "../../interface/favorite-item";
import {FavoriteItemService} from "../../service/favorite-item.service";
import {AuthenticationService} from "../../service/authentication.service";
import {Client} from "../../interface/client";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.css']
})
export class FavoriteItemComponent implements OnInit {

  favoriteItem!: FavoriteItem;
  clientProductList: Product[] = [];
  product!: Product;

  constructor(private favoriteItemService:FavoriteItemService,
              private authentication:AuthenticationService,
              private productService: ProductService) {
  }

  ngOnInit(): void {
    this.showProductsFromFavoriteItem()
  }

  showProductsFromFavoriteItem(){
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.favoriteItemService.getFavoriteItemById(clientFromSessionStorage.favoriteItemDto.id).subscribe((data)=>{
      this.favoriteItem=data;
      this.favoriteItem.products.forEach(product => this.clientProductList.push(product))
    })
  }

  deleteProductFromFavoriteItem(id: any) {
    let clientFromSessionStorage: Client = this.authentication.getClientFromSessionStorage();
    this.productService.getProductById(id).subscribe((data) => {
      this.product = data;
      this.favoriteItemService.getFavoriteItemById(clientFromSessionStorage.favoriteItemDto.id).subscribe((data) => {
        this.favoriteItem = data;
        let index = this.favoriteItem.products.findIndex(item => item.id === this.product.id);
        this.favoriteItem.products.splice(index,1);
        this.favoriteItemService.updateFavoriteItem(this.favoriteItem.id, this.favoriteItem).subscribe((data) => {
          window.location.reload();
        }, err => console.error(err));
      }, err => console.error(err));
    }, err => console.error(err));
  }

}
