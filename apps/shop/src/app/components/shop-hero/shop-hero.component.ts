import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-shop-hero',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './shop-hero.component.html',
  styleUrl: './shop-hero.component.scss',
})
export class ShopHeroComponent {}
