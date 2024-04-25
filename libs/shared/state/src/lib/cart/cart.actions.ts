import { createAction, props } from '@ngrx/store';
import { CartItem } from './car-state.model';

export const addItem = createAction('[Cart] Add Item', props<{ item: CartItem }>());
export const removeItem = createAction('[Cart] Remove Item', props<{ item: CartItem }>());
export const emptyCart = createAction('[Cart] Empty Cart');