
export interface CartItem {
    id: string
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    quantity: number;
    images: string[]
  }
  
  export interface CartState {
    items: CartItem[];
    total: number;
  }

  export const initialState: CartState = {
    items: [],
    total: 0
  };

  export interface AppState {
    cart: CartState;
  }