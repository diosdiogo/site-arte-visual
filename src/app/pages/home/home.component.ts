import { Component } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [MatCardModule, MatIconModule, MatButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeComponent {
  portfolio = [
    'Exemplo 1',
    'Exemplo 2',
    'Exemplo 3',
    'Exemplo 4',
    'Exemplo 5'
  ];

  config: SwiperOptions = {
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: { clickable: true }
  };
}
