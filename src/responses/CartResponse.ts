import { CartProduct } from '@/models';

export type CartResponse = {
  cartProducts: CartProduct[],
  productCount: number;
  amountPrice: number;
}
