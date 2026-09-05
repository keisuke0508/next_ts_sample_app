import PageTitle from '@/app/components/texts/PageTitle';
import SignUpForm from '@/app/auth/signup/SignUpForm';

export default function SignUpPage() {
  return (
    <div>
      <PageTitle title="会員登録" />
      <SignUpForm />
    </div>
  );
}