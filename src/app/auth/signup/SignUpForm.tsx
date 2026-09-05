'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '@/app/auth/signup/SignUpForm.module.scss'
import TextForm from '@/app/components/forms/TextForm';
import AppButton from '@/app/components/buttons/AppButton';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import { authSignup } from '@/actions/auth';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [errorMessageForEmail, setErrorMessageForEmail] = useState('');
  const [errorMessageForPassword, setErrorMessasgeForPassword] = useState('');
  const [errorMessageForConfirmPassword, setErrorMessageForConfirmPassword] = useState('');
  const [errorMessageForName, setErrorMessageForName] = useState('');

  const signup = async () => {
    let hasError = false;
    setErrorMessageForEmail('');
    setErrorMessasgeForPassword('');
    setErrorMessageForConfirmPassword('');
    setErrorMessageForName('');
    if (!email) {
      setErrorMessageForEmail('メールアドレスを入力してください。');
      hasError = true;
    }
    if (!password) {
      setErrorMessasgeForPassword('パスワードを入力してください。');
      hasError = true;
    }
    if (!confirmPassword) {
      setErrorMessageForConfirmPassword('パスワード（確認）を入力してください。');
      hasError = true;
    }
    if (confirmPassword && password !== confirmPassword) {
      setErrorMessageForConfirmPassword('パスワードが一致していません。');
      hasError = true;
    }
    if (!name) {
      setErrorMessageForName('名前（ニックネーム）を入力してください。');
      hasError = true;
    }
    if (hasError) return;

    try {
      await authSignup(email, password, name);
      const router = useRouter();
      router.push('/auth/signup/complete');
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  }

  return (
    <form className={styles.form}>
      <TextForm title='メールアドレス' value={email} errorMessage={errorMessageForEmail} onBlur={setEmail} />
      <TextForm title='パスワード' value={password} errorMessage={errorMessageForPassword} onBlur={setPassword} />
      <TextForm title='パスワード（確認）' value={confirmPassword} errorMessage={errorMessageForConfirmPassword} onBlur={setConfirmPassword} />
      <TextForm title='名前（ニックネーム）' value={name} errorMessage={errorMessageForName} onBlur={setName} />
      <AppButton text='登録' colorType={AppButtonColorType.Blue} className={styles.button} onClick={signup} />
    </form>
  );
}