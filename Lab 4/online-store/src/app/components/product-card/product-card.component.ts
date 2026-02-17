import { Component, Input, OnInit } from '@angular/core';
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

  // Переменные, которые требовал шаблон (ошибки TS2339)
  mainImage: string = '';
  whatsappLink: string = '';
  telegramLink: string = '';

  ngOnInit() {
    // Инициализируем данные при загрузке компонента
    this.mainImage = this.product.image;
    
    const shareMessage = `Check out this product: ${this.product.link}`;
    this.whatsappLink = `https://wa.me/?text=${encodeURIComponent(shareMessage)}`;
    this.telegramLink = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
  }

  // Метод для смены главной картинки (галерея)
  selectImage(img: string) {
    this.mainImage = img;
  }

  // Метод для отрисовки звезд рейтинга
  starsArray(rating: number): string[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= Math.floor(rating) ? '★' : '☆');
    }
    return stars;
  }
}