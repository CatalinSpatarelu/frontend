import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../interface/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateProductComponent implements OnInit {

  productForm!: FormGroup;
  productId!: number;
  product!: Product;
  formMessage: string = '';

  constructor(private productService: ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe((data)=>{
      console.log(data.name,data.productCategory,data.price,data.quantity);
      this.product = data;
      this.buildProductForm();
    })
  }

  buildProductForm() {
    this.productForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      quantity: new FormControl("", [Validators.required]),
    });
  }

  submitProduct() {
    if (this.productForm.valid) {
      this.formMessage = "Your product has been updated";
      this.productService.updateProduct(this.product.id,this.productForm.value).subscribe((data) => {
          this.productForm.reset();
        },
        err => console.error(err)
      )
    } else {
      this.formMessage = "Please fill out the product form before submitting";
    }
  }

}
