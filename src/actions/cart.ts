'use server';

import { createCartProduct, deleteCartProduct, fetchCartProducts, updateCartProduct } from '@/repositories/CartProductRepository';
import { CartResponse, SuccessResponse } from '@/responses';
import { authFetchCurrentUser } from '@/actions/auth';

export async function cartFetchCartProducts(): Promise<CartResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const cartProducts = await fetchCartProducts({ userId });
  const productCount = cartProducts.map(cartProduct => cartProduct.count).reduce((x, y) => x + y, 0);
  const amountPrice = cartProducts.map(cartProduct => cartProduct.price).reduce((x, y) => x + y, 0);
  return { cartProducts, productCount, amountPrice };
}

export async function cartCreateCartProduct(productId: string, count: number, price: number): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  await createCartProduct({ userId, productId, count, price });

  return { success: true, message: 'カートに追加しました。' };
}

export async function cartUpdateCartProduct(id: string, count?: number): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await updateCartProduct({ id, count });

  if (count != null) {
    return { success: true, message: 'カートの商品の個数を変更しました。'};
  }
  return { success: true, message: 'カートの商品を変更しました。' };
}

export async function cartDeleteCartProduct(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await deleteCartProduct({ id });

  return { success: true, message: 'カートから商品を削除しました。' };
}