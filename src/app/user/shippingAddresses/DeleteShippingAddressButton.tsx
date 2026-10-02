'use client';

import { useRouter } from 'next/navigation';
import { userDeleteShippingAddress } from '@/actions/user';
import styles from '@/app/user/shippingAddresses/DeleteShippingAddressButton.module.scss';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import { ShippingAddress } from '@/models/ShippingAddress';

type Props = {
  shippingAddress: ShippingAddress;
};

export default function DeleteShippingAddressButton({ shippingAddress }: Props) {
  const router = useRouter();
  
  const deleteShippingAddress = async () => {
    try {
      await userDeleteShippingAddress(shippingAddress.id);
      $toast.success('お届け先を削除しました。');
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
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