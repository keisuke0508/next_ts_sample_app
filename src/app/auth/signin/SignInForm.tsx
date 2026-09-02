'use client';

import { useState } from 'react';
import styles from '@/app/auth/signin/SignInForm.module.scss'
import TextForm from '@/app/components/forms/TextForm';
import AppButton from '@/app/components/buttons/AppButton';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import { authSignin } from '@/actions/auth';

export default function SingInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessageForEmail, setErrorMessageForEmail] = useState('');
  const [errorMessageForPassword, setErrorMessageForPassword] = useState('');

  const signin = () => {
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
    authSignin(email, password);
  }

  return (
    <form className={styles.form}>
      <TextForm title='メールアドレス' value={email} errorMessage={errorMessageForEmail} onBlur={setEmail} />
      <TextForm title='パスワード' value={password} errorMessage={errorMessageForPassword} onBlur={setPassword} />
      <AppButton text="ログイン" colorType={AppButtonColorType.Blue} className={styles.button} onClick={signin} />
    </form>
  )
}