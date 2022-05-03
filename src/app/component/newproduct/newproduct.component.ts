import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  productForm!: FormGroup;

  formMessage: string = "";

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.buildProductForm()
  }

  buildProductForm() {
    this.productForm = new FormGroup({
      name: new FormControl("name", [Validators.required]),
      price: new FormControl("price", [Validators.required]),
      productCategory: new FormControl("productCategory", [Validators.required]),
      quantity: new FormControl("quantity", [Validators.required]),
    });
  }

  submitProduct() {
    if (this.productForm.valid) {
      this.formMessage = "Your product has been saved";
      this.productService.addProduct(this.productForm.value).subscribe((data) => {
          this.productForm.reset();
        },
        err => console.error(err)
      )
    } else {
      this.formMessage = "Please fill out the product form before submitting";
    }
  }


}
