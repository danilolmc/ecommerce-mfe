import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { CartItem, CartState } from '@shopping/shared/state';
import { pluck, shareReplay, startWith } from 'rxjs';
import { CartServivce } from './services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, MatIconModule],
  providers: [CartServivce],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {

  cartService = inject(CartServivce);
  
  cartItems  = this.cartService.getCartItems().pipe(pluck<CartState, 'items'>('items'), startWith([]), shareReplay());
  cartTotalValue = this.cartService.getCartItems().pipe(pluck<CartState, 'total'>('total'), startWith(0));

  removeItem(item: CartItem){
    this.cartService.removeCartItem(item);
  }
  
  addItem(item: CartItem){
    this.cartService.addSingleCartItem(item);
  }

  removeSingleItem(item: CartItem){
    this.cartService.removeCartSingleItem(item)
  }

  emptyCart(){
    this.cartService.emptyCart()
  }
}
