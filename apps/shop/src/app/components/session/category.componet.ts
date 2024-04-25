import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, DestroyRef, inject, input } from "@angular/core";
import { RouterLink } from "@angular/router";
import { Product } from "@shopping/shared/api";
import { CartItem } from "@shopping/shared/state";
import { CartService } from "../../services/cart/cart.service";

@Component({
  selector: 'app-product-session',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  providers: [CartService],
  templateUrl: './category.component.html'
})
export class SessionProductComponent {

  cartService = inject(CartService);
  destroyRef = inject(DestroyRef)

  productCategory = input<string>()
  productList = input<Product[]>()

  addToCart(products: Product) {

    const item: CartItem = {
      ...products,
      quantity: 1
    }

    this.cartService.addToCart(item);
  }
}