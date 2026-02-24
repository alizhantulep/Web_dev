import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() products: Product[] = []; 
  @Output() removeEvent = new EventEmitter<number>(); 

  onItemRemove(id: number) {
    this.removeEvent.emit(id); 
  }
}