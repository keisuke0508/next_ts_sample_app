import PageTitle from '@/app/components/texts/PageTitle';
import SignInForm from '@/app/auth/signin/SignInForm';

export default function SignInPage() {
  return (
    <div>
      <PageTitle title="ログイン" />
      <SignInForm />
    </div>
  );
}