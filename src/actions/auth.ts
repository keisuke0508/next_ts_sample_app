'use server';

import bcrypt from 'bcrypt';
import { createUser, findUserByEmail } from '@/repositories/UserRepository';
import { SuccessResponse } from '@/responses/SuccessResponse';

export async function authSignin(email: string, password: string): Promise<SuccessResponse> {
  if (!email) throw new Error('メールアドレスを入力してください。');
  if (!password) throw new Error('パスワードを入力してください。');

  const user = await findUserByEmail(email);
  const isCorrectPassword = user ? bcrypt.compare(password, user.password) : false;
  if (!isCorrectPassword) throw new Error('メールアドレスまたはパスワードが異なります。');

  return { success: true, message: 'ログインしました。' };
}

export async function authSignup(email: string, password: string, name: string): Promise<SuccessResponse> {
  if (!email) throw new Error('メールアドレスを入力してください。');
  if (!password) throw new Error('パスワードを入力してください。');
  if (!name) throw new Error('名前（ニックネーム）を入力してください。');

  const existedUser = await findUserByEmail(email);
  if (existedUser) throw new Error('このメールアドレスは既に登録されています。');

  const hashPassword = await bcrypt.hash(password, 12);
  await createUser(email, hashPassword, name);

  return { success: true, message: '会員登録が完了しました。' };
}