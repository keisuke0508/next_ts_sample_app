'use server';

import { authFetchCurrentUser } from '@/actions/auth';
import { createFavoriteProduct, deleteFavoriteProduct, fetchFavoriteProduct, fetchFavoriteProducts } from '@/repositories/FavoriteProductRepository';
import { createShippingAddress, deleteShippingAddress, fetchShippingAddresses, selectShippingAddress, updateShippingAddress } from '@/repositories/ShippingAddressRepository';
import { FavoriteProductsResponse, FavoriteProductResponse, ShippingAddressesResponse, PaymentsResponse, SuccessResponse } from '@/responses';
import { createPayment, deletePaymemt, fetchPayments, selectPayment } from '@/repositories/PaymentRepository';
import { PaymentType } from '@/types';

export async function userFetchShippingAddresses(): Promise<ShippingAddressesResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const shippingAddresses = await fetchShippingAddresses({ userId });
  return { shippingAddresses };
}

export async function userCreateShippingAddress(
  name: string,
  postalCode: string,
  prefectureId: number,
  city: string,
  address: string,
  buildingName?: string,
): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  await createShippingAddress({ userId, postalCode, prefectureId, city, address, buildingName, name });

  return { success: true, message: 'お届け先を追加しました。' };
}

export async function userUpdateShippingAddress(
  id: string,
  name: string,
  postalCode: string,
  prefectureId: number,
  city: string,
  address: string,
  buildingName?: string,
): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await updateShippingAddress({ id, postalCode, prefectureId, city, address, buildingName, name });

  return { success: true, message: 'お届け先を変更しました。' };
}

export async function userSelectShippingAddress(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await selectShippingAddress({ id, userId: res.user.id });
  return { success: true, message: 'お届け先を選択しました。' };
}

export async function userDeleteShippingAddress(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await deleteShippingAddress({ id });

  return { success: true, message: 'お届け先を削除しました。' };
}

export async function userFetchPayments(): Promise<PaymentsResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const payments = await fetchPayments({ userId: res.user.id });
  return { payments };
}

export async function userCreatePayment(paymentType: PaymentType): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await createPayment({ paymentType, userId: res.user.id });
  return { success: true, message: 'お支払い方法を追加しました。' };
}

export async function userSelectPayment(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await selectPayment({ id, userId: res.user.id });
  return { success: true, message: 'お支払い方法を選択しました。' };
}

export async function userDeletePayment(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await deletePaymemt({ id });
  return { success: true, message: 'お支払い方法を削除しました。' };
}

export async function userFetchFavoriteProducts(): Promise<FavoriteProductsResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const favoriteProducts = await fetchFavoriteProducts({ userId });
  return { favoriteProducts };
}

export async function userFetchFavoriteProduct(productId: string): Promise<FavoriteProductResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const favoriteProduct = await fetchFavoriteProduct({ userId, productId });
  return { favoriteProduct }
}

export async function userCreateFavoriteProduct(productId: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  await createFavoriteProduct({ userId, productId });
  return { success: true, message: 'お気に入り商品に追加しました。' };
}

export async function userDeleteFavoriteProduct(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await deleteFavoriteProduct({ id });
  return { success: true, message: 'お気に入り商品を削除しました。' };
}
