import { Component, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ul>
    <p *ngIf="products().length === 0">กำลังโหลดข้อมูล หรือไม่มีสินค้าในระบบ</p>
      @for (product of products(); track $index) {
        <li>{{ product.name }} - {{ product.price }} บาท</li>
      }
    </ul>
  `
})
export class ProductListComponent {
  products = signal<Product[]>([]);

  constructor(private productService: ProductService) {
    effect(() => {
      this.loadProducts();

    });
  }

  async loadProducts() {
    const items = await this.productService.getProducts();
    console.log('สินค้าที่โหลดได้', items);
    this.products.set(items);
  }
}
