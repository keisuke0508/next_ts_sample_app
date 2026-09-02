'use server';

import bcrypt from 'bcrypt';
import { findUserByEmail } from '@/repositories/UserRepository';
import { SuccessResponse } from '@/responses/SuccessResponse';

export async function authSignin(email: string, password: string): Promise<SuccessResponse> {
  if (!email) throw new Error('メールアドレスを入力してください。');
  if (!password) throw new Error('パスワードを入力してください。');

  const user = await findUserByEmail(email);
  const isCorrectPassword = user ? bcrypt.compare(password, user.password) : false;
  if (!isCorrectPassword) throw new Error('メールアドレスまたはパスワードが異なります。');

  return { success: true, message: 'ログインしました。' };
}