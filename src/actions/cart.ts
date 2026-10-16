'use server';

import { createCartProduct, deleteCartProduct, fetchCartProducts, resetCartProducts, updateCartProduct } from '@/repositories/CartProductRepository';
import { CartResponse, SuccessResponse } from '@/responses';
import { authFetchCurrentUser } from '@/actions/auth';
import { fetchSelectedShippingAddress } from '@/repositories/ShippingAddressRepository';
import { fetchSelectedPayment } from '@/repositories/PaymentRepository';
import { createOrder } from '@/repositories/OrderRepository';
import { createOrderProducts } from '@/repositories/OrderProductRepository';

export async function cartFetchCartProducts(): Promise<CartResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const cartProducts = await fetchCartProducts({ userId });
  const totalQuantity = cartProducts.map(cartProduct => cartProduct.quantity).reduce((x, y) => x + y, 0);
  const amountPrice = cartProducts.map(cartProduct => cartProduct.price).reduce((x, y) => x + y, 0);
  return { cartProducts, totalQuantity, amountPrice };
}

export async function cartCreateCartProduct(productId: string, quantity: number, price: number): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  await createCartProduct({ userId, productId, quantity, price });

  return { success: true, message: 'カートに追加しました。' };
}

export async function cartUpdateCartProduct(id: string, quantity?: number): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await updateCartProduct({ id, quantity });

  if (quantity != null) {
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

export async function cartCreateOrder(): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const [cartProducts, shippingAddress, payment] = await Promise.all([
    fetchCartProducts({ userId }),
    fetchSelectedShippingAddress({ userId }),
    fetchSelectedPayment({ userId }),
  ]);

  if (cartProducts.length === 0) throw new Error('カートに商品がありません。');
  if (shippingAddress == null) throw new Error('お届け先を選択してください。');
  if (payment == null) throw new Error('お支払い方法を選択してください。');

  const totalQuantity = cartProducts.map(cartProduct => cartProduct.quantity).reduce((x, y) => x + y, 0);
  const amountPrice = cartProducts.map(cartProduct => cartProduct.price).reduce((x, y) => x + y, 0);
  const orderId = await createOrder({ userId, shippingAddressId: shippingAddress.id, paymentId: payment.id, totalQuantity, amountPrice });
  const products = cartProducts.map(cartProduct => {
    return { productId: cartProduct.productId, quantity: cartProduct.quantity, price: cartProduct.price };
  });
  await createOrderProducts({ orderId, products });
  await resetCartProducts({ userId });

  return { success: true, message: 'ご注文が完了しました。' };
}