import { Component, OnInit } from '@angular/core';
import {ProductService} from './../product.service';
import {Product} from '../Product';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
products: any[] = [];
  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.productsObservable.subscribe((products)=>{
      this.products = products;
    })
  }

}
