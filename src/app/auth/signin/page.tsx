import Link from 'next/link';
import styles from '@/app/auth/signin/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import SignInForm from '@/app/auth/signin/SignInForm';

export default function SignInPage() {
  return (
    <div>
      <PageTitle title="ログイン" />
      <SignInForm />
      <Link href='/auth/signup' className={styles.link}>会員登録はこちら＞</Link>
    </div>
  );
}