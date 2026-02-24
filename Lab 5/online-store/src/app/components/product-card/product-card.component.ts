import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit { 
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();

  mainImage: string = '';
  whatsappLink: string = '';
  telegramLink: string = '';

  ngOnInit() {
    this.mainImage = this.product.image;
    
    const shareMessage = `Посмотри на этот товар: ${this.product.name} - ${this.product.link}`;
    this.whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    this.telegramLink = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }
  onDelete() {
    this.remove.emit(this.product.id);
  }

  selectImage(img: string) {
    this.mainImage = img;
  }

  starsArray(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating) ? '★' : '☆');
    }
    return stars;
  }
  addLike() {
    this.product.likes++; 
  }
}