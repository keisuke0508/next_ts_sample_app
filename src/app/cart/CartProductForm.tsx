'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/cart/CartProductForm.module.scss';
import { cartDeleteCartProduct, cartUpdateCartProduct } from '@/actions/cart';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import AppButton from '@/app/components/buttons/AppButton';
import SelectItemCount from '@/app/components/forms/SelectItemCount';

type Props = {
  id: string;
  count: number;
}

export default function CartProductForm({ id, count }: Props) {
  const router = useRouter();
  const updateCartProductCount = async (newCount: number) => {
    try {
      await cartUpdateCartProduct(id, newCount);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };
  const deleteCartProduct = async () => {
    try {
      await cartDeleteCartProduct(id);
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  return (
    <div className={styles.root}>
      <SelectItemCount value={count} onChange={updateCartProductCount} />
      <AppButton text='削除' colorType={AppButtonColorType.Red} onClick={deleteCartProduct} />
    </div>
  );
}