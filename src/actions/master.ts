'use server';

import { authFetchCurrentUser } from '@/actions/auth';
import { findPrefectures } from '@/repositories/MasterRepository';
import { PrefecturesResponse } from '@/responses/PrefecturesResponse';

export async function masterFetchPrefectures(): Promise<PrefecturesResponse> {
  const res = await authFetchCurrentUser();
  if (!res.user) throw new Error('ログインしてください。');

  const prefectures = await findPrefectures();
  return { prefectures };
}