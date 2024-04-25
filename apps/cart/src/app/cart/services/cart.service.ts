import { Injectable, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { CartItem, addItem, cartItemsSelector, emptyCart, removeItem } from "@shopping/shared/state";

@Injectable({ providedIn: 'root' })
export class CartServivce {

    private store = inject(Store);

    removeCartItem(item: CartItem) {
        this.store.dispatch(removeItem({
            item
        }))
    }

    removeCartSingleItem(item: CartItem) {
        this.store.dispatch(removeItem({
            item: {
                ...item,
                quantity: 1
            }
        }))
    }

    addSingleCartItem(item: CartItem) {
        this.store.dispatch(addItem({
            item: {
                ...item,
                quantity: 1
            }
        }))
    }

    getCartItems() {
        return this.store.select(cartItemsSelector)
    }

    emptyCart() {
        this.store.dispatch(emptyCart())
    }

}