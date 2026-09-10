'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/auth/signin/SignInForm.module.scss'
import TextForm from '@/app/components/forms/TextForm';
import AppButton from '@/app/components/buttons/AppButton';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import { authFetchCurrentUser, authSignin } from '@/actions/auth';

export default function SingInForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageForEmail, setErrorMessageForEmail] = useState('');
  const [errorMessageForPassword, setErrorMessageForPassword] = useState('');

  const signin = async () => {
    let hasError = false;
    setErrorMessageForEmail('');
    setErrorMessageForPassword('');
    if (!email) {
      setErrorMessageForEmail('メールアドレスを入力してください。');
      hasError = true;
    }
    if (!password) {
      setErrorMessageForPassword('パスワードを入力してください。');
      hasError = true;
    }
    if (hasError) return;

    try {
      await authSignin(email, password);
      const user = await authFetchCurrentUser();
      router.push('/');
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  }

  return (
    <form className={styles.form}>
      <TextForm title='メールアドレス' value={email} errorMessage={errorMessageForEmail} onBlur={setEmail} />
      <TextForm title='パスワード' value={password} type='password' errorMessage={errorMessageForPassword} onBlur={setPassword} />
      <AppButton text="ログイン" colorType={AppButtonColorType.Blue} className={styles.button} onClick={signin} />
    </form>
  )
}