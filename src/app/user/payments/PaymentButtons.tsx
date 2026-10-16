'use client';

import { useRouter } from 'next/navigation';
import { userDeletePayment, userSelectPayment } from '@/actions/user';
import styles from '@/app/user/payments/PaymentButtons.module.scss'
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

type Props = {
  id: string;
  hideUI: boolean;
};

export default function PaymentButtons({ id, hideUI }: Props) {
  const router = useRouter();

  const selectPayment = async () => {
    try {
      const { message } = await userSelectPayment(id);
      $toast.success(message);
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  }

  const deletePayment = async () => {
    try {
      const { message } = await userDeletePayment(id);
      $toast.success(message);
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
    <div className={styles.root}>
      <AppButton text='選択' colorType={AppButtonColorType.Blue} onClick={selectPayment} />
      {!hideUI && (
        <AppButton text='削除' colorType={AppButtonColorType.Red} onClick={confirmDeletePayment} />
      )}
    </div>
  )
}