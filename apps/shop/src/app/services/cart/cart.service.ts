import { Injectable, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { CartItem, addItem, cartItemsSelector } from '@shopping/shared/state';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  store = inject(Store);
  snackBar = inject(MatSnackBar)
  cartItems = this.store.pipe(select(cartItemsSelector))

  addToCart(item: CartItem) {
    this.store.dispatch(addItem({
      item: item
    }))

    this.snackBar.open('Item adicionado no carrinho!', '', {
      duration: 2000,
      verticalPosition: 'top',
      panelClass: 'custom_snackbar'
    });
  }
}
