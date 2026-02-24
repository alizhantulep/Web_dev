import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from '../../Service/product.service'; 
import { Product } from '../../models/product.model';
import { Category } from '../../category.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  allProducts: Product[] = [];
  selectedProducts: Product[] = [];
  selectedCategoryName: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.categories = this.productService.getCategories();
    this.allProducts = this.productService.getProducts();
  }

  selectCategory(category: Category) {
    this.selectedCategoryName = category.name;
    this.selectedProducts = this.allProducts.filter(p => p.categoryid === category.id);
  }

  handleDelete(productId: number) {
    
    this.selectedProducts = this.selectedProducts.filter(p => p.id !== productId);
    
    this.allProducts = this.allProducts.filter(p => p.id !== productId);
  }
}