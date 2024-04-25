import { ActionReducer } from "@ngrx/store";
import { CartState } from "./car-state.model";

export function localStorageSyncReducer(reducer: ActionReducer<CartState>): ActionReducer<CartState> {
    return function (state, action) {
        const localStorageState: CartState = JSON.parse(localStorage.getItem('cart') || '{}');
        const combinedState = { ...state, ...localStorageState };
        const nextState = reducer(combinedState, action);
        localStorage.setItem('cart', JSON.stringify(nextState));
        return nextState;
    };
}