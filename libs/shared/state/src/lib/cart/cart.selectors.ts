import { createSelector } from "@ngrx/store";
import { AppState } from "./car-state.model";

export const selectCartState = (state: AppState) => state.cart;

export const cartItemsSelector = createSelector(
    selectCartState,
    (cartState) => {
        return {
            items: cartState.items,
            total: cartState.total
        }
    }
);