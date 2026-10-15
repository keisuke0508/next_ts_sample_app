'use client';

import { useRouter } from 'next/navigation';
import { userDeletePayment } from '@/actions/user';
import styles from '@/app/user/payments/DeletePaymentButton.module.scss'
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

type Props = {
  id: string;
};

export default function DeletePaymentButton({ id }: Props) {
  const router = useRouter();

  const deletePayment = async () => {
    try {
      await userDeletePayment(id);
      $toast.success('お支払い方法を削除しました。');
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };

  const confirmDeletePayment = () => {
    $confirmModal.show('お支払い方法を削除します。', '削除', 'キャンセル', deletePayment);
  }
  return (
    <AppButton text='削除' colorType={AppButtonColorType.Red} className={styles.button} onClick={confirmDeletePayment} />
  )
}