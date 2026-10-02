import styles from '@/app/auth/signup/complete/page.module.scss'
import PageTitle from '@/components/texts/PageTitle';
import LinkButton from '@/components/buttons/LinkButton';

export default function SignUpCompletePage() {
  return (
    <div className={styles.root}>
      <PageTitle title='会員登録完了' />
      <p className={styles.message}>会員登録が完了しました。</p>
      <LinkButton text='TOPへ' href='/' />
    </div>
  );
}
