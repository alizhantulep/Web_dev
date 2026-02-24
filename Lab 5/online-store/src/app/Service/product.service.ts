import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../category.model';
import { PRODUCTS, CATEGORIES } from './product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts(): Product[] {
    return PRODUCTS;
  }

  getCategories(): Category[] {
    return CATEGORIES;
  }
}