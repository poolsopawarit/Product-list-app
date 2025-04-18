import { Component } from '@angular/core';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule,ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <h1>Product List</h1>
    <app-product-list></app-product-list>
  `
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
