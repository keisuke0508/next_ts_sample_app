'use client';

import { useRouter } from 'next/navigation';
import { cartCreateOrder } from '@/actions/cart';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

export default function OrderButton() {
  const router = useRouter();

  const submit = async () => {
    try {
      await cartCreateOrder();
      router.push('/order/complete');
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };
  
  return (
    <AppButton text='ご注文確定' colorType={AppButtonColorType.Blue} onClick={submit} />
  );
};