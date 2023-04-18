import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../types/product.types';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss'],
})
export class AllComponent implements OnInit {
  products: Product[] = [];

  constructor(public productsService: ProductsService) {}

  //products:Product[] = this.productsService.products;

  ngOnInit(): void {
    // console.log(this.productsService.getProductById(2));
    // console.log(this.productsService.getProductByCategory('TVs'));
    this.products = this.productsService.getAllProducts();
    console.log(this.products);
  }
}
