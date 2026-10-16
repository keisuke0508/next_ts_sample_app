import { CartProduct } from '@/models';

export type CartResponse = {
  cartProducts: CartProduct[],
  totalQuantity: number;
  amountPrice: number;
}
