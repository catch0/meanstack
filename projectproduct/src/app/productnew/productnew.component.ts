import { Component, OnInit } from '@angular/core';
import {Product} from './../product';
import {ProductService} from './../product.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-productnew',
  templateUrl: './productnew.component.html',
  styleUrls: ['./productnew.component.css']
})
export class ProductnewComponent implements OnInit {
  newProduct: Product = new Product();
  products: Array<Product>;

  constructor(private _productService: ProductService, private _router: Router) {
  this.newProduct=new Product }

  ngOnInit() {
    this.newProduct = new Product();
  }

  create() {
    this.products.push(this.newProduct);
    this._productService.updateProducts(this.products)
   }


}
