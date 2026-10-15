'use client';

import { useRouter } from 'next/navigation';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

export default function ToOrderButton() {
  const router = useRouter();
  const toOrder = () => {
    router.push('/order');
  };

  return (
    <AppButton text='注文へ進む' colorType={AppButtonColorType.Blue} onClick={toOrder} />
  );
}