import { useRouter } from 'next/navigation';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

export default function ToTopButton() {
  const router = useRouter();

  const toTop = () => {
    router.push('/');
  }

  return (
    <AppButton text='TOPに戻る' colorType={AppButtonColorType.Blue} onClick={toTop} />
  );
}