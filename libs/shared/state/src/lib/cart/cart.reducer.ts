import { createReducer, on } from '@ngrx/store';
import { CartItem, initialState } from './car-state.model';
import { addItem, emptyCart, removeItem } from './cart.actions';

export function getTotal(updatedItems: CartItem[]) {
    return updatedItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0);
}

export const cartReducer = createReducer(
    initialState,
    on(addItem, (state, { item }) => {
        const alreadyInCardItemIndex = state.items.findIndex(savedItem => savedItem.id == item.id);
        const exists = alreadyInCardItemIndex != -1;
        let updatedItems: CartItem[] = [...state.items];

        if (exists) {

            const inCartItem = state.items[alreadyInCardItemIndex];

            const hasStock = item.stock > 0 && (inCartItem.stock - item.quantity) >= 0;

            if (hasStock) {
                updatedItems = state.items.map((savedItem, index) => {
                    return alreadyInCardItemIndex == index ? {
                        ...savedItem,
                        quantity: savedItem.quantity + item.quantity,
                        stock: savedItem.stock - item.quantity

                    } : savedItem;
                });
            }
        } else {

            if (item.stock >= item.quantity) {
                updatedItems.push({
                    ...item,
                    stock: item.stock - item.quantity
                });
            }
        }

        const total = Number(getTotal(updatedItems).toFixed(2));

        return {
            ...state,
            items: updatedItems,
            total
        };
    }),
    on(removeItem, (state, { item }) => {

        const updatedItems: CartItem[] = state.items.reduce((acc, currentItem) => {
            if (currentItem.id === item.id) {
                const updatedQuantity = currentItem.quantity - item.quantity;
                const updatedStock = currentItem.stock - item.stock;

                if (updatedQuantity > 0) {
                    acc.push({ ...currentItem, quantity: updatedQuantity, stock: updatedStock });
                }
            } else {
                acc.push(currentItem);
            }
            return acc;
        }, [] as CartItem[]);

        const total = Number(getTotal(updatedItems).toFixed(2));

        return {
            ...state,
            items: updatedItems,
            total
        };
    }),
    on(emptyCart, () => {
        return {
            items: [],
            total: 0
        }
    })
);
