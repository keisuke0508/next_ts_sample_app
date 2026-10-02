'use client';

import { useRouter } from 'next/navigation';
import { userDeleteShippingAddress } from '@/actions/user';
import styles from '@/app/user/shippingAddresses/DeleteShippingAddressButton.module.scss';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

type Props = {
  shippingAddressId: string;
};

export default function DeleteShippingAddressButton({ shippingAddressId }: Props) {
  const router = useRouter();
  
  const deleteShippingAddress = async () => {
    try {
      await userDeleteShippingAddress(shippingAddressId);
      $toast.success('お届け先を削除しました。');
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };
  const confirmDeleteShippingAddress = () => {
    $confirmModal.show('お届け先を削除します。', '削除', 'キャンセル', deleteShippingAddress);
  };

  return (
    <AppButton text='削除' colorType={AppButtonColorType.Red} className={styles.button} onClick={confirmDeleteShippingAddress} />
  );
}