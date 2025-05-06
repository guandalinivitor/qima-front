import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [];
  newProduct: Product = { name: '', price: 0, description: '' };

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getAll().subscribe(data => this.products = data);
  }

  save() {
    if (this.newProduct.id) {
      this.productService.update(this.newProduct).subscribe(() => {
        this.loadProducts();
        this.newProduct = { name: '', price: 0, description: '' };
      });
    } else {
      this.productService.create(this.newProduct).subscribe(() => {
        this.loadProducts();
        this.newProduct = { name: '', price: 0, description: '' };
      });
    }
  }

  edit(product: Product) {
    this.newProduct = { ...product };
  }

  delete(id: number) {
    this.productService.delete(id).subscribe(() => this.loadProducts());
  }
}

