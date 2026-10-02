'use server';

import { authFetchCurrentUser } from '@/actions/auth';
import { createShippingAddress, deleteShippingAddress, findShippingAddresses, updateShippingAddress } from '@/repositories/ShippingAddressRepository';
import { ShippingAddressesResponse } from '@/responses/ShippingAddressesResponse';
import { SuccessResponse } from '@/responses/SuccessResponse';

export async function userFetchShippingAddresses(): Promise<ShippingAddressesResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const userId = res.user.id;
  const shippingAddresses = await findShippingAddresses({ userId });
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

export async function userDeleteShippingAddress(id: string): Promise<SuccessResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  await deleteShippingAddress({ id });

  return { success: true, message: 'お届け先を削除しました。' };
}