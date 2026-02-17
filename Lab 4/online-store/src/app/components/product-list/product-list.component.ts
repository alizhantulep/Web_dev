import { Component } from '@angular/core';
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
    // Исправлено: добавлено имя переменной 'products'
    products: Product[] = [
        {
          id: 1,
          name: 'Смартфон Apple iPhone 17 256Gb черный',
          description: 'Apple iPhone 17 — новый уровень мобильной фотографии и безупречной производительности в стильном черном корпусе.',
          price: 562190,
          rating: 4.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-large',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-large'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/'
        },
        {
          id: 2,
          name: 'Смартфон Apple iPhone Air 512Gb золотистый',
          description: 'Apple iPhone Air 512Gb — это воплощение инноваций и элегантности в мире смартфонов, сочетающее в себе мощный процессор A19 Pro и передовой дизайн.',
          price: 734990,
          rating: 4.8,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/64171067.png?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/pc3/pe9/64477325.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pcf/pae/64171071.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p74/pb1/64171068.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-air-512gb-zolotistyi-145468555/'
        }, 
        {
          id: 3,
          name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
          description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
          price: 799990,
          rating: 5,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
          images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/'
        },
        {
          id: 4,
          name: 'Смартфон Apple iPhone 16 256Gb черный',
          description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом.',
          price: 446910,
          rating: 4.2,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h66/h8f/87295471190046.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h51/hc0/87295471222814.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/'
        },
        {
          id: 5,
          name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
          description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Самое производительное устройство в линейке.',
          price: 709500,
          rating: 4.6,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/'
        }, 
        {
          id: 6,
          name: 'Смартфон Apple iPhone 13 256Gb белый',
          description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR с невероятно высокой плотностью пикселей.',
          price: 385716,
          rating: 4.0,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hdc/64004911824926.jpg?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h9b/hec/64004914577438.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hf7/he2/64004917035038.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h28/hfc/64004919296030.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-belyi-102298423/'
        }, 
        {
          id: 7,
          name: 'Смартфон Apple iPhone 14 Pro Max 128Gb черный',
          description: 'Обновленная камера с 48-мегапиксельной матрицей и технологией Action Mode для плавной съемки.',
          price: 565719,
          rating: 3.9,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/haf/64503528718366.jpg?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h2c/h37/64503531143198.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h99/h5d/64503533436958.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hfb/ha1/64503535927326.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-chernyi-106363270/'
        },
        {
          id: 8,
          name: 'Смартфон Apple iPhone 16e 256Gb белый',
          description: 'Идеальный выбор для тех, кто ценит передовые технологии в компактном корпусе.',
          price: 559889,
          rating: 3.7,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p66/26476802.png?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/p01/p02/26473823.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/pde/p04/26473818.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/p55/p02/26473820.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-16e-256gb-belyi-135186217/'
        }, 
        {
          id: 9,
          name: 'Смартфон Apple iPhone 16 Plus 256Gb зеленый',
          description: 'Высокотехнологичное произведение искусства с большим дисплеем для безграничного общения.',
          price: 640000,
          rating: 4.2,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hbd/87295482265630.png?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h18/h82/87295482298398.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h19/h19/87295482331166.png?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/hf3/h43/87295482363934.png?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-plus-256gb-zelenyi-123776586/'
        },
        {
          id: 10,
          name: 'Смартфон Apple iPhone 14 128Gb голубой',
          description: 'Воплощение инноваций и стиля, предлагающее передовые технологии и безупречный пользовательский опыт.',
          price: 429957,
          rating: 4,
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/hcf/86694731579422.jpg?format=gallery-medium',
          images: [
              'https://resources.cdn-kaspi.kz/img/m/p/h87/hb4/86694731644958.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h9f/h77/86694731710494.jpg?format=gallery-medium',
              'https://resources.cdn-kaspi.kz/img/m/p/h46/h8d/86694731776030.jpg?format=gallery-medium'
          ],
          link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-dual-esim-goluboi-122062592/'
        }
    ];
}