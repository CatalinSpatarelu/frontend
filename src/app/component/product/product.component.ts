import { Component, OnInit } from '@angular/core';
import {Product} from "../../interface/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList :Product[]=[];
  constructor(public productService:ProductService) { }

  ngOnInit(): void {
    this.showAll();
  }

  showAll(){
    this.productService.getAllProducts().subscribe((data)=>{
      this.productList =data;
      console.log('Products from DB'+JSON.stringify(this.productList));
    })
  }

  deleteProduct(id:any){
    this.productService.deleteProduct(id).subscribe((data)=>
    {
      window.location.reload();
      console.log("Product deleted");
    });
  }

  checkQuantity(){

  }



}
