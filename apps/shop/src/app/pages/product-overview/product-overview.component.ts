import { CommonModule } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, input } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { of, shareReplay, switchMap, take } from 'rxjs';
import { CartService } from '../../services/cart/cart.service';
import { ProductService } from '../../services/product-list/product-list.service';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [CommonModule],
  providers: [ProductService],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.scss',
})
export class ProductOverviewComponent implements OnInit {
  id = input<string>();

  destroyRef = inject(DestroyRef);
  productService = inject(ProductService);
  cartService = inject(CartService);

  product = of(this.id())
    .pipe(switchMap(() => this.productService.getProductById(String(this.id()))), shareReplay());

  ratingValue = 0;

  ngOnInit(): void {
    this.product.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(value => {
      this.ratingValue = Math.floor(value.rating)
    })
  }

  addToCart() {
    this.product.pipe(take(1)).subscribe(item => {
      this.cartService.addToCart({
        ...item,
        quantity: 1
      });
    })
  }
}
