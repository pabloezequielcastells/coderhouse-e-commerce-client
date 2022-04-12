import { CartProduct } from "./cart-product";

export interface Cart {
    id: string;
    products: CartProduct[];
}