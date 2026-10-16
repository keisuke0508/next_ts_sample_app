'use client';

import { useRouter } from 'next/navigation';
import { userDeleteShippingAddress, userSelectShippingAddress } from '@/actions/user';
import styles from '@/app/user/shippingAddresses/ShippingAddressButtons.module.scss';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';

type Props = {
  id: string;
  hideUI: boolean;
};

export default function ShippingAddressButtons({ id, hideUI }: Props) {
  const router = useRouter();

  const selectShippingAddress = async () => {
    try {
      const { message } = await userSelectShippingAddress(id);
      $toast.success(message);
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  }
  
  const deleteShippingAddress = async () => {
    try {
      const { message } = await userDeleteShippingAddress(id);
      $toast.success(message);
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
    <div className={styles.root}>
      <AppButton text='選択' colorType={AppButtonColorType.Blue} onClick={selectShippingAddress} />
      {!hideUI && (
        <AppButton text='削除' colorType={AppButtonColorType.Red} onClick={confirmDeleteShippingAddress} />
      )}
    </div>
  );
}