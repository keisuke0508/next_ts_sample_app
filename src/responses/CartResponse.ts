import { CartProduct } from '@/models/CartProduct';

export type CartResponse = {
  cartProducts: CartProduct[],
}