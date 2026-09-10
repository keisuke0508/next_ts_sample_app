'use server';

import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';
import { createSession, deleteSession, createUser, findUserByEmail, findSession, findUserById } from '@/repositories/UserRepository';
import { SuccessResponse } from '@/responses/SuccessResponse';
import { UserResponse } from '@/responses/UserResponse';

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  maxAge: 60 * 60 * 24 * 7,
  path: '/',
};

export async function authSignin(email: string, password: string): Promise<SuccessResponse> {
  if (!email) throw new Error('メールアドレスを入力してください。');
  if (!password) throw new Error('パスワードを入力してください。');

  const user = await findUserByEmail(email);
  if (!user) throw new Error('メールアドレスまたはパスワードが異なります。');
  const isCorrectPassword = await bcrypt.compare(password, user.password);
  if (!isCorrectPassword) throw new Error('メールアドレスまたはパスワードが異なります。');

  await deleteSession(user.id);
  
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);
  const newSessionId = await createSession(user.id,  expiresAt);
  
  const cookieStore = await cookies();
  cookieStore.set('sessionId', newSessionId, cookieOptions);

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

export async function authFetchCurrentUser(): Promise<UserResponse> {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sessionId')?.value;
  if (!sessionId) return { user: null };

  const session = await findSession(sessionId);
  if (!session) return { user: null };

  const user = await findUserById(session.userId);
  if (!user) return { user: null };
  return { user };
}